<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Label;

class LabelController extends Controller
{
    // Delete spaces
    private function deleteSpace($str)
    {
        // Delete spaces from the beginning and end of the string
        $str = trim($str);
        // Delete spaces in the middle of the string
        $str = preg_replace('/\s+/', ' ', $str);
        return $str;
    }


    // Read all labels
    public function readAllLabels()
    {
        try {
            $labels = Label::all();
            return response()->json([
                $labels
            ], 200);
        }
        catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // Read all labels from specific user
    public function readLabelsFromUser($user_id)
    {
        try {
            $labels = Label::where('user_id', $user_id)->get();
            return response()->json([
                $labels
            ], 200);
        }
        catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // Add new label
    public function addNewLabel(Request $request)
    {
        try {
            // Delete spaces of label_name
            $label_name = $this->deleteSpace($request->label_name);
            // User_id
            $user_id = $request->user_id;

            // Check if the label_name and user_id already exist
            $label = Label::where('label_name', $label_name)->where('user_id', $user_id)->first();
            if ($label) {
                return response()->json([
                    'message' => 'Label already exists'
                ], 400);
            }

            // Validate the request
            $validated = $request->validate([
                // RegEx for label name only include alphabets, numbers, space, hyphen, underscore, min 1, max 30: /^[a-zA-Z0-9 _-]{1,30}$/
                'label_name' => ['required', 'string', 'regex:/^[a-zA-Z0-9 _-]{1,30}$/'],
                'user_id' => ['required'],
            ]);

            if ($validated) { // If validated successfully
                // Insert new record into database
                $label = new Label();
                $label->label_name = $label_name;
                $label->user_id = $user_id;
                $label->save();
                return response()->json([
                    $label
                ], 200);
            } else { // If validation fails
                return response()->json([
                    'error' => 'Label name only include alphabets, numbers, space, hyphen, underscore, 1-30 characters.'
                ], 400);
            }
        }
        catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 400);
        }
    }
}

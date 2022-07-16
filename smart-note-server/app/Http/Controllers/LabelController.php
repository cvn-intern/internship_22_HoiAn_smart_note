<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Label;
use App\Util\StringValidation;
use Exception;

class LabelController extends Controller
{
    // Read all labels
    public function readAllLabels()
    {
        try {
            $labels = Label::all();
            return response()->json([
                $labels
            ], 200);
        }
        catch (Exception $exception) {
            return response()->json([
                'error' => $exception->getMessage()
            ], 500);
        }
    }

    // Read all labels from specific user
    public function readUserRelatedLabels(string $user_id)
    {
        try {
            $labels = Label::where('user_id', $user_id)->get();
            return response()->json([
                $labels
            ], 200);
        }
        catch (Exception $exception) {
            return response()->json([
                'error' => $exception->getMessage()
            ], 500);
        }
    }

    // Add new label
    public function createLabel(Request $request)
    {
        $label_name = StringValidation::deleteSpace($request->label_name);
        $user_id = $request->user_id;

        // Validate the request
        $validated = $request->validate([
            // RegEx for label name only include alphabets, numbers, space, hyphen, underscore, min 1, max 30: /^[a-zA-Z0-9 _-]{1,30}$/
            'label_name' => ['required', 'string', 'regex:/^[a-zA-Z0-9 _-]{1,30}$/'],
            'user_id' => ['required'],
        ]);
        
        try {
            // Check if the label_name and user_id already exist
            $label = Label::where('label_name', $label_name)->where('user_id', $user_id)->first();
            if ($label) {
                return response()->json([
                    'message' => 'Label already exists'
                ], 400);
            }

            $label = new Label();
            $label->label_name = $label_name;
            $label->user_id = $user_id;
            $label->save();
            return response()->json([
                $label
            ], 201);
        }
        catch (Exception $exception) {
            return response()->json([
                'error' => $exception->getMessage()
            ], 500);
        }
    }
}

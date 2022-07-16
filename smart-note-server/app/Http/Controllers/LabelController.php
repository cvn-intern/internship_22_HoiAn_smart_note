<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Label;
use App\Util\StringValidation;

class LabelController extends Controller
{
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
                'error' => $exceptione->getMessage()
            ], 500);
        }
    }

    public function createLabel(Request $request)
    {
        $label_name = StringValidation::deleteSpace($request->label_name);
        $user_id = $request->user_id;

        $validated = $request->validate([
            'label_name' => ['required', 'string', 'regex:/^[a-zA-Z0-9 _-]{1,30}$/'],
            'user_id' => ['required'],
        ]);
        
        try {
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

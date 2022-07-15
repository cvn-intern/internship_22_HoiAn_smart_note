<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Label;

class LabelController extends Controller
{
    public function read()
    {
        $labels = Label::all();
        // $categories = DB::table('categories')->select(['*']);
        return response()->json([
            $labels
        ], 200);
    }

    public function add(Request $request)
    {
        $label = new Label();
        $label->label_name = $request->label_name;
        $label->user_id = $request->user_id;
        $label->save();
        return response()->json([
            $label
        ], 200);
    }
}

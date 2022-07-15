<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function read()
    {
        $categories = Category::all();
        // $categories = DB::table('categories')->select(['*']);
        return response()->json([
            $categories
        ], 200);
    }

    public function add(Request $request)
    {
        $category = new Category;
        $category->category_name = $request->category_name;
        $category->user_id = $request->user_id; 
        $category->save();
        return response()->json([
            $category
        ], 200);
    }
}

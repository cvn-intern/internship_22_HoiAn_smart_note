<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Note;
use App\Util\StringValidation;
use Exception;

class CategoryController extends Controller
{
    public function readAllCategories()
    {
        try {
            $categories = Category::all();
            return response()->json(
                $categories
            , 200);
        }
        catch (Exception $exception) {
            return response()->json([
                'error' => $exception->getMessage()
            ], 500);
        }
    }

    public function readUserRelatedCategories(string $user_id)
    {
        try {
            $categories = Category::where('user_id', $user_id)->get();
            return response()->json(
                $categories
            , 200);
        }
        catch (Exception $exception) {
            return response()->json([
                'error' => $exception->getMessage()
            ], 500);
        }
    }

    public function createCategory(Request $request)
    {
        $category_name = StringValidation::deleteSpace($request->category_name);
        $user_id = $request->user_id;

        $validated = $request->validate([
            'category_name' => ['required', 'string', 'regex:/^[a-zA-Z0-9 _-]{1,30}$/'],
            'user_id' => ['required'],
        ]);

        try {
            $category = Category::where('category_name', $category_name)->where('user_id', $user_id)->first();
            if ($category) {
                return response()->json([
                    'message' => 'Category already exists'
                ], 400);
            }

            $category = new Category();
            $category->category_name = $category_name;
            $category->user_id = $user_id;
            $category->save();
            return response()->json(
                $category
            , 201);
        }
        catch (Exception $exception) {
            return response()->json([
                'error' => $exception->getMessage()
            ], 500);
        }
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function read()
    {
        $categories = Category::all();
        return response()->json([
            $categories
        ], 200);
    }
}

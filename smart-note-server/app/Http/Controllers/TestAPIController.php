<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestAPIController extends Controller
{
    public function test()
    {
        return response()->json([
            'message' => 'This is the test API endpoint'
        ], 200);
    }
}

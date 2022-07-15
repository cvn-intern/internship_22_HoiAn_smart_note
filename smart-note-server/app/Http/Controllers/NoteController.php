<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Note;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;

class NoteController extends Controller
{
    public function read()
    {
        try {
            $notes = Note::all();
            
            return response()->json([
                $notes
            ], 200);
        }
        catch (Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage(),
            ], 400);
        }
    }

    public function getUserRelatedNotes(Request $request, string $userId)
    {
        try {
            $user = User::all()->where('id', $userId)->first();
            $notes = $user->notes()->get();
            return response()->json([
                'notes' => $notes,
            ], 200);
        }
        catch(Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage(),
            ], 400);
        }
    }

    public function getCategoryRelatedNotes(Request $request, $categoryId)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        try {
            $isExisted = Auth::attempt([
                'email' => $request->email,
                'password' => $request->password,
            ]);

            if (!$isExisted) {
                return response()->json([
                    'message' => 'Not valid email or password',
                ], 400);
            }
            
            $category = Auth::user()->categories()->where('id', $categoryId)->first();
            $notes = $category->notes()->get();
            
            return response()->json([
                'notes' => $notes,
            ], 200);
        } 
            catch(Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage(),
            ], 400);
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Models\User;
use Exception;
use App\Http\Requests\CreateNoteRequest;
use App\Models\Category;
use App\Util\StringValidation;

class NoteController extends Controller
{
    public function readAllNotes()
    {
        try {
            $notes = Note::all();
            
            return response()->json($notes, 200);
        }
        catch (Exception $exception) {
            return response()->json([
                'error' => $exception->getMessage(),
            ], 500);
        }
    }

    public function readNote($note_id)
    {
        try {
            $note_id = htmlentities($note_id);
            $note = Note::findOrFail($note_id);
            return response()->json($note, 200);
        }
        catch (Exception $exception) {
            return response()->json([
                'error' => $exception->getMessage(),
            ], 500);
        }

    }

    public function readUserRelatedNotes(string $user_id)
    {
        try {
            $user = User::findOrFail($user_id);
            $notes = $user->notes()->get();
            return response()->json($notes, 200);
        }
        catch(Exception $exception) {
            return response()->json([
                'error' => $exception->getMessage(),
            ], 500);
        }
    }

    public function readCategoryRelatedNotes(string $category_id)
    {
        try {
            $category_id = htmlentities($category_id);
            $validCategory = Category::findOrFail($category_id);
            if(!isSet($validCategory)) {
                return response()->json([
                    'message' => 'Category not found',
                ], 200);
            }
            $notes = $validCategory->notes()->get();
            
            return response()->json($notes, 200);
        } 
        catch(Exception $exception) {
            return response()->json([
                'error' => $exception->getMessage(),
            ], 500);
        }
    }

    public function createNote(CreateNoteRequest $request, string $category_id)
    {
        try {
            $validCategory = Category::findOrFail($category_id);

            $note_title = StringValidation::deleteSpace($request->note_title);
            $note_content = StringValidation::deleteSpace($request->note_content);
            $category_id = htmlentities($category_id);
            $globalFilePath = asset('storage');
            
            $note = new Note();
            $note->note_title = $note_title;
            $note->note_content = $note_content;
            $note->category_id = $category_id;
            $note->user_id = $validCategory->user_id;

            if ($request->hasFile('attachment')) {
                $attachmentPath = $request->attachment->store('public');
                $note->attachment = $globalFilePath . '/' . $attachmentPath;
            }

            $note->save();

            return response()->json([
                'note' => $note,
                'message' => 'Created new note successfully',
            ], 201);
        }
        catch (Exception $exception) {
            return response()->json([
                'error' => $exception->getMessage(),
            ], 500);
        }

    }
}

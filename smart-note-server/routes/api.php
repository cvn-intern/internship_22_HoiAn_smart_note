<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LabelController;

use App\Http\Controllers\TestAPIController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NoteController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Group label api
Route::controller(LabelController::class)->prefix('labels')->group(function () {
    // READ
    // Read all labels from specific user
    Route::get('/{user_id}', 'readUserRelatedLabels');
    // Read all labels
    Route::get('/', 'readAllLabels');
    //---------------------------------------------------------------------------------------------------------------------

    // CREATE
    // Add new label
    Route::post('/', 'createLabel');
    //---------------------------------------------------------------------------------------------------------------------

    // UPDATE
    //---------------------------------------------------------------------------------------------------------------------

    // DELETE
    //---------------------------------------------------------------------------------------------------------------------
});
// Category
Route::get('/categories', [CategoryController::class, 'read']);

// Note routes
Route::controller(NoteController::class)->prefix('notes')->group(function() {
    Route::get('/', 'read');
    Route::get('/users/{userId}', 'getUserRelatedNotes');
    Route::get('/category/{categoryId}/user', 'getCategoryRelatedNotes');
});
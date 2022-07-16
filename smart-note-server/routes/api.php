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


// Group categories routes
Route::controller(CategoryController::class)->prefix('categories')->group(function () {
    // READ
    Route::get('/{user_id}', [CategoryController::class, 'readUserRelatedCategories']);
    Route::get('/', [CategoryController::class, 'readAllCategories']);

    // CREATE
    Route::post('/', [CategoryController::class, 'createCategory']);

    // UPDATE

    // DELETE

});
// Group labels api
Route::controller(LabelController::class)->prefix('labels')->group(function () {
    // READ
    Route::get('/{user_id}', 'readUserRelatedLabels');
    Route::get('/', 'readAllLabels');

    // CREATE
    // Add new label
    Route::post('/', 'createLabel');

    // UPDATE

    // DELETE
});

// Note routes
Route::controller(NoteController::class)->prefix('notes')->group(function() {
    // Read notes
    Route::get('/', 'readAllNotes');
    Route::get('/{note_id}', 'readNote');
    Route::get('/users/{user_id}', 'readUserRelatedNotes');
    Route::get('/category/{category_id}', 'readCategoryRelatedNotes');
    // Create notes
    Route::post('/category/{category_id}', 'createNote');
});

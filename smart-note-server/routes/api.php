<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestAPIController;
use App\Http\Controllers\CategoryController;

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

// Test routes
Route::get('/test', [TestAPIController::class, 'test']);

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

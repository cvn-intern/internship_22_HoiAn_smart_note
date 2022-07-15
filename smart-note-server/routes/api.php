<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LabelController;


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
    Route::get('/{user_id}', 'readLabelsFromUser');
    // Read all labels
    Route::get('/', 'readAllLabels');
    //---------------------------------------------------------------------------------------------------------------------

    // CREATE
    // Add new label
    Route::post('/', 'addNewLabel');
    //---------------------------------------------------------------------------------------------------------------------

    // UPDATE
    //---------------------------------------------------------------------------------------------------------------------

    // DELETE
    //---------------------------------------------------------------------------------------------------------------------
});
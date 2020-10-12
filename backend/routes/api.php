<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::prefix('auth')->group(static function(){
Route::post('login','Api\AuthController@login');
Route::post('logout','Api\AuthController@logout')->middleware('auth:api');
Route::get('user','Api\AuthController@user')->middleware('auth:api');
});
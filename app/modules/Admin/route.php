<?php 
Route::group(['prefix'=>'admin','module'=>'Admin','namespace' => 'Modules\Admin\Controllers'], function() {
	Route::get('login',['uses'=>'UserController@login','as'=>'admin.login']);
	Route::post('login',['uses'=>'UserController@access','as'=>'admin.login']);
});


Route::group(['prefix'=>'admin','module'=>'Admin','namespace' => 'Modules\Admin\Controllers'], function() {
	Route::get('/','AdminController@index');
});
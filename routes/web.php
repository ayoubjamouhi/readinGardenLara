<?php

Auth::routes(['register' => false]);
// Index
Route::get('/', 'IndexController@index');
Route::get('/blog', 'ArticleController@indexBlog');
// Contacte
Route::resource('contact', 'ContactController');
// Privacy Policy
Route::get('/privacy-policy', 'PrivacyController@index');
// About us
Route::get('/about-us', 'AboutController@index');
// posts
Route::resource('posts', 'PostController')->middleware('auth', ['only' => 'store']);
// post
// add posts
Route::get('/myposts', 'PostController@myPosts');
//log out
Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');

Route::get('/{slug}', 'PostController@getArticle');

//Route::get('/article/get/{slug}', 'ArticleController@show');

// Home
//Route::get('/home', 'HomeController@index')->name('home');

// Admin
//Route::resource('dashboard', 'DashboardController');*/

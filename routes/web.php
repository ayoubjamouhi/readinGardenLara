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
// Articles
Route::resource('articles', 'ArticleController')->middleware('auth', ['only' => 'store']);
// Article
Route::get('/myposts', 'ArticleController@myPosts');
Route::get('/{slug}', 'ArticleController@getArticle');

//Route::get('/article/get/{slug}', 'ArticleController@show');

// Home
//Route::get('/home', 'HomeController@index')->name('home');

// Admin
//Route::resource('dashboard', 'DashboardController');*/

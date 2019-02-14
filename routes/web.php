<?php

Auth::routes(['register' => false]);
// Index
Route::get('/', 'IndexController@index');
// Articles
Route::resource('articles', 'ArticleController');
Route::get('/article/{id}', 'ArticleController@getArticle');
// Contact
Route::resource('contact', 'ContactController');
// Home
//Route::get('/home', 'HomeController@index')->name('home');
// Blog
Route::get('/blog', 'ArticleController@IndexBlog');
// Privacy Policy
Route::get('/privacy-policy', 'PrivacyController@index');
// About us
Route::get('/about-us', 'AboutController@index');
// Admin
Route::resource('dashboard', 'DashboardController');

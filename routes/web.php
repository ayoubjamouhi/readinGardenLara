<?php

Auth::routes(['register' => false]);
// Index
Route::get('/', 'IndexController@index');
Route::get('/blog', 'ArticleController@indexBlog');
// Articles
Route::resource('articles', 'ArticlController');
// Article
Route::get('/{slug}', 'ArticleController@getArticle');
//Route::get('/article/get/{slug}', 'ArticleController@show');
// Contacte
/*Route::resource('contact', 'ContactController');
// Home
//Route::get('/home', 'HomeController@index')->name('home');
// Blog
Route::get('/blog', 'ArticleController@indexBlog');
// Privacy Policy
Route::get('/privacy-policy', 'PrivacyController@index');
// About us
Route::get('/about-us', 'AboutController@index');
// Admin
//Route::resource('dashboard', 'DashboardController');*/

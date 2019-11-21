<?php

Auth::routes(['register' => false]);
// Index
Route::get('/', 'HomeController@index');
Route::get('/blog', 'PostController@indexBlog');
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
Route::get('/post_manage', 'PostController@postManage')->middleware('auth');
// update post
Route::get('/post_update/{id}', 'PostController@postUpdate')->where('id', '[0-9]+')->middleware('auth');
// Account
Route::get('/me', 'UserController@me')->middleware('auth');
Route::get('/user/{id}', 'UserController@user');
//log out
Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');
//sitemap
Route::get('/sitemap.xml', 'SitemapController@index');
Route::get('/sitemap.xml/posts', 'SitemapController@posts');
// Draft
Route::get('/draft', 'DraftController@index')->middleware('auth');
// Category
Route::get('category/{cat}', 'CategoryController@category');
Route::get('categories', 'CategoryController@getCategories');
Route::resource('category', 'CategoryController');
// Article
Route::get('{category}/{slug}', 'PostController@getArticle');
Route::get('error404', 'HomeController@error404');

// Home
//Route::get('/home', 'HomeController@index')->name('home');

// Admin
//Route::resource('dashboard', 'DashboardController');*/

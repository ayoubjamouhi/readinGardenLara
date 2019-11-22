<?php

namespace App\Http\Controllers;

use App\Post;

class SitemapController extends Controller
{
    public function index()
    {
        $post = Post::all()->first();

        return response()->view('sitemap.index', compact('post'))->header('Content-Type', 'text/xml');
    }
    public function posts()
    {
        $posts = Post::with('category')->latest()->get();
        return response()->view('sitemap.posts', compact('posts'))->header('Content-Type', 'text/xml');
    }
}

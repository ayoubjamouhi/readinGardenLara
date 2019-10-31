<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
class SitemapController extends Controller
{
    public function index()
    {
      $post = Post::all()->first();

      return response()->view('sitemap.index', [
          'post' => $post,
      ])->header('Content-Type', 'text/xml');
    }
    public function posts()
    {
        $posts = Post::latest()->get();
        return response()->view('sitemap.posts', [
            'posts' => $posts,
        ])->header('Content-Type', 'text/xml');
    }
}

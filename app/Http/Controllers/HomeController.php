<?php

namespace App\Http\Controllers;

use App\Post;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {

        $articles = (new Post)->index();
        $article_left = $articles[0];
        $article_center1 = $articles[1];
        $article_center2 = $articles[2];
        $article_right = $articles[3];
        $articles_featured = (new Post)->featured_articles();
        return view('home', compact('article_left', 'article_center1', 'article_center2', 'article_right', 'articles_featured'));
    }
}

<?php

namespace App\Http\Controllers;

use App\Article;

class IndexController extends Controller
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
        $articles = (new Article)->index();
        $article_left = $articles->last();
        $article_center1 = $articles[count($articles) - 2];
        $article_center2 = $articles[count($articles) - 3];
        $article_right = $articles[count($articles) - 4];
        $articles_featured = (new Article)->featured_articles();

        return view('index', compact('article_left', 'article_center1', 'article_center2', 'article_right', 'articles_featured'));
    }
}

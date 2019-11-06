<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class DraftController extends Controller
{
    public function index() {
        $posts = Post::where('is_draft', 1)->get();
        return view('draft', compact('posts'));
    }
}

<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return (new Post)->index();
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
        $create = Post::create(request()->all());
        if (!$create) {
            return response()->json(['success' => false]);
        }

        return response()->json(request()->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        return (new Post)->show($slug);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getArticle($slug)
    {
        $post = (new Post)->show($slug)[0];
        //dd($post[0]->id);
        return view('post', compact('slug', 'post'));
    }

    public function indexBlog()
    {
        $articles = (new Post)->index();
        return view('blog', compact('articles'));
    }
    public function postManage()
    {
        return view('postmanage');
    }
    public function postUpdate($id)
    {
        $post = json_encode((new Post)->getById($id));
        return view('postupdate', compact('post'));
    }
}
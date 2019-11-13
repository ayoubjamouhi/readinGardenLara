<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Validator;

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
    public function update($id)
    {
        $rules = array(
            'title' => 'required',
            'description' => 'required',
            'categorie' => 'required',
            'slug' => 'required',
            'is_featured' => 'required|numeric',
            'html' => 'required',
            'user_id' => 'required',
        );
        $validator = Validator::make(Input::all(), $rules);

        // process the login
        if ($validator->fails()) {
            return response()->json(['success' => true]);
        } else {
            // store
            $post = Post::find($id);
            $post->title = Input::get('title');
            $post->description = Input::get('description');
            $post->categorie = Input::get('categorie');
            $post->slug = Input::get('slug');
            $post->credit = Input::get('credit');
            $post->is_featured = Input::get('is_featured');
            $post->is_draft = Input::get('is_draft') || false;
            $post->html = Input::get('html');
            $post->image = Input::get('image');
            $post->largeImage = Input::get('largeImage');
            $post->user_id = Input::get('user_id');

            if (!$post->save()) {
                return response()->json(['success' => false]);
            }

            return response()->json($post);
        }
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
        $post = (new Post)->show($slug);
        $test = Post::find(6)->categorie;
        dd($test);
        //return view('singlepost', compact('slug', 'post'));
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
        $post = (new Post)->getById($id);

        return view('postupdate', compact('post'));
    }
}

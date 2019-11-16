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
        return $this::latest()->where('is_draft', 0)->get();
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
            'category_id' => 'required|numeric',
            'slug' => 'required',
            'is_featured' => 'required|numeric',
            'html' => 'required',
        );
        $validator = Validator::make(Input::all(), $rules);

        // process the login
        if ($validator->fails()) {
            return response()->json(['success' => false]);
        } else {
            // store
            $post = Post::find($id);
            $post->title = Input::get('title');
            $post->description = Input::get('description');
            $post->category_id = Input::get('category_id');
            $post->slug = Input::get('slug');
            $post->credit = Input::get('credit');
            $post->is_featured = Input::get('is_featured');
            $post->is_draft = Input::get('is_draft') || false;
            $post->html = Input::get('html');
            $post->image = Input::get('image');
            $post->largeImage = Input::get('largeImage');

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
        $post = Post::where('slug', $slug)->get()->first();
        $category = $post->category->name;
        $user = $post->user->name;
        return view('singlepost', compact('slug', 'post', 'category', 'user'));
    }

    public function indexBlog()
    {
        $articles = Post::latest()->where('is_draft', 0)->get();
        return view('blog', compact('articles'));
    }

    public function postManage()
    {
        return view('postmanage');
    }

    public function postUpdate($id)
    {
        $post = Post::find($id)->with('category')->first();
        return view('postupdate', compact('post'));
    }
}

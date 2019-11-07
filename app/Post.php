<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

    protected $guarded = [];

    public function index()
    {
        return $this::latest()->where('is_draft', 0)->get();
    }
    /**
     * Get by id.
     *
     * @return Post
     */
    public function getById($id)
    {
        return $this->where("id", $id)->get()->first();
    }
    public function featured_articles()
    {
        return $this->where('is_featured', 1)->where('is_draft', 0)->get();
    }

    public function show($slug)
    {
        return $this::where('slug', $slug)->get();
    }

}

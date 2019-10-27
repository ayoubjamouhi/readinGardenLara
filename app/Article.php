<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $guarded = [];
    public function index()
    {
        return $this->get();
    }
    public function featured_articles()
    {
        return $this->where('is_featured', 1)->get();
    }
    public function show($slug)
    {
        return $this::where('slug', $slug)->get();
    }
}

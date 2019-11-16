<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostsTest extends TestCase
{
    use RefreshDatabase;
    /** @test */
    public function posts_with_specific_category()
    {
        $categories = factory('App\Category', 2)->create();
        $post = factory('App\Post', 6)->create();
        $posts = $categories->first()->posts;
        dd($posts);
    }
}

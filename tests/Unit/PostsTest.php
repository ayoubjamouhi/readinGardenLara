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
        $categorie = factory('App\Categorie', 2)->create();
        $post = factory('App\Post', 5)->create();
        //dd($post);
        $categories = $post->find(1)->categorie();
        dd($categorie);

    }
}

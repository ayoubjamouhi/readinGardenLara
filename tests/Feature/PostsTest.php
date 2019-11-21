<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostsTest extends TestCase
{
    use RefreshDatabase;
    /** @test */
    public function create_post()
    {
        $this->withoutExceptionHandling();
        $this->actingAs(factory('App\User')->create());
        $categories = factory('App\Category', 2)->create();
        $data = [
            'title' => 'Fake Title',
            'description' => 'Fake description',
            'category_id' => \App\Category::all()->random()->id,
            'is_featured' => null,
            'is_draft' => null,
            'html' => '<h1>Html</h1>',
            'credit' => 'credit',
            'slug' => 'slug',
            'keywords' => null,
            'image' => null,
            'largeImage' => null,
            'user_id' => 1,
        ];
        $post = $this->post('/posts', $data);
        dd($post);
        $this->assertDatabaseHas('posts', ['title' => 'Fake Title']);
    }
    /** @test */
    public function update_post()
    {
        $this->withoutExceptionHandling();
        $this->actingAs(factory('App\User')->create());
        $categories = factory('App\Category', 2)->create();
        $data = [
            'title' => 'Fake Title',
            'description' => 'Fake description',
            'category_id' => \App\Category::all()->random()->id,
            'is_featured' => null,
            'is_draft' => null,
            'html' => '<h1>Html</h1>',
            'credit' => 'credit',
            'slug' => 'slug',
            'keywords' => null,
            'image' => null,
            'largeImage' => null,
            'user_id' => 1,
        ];
        $post = $this->put('/posts', $data);
        dd($post);
        $this->assertDatabaseHas('posts', ['title' => 'Fake Title']);
    }
}

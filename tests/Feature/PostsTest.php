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
        $this->post('/posts', [
            'title' => 'Fake Title',
            'description' => 'Fake description',
            'categorie_id' => 1,
            'is_featured' => null,
            'is_draft' => null,
            'html' => '<h1>Html</h1>',
            'credit' => 'credit',
            'slug' => 'slug',
            'keywords' => null,
            'image' => null,
            'largeImage' => null,
            'user_id' => 1,
        ]);

        $this->assertDatabaseHas('posts', ['title' => 'Fake Title']);
    }
}

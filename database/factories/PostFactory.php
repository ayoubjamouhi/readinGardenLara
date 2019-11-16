<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'title' => 'Fake Title',
        'description' => 'Fake description',
        'category_id' => App\Category::all()->random()->id,
        'is_featured' => 0,
        'is_draft' => 0,
        'html' => '<h1>Html</h1>',
        'credit' => 'credit',
        'slug' => $faker->slug,
        'keywords' => null,
        'image' => null,
        'largeImage' => null,
        'user_id' => 1,
    ];
});

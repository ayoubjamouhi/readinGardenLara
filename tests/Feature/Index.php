<?php

namespace Tests\Feature;

use Tests\TestCase;

class Index extends TestCase
{
    /** @test */
    public function testHome()
    {
        $user = factory('App\User')->create();

        $test = $this->actingAs($user);

    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('keywords')->nullable();
            $table->string('image')->nullable();
            $table->string('largeImage')->nullable();
            $table->string('credit')->nullable();
            $table->text('description');
            $table->binary('html');
            $table->boolean('is_featured')->default(0)->nullable();
            $table->boolean('is_arabic')->default(0)->nullable();
            $table->boolean('is_draft')->default(0)->nullable();
            $table->unsignedInteger('category_id');
            $table->unsignedInteger('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}

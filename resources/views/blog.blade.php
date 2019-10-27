@section('title', 'Blog')
@extends('layouts.app')
@section('css')
    <link rel="stylesheet" href="css/welcome.css" >
    <link rel="stylesheet" href="css/blog.css" >
@endsection
@section('main')
<div class="container">
        <section class="welcome">
        <div class="text">
            <h1>Welcome to readinGarden</h1>
            <h5>We’ll deliver the best stories and ideas on the topics you care about most straight to your homepage, app, or inbox.</h5>
            <div class="buttons">
                <button class="get--started"><a href="/blog">Get started</a></button>
                <button class="learn--more"><a href="/about-us">Learn more</a></button>
            </div>
        </div>
        </section>
    <section class="posts">
        <div class="posts--top">
            <h2>Articles</h2>
            <a href="/blog">more</a>
        </div>
            @foreach($articles as $article)
                <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 left">
                    <div class="clearfix"></div>
                    <div class="posts">
                        <div class="post">
                            <div class="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                <h1>
                                    <a href={{"/" . $article->slug}}>{{$article->title}}</a>
                                </h1>
                                <h2 class="desc">{{$article->description}}</h2>
                                <h6 class="author"><a href="#">{{$article->user_id}}</a></h6>
                                <h6 class="date">{{$article->date}}</h6>
                            </div>
                            <div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-img">
                                <img src={{'images/' . $article->image_id}} alt={{ $article->title }} />
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
    </section>
</div>
@endsection


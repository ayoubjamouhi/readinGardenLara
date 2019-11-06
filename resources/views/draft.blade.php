@section('title', 'Blog')
@extends('layouts.app')
@section('css')
    <link rel="stylesheet" href="css/welcome.css" >
    <link rel="stylesheet" href="css/blog-grid.css" >
@endsection
@section('main')
<div class="container">
    <section class="ads">
        <!-- ad unit 1 -->
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-3080286913683536"
            data-ad-slot="2002740794"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </section>
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
            <h2>Posts</h2>
            <a href="/blog">more</a>
        </div>
        <div class="posts-grid">
            @foreach($posts as $post)
                        <div class="post">
                            <div class="col-img">
                                @if($post->image != null)
                                    <img src={{ $post->image }} alt={{ $post->title }} />
                                @endif
                            </div>
                            <div class="data">
                                <h1>
                                    <a href={{"/" . $post->slug}}>{{$post->title}}</a>
                                    @if(Auth::check())
                                        <a href={{"/post_update/" . $post->id }}>🖊</a>
                                    @endif
                                </h1>
                                <h2 class="desc">{{$post->description}}</h2>
                                <h6 class="author"><a href="#">{{$post->user_id}}</a></h6>
                                <h6 class="date">{{$post->date}}</h6>
                            </div>
                        </div>
            @endforeach
        </div>
    </section>
</div>
@endsection


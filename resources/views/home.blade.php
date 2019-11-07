@section('title', 'Home')
@extends('layouts.app')
@section('css')
    <link rel="stylesheet" href="css/home.css" />
@endsection
@section('main')

<div class="container">
    <section class="ads">
        <!-- ad unit 1 -->
        <ins class="adsbygoogle"
            style="display:inline-block"
            data-ad-client="ca-pub-3080286913683536"
            data-ad-slot="2002740794"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </section>
    <section class="featured">
        <div class="wave"></div>
        <div class="row">
            <div class="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 left">
            @if($article_left->image != null && $article_left->largeImage != null)
                <a href={{"/". $article_left->slug}}>
                    <img src={{ $article_left->image }} alt="img" />
                </a>
            @endif
                <h3 class="title">
                    <a href={{"/". $article_left->slug}}>
                        {{ $article_left->title }}
                    </a>
                    @if(Auth::check())
                        <a href={{"/post_update/" . $article_left->id }}>🖊</a>
                    @endif
                </h3>
                <span class="desc">
                        {{ $article_left->description }}
                </span>
                <span class="author">
                    <a href="#">{{ $article_left->user_id . " in " .$article_left->categorie }}</a>
                </span>
                <span class="date">
                {{ $article_left->created_at->format('d/m/Y') }}
                </span>
            </div>
            <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 center">
                <div>
                @if($article_center1->image != null && $article_center1->largeImage != null)
                    <a href={{"/". $article_center1->slug}}>
                        <img src={{ $article_center1->image }} alt="img" />
                    </a>
                @endif
                    <h3 class="title">
                        <a href={{"/". $article_center1->slug}}>
                            {{ $article_center1->title }}
                        </a>
                        @if(Auth::check())
                            <a href={{"/post_update/" . $article_center1->id }}>🖊</a>
                        @endif
                    </h3>
                    <span class="desc">
                            {{ $article_center1->description }}
                    </span>
                    <span class="author">
                        <a href="#">{{ $article_center1->user_id . " in " .$article_center1->categorie }}</a>
                    </span>
                    <span class="date">
                    {{ $article_center1->created_at->format('d/m/Y') }}
                    </span>
                </div>
                <div>
                @if($article_center2->image != null && $article_center2->largeImage != null)
                    <a href={{"/". $article_center2->slug}}>
                        <img src={{ $article_center2->image }} alt="img" />
                    </a>
                @endif
                    <h3 class="title">
                        <a href={{"/". $article_center2->slug}}>
                            {{ $article_center2->title }}
                        </a>
                        @if(Auth::check())
                            <a href={{"/post_update/" . $article_center2->id }}>🖊</a>
                        @endif
                    </h3>
                    <span class="desc">
                            {{ $article_center2->description }}
                    </span>
                    <span class="author">
                        <a href="#">{{ $article_center2->user_id . " in " .$article_center2->categorie }}</a>
                    </span>
                    <span class="date">
                    {{ $article_center2->created_at->format('d/m/Y') }}
                    </span>
                </div>
            </div>
            <div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 right">
                @if($article_right->image != null && $article_right->largeImage != null)
                    <a href={{"/". $article_right->slug}}>
                        <img src={{ $article_right->image }} alt="img" />
                    </a>
                @endif
                    <h3 class="title">
                        <a href={{"/". $article_right->slug}}>
                            {{ $article_right->title }}
                        </a>
                        @if(Auth::check())
                            <a href={{"/post_update/" . $article_right->id }}>🖊</a>
                        @endif
                    </h3>
                    <span class="desc">
                            {{ $article_right->description }}
                    </span>
                    <span class="author">
                        <a href="#">{{ $article_right->user_id . " in " .$article_right->categorie }}</a>
                    </span>
                    <span class="date">
                    {{ $article_right->created_at->format('d/m/Y') }}
                    </span>
            </div>
        </div>
        </section>
        <section class="welcome">
        <div class="text">
            <h3>Welcome to readinGarden</h3>
            <span>We’ll deliver the best stories and ideas on the topics you care about most straight to your homepage, app, or inbox.</span>
            <div class="buttons">
                <button class="get--started"><a href="/blog">Get started</a></button>
                <button class="learn--more"><a href="/about-us">Learn more</a></button>
            </div>
        </div>
        </section>
        <section class="featured-members">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 left">
                <div class="posts--top">
                    <h2>
                    <a href="blog">
                        Featured for members
                        </a>
                    </h2>
                    <a href="/blog">More ></a>
                </div>

                <div class="clearfix"></div>
                <div class="posts">
                    @foreach ($articles_featured as $article)
                            <div class="row post">
                                <div class="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                                <h3 class="title">
                                    <a href={{"/" . $article->slug}}>
                                        {{ $article->title}}
                                    </a>
                                    @if(Auth::check())
                                        <a href={{"/post_update/" . $article->id }}>🖊</a>
                                    @endif
                                </h3>
                                <span class="desc">{{ $article->description}}</span>
                                <span class="author">
                                    <a href="#">
                                        {{ $article->user_id}}
                                    </a>
                                </span>
                                <span class="date">{{ $article->created_at->format('d/m/Y')}}</span>
                                </div>
                                <div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-img">
                            @if($article->image != null && $article->largeImage != null)
                                <a href={{"/" . $article->slug}}>
                                    <img src={{ $article->image}} alt="img" />
                                </a>
                            @endif
                                </div>
                            </div>
                    @endforeach
                </div>
            </div>
            <div class="col-4 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
            <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 right">
                <h2 class="top">
                    Popular on readinGarden
                </h2>
                <div class="posts">
                    <div class="row post">
                    <div class="col-2 left">
                        <span>01</span>
                    </div>
                    <div class="col-10 right">
                        <h4><a>The Blockchain Is a Reminder of the Internet’s Failure</a></h4>
                        <span class="author--categorie">
                            <a>Andrew Leonard</a>
                            <span> in</span> <a>LOVE/HATE</a>
                        </span>
                        <time class="date">Dec 5 . 6 min read</time>
                    </div>
                    </div>
                </div>
                <div class="footer">
                    <a href="blog">Blog</a>
                    <a href="privacy-policy">Privacy</a>
                    <a href="contact">Contact us</a>
                    <a href="about-us">About</a>
                </div>
            </div>
        </div>
        </section>
</div>
@endsection
@section('script')
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131907762-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-131907762-1');
    </script>
@endsection




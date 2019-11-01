@section('title',  $post->title )
@extends('layouts.app')
@section('meta')
    <meta name="description" content="{{ $post->description }}"/>
    <meta name="url" content="{{ "https://readingarden.com/" . $post->slug }}">
    <meta name="og:title" content="{{ $post->title }}"/>
    <meta name="og:image" content="{{ $post->largeImage }}"/>
    <meta name="og:description" content="{{ $post->title }}"/>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="{{ $post->title }}" />
    <meta name="twitter:site" content="{{ "https://readingarden.com/" . $post->slug }}" />
@endsection
@section('css')
    <link rel="stylesheet" href="css/post-grid.css" >
@endsection
@section('main')
   <section class="post">
   <div class="myads">
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
   </div>
   <figure class="image">
   @if($post->largeImage != null)
      <img src={{ $post->largeImage }} alt={{ $post->title }} />
   @endif
      <figcaption>
         {{ $post->credit }}
      </figcaption>
   </figure>
   <div class="user__categorie">
      <div class="user">
         <img src="/images/admin.png" alt="images" class="img-circle"/>
         <a href={{ "/user/" . $post->user_id }}>
            {{ $post->user_id }}
         </a>
      </div>
      <div class="categorie">
         <a href={{ "/categorie/" . $post->categorie }}>
            {{ ucfirst(trans($post->categorie)) }}
         </a>
      </div>
   </div>
   <h1 class="title">
      {{ $post->title }}
      <a href={{"/post_update/" . $post->id }}>🖊</a>
   </h1>
   <span class="date">
      <time>
         {{ $post->created_at->format('F Y') }}
      </time>
   </span>
   <article
      id="article"
   >{!! $post->html !!}
   </article>
   <div class="myads">
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
   </div>
   <div class="disqus">
      Disqus
   </div>
   </section>
@endsection


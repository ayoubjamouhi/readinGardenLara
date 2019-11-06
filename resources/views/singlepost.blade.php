@section('title',  $post->title )
@extends('layouts.app')
@section('meta')
    <meta name="description" content="{{ $post->description }}"/>
    <link rel="canonical" href={{ "https://readingarden.com" . $post->slug }} />
    <meta name="url" content="{{ "https://readingarden.com/" . $post->slug }}">
    <meta name="og:title" content="{{ $post->title }}"/>
    <meta name="og:image" content="{{ $post->largeImage }}"/>
    <meta name="og:description" content="{{ $post->title }}"/>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="{{ $post->title }}" />
    <meta name="twitter:site" content="{{ "https://readingarden.com/" . $post->slug }}" />
@endsection
@section('css')
    <link rel="stylesheet" href="css/singlepost.css" >
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
      @if(Auth::check())
         <a href={{"/post_update/" . $post->id }}>🖊</a>
      @endif
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
   <div class="disqus" id="disqus_thread">
      <a href={{ "https://readingarden.com/".$post->slug."#disqus_thread"}}>Link</a>
   </div>

   </section>
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
    <script>

      /**
      *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
      *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
      /*
      var disqus_config = function () {
      this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      */
      (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://https-readingarden-com.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
      })();
      </script>
      <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    <script id="dsq-count-scr" src="//https-readingarden-com.disqus.com/count.js" async></script>
@endsection


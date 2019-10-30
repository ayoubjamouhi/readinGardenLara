<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <meta name="keywords" content="mortgage, posts, blog"/>
    <meta name="subject" content="blog posts">
    <meta name="copyright"content="readingarden">
    <meta name="language" content="EN">
    <meta name="robots" content="index,follow" />
    <meta name="Classification" content="Blog">
    <meta name="author" content="jfnadev, jknamouhi@gmail.com">
    <meta name="copyright" content="jfnadev">
    <meta name="reply-to" content="jknamouhi@gmail.com">
    <meta name="owner" content="jfnadev">
    <meta name="category" content="posts">
    <meta name="coverage" content="Worldwide">
    <meta name="distribution" content="Global">
    <meta name="rating" content="General">
    <meta http-equiv="Expires" content="0">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta name="og:type" content="blog, posts"/>
    <meta name="og:url" content="http://readingarden.com"/>
    <meta name="og:site_name" content="readinGarden"/>
    <meta name="fb:page_id" content="393214638117399" />
    <meta name="og:email" content="jknamouhi@gmail.com"/>
    <meta name="og:country-name" content="USA"/>
    <meta property="og:type" content="blog.posts"/>

    @yield('meta')
    <title>readinGarden - @yield('title')</title>
    <link rel="icon" type="image/png" href="/images/favicon.jpg">
    <link rel="stylesheet" href="/css/all.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    @yield('css')
    <link rel="stylesheet" href="/css/header.css">
    <link rel="stylesheet" href="/css/footer.css">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131907762-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-131907762-1');
    </script>
    <style>
      @import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700|Work+Sans:300,400,500,600,700,800,900');
      html {
        box-sizing: border-box;
      }
      *, *:before, *:after {
        box-sizing: inherit;
      }
      body {
        padding: 0;
        margin: 0;
        line-height: 2;
        /*font-family: 'Work Sans';*/
        }
    </style>
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-md navbar-light " style="width: 100%">
            <a href="/" class="navbar-brand">
              <img src="/images/logo.png" alt="readinGarden" style="width: 100%"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="/blog" class="nav-link">BLOG</a>
                </li>
                <li class="nav-item">
                    <a href="/contact" class="nav-link">CONTACT US</a>
                </li>
                @if(Auth::check())
                  <li class="nav-item">
                      <a href="/me" class="nav-link">my account</a>
                  </li>
                  <li class="nav-item">
                      <a href="/post_manage" class="nav-link">post</a>
                  </li>
                  <li class="nav-item">
                      <a href="/logout" class="nav-link">logout {{ Auth::user()->name }}</a>
                  </li>
                @endif
            </ul>
          </div>
        </nav>
      </header>

    <main id="app">
        @yield('main')
    </main>

    <footer>
        <div class="row" style="width: 100%">
          <div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 left">
            <div class="share">
              <a target="_blank" href="https://www.facebook.com/readingardencommunity/">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9 right">
            <span>jfnadev © 2019</span>
          </div>
        </div>
      </footer>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    @yield('script')
</body>

</html>


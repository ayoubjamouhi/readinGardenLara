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
    <meta name="og:image" content="https://res.cloudinary.com/dzgho0ttb/image/upload/v1572270504/readingarden_lara/rwplcaxpbymk4fhu6ktf.png"/>
    <meta name="fb:page_id" content="393214638117399" />
    <meta name="og:email" content="jknamouhi@gmail.com"/>
    <meta name="og:country-name" content="USA"/>
    <meta property="og:type" content="blog.posts"/>
    @yield('meta')
    <title>readinGarden - @yield('title')</title>
    <link rel="icon" type="image/png" href="/images/favicon.jpg">
    <link rel="stylesheet" href="/css/all.min.css">
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
        .adsbygoogle {
          height: 150px !important;
        }

    </style>
</head>
<body>
    <header>
        @include('layouts.header')
      </header>

    <main id="app">
        @yield('main')
    </main>

    <footer>
        @include('layouts.footer')
    </footer>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    @yield('script')
</body>

</html>


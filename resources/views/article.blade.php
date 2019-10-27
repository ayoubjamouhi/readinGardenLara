@section('title',  $post->title )
@extends('layouts.app')
@section('css')
    <link rel="stylesheet" href="css/article.css" >
@endsection
@section('main')
<main>
            <div class="container">
               <section class="post">
                     <div class="image--top">
                           <img src={{ "images/" . $post->image_id }} alt="img" />
                           <p class="credit">Credit: {{ $post->credit }}</p>
                     </div>
                     <div class="row bottom">
                           <div class="col-12 col-sm-1 col-md-1 col-lg-1 col-xl-1 left">
                              <div class="share">
                                 <a href="#">
                                    <i class="fab fa-facebook"></i>
                                 </a>
                                 <a href="#">
                                    <i class="fab fa-twitter"></i>
                                 </a>
                              </div>
                           </div>
                           <div class="col-12 col-sm-11 col-md-11 col-lg-11 col-xl-11 right">
                              <div>Ad</div>
                              <h3 class="categorie">IN {{ $post->categorie }}</h3>
                              <h1 class="title">{{ $post->title }}</h1>
                              <h2 class="description">{{ $post->descreption }}</h2>
                              <div class="user">
                                 <div class="row">
                                       <div class="col-12 col-sm-11 col-md-11 col-lg-11 col-xl-11 image">
                                          <img src="/images/admin.png" alt="images" class="img-circle"/>
                                       </div>
                                       <div class="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 info">
                                          <div class="name--follow">
                                             <h6>{{ $post->user_id }}</h6>
                                             <button>Follow</button>
                                          </div>
                                          <div class="date">
                                          {{ $post->created_at->format('d/m/Y') }}
                                          </div>

                                       </div>
                                 </div>
                              </div>
                              <div class="row article">
                                 <div class="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9 col" >
                                    {!! $post->html !!}
                                 </div>
                                 <div  class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col">
                                    <div>Ad</div>
                                 </div>
                              </div>

                           </div>
                     </div>
                  </section>
            </div>
         </main>
@endsection


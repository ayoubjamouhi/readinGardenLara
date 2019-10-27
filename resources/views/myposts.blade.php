@section('title',  'Add post' )
@extends('layouts.app')
@section('css')
    <link rel="stylesheet" href="css/article.css" >
@endsection
@section('main')

<main style="padding-bottom: 10px">
  <div class="container">
      <div class="card">
        <div class="card-header">
            <strong>Gestion</strong> des Articles
        </div>
        <my-posts/>
      </div>
  </div>
</main>
@endsection
@section('script')
    <script src="{{ asset('js/app.js') }}"></script>
@endsection


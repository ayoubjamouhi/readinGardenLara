@section('title',  'Update post' )
@extends('layouts.app')
@section('css')
    <meta name="csrf-token" content="{{ csrf_token() }}">
@endsection
@section('main')
<div class="container" style="padding-bottom: 10px">
    <div class="card">
      <div class="card-header">
          <strong>Update</strong> post : <a target="_blank" href={{ "/" . $post->slug }}>{{ $post->title}}</a>
      </div>

      <post-update :my-post="{{ json_encode($post) }}"/>
    </div>
</div>
@endsection
@section('script')
    <script src="{{ asset('js/app.js') }}"></script>
@endsection


@section('title',  'Update post' )
@extends('layouts.app')
@section('css')
    <link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.css" rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}">
@endsection
@section('main')
<div class="container" style="padding-bottom: 10px">
    <div class="card">
      <div class="card-header">
          <strong>Update</strong> post
      </div>

      <post-update :my-post="{{ $post }}"/>
    </div>
</div>
@endsection
@section('script')
    <script src="{{ asset('js/app.js') }}"></script>
@endsection


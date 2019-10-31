@section('title',  'Add post' )
@extends('layouts.app')
@section('css')
    <meta name="csrf-token" content="{{ csrf_token() }}">

@endsection
@section('main')
<div class="container" style="padding-bottom: 10px">
    <div class="card">
      <div class="card-header">
          <strong>Add</strong> post
      </div>
      <post-manage/>
    </div>
</div>
@endsection
@section('script')
    <script src="{{ asset('js/app.js') }}"></script>
@endsection


@section('title',  'Add post' )
@extends('layouts.app')
@section('css')
@endsection
@section('main')
<div class="container" style="padding-bottom: 10px">
    <div class="card">
      <div class="card-header">
          <strong>Gestion</strong> des Articles
      </div>
      <my-posts/>
    </div>
</div>
@endsection
@section('script')
    <script src="{{ asset('js/app.js') }}"></script>
@endsection


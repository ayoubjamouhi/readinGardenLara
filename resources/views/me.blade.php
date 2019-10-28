@section('title', Auth::user()->name)
@extends('layouts.app')
@section('main')
<main>
  {{ Auth::user()->name }}
</main>
@endsection

@section('title', 'Page Title')
@extends('layouts.app')
@section('css')
    <link rel="stylesheet" href="css/article.css" >
@endsection
@section('main')
<main>
    <div class="container">
        <Welcome />
        <section className="posts">
            <div className="posts--top">
                <h2>Articles</h2>
                <a href="/blog">more</a>
            </div>
            <Row>
                { articles }
            </Row>
        </section>
    </div>
</main>
@endsection


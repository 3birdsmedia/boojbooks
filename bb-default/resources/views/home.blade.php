@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <!-- <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div> -->
                <div class="col-md-6">
                    <h1>Booj Books</h1>
                    <div> The best place to keep track of your books</div>
                    <search-component />
                </div>
                <div class="col-md-6">
                    <h1>My Books</h1>
                    <div>Here is are my books i'd like to read</div>
                    <booklist-component />
                </div>

            </div>
        </div>
    </div>
</div>
@endsection

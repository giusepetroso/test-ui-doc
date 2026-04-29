<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/showroom', fn () => Inertia::render('Showroom'))->name('showroom');

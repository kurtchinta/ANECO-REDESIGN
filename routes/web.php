<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage');
})->name('home');

Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login'); // Remove middleware for unauthenticated access

Route::get('/register', function () {
    return Inertia::render('Register');
})->name('register'); // Add this for sign up

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard'); // Add this for sign up

Route::get('/linkaccount', function () {
    return Inertia::render('LinkAccounts');
})->name('linkaccount'); // Add this for sign up

Route::get('/userprofile', function () {
    return Inertia::render('UserProfile');
})->name('userprofile'); // Add this for sign up

Route::get('/accountledger', function () {
    return Inertia::render('AccountLedger');
})->name('accountledger'); // Add this for sign up

Route::get('/statementofaccount', function () {
    return Inertia::render('StatementofAccount');
})->name('statementofaccount'); // Add this for sign up

Route::get('/notification', function () {
    return Inertia::render('Notifications');
})->name('notification'); // Add this for sign up
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

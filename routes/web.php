<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public routes - No authentication required
Route::get('/', function () {
    return Inertia::render('LandingPage');
})->name('home');

Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Register');
})->name('register');

Route::get('/linkaccount', function () {
    return Inertia::render('LinkAccounts');
})->name('linkaccount');

// Routes that are freely accessible, no authentication required
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/userprofile', function () {
    return Inertia::render('UserProfile');
})->name('userprofile');

Route::get('/accountledger', function () {
    return Inertia::render('AccountLedger');
})->name('accountledger');

Route::get('/statementofaccount', function () {
    return Inertia::render('StatementofAccount');
})->name('statementofaccount');

Route::get('/notification', function () {
    return Inertia::render('Notifications');
})->name('notification');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

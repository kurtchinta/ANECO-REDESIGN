<?php

use App\Models\User;

test('guests can access the dashboard without login', function () {
    $response = $this->get('/dashboard');
    $response->assertStatus(200); // Check for 200 OK status, since you want guests to access it without redirection
});

test('authenticated users can visit the dashboard', function () {
    $user = User::factory()->create();
    $this->actingAs($user);

    $response = $this->get('/dashboard');
    $response->assertStatus(200); // Check for 200 OK status
});

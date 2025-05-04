<template>
    <div class="min-h-screen flex flex-col">
      <!-- Header with animated navigation -->
      <header class="bg-gradient-to-r from-[#0A3B7D] via-[#1a4d8f] to-[#0A3B7D] sticky top-0 z-50">
        <div class="container mx-auto px-4 py-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <img src="/aneco.png" alt="ANECO Logo" class="h-12 mr-4" />
              <span class="text-white font-bold text-xl hidden sm:inline-block">MyANECO</span>
            </div>
            
            <div class="hidden md:flex items-center space-x-8">
              <a href="#features" class="text-white hover:text-blue-200 transition-colors text-sm font-medium">Features</a>
              <a href="#how-it-works" class="text-white hover:text-blue-200 transition-colors text-sm font-medium">How It Works</a>
              <a href="#testimonials" class="text-white hover:text-blue-200 transition-colors text-sm font-medium">Testimonials</a>
              <a href="#faq" class="text-white hover:text-blue-200 transition-colors text-sm font-medium">FAQ</a>
              <a href="#" class="text-white hover:text-blue-200 transition-colors text-sm font-medium">Contact</a>
            </div>
            
            <div class="flex items-center space-x-4">
              <a href="/login" class="text-white hover:text-blue-200 transition-colors text-sm font-medium">Sign In</a>
              <a href="/register" class="bg-white text-[#0A3B7D] hover:bg-blue-100 transition-colors px-4 py-2 rounded-lg text-sm font-medium">Sign Up</a>
              <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="md:hidden bg-[#0A3B7D] border-t border-blue-700">
          <div class="container mx-auto px-4 py-3 space-y-2">
            <a href="#features" class="block text-white hover:text-blue-200 transition-colors text-sm font-medium py-2">Features</a>
            <a href="#how-it-works" class="block text-white hover:text-blue-200 transition-colors text-sm font-medium py-2">How It Works</a>
            <a href="#testimonials" class="block text-white hover:text-blue-200 transition-colors text-sm font-medium py-2">Testimonials</a>
            <a href="#faq" class="block text-white hover:text-blue-200 transition-colors text-sm font-medium py-2">FAQ</a>
            <a href="#" class="block text-white hover:text-blue-200 transition-colors text-sm font-medium py-2">Contact</a>
          </div>
        </div>
      </header>
  
      <!-- Hero Section with animated elements -->
      <section class="relative bg-gradient-to-br from-gray-900 via-[#0A3B7D] to-gray-900 text-white overflow-hidden">
        <!-- Animated background elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-full">
            <!-- Animated circles -->
            <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
            <div class="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-300 rounded-full opacity-10 animate-pulse" style="animation-delay: 1s;"></div>
            <div class="absolute top-2/3 left-1/3 w-48 h-48 bg-blue-600 rounded-full opacity-10 animate-pulse" style="animation-delay: 2s;"></div>
            
            <!-- Grid pattern -->
            <div class="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
          </div>
        </div>
        
        <div class="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-10 md:mb-0">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span class="block">Manage Your Electricity</span>
                <span class="block text-blue-300">Anytime, Anywhere</span>
              </h1>
              <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-lg">
                Join thousands of satisfied customers who manage their ANECO accounts online with ease and convenience.
              </p>
              <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="/login" class="bg-white text-[#0A3B7D] hover:bg-blue-100 transition-all transform hover:scale-105 px-8 py-3 rounded-lg text-lg font-medium flex items-center justify-center">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="#how-it-works" class="border border-white text-white hover:bg-white hover:text-[#0A3B7D] transition-all px-8 py-3 rounded-lg text-lg font-medium flex items-center justify-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div class="md:w-1/2 flex justify-center">
              <div class="relative">
                <!-- Dashboard mockup image -->
                <img 
                  src="/placeholder.svg?height=500&width=600" 
                  alt="MyANECO Dashboard" 
                  class="rounded-lg shadow-2xl max-w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                
                <!-- Floating elements -->
                <div class="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg transform rotate-3 animate-float">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-800 font-medium">Bill Paid</p>
                      <p class="text-gray-500 text-sm">April 2023</p>
                    </div>
                  </div>
                </div>
                
                <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg transform -rotate-3 animate-float" style="animation-delay: 1s;">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-gray-800 font-medium">Usage Alert</p>
                      <p class="text-gray-500 text-sm">10% lower than last month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Stats -->
          <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-4xl font-bold mb-2 text-blue-300">10,000+</div>
              <div class="text-blue-100">Active Users</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold mb-2 text-blue-300">24/7</div>
              <div class="text-blue-100">Account Access</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold mb-2 text-blue-300">98%</div>
              <div class="text-blue-100">Customer Satisfaction</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold mb-2 text-blue-300">5 min</div>
              <div class="text-blue-100">Average Setup Time</div>
            </div>
          </div>
        </div>
        
        <!-- Wave divider -->
        <div class="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>
  
      <!-- Features Section -->
      <section id="features" class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Everything You Need in One Place</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">MyANECO provides all the tools you need to manage your electricity account efficiently.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Feature 1 -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100 group hover:bg-blue-50">
              <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Usage Monitoring</h3>
              <p class="text-gray-600">Track your electricity consumption patterns with detailed graphs and analytics to help you save energy and reduce costs.</p>
            </div>
            
            <!-- Feature 2 -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100 group hover:bg-blue-50">
              <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Online Bill Payment</h3>
              <p class="text-gray-600">Pay your electricity bills securely online without the hassle of visiting payment centers or banks.</p>
            </div>
            
            <!-- Feature 3 -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100 group hover:bg-blue-50">
              <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Smart Notifications</h3>
              <p class="text-gray-600">Receive timely alerts about bill due dates, payment confirmations, and scheduled power interruptions.</p>
            </div>
            
            <!-- Feature 4 -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100 group hover:bg-blue-50">
              <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Bill History</h3>
              <p class="text-gray-600">Access and download your complete billing history for record-keeping and budget planning purposes.</p>
            </div>
            
            <!-- Feature 5 -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100 group hover:bg-blue-50">
              <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Customer Support</h3>
              <p class="text-gray-600">Get assistance through our integrated support system without the need to visit our offices.</p>
            </div>
            
            <!-- Feature 6 -->
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100 group hover:bg-blue-50">
              <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">Secure Access</h3>
              <p class="text-gray-600">Rest easy knowing your account information is protected with industry-standard security measures.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- How It Works Section -->
      <section id="how-it-works" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How MyANECO Works</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">Getting started with MyANECO is quick and easy. Follow these simple steps:</p>
          </div>
          
          <div class="max-w-5xl mx-auto">
            <!-- Steps -->
            <div class="relative">
              <!-- Connection line -->
              <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
              
              <!-- Step 1 -->
              <div class="relative z-10 mb-12">
                <div class="flex flex-col md:flex-row items-center">
                  <div class="md:w-1/2 mb-6 md:mb-0 md:pr-8 flex md:justify-end">
                    <div class="bg-white p-6 rounded-xl shadow-lg max-w-md">
                      <h3 class="text-xl font-bold text-gray-800 mb-2">1. Create Your Account</h3>
                      <p class="text-gray-600">Sign up for MyANECO by providing your basic information and ANECO account details. The registration process takes less than 5 minutes.</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-center z-10">
                    <div class="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      1
                    </div>
                  </div>
                  <div class="md:w-1/2 md:pl-8 hidden md:block">
                    <img src="image1.png" alt="Create Account" class="rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
              
              <!-- Step 2 -->
              <div class="relative z-10 mb-12">
                <div class="flex flex-col md:flex-row-reverse items-center">
                  <div class="md:w-1/2 mb-6 md:mb-0 md:pl-8 flex md:justify-start">
                    <div class="bg-white p-6 rounded-xl shadow-lg max-w-md">
                      <h3 class="text-xl font-bold text-gray-800 mb-2">2. Verify Your Identity</h3>
                      <p class="text-gray-600">We'll verify your identity using your ANECO account number and other details to ensure secure access to your account information.</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-center z-10">
                    <div class="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      2
                    </div>
                  </div>
                  <div class="md:w-1/2 md:pr-8 hidden md:block">
                    <img src="image2.png" alt="Verify Identity" class="rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
              
              <!-- Step 3 -->
              <div class="relative z-10 mb-12">
                <div class="flex flex-col md:flex-row items-center">
                  <div class="md:w-1/2 mb-6 md:mb-0 md:pr-8 flex md:justify-end">
                    <div class="bg-white p-6 rounded-xl shadow-lg max-w-md">
                      <h3 class="text-xl font-bold text-gray-800 mb-2">3. Set Up Your Profile</h3>
                      <p class="text-gray-600">Complete your profile by setting your communication preferences and notification settings to customize your MyANECO experience.</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-center z-10">
                    <div class="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      3
                    </div>
                  </div>
                  <div class="md:w-1/2 md:pl-8 hidden md:block">
                    <img src="image2.png" alt="Set Up Profile" class="rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
              
              <!-- Step 4 -->
              <div class="relative z-10">
                <div class="flex flex-col md:flex-row-reverse items-center">
                  <div class="md:w-1/2 mb-6 md:mb-0 md:pl-8 flex md:justify-start">
                    <div class="bg-white p-6 rounded-xl shadow-lg max-w-md">
                      <h3 class="text-xl font-bold text-gray-800 mb-2">4. Start Managing Your Account</h3>
                      <p class="text-gray-600">Access your dashboard to view bills, track usage, make payments, and enjoy all the features MyANECO has to offer.</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-center z-10">
                    <div class="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      4
                    </div>
                  </div>
                  <div class="md:w-1/2 md:pr-8 hidden md:block">
                    <img src="image.png" alt="Manage Account" class="rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
            </div>
            
            <!-- CTA Button -->
            <div class="text-center mt-16">
              <a href="/register" class="inline-block bg-blue-600 text-white hover:bg-blue-700 transition-colors px-8 py-3 rounded-lg text-lg font-medium">
                Create Your Account Now
              </a>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section id="testimonials" class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">Hear from our satisfied customers who are already enjoying the benefits of MyANECO.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Testimonial 1 -->
            <div class="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow relative">
              <div class="absolute top-4 left-4 text-blue-300 opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div class="pt-8 pb-4">
                <p class="text-gray-700 italic mb-6">
                  "MyANECO has made managing my electricity account so much easier. I love being able to check my usage and pay my bills online without having to visit the payment center."
                </p>
                <div class="flex items-center">
                  <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    MR
                  </div>
                  <div class="ml-3">
                    <p class="font-medium text-gray-800">Maria Rodriguez</p>
                    <p class="text-sm text-gray-500">MyANECO User since 2021</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Testimonial 2 -->
            <div class="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow relative">
              <div class="absolute top-4 left-4 text-blue-300 opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div class="pt-8 pb-4">
                <p class="text-gray-700 italic mb-6">
                  "The usage monitoring feature has helped me identify ways to reduce my electricity consumption. I've saved almost 20% on my monthly bill since I started using MyANECO!"
                </p>
                <div class="flex items-center">
                  <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    JD
                  </div>
                  <div class="ml-3">
                    <p class="font-medium text-gray-800">Juan Dela Cruz</p>
                    <p class="text-sm text-gray-500">MyANECO User since 2022</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Testimonial 3 -->
            <div class="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow relative">
              <div class="absolute top-4 left-4 text-blue-300 opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div class="pt-8 pb-4">
                <p class="text-gray-700 italic mb-6">
                  "I appreciate the notification system that reminds me when my bill is due. No more late payments or disconnection notices since I started using MyANECO!"
                </p>
                <div class="flex items-center">
                  <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    AS
                  </div>
                  <div class="ml-3">
                    <p class="font-medium text-gray-800">Anna Santos</p>
                    <p class="text-sm text-gray-500">MyANECO User since 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- FAQ Section -->
      <section id="faq" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">Find answers to common questions about MyANECO.</p>
          </div>
          
          <div class="max-w-3xl mx-auto">
            <!-- FAQ Items -->
            <div class="space-y-6">
              <div v-for="(item, index) in faqItems" :key="index" class="bg-white rounded-xl shadow-md overflow-hidden">
                <button 
                  @click="toggleFaq(index)" 
                  class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span class="font-medium text-gray-800">{{ item.question }}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-5 w-5 text-gray-500 transform transition-transform" 
                    :class="{ 'rotate-180': item.isOpen }"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  v-show="item.isOpen" 
                  class="px-6 pb-4 text-gray-600"
                >
                  <p>{{ item.answer }}</p>
                </div>
              </div>
            </div>
            
            <!-- More Questions -->
            <div class="mt-12 text-center">
              <p class="text-gray-700 mb-4">Still have questions?</p>
              <a href="#" class="inline-block bg-blue-600 text-white hover:bg-blue-700 transition-colors px-6 py-2 rounded-lg font-medium">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who are already enjoying the benefits of MyANECO. Sign up today and take control of your electricity account.
          </p>
          <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/register" class="bg-white text-blue-600 hover:bg-blue-50 transition-colors px-8 py-3 rounded-lg text-lg font-medium">
              Create Account
            </a>
            <a href="#" class="border border-white text-white hover:bg-white hover:text-blue-600 transition-colors px-8 py-3 rounded-lg text-lg font-medium">
              Learn More
            </a>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Company Info -->
            <div>
              <img src="aneco.png" alt="ANECO Logo" class="h-10 mb-4" />
              <p class="text-gray-400 mb-4">
                ANECO is committed to providing reliable electricity service and innovative solutions for our customers.
              </p>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Quick Links -->
            <div>
              <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" class="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" class="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#testimonials" class="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#faq" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <!-- Contact Info -->
            <div>
              <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-gray-400">123 Main Street, Agusan del Norte, Philippines</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span class="text-gray-400">(123) 456-7890</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="text-gray-400">support@aneco.com</span>
                </li>
              </ul>
            </div>
            
            <!-- Newsletter -->
            <div>
              <h3 class="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
              <p class="text-white-400 mb-4">Subscribe to our newsletter for updates and tips on energy conservation.</p>
              <form @submit.prevent="subscribeNewsletter" class="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  class="px-4 py-2 rounded-l-lg w-full focus:outline-none text-white-800"
                  required
                />
                <button 
                  type="submit" 
                  class="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-r-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          
          <div class="mt-12 pt-8 border-t border-gray-800 text-center">
            <p class="text-gray-400">© {{ new Date().getFullYear() }} ANECO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup lang="js">
  import { ref } from 'vue';
  
  // Mobile menu state
  const mobileMenuOpen = ref(false);
  
  // FAQ items
  const faqItems = ref([
    {
      question: "What is MyANECO?",
      answer: "MyANECO is an online portal that allows ANECO customers to manage their electricity accounts, view and pay bills, track usage, and receive important notifications.",
      isOpen: true
    },
    {
      question: "How do I create a MyANECO account?",
      answer: "To create a MyANECO account, click on the 'Sign Up' button, fill in your personal information, ANECO account number, and create a password. You'll receive a verification email to complete the registration process.",
      isOpen: false
    },
    {
      question: "Is MyANECO free to use?",
      answer: "Yes, MyANECO is completely free for all ANECO customers. There are no subscription fees or hidden charges.",
      isOpen: false
    },
    {
      question: "How secure is my information on MyANECO?",
      answer: "MyANECO uses industry-standard security measures to protect your personal and account information. We employ encryption, secure authentication, and regular security audits to ensure your data remains safe.",
      isOpen: false
    },
    {
      question: "Can I pay my bill through MyANECO?",
      answer: "Yes, MyANECO offers secure online bill payment options. You can pay using credit/debit cards, online banking, and other payment methods.",
      isOpen: false
    },
    {
      question: "What should I do if I forget my password?",
      answer: "If you forget your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to reset your password.",
      isOpen: false
    }
  ]);
  
  // Toggle FAQ item
  const toggleFaq = (index) => {
    faqItems.value[index].isOpen = !faqItems.value[index].isOpen;
  };
  
  // Newsletter subscription
  const subscribeNewsletter = () => {
    // Here you would typically handle the newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
  };
  
  // Animation for floating elements
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0% { transform: translateY(0px) rotate(3deg); }
      50% { transform: translateY(-10px) rotate(3deg); }
      100% { transform: translateY(0px) rotate(3deg); }
    }
    
    .animate-float {
      animation: float 4s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);
  </script>
  
  <style>
  /* Custom styles */
  .bg-grid-white {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  }
  
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
  
  /* You can add more custom styles here if needed */
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  </style>

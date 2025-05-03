<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <!-- Large floating dots -->
      <div class="absolute h-64 w-64 rounded-full bg-blue-600/10 animate-float-slow top-20 -left-20"></div>
      <div class="absolute h-96 w-96 rounded-full bg-blue-400/10 animate-float-medium top-1/4 right-0 -translate-y-1/2 translate-x-1/3"></div>
      <div class="absolute h-80 w-80 rounded-full bg-blue-500/10 animate-float-fast bottom-0 left-1/4 translate-y-1/3"></div>
      <div class="absolute h-48 w-48 rounded-full bg-blue-300/10 animate-float-medium top-3/4 right-1/4"></div>
      
      <!-- Small floating dots -->
      <div class="absolute h-16 w-16 rounded-full bg-blue-600/20 animate-float-fast top-1/3 left-1/3"></div>
      <div class="absolute h-24 w-24 rounded-full bg-blue-400/20 animate-float-slow bottom-1/4 right-1/3"></div>
      <div class="absolute h-12 w-12 rounded-full bg-blue-500/20 animate-float-medium top-2/3 left-10"></div>
      <div class="absolute h-20 w-20 rounded-full bg-blue-300/20 animate-float-fast top-1/4 right-10"></div>
      
      <!-- Tiny floating dots -->
      <div v-for="i in 15" :key="i" 
           class="absolute h-4 w-4 rounded-full bg-blue-500/30"
           :class="`animate-float-${i % 3 === 0 ? 'slow' : i % 3 === 1 ? 'medium' : 'fast'}`"
           :style="{
             top: `${Math.random() * 100}%`,
             left: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 5}s`
           }">
      </div>
    </div>

    <!-- Header with animated navigation -->
    <header class="bg-gradient-to-r from-[#0A3B7D] via-[#1a4d8f] to-[#0A3B7D] sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <a href="/" class="flex items-center">
            <img src="/aneco.png" alt="ANECO Logo" class="h-12 mr-4" />
            <span class="text-white font-bold text-xl hidden sm:inline-block">MyANECO</span>
          </a>
          
          <a href="/register" class="text-white hover:text-blue-200 transition-colors text-sm font-medium group flex items-center">
            <span>Don't have an account?</span>
            <span class="ml-2 relative overflow-hidden group-hover:text-blue-200">
              <span class="relative z-10">Sign Up</span>
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow py-12 px-4 relative z-10">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <!-- Left Column - Login Form -->
          <div class="lg:col-span-3">
            <!-- Welcome Message -->
            <div class="welcome-message mb-6 p-5 text-center rounded-xl bg-white/70 backdrop-blur-sm border border-blue-100 shadow-sm transform transition-all hover:shadow-md hover:-translate-y-1">
              <h1 class="text-blue-800 font-bold text-2xl mb-1">Welcome back to MyANECO!</h1>
              <p class="text-blue-600">Manage your electricity account with ease</p>
            </div>
            
            <!-- Login Card -->
            <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-blue-100/50 transform transition-all hover:shadow-blue-100/50">
              <!-- Card Header -->
              <div class="bg-gradient-to-r from-[#0A3B7D] via-[#1a4d8f] to-[#0A3B7D] p-6 relative overflow-hidden">
                <div class="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                <!-- Animated dots in header -->
                <div class="absolute h-12 w-12 rounded-full bg-white/5 top-0 right-10 animate-float-slow"></div>
                <div class="absolute h-8 w-8 rounded-full bg-white/5 bottom-0 right-20 animate-float-medium"></div>
                <div class="absolute h-6 w-6 rounded-full bg-white/5 top-1/2 right-40 animate-float-fast"></div>
                
                <div class="relative z-10">
                  <h2 class="text-2xl font-bold text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Sign In to MyANECO
                  </h2>
                  <p class="text-blue-100">Access your electricity account</p>
                </div>
              </div>
              
              <!-- Card Body -->
              <div class="p-8">
                <form @submit.prevent="handleLogin" class="text-black space-y-6">
                  <!-- Account Number Field -->
                  <div class="space-y-2 group">
                    <label for="accountNumber" class="block text-sm font-medium text-gray-700 flex items-center">
                      ANECO Account Number
                      <div class="group relative ml-1 text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div class="hidden group-hover:block absolute z-10 w-64 p-2 bg-white text-black text-xs rounded shadow-lg -mt-1 ml-1 border border-gray-200">
                          Your ANECO account number is a 10-digit number found at the top of your bill.
                        </div>
                      </div>
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                        </svg>
                      </div>
                      <input
                        id="accountNumber"
                        v-model="accountNumber"
                        type="text"
                        required
                        class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300"
                        placeholder="Enter your 10-digit account number"
                        @input="validateAccountNumber"
                      />
                      <div v-if="isAccountNumberValid && accountNumber.length > 0" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p v-if="accountNumberError" class="mt-1 text-sm text-red-600">{{ accountNumberError }}</p>
                  </div>

                  <!-- Password Field -->
                  <div class="space-y-2 group">
                    <div class="flex items-center justify-between">
                      <label for="password" class="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <a href="#" class="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors relative group">
                        <span>Forgot password?</span>
                        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </a>
                    </div>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <input
                        id="password"
                        v-model="password"
                        :type="showPassword ? 'text' : 'password'"
                        required
                        class="block w-full pl-10 pr-16 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all group-hover:border-blue-300"
                        placeholder="Enter your password"
                        @input="validatePassword"
                      />
                      <button 
                        type="button" 
                        @click="togglePasswordVisibility"
                        class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-blue-600 hover:text-blue-500 focus:outline-none"
                      >
                        {{ showPassword ? 'Hide' : 'Show' }}
                      </button>
                    </div>
                    <p v-if="passwordError" class="mt-1 text-sm text-red-600">{{ passwordError }}</p>
                  </div>

                  <!-- Remember Me -->
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <input
                        id="remember"
                        v-model="rememberMe"
                        type="checkbox"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label for="remember" class="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <!-- Login Button -->
                  <!-- <button
                    type="submit"
                    :disabled="isLoading"
                    class="relative w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-[#0A3B7D] to-[#1a4d8f] hover:from-[#0A3B7D] hover:to-[#0A3B7D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.01] overflow-hidden"
                  >
                    <span class="relative z-10 flex items-center justify-center">
                      <svg v-if="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {{ isLoading ? 'Signing in...' : 'Sign In' }}
                    </span>
                  </button> -->
                  <div class="mt-6">
                  <a 
                    href="/dashboard" 
                    class="w-full flex justify-center relative py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-[#0A3B7D] to-[#1a4d8f] hover:from-[#0A3B7D] hover:to-[#0A3B7D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.01] overflow-hidden">
                    Sign In
                  </a>
                </div>
                  
                </form>

                <!-- Divider -->
                <div class="mt-8">
                  <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                      <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="px-2 bg-white text-gray-500">
                        New to MyANECO?
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Sign Up Link -->
                <div class="mt-6">
                  <a 
                    href="/register" 
                    class="w-full flex justify-center items-center py-3 px-4 border border-blue-300 rounded-lg shadow-sm text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Create an Account
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right Column - Help Section -->
          <div class="lg:col-span-2">
            <div class="sticky top-24">
              <!-- Help Box -->
              <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-blue-100/50 transform transition-all hover:shadow-blue-100/50">
                <div class="bg-gradient-to-r from-[#0A3B7D] via-[#1a4d8f] to-[#0A3B7D] p-6 relative overflow-hidden">
                  <div class="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                  <div class="relative z-10">
                    <h2 class="text-2xl font-bold text-white flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Need Help?
                    </h2>
                    <p class="text-blue-100">We're here to assist you</p>
                  </div>
                </div>
                
                <div class="p-8">
                  <div class="space-y-6">
                    <!-- Support Contact -->
                    <div class="flex items-start space-x-4">
                      <div class="flex-shrink-0">
                        <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 class="text-lg font-medium text-gray-800">Contact Support</h3>
                        <p class="mt-2 text-gray-600">
                          Our team is ready to help you with any questions about your account.
                        </p>
                        <div class="mt-3 space-y-2">
                          <a href="mailto:support@aneco.com" class="flex items-center text-blue-600 hover:text-blue-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            support@aneco.com
                          </a>
                          <a href="tel:+1234567890" class="flex items-center text-blue-600 hover:text-blue-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            (123) 456-7890
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Quick Help Options -->
                    <div class="grid grid-cols-2 gap-4 mt-6">
                      <a href="#" class="bg-white rounded-xl p-4 border border-blue-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col items-center text-center">
                        <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 class="font-medium text-gray-800">FAQ</h3>
                        <p class="text-sm text-gray-600 mt-1">Find answers to common questions</p>
                      </a>
                      
                      <a href="#" class="bg-white rounded-xl p-4 border border-blue-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col items-center text-center">
                        <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h3 class="font-medium text-gray-800">User Guide</h3>
                        <p class="text-sm text-gray-600 mt-1">Learn how to use MyANECO</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Customer Testimonial -->
              <div class="mt-6 bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-blue-100 shadow-sm transform transition-all hover:shadow-md hover:-translate-y-1">
                <div class="flex items-start">
                  <div class="text-blue-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-700 italic text-sm">
                      "MyANECO has made managing my electricity account so much easier. The online portal is user-friendly and the customer support is excellent!"
                    </p>
                    <p class="text-gray-600 text-sm mt-2 font-medium">- Maria Santos, MyANECO User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 relative z-10">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div>
            <img src="/aneco.png" alt="ANECO Logo" class="h-10 mb-4" />
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
            <p class="text-gray-400 mb-4">Subscribe to our newsletter for updates and tips on energy conservation.</p>
            <form @submit.prevent="subscribeNewsletter" class="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                class="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800 bg-white/90"
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

<script setup>
import { ref } from 'vue';

// Form data
const accountNumber = ref('');
const password = ref('');
const rememberMe = ref(false);
const showPassword = ref(false);
const isLoading = ref(false);
const isAccountNumberValid = ref(false);
const accountNumberError = ref('');
const passwordError = ref('');
const loginAttempts = ref(0);

// Toggle password visibility
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

// Validate account number
const validateAccountNumber = () => {
  if (!accountNumber.value) {
    accountNumberError.value = 'Account number is required';
    isAccountNumberValid.value = false;
    return;
  }
  
  // Check if it's a 10-digit number
  if (!/^\d{10}$/.test(accountNumber.value)) {
    accountNumberError.value = 'Please enter a valid 10-digit account number';
    isAccountNumberValid.value = false;
    return;
  }
  
  accountNumberError.value = '';
  isAccountNumberValid.value = true;
};

// Validate password
const validatePassword = () => {
  if (!password.value) {
    passwordError.value = 'Password is required';
    return;
  }
  
  if (password.value.length < 6) {
    passwordError.value = 'Password must be at least 6 characters';
    return;
  }
  
  passwordError.value = '';
};

// Handle login
const handleLogin = async () => {
  // Validate form
  validateAccountNumber();
  validatePassword();
  
  if (accountNumberError.value || passwordError.value) {
    return;
  }
  
  loginAttempts.value++;
  isLoading.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here you would typically make an API call to authenticate the user
    console.log('Login attempt with:', {
      accountNumber: accountNumber.value,
      password: password.value,
      rememberMe: rememberMe.value
    });
    
    // Redirect to dashboard or show success message
    alert('Login successful! Redirecting to your MyANECO dashboard...');
    
    // Redirect to dashboard (in a real app)
    window.location.href = '/dashboard';
    
  } catch (error) {
    console.error('Login error:', error);
    alert('Failed to login. Please check your credentials and try again.');
  } finally {
    isLoading.value = false;
  }
};

// Newsletter subscription
const subscribeNewsletter = async (e) => {
  e.preventDefault();
  // Implementation for newsletter subscription
  alert('Thank you for subscribing to our newsletter!');
};
</script>

<style scoped>
/* Custom styles */
.bg-grid-white {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
}

/* Animation for floating elements */
@keyframes float-slow {
  0% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-10px) translateX(5px); }
  50% { transform: translateY(0) translateX(10px); }
  75% { transform: translateY(10px) translateX(5px); }
  100% { transform: translateY(0) translateX(0); }
}

@keyframes float-medium {
  0% { transform: translateY(0) translateX(0); }
  33% { transform: translateY(-15px) translateX(8px); }
  66% { transform: translateY(8px) translateX(-8px); }
  100% { transform: translateY(0) translateX(0); }
}

@keyframes float-fast {
  0% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-20px) translateX(-10px); }
  100% { transform: translateY(0) translateX(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 4s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Tooltip hover effect */
.group:hover .group-hover\:block {
  display: block;
}

.welcome-message {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
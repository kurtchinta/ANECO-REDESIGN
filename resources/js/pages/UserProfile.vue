<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <!-- Animated Background Elements - Reduced and positioned away from footer -->
      <div class="absolute inset-0 bottom-auto overflow-hidden pointer-events-none z-0" style="height: 90vh;">
        <!-- Large floating dots - reduced quantity and positioned higher -->
        <div class="absolute h-64 w-64 rounded-full bg-blue-600/10 animate-float-slow top-20 -left-20"></div>
        <div class="absolute h-96 w-96 rounded-full bg-blue-400/10 animate-float-medium top-1/4 right-0 -translate-y-1/2 translate-x-1/3"></div>
        
        <!-- Small floating dots - reduced quantity -->
        <div v-for="i in 5" :key="`small-dot-${i}`" 
             class="absolute h-8 w-8 rounded-full bg-blue-500/20"
             :class="`animate-float-${i % 3 === 0 ? 'slow' : i % 3 === 1 ? 'medium' : 'fast'}`"
             :style="{
               top: `${Math.random() * 70}%`,
               left: `${Math.random() * 100}%`,
               animationDelay: `${Math.random() * 5}s`
             }">
        </div>
      </div>
  
      <!-- Modern Header with Glassmorphism -->
      <header class="bg-gradient-to-r from-[#0A3B7D] to-[#1E56A0] sticky top-0 z-30 backdrop-blur-sm shadow-lg">
        <div class="container mx-auto px-4 py-3">
          <div class="flex justify-between items-center">
            <!-- Logo with glow effect -->
            <div class="flex items-center">
              <div class="relative">
                <div class="absolute -inset-1 rounded-full blur-sm bg-orange-400/30"></div>
                <img src="aneco.png" alt="ANECO Logo" class="h-12 relative z-10" />
              </div>
              <span class="ml-3 text-white font-bold text-xl hidden md:block">MyANECO</span>
            </div>
            
            <!-- Right side controls -->
            <div class="flex items-center space-x-4">
              <!-- Notifications bell with animation -->
              <div class="relative">
                <button class="p-2 text-white hover:bg-white/10 rounded-full transition-colors relative">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span class="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white animate-pulse-subtle">1</span>
                </button>
              </div>
              
              <!-- User dropdown with improved animation -->
              <div class="relative">
                <button 
                  @click="toggleUserDropdown" 
                  class="flex items-center space-x-2 bg-white/10 hover:bg-white/20 rounded-full pl-2 pr-3 py-1.5 transition-colors"
                >
                  <div class="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold shadow-inner">
                    {{ user.firstName.charAt(0) }}{{ user.lastName.charAt(0) }}
                  </div>
                  <span class="text-white text-sm hidden sm:block">{{ user.firstName }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                
                <!-- Dropdown menu with glassmorphism -->
                <div 
                  v-if="showUserDropdown" 
                  class="absolute right-0 mt-2 w-56 rounded-xl overflow-hidden backdrop-blur-lg bg-white/90 shadow-xl border border-white/20 py-1 z-50 transform transition-all duration-300 ease-in-out animate-dropdown"
                >
                  <div class="px-4 py-3 border-b border-gray-200/50">
                    <p class="text-sm font-medium text-gray-900">{{ user.firstName }} {{ user.lastName }}</p>
                    <p class="text-xs text-gray-500 truncate">{{ user.accountNumber }}</p>
                  </div>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0A3B7D]/10 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                    </svg>
                    My Profile
                  </a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0A3B7D]/10 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                    </svg>
                    Settings
                  </a>
                  <div class="border-t border-gray-200/50"></div>
                  <a 
                    href="#" 
                    @click.prevent="signOut" 
                    class="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V7.414l-4-4H3zm9 2.586L8.707 7.293a1 1 0 001.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414l-.293.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3z" clip-rule="evenodd" transform="rotate(90, 10, 10)" />
                    </svg>
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  
      <!-- Main Content with Sidebar -->
      <div class="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        <!-- Modern Sidebar with Hover Effects -->
        <div class="md:w-64 flex-shrink-0">
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden sticky top-24 border border-white/50">
            <!-- User welcome card -->
            <div class="bg-gradient-to-br from-[#0A3B7D] to-[#1E56A0] p-6 text-white relative overflow-hidden">
              <!-- Decorative elements -->
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-x-5 -translate-y-5"></div>
              <div class="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-x-3 translate-y-8"></div>
              
              <div class="relative">
                <h2 class="text-xl font-bold">Hello, {{ user.firstName }}!</h2>
                <p class="text-sm text-white/80 mt-1">Welcome back to MyANECO</p>
              </div>
            </div>
            
            <!-- Navigation -->
            <nav class="p-3">
              <a href="/dashboard" class="flex items-center px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 mb-1 group transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#0A3B7D] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Dashboard
              </a>
              <a href="/linkaccount" class="flex items-center px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 mb-1 group transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#0A3B7D] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                </svg>
                Link/ Remove Account
              </a>
              <a href="/userprofile" class="flex items-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#0A3B7D]/10 to-[#1E56A0]/10 text-[#0A3B7D] font-medium mb-1 relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
                User Profile
                <!-- Active indicator -->
                <span class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#0A3B7D] rounded-r-full"></span>
              </a>
              <a href="/accountledger" class="flex items-center px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 mb-1 group transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#0A3B7D] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                Account Ledger
              </a>
              <a href="/statementofaccount" class="flex items-center px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 mb-1 group transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#0A3B7D] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                </svg>
                Statement of Accounts
              </a>
              <a href="/notification" class="flex items-center px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 mb-1 group transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#0A3B7D] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                Notifications
                <span class="ml-auto bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse-subtle">1</span>
              </a>
            </nav>
            
            <!-- Quick actions -->
            <div class="p-4 border-t border-gray-100">
              <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Actions</h3>
              <div class="grid grid-cols-2 gap-2">
                <button class="flex flex-col items-center justify-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0A3B7D] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-xs mt-1 text-gray-700">Pay Bill</span>
                </button>
                <button class="flex flex-col items-center justify-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0A3B7D] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-xs mt-1 text-gray-700">Reports</span>
                </button>
                <button class="flex flex-col items-center justify-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0A3B7D] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-xs mt-1 text-gray-700">Support</span>
                </button>
                <button class="flex flex-col items-center justify-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0A3B7D] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-xs mt-1 text-gray-700">FAQ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Main Content Area -->
        <div class="flex-1">
          <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold text-gray-800 flex items-center">
              <span class="bg-gradient-to-r from-[#0A3B7D] to-[#1E56A0] text-transparent bg-clip-text">User Profile</span>
              <div class="ml-2 h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></div>
            </h1>
            <button 
              @click="toggleEditMode" 
              class="px-4 py-2 bg-gradient-to-r from-[#0A3B7D] to-[#1E56A0] text-white rounded-lg hover:from-[#0A2D5E] hover:to-[#1E4A8A] transition-all duration-300 shadow-lg flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              {{ isEditMode ? 'Cancel' : 'Edit Profile' }}
            </button>
          </div>
  
          <!-- Profile Information -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden mb-6 border border-white/50 hover:shadow-xl transition-all">
            <div class="p-6">
              <div class="flex flex-col md:flex-row gap-6">
                <!-- Profile Photo Section -->
                <div class="md:w-1/3 flex flex-col items-center">
                  <div class="relative mb-4 group">
                    <div class="h-32 w-32 rounded-full bg-gradient-to-br from-[#0A3B7D] to-[#1E56A0] flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                      {{ user.firstName.charAt(0) }}{{ user.lastName.charAt(0) }}
                    </div>
                    <div class="absolute inset-0 rounded-full bg-black/30 opacity-0 flex items-center justify-center group-hover:opacity-100 transition-opacity" v-if="isEditMode">
                      <button class="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <h2 class="text-xl font-bold text-gray-800 mb-1">{{ user.firstName }} {{ user.lastName }}</h2>
                  <p class="text-gray-600 mb-4">{{ user.email }}</p>
                  
                  <div class="w-full bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <h3 class="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      Account Status
                    </h3>
                    <div class="flex items-center text-black">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <span class="h-1.5 w-1.5 rounded-full bg-green-500 mr-1 animate-pulse"></span>
                        Active
                      </span>
                      <span class="ml-2 text-xs text-gray-500">Since {{ formatDate(user.registrationDate) }}</span>
                    </div>
                  </div>
                  
                  <div class="w-full mt-4">
                    <div class="flex flex-col space-y-2">
                      <div class="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2   stroke-linejoin=round stroke-width=2d=M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <div>
                          <p class="text-xs text-gray-500">Account Number</p>
                          <p class="text-sm font-medium text-black">{{ user.accountNumber }}</p>
                        </div>
                      </div>
                      <div class="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <p class="text-xs text-gray-500">Phone Number</p>
                          <p class="text-sm font-medium text-black">{{ user.phone }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Profile Details Section -->
                <div class="md:w-2/3 text-black">
                  <form @submit.prevent="saveProfile" class="bg-white/50 rounded-xl p-6 border border-gray-100 shadow-sm">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#0A3B7D]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Personal Information
                    </h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <!-- First Name -->
                      <div class="group">
                        <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>
                          </div>
                          <input 
                            type="text" 
                            id="firstName" 
                            v-model="profileForm.firstName" 
                            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3B7D] focus:border-transparent group-hover:border-blue-300 transition-colors"
                            :disabled="!isEditMode"
                            :class="{'bg-gray-50': !isEditMode}"
                          />
                        </div>
                      </div>
                      
                      <!-- Last Name -->
                      <div class="group">
                        <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>
                          </div>
                          <input 
                            type="text" 
                            id="lastName" 
                            v-model="profileForm.lastName" 
                            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3B7D] focus:border-transparent group-hover:border-blue-300 transition-colors"
                            :disabled="!isEditMode"
                            :class="{'bg-gray-50': !isEditMode}"
                          />
                        </div>
                      </div>
                      
                      <!-- Email -->
                      <div class="group">
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </div>
                          <input 
                            type="email" 
                            id="email" 
                            v-model="profileForm.email" 
                            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3B7D] focus:border-transparent group-hover:border-blue-300 transition-colors"
                            :disabled="!isEditMode"
                            :class="{'bg-gray-50': !isEditMode}"
                          />
                        </div>
                      </div>
                      
                      <!-- Phone -->
                      <div class="group">
                        <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                          </div>
                          <input 
                            type="tel" 
                            id="phone" 
                            v-model="profileForm.phone" 
                            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3B7D] focus:border-transparent group-hover:border-blue-300 transition-colors"
                            :disabled="!isEditMode"
                            :class="{'bg-gray-50': !isEditMode}"
                          />
                        </div>
                      </div>
                      
                      <!-- Gender -->
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <div class="flex items-center space-x-6 p-2" :class="{'opacity-75': !isEditMode}">
                          <div class="flex items-center">
                            <input
                              id="male"
                              v-model="profileForm.gender"
                              type="radio"
                              value="male"
                              class="h-4 w-4 text-[#0A3B7D] focus:ring-[#0A3B7D] border-gray-300"
                              :disabled="!isEditMode"
                            />
                            <label for="male" class="ml-2 block text-sm text-gray-700">Male</label>
                          </div>
                          <div class="flex items-center">
                            <input
                              id="female"
                              v-model="profileForm.gender"
                              type="radio"
                              value="female"
                              class="h-4 w-4 text-[#0A3B7D] focus:ring-[#0A3B7D] border-gray-300"
                              :disabled="!isEditMode"
                            />
                            <label for="female" class="ml-2 block text-sm text-gray-700">Female</label>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Address -->
                      <div class="md:col-span-2 group">
                        <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <div class="relative">
                          <div class="absolute top-3 left-3 flex items-start pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                          </div>
                          <textarea 
                            id="address" 
                            v-model="profileForm.address" 
                            rows="2"
                            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3B7D] focus:border-transparent group-hover:border-blue-300 transition-colors"
                            :disabled="!isEditMode"
                            :class="{'bg-gray-50': !isEditMode}"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Save Button -->
                    <div v-if="isEditMode" class="mt-6 flex justify-end">
                      <button 
                        type="submit" 
                        class="px-6 py-2 bg-gradient-to-r from-[#0A3B7D] to-[#1E56A0] text-white rounded-lg hover:from-[#0A2D5E] hover:to-[#1E4A8A] focus:outline-none focus:ring-2 focus:ring-[#0A3B7D] focus:ring-offset-2 transition-all duration-300 shadow-lg flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Security Settings -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl text-black shadow-lg overflow-hidden mb-6 border border-white/50 hover:shadow-xl transition-all">
            <div class="p-6 text-black">
              <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-[#0A3B7D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Security Settings
              </h2>
              
              <div class="space-y-6 text-black">
                <!-- Change Password -->
                <div class="border-b border-gray-200 pb-6 text-black">
                  <h3 class="text-md font-medium text-gray-700 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-[#0A3B7D]" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    Change Password
                  </h3>
                  
                  <form @submit.prevent="changePassword" class="text-black space-y-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div class="text-black grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="group text-black">
                        <label for="currentPassword" class="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                        <div class="relative text-black">
                          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                          </div>
                          <input 
                            type="password" 
                            id="currentPassword" 
                            v-model="passwordForm.currentPassword" 
                            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3B7D] focus:border-transparent group-hover:border-blue-300 transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="group">
                        <label for="newPassword" class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                          </div>
                          <input 
                            type="password" 
                            id="newPassword" 
                            v-model="passwordForm.newPassword" 
                            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3B7D] focus:border-transparent group-hover:border-blue-300 transition-colors"
                          />
                        </div>
                      </div>
                      
                      <div class="group">
                        <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                          </div>
                          <input 
                            type="password" 
                            id="confirmPassword" 
                            v-model="passwordForm.confirmPassword" 
                            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3B7D] focus:border-transparent group-hover:border-blue-300 transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div class="flex justify-end">
                      <button 
                        type="submit" 
                        class="px-4 py-2 bg-gradient-to-r from-[#0A3B7D] to-[#1E56A0] text-white rounded-lg hover:from-[#0A2D5E] hover:to-[#1E4A8A] transition-all duration-300 shadow-lg flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                        </svg>
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>
                
                <!-- Notification Preferences -->
                <div>
                  <h3 class="text-md font-medium text-gray-700 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-[#0A3B7D]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    Notification Preferences
                  </h3>
                  
                  <div class="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div class="flex items-center justify-between p-2 hover:bg-white rounded-lg transition-colors">
                      <div>
                        <p class="text-sm font-medium text-gray-900">Email Notifications</p>
                        <p class="text-xs text-gray-500">Receive bill notifications via email</p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="notificationPreferences.email" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A3B7D]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A3B7D]"></div>
                      </label>
                    </div>
                    
                    <div class="flex items-center justify-between p-2 hover:bg-white rounded-lg transition-colors">
                      <div>
                        <p class="text-sm font-medium text-gray-900">SMS Notifications</p>
                        <p class="text-xs text-gray-500">Receive bill notifications via SMS</p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="notificationPreferences.sms" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A3B7D]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A3B7D]"></div>
                      </label>
                    </div>
                    
                    <div class="flex items-center justify-between p-2 hover:bg-white rounded-lg transition-colors">
                      <div>
                        <p class="text-sm font-medium text-gray-900">Power Interruption Alerts</p>
                        <p class="text-xs text-gray-500">Receive notifications about scheduled power interruptions</p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="notificationPreferences.powerInterruption" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A3B7D]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A3B7D]"></div>
                      </label>
                    </div>
                    
                    <div class="flex items-center justify-between p-2 hover:bg-white rounded-lg transition-colors">
                      <div>
                        <p class="text-sm font-medium text-gray-900">Promotional Messages</p>
                        <p class="text-xs text-gray-500">Receive promotional messages and offers</p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="notificationPreferences.promotional" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A3B7D]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A3B7D]"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div class="mt-4 flex justify-end">
                    <button 
                      @click="saveNotificationPreferences" 
                      class="px-4 py-2 bg-gradient-to-r from-[#0A3B7D] to-[#1E56A0] text-white rounded-lg hover:from-[#0A2D5E] hover:to-[#1E4A8A] transition-all duration-300 shadow-lg flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer - Clean design without floating dots -->
      <footer class="bg-gray-900 text-white py-8 mt-12 relative z-10">
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
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
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
          
          <div class="mt-8 pt-8 border-t border-gray-800 text-center">
            <p class="text-gray-400">© {{ new Date().getFullYear() }} ANECO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // User data
  const user = ref({
    firstName: 'Bernardo',
    lastName: 'Rante',
    email: 'bernardo.rante@example.com',
    phone: '09123456789',
    gender: 'male',
    address: 'CALOC-AN, MAGALLANES, CALOC-AN, MAGALLANES',
    accountNumber: 'C000016070030',
    registrationDate: '2023-05-15'
  });
  
  // UI state
  const showUserDropdown = ref(false);
  const isEditMode = ref(false);
  
  // Form data
  const profileForm = ref({
    firstName: user.value.firstName,
    lastName: user.value.lastName,
    email: user.value.email,
    phone: user.value.phone,
    gender: user.value.gender,
    address: user.value.address
  });
  
  const passwordForm = ref({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const notificationPreferences = ref({
    email: true,
    sms: false,
    powerInterruption: true,
    promotional: false
  });
  
  // Methods
  const toggleUserDropdown = () => {
    showUserDropdown.value = !showUserDropdown.value;
  };
  
  const signOut = () => {
    // Handle sign out logic here
    console.log('Signing out...');
    // Redirect to login page
  };
  
  const toggleEditMode = () => {
    if (isEditMode.value) {
      // Reset form if canceling
      profileForm.value = {
        firstName: user.value.firstName,
        lastName: user.value.lastName,
        email: user.value.email,
        phone: user.value.phone,
        gender: user.value.gender,
        address: user.value.address
      };
    }
    isEditMode.value = !isEditMode.value;
  };
  
  const saveProfile = () => {
    // Save profile logic
    user.value = {
      ...user.value,
      firstName: profileForm.value.firstName,
      lastName: profileForm.value.lastName,
      email: profileForm.value.email,
      phone: profileForm.value.phone,
      gender: profileForm.value.gender,
      address: profileForm.value.address
    };
    
    isEditMode.value = false;
    
    // Show success notification (in a real app)
    alert('Profile updated successfully!');
  };
  
  const changePassword = () => {
    // Validate passwords
    if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    
    // Change password logic
    console.log('Changing password:', passwordForm.value);
    
    // Reset form
    passwordForm.value = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
    
    // Show success notification (in a real app)
    alert('Password changed successfully!');
  };
  
  const saveNotificationPreferences = () => {
    // Save notification preferences logic
    console.log('Saving notification preferences:', notificationPreferences.value);
    
    // Show success notification (in a real app)
    alert('Notification preferences updated successfully!');
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  const subscribeNewsletter = async (e) => {
    e.preventDefault();
    // Implementation for newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
  };
  </script>
  
  <style>
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #a1a1a1;
  }
  
  /* Animations */
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
  
  @keyframes pulse-subtle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  
  @keyframes dropdown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
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
  
  .animate-pulse-subtle {
    animation: pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  /* Transitions */
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }
  </style>
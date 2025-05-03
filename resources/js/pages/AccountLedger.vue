<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
    <!-- Modern Header with Glassmorphism -->
    <header class="bg-gradient-to-r from-[#0A3B7D] to-[#1E56A0] dark:from-[#072a5c] dark:to-[#0d3b7a] sticky top-0 z-30 shadow-md">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <!-- Logo with glow effect -->
          <div class="flex items-center">
            <div class="relative">
              <div class="absolute -inset-1 rounded-full blur-sm bg-orange-400/30 dark:bg-orange-500/30 animate-pulse"></div>
              <img src="aneco.png" alt="ANECO Logo" class="h-12 relative z-10" />
            </div>
            <span class="ml-3 text-white font-bold text-xl hidden md:block">MyANECO</span>
          </div>
          
          <!-- Right side controls -->
          <div class="flex items-center space-x-4">
            <!-- Dark/Light Mode Toggle -->
             
            <!-- <button 
              @click="toggleDarkMode" 
              class="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Toggle dark mode"
            >
              <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button> -->
            
            <!-- Notifications bell -->
            <div class="relative">
              <button class="p-2 text-white hover:bg-white/10 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span class="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white animate-pulse">1</span>
              </button>
            </div>
            
            <!-- User dropdown -->
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
                class="absolute right-0 mt-2 w-56 rounded-xl overflow-hidden backdrop-blur-lg bg-white/90 dark:bg-gray-800/90 shadow-xl border border-white/20 dark:border-gray-700/30 py-1 z-50 transform transition-all duration-300 ease-in-out animate-dropdown"
              >
                <div class="px-4 py-3 border-b border-gray-200/50 dark:border-gray-700/50">
                  <p class="text-sm font-medium text-gray-900 dark:text-white">{{ user.firstName }} {{ user.lastName }}</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ user.accountNumber }}</p>
                </div>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-[#0A3B7D]/10 dark:hover:bg-[#0A3B7D]/20 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                  </svg>
                  My Profile
                </a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-[#0A3B7D]/10 dark:hover:bg-[#0A3B7D]/20 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                  </svg>
                  Settings
                </a>
                <div class="border-t border-gray-200/50 dark:border-gray-700/50"></div>
                <a 
                  href="#" 
                  @click.prevent="signOut" 
                  class="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-red-500 dark:text-red-400" viewBox="0 0 20 20" fill="currentColor">
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
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden sticky top-24 border border-gray-100 dark:border-gray-700">
          <!-- User welcome card -->
          <div class="bg-gradient-to-br from-[#0A3B7D] to-[#1E56A0] dark:from-[#072a5c] dark:to-[#0d3b7a] p-6 text-white relative overflow-hidden">
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
            <a href="/dashboard" class="flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 mb-1 group transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-[#0A3B7D] dark:group-hover:text-[#4A90E2] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Dashboard
            </a>
            <a href="/linkaccount" class="flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 mb-1 group transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-[#0A3B7D] dark:group-hover:text-[#4A90E2] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
              </svg>
              Link/ Remove Account
            </a>
            <a href="/userprofile" class="flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 mb-1 group transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-[#0A3B7D] dark:group-hover:text-[#4A90E2] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
              User Profile
            </a>
            <a href="/accountledger" class="flex items-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#0A3B7D]/10 to-[#1E56A0]/10 dark:from-[#0A3B7D]/20 dark:to-[#1E56A0]/20 text-[#0A3B7D] dark:text-[#4A90E2] font-medium mb-1 relative">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              Account Ledger
              <!-- Active indicator -->
              <span class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#0A3B7D] dark:bg-[#4A90E2] rounded-r-full"></span>
            </a>
            <a href="/statementofaccount" class="flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 mb-1 group transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-[#0A3B7D] dark:group-hover:text-[#4A90E2] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
              </svg>
              Statement of Accounts
            </a>
            <a href="/notification" class="flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 mb-1 group transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 dark:text-gray-500 group-hover:text-[#0A3B7D] dark:group-hover:text-[#4A90E2] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              Notifications
              <span class="ml-auto bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full animate-pulse">1</span>
            </a>
          </nav>
          
          <!-- Quick actions -->
          <div class="p-4 border-t border-gray-100 dark:border-gray-700">
            <h3 class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Quick Actions</h3>
            <div class="grid grid-cols-2 gap-2">
              <button class="flex flex-col items-center justify-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0A3B7D] dark:text-[#4A90E2] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-xs mt-1 text-gray-700 dark:text-gray-300">Pay Bill</span>
              </button>
              <button class="flex flex-col items-center justify-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0A3B7D] dark:text-[#4A90E2] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span class="text-xs mt-1 text-gray-700 dark:text-gray-300">Reports</span>
              </button>
              <button 
                @click="downloadPDF" 
                class="flex flex-col items-center justify-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0A3B7D] dark:text-[#4A90E2] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span class="text-xs mt-1 text-gray-700 dark:text-gray-300">Download PDF</span>
              </button>
              <button 
                @click="printTransactions" 
                class="flex flex-col items-center justify-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0A3B7D] dark:text-[#4A90E2] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                <span class="text-xs mt-1 text-gray-700 dark:text-gray-300">Print</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Main Account Ledger Content -->
      <div class="flex-1">
        <!-- Page Header -->
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
            <span class="bg-gradient-to-r from-[#0A3B7D] to-[#1E56A0] dark:from-[#4A90E2] dark:to-[#6AB0FF] text-transparent bg-clip-text">Account Ledger</span>
            <div class="ml-2 h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></div>
          </h1>
          <div class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Updated {{ currentDate }}
          </div>
        </div>
        
        <!-- Account Summary Card -->
        <div class="bg-gradient-to-br from-[#0A3B7D] to-[#1E56A0] dark:from-[#072a5c] dark:to-[#0d3b7a] rounded-2xl shadow-lg mb-6 overflow-hidden relative">
          <!-- Decorative elements -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div class="relative p-6 text-white">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 class="text-xl font-bold mb-1">Account Summary</h2>
                <p class="text-white/80 text-sm">Account Number: {{ user.accountNumber }}</p>
              </div>
              <div class="mt-4 md:mt-0">
                <div class="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5">
                  <span class="text-sm font-medium">Current Balance:</span>
                  <span class="ml-2 text-xl font-bold">₱{{ currentBalance }}</span>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-sm font-medium">Total Payments</h3>
                  <span class="bg-green-400 text-green-800 text-xs font-medium px-2 py-0.5 rounded">YTD</span>
                </div>
                <p class="text-2xl font-bold">₱{{ totalPayments }}</p>
                <p class="text-white/70 text-xs mt-1">Last payment: {{ lastPaymentDate }}</p>
              </div>
              
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-sm font-medium">Total Charges</h3>
                  <span class="bg-blue-400 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">YTD</span>
                </div>
                <p class="text-2xl font-bold">₱{{ totalCharges }}</p>
                <p class="text-white/70 text-xs mt-1">Last charge: {{ lastChargeDate }}</p>
              </div>
              
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-sm font-medium">Quick Actions</h3>
                </div>
                <div class="flex space-x-2 mt-2">
                  <button 
                    @click="downloadPDF" 
                    class="flex-1 py-2 bg-white text-[#0A3B7D] dark:bg-white/90 dark:text-[#0A3B7D] rounded-lg font-medium hover:bg-white/90 dark:hover:bg-white/80 transition-colors text-sm flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </button>
                  <button 
                    @click="printTransactions" 
                    class="flex-1 py-2 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-colors text-sm flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Filter Controls -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6 border border-gray-100 dark:border-gray-700">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div class="flex flex-col sm:flex-row gap-4">
              <div class="relative">
                <label for="date-range" class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Date Range</label>
                <select id="date-range" v-model="dateRange" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-[#0A3B7D] dark:focus:ring-[#4A90E2] focus:border-[#0A3B7D] dark:focus:border-[#4A90E2] sm:text-sm rounded-lg">
                  <option value="last30">Last 30 Days</option>
                  <option value="last90">Last 90 Days</option>
                  <option value="last180">Last 180 Days</option>
                  <option value="last365">Last 365 Days</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
              
              <div class="relative">
                <label for="transaction-type" class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Transaction Type</label>
                <select id="transaction-type" v-model="transactionType" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-[#0A3B7D] dark:focus:ring-[#4A90E2] focus:border-[#0A3B7D] dark:focus:border-[#4A90E2] sm:text-sm rounded-lg">
                  <option value="all">All Transactions</option>
                  <option value="payments">Payments</option>
                  <option value="charges">Charges</option>
                  <option value="adjustments">Adjustments</option>
                </select>
              </div>
            </div>
            
            <div class="flex items-center gap-2">
              <div class="relative flex-1">
                <label for="search" class="sr-only">Search</label>
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input type="text" id="search" v-model="searchQuery" class="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-[#0A3B7D] dark:focus:ring-[#4A90E2] focus:border-[#0A3B7D] dark:focus:border-[#4A90E2] sm:text-sm" placeholder="Search transactions...">
              </div>
              
              <button @click="applyFilters" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-[#0A3B7D] dark:bg-[#4A90E2] hover:bg-[#0A2D5E] dark:hover:bg-[#3A80D2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A3B7D] dark:focus:ring-[#4A90E2]">
                Apply
              </button>
            </div>
          </div>
          
          <!-- Custom date range (conditionally shown) -->
          <div v-if="dateRange === 'custom'" class="mt-4 flex flex-col sm:flex-row gap-4">
            <div class="relative flex-1">
              <label for="start-date" class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Start Date</label>
              <input type="date" id="start-date" v-model="startDate" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-[#0A3B7D] dark:focus:ring-[#4A90E2] focus:border-[#0A3B7D] dark:focus:border-[#4A90E2] sm:text-sm">
            </div>
            
            <div class="relative flex-1">
              <label for="end-date" class="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">End Date</label>
              <input type="date" id="end-date" v-model="endDate" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-[#0A3B7D] dark:focus:ring-[#4A90E2] focus:border-[#0A3B7D] dark:focus:border-[#4A90E2] sm:text-sm">
            </div>
          </div>
        </div>
        
        <!-- Transaction History Table -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-6 border border-gray-100 dark:border-gray-700">
          <div class="p-6">
            <h2 class="text-lg font-bold text-gray-800 dark:text-white mb-4">Transaction History</h2>
            
            <div class="overflow-x-auto" ref="transactionTableContainer">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700" id="transactionTable">
                <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Date
                      <button class="ml-1 inline-flex" @click="sortTransactions('date')">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </button>
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Reference
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Amount
                      <button class="ml-1 inline-flex" @click="sortTransactions('amount')">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </button>
                    </th>
                    <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(transaction, index) in filteredTransactions" :key="index" class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                      {{ formatDate(transaction.date) }}
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">
                      {{ transaction.description }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {{ transaction.reference }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" 
                            :class="{
                              'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300': transaction.type === 'payment',
                              'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300': transaction.type === 'charge',
                              'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300': transaction.type === 'adjustment'
                            }">
                        {{ transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1) }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-right" 
                        :class="{
                          'text-green-600 dark:text-green-400': transaction.type === 'payment',
                          'text-red-600 dark:text-red-400': transaction.type === 'charge',
                          'text-yellow-600 dark:text-yellow-400': transaction.type === 'adjustment'
                        }">
                      {{ transaction.type === 'payment' ? '-' : '' }}₱{{ transaction.amount }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200 text-right font-medium">
                      ₱{{ transaction.balance }}
                    </td>
                  </tr>
                  
                  <!-- Empty state -->
                  <tr v-if="filteredTransactions.length === 0">
                    <td colspan="6" class="px-6 py-10 text-center text-gray-500 dark:text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto text-gray-400 dark:text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p class="text-lg font-medium">No transactions found</p>
                      <p class="text-sm">Try adjusting your filters or search criteria</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <!-- Pagination -->
            <div class="flex items-center justify-between mt-6">
              <div class="text-sm text-gray-700 dark:text-gray-300">
                Showing <span class="font-medium">{{ paginationStart }}</span> to <span class="font-medium">{{ paginationEnd }}</span> of <span class="font-medium">{{ totalTransactions }}</span> transactions
              </div>
              <div class="flex space-x-2">
                <button @click="prevPage" :disabled="currentPage === 1" class="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md bg-white dark:bg-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="inline-flex items-center px-3 py-1 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md bg-white dark:bg-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Payment Trends Chart -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-6 border border-gray-100 dark:border-gray-700">
          <div class="p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-lg font-bold text-gray-800 dark:text-white">Payment Trends</h2>
              <div class="flex space-x-2">
                <button class="px-3 py-1 text-sm bg-[#0A3B7D] dark:bg-[#4A90E2] text-white rounded-lg">Monthly</button>
                <button class="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">Yearly</button>
              </div>
            </div>
            
            <!-- Chart visualization -->
            <div class="h-64 relative">
              <!-- This would be replaced with an actual chart library -->
              <div class="absolute inset-0 flex items-end justify-around px-4">
                <div v-for="(month, index) in months" :key="index" class="flex flex-col items-center w-1/12">
                  <div class="w-full bg-gradient-to-t from-[#0A3B7D] to-[#4A90E2] dark:from-[#072a5c] dark:to-[#4A90E2] rounded-t-lg" 
                       :style="{ height: `${getRandomHeight()}px` }"></div>
                  <span class="text-xs text-gray-500 dark:text-gray-400 mt-2">{{ month }}</span>
                </div>
              </div>
              
              <!-- Y-axis labels -->
              <div class="absolute left-0 inset-y-0 flex flex-col justify-between py-4">
                <span class="text-xs text-gray-500 dark:text-gray-400">₱2,000</span>
                <span class="text-xs text-gray-500 dark:text-gray-400">₱1,500</span>
                <span class="text-xs text-gray-500 dark:text-gray-400">₱1,000</span>
                <span class="text-xs text-gray-500 dark:text-gray-400">₱500</span>
                <span class="text-xs text-gray-500 dark:text-gray-400">₱0</span>
              </div>
            </div>
            
            <div class="mt-4 flex items-center justify-between">
              <div>
                <span class="text-sm text-gray-500 dark:text-gray-400">Average Monthly Payment:</span>
                <span class="ml-1 font-bold text-gray-900 dark:text-white">₱{{ averageMonthlyPayment }}</span>
              </div>
              <div class="text-sm text-blue-600 dark:text-blue-400">
                <a href="#" class="flex items-center">
                  <span>View detailed report</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <footer class="bg-gray-900 dark:bg-gray-950 text-white py-12">
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
                class="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:border-blue-500"
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

    <!-- Print-only styles -->
    <div class="hidden print:block">
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// Dark mode state
const isDarkMode = ref(false);

// Check for user preference
onMounted(() => {
  // Check if user has a saved preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark';
  } else {
    // Check for system preference
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  // Apply dark mode class to document
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

// User data
const user = ref({
  firstName: 'Bernardo',
  lastName: 'Rante',
  accountNumber: 'C000016070030',
  serviceAddress: 'CALOC-AN, MAGALLANES, CALOC-AN, MAGALLANES'
});

// Current date
const currentDate = ref(new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
}));

// UI state
const showUserDropdown = ref(false);
const currentBalance = ref('0.01');
const totalPayments = ref('3,750.00');
const totalCharges = ref('3,750.01');
const lastPaymentDate = ref('April 3, 2025');
const lastChargeDate = ref('March 22, 2025');
const averageMonthlyPayment = ref('1,250.00');

// Filter state
const dateRange = ref('last30');
const transactionType = ref('all');
const searchQuery = ref('');
const startDate = ref('');
const endDate = ref('');
const sortDirection = ref('desc');
const sortField = ref('date');

// Pagination
const currentPage = ref(1);
const itemsPerPage = ref(10);
const totalTransactions = ref(25);
const totalPages = computed(() => Math.ceil(totalTransactions.value / itemsPerPage.value));
const paginationStart = computed(() => (currentPage.value - 1) * itemsPerPage.value + 1);
const paginationEnd = computed(() => Math.min(currentPage.value * itemsPerPage.value, totalTransactions.value));

// Chart data
const months = ref(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

// DOM references
const transactionTableContainer = ref(null);

// Sample transaction data - expanded to 25 entries
const transactions = ref([
  {
    date: '2025-04-03',
    description: 'Bill Payment - Online',
    reference: 'TXN-20250403-001',
    type: 'payment',
    amount: '0.01',
    balance: '0.01'
  },
  {
    date: '2025-03-22',
    description: 'Monthly Electric Bill',
    reference: 'BILL-202503-001',
    type: 'charge',
    amount: '0.02',
    balance: '0.02'
  },
  {
    date: '2025-03-05',
    description: 'Bill Payment - GCash',
    reference: 'TXN-20250305-001',
    type: 'payment',
    amount: '1,250.00',
    balance: '0.00'
  },
  {
    date: '2025-02-20',
    description: 'Monthly Electric Bill',
    reference: 'BILL-202502-001',
    type: 'charge',
    amount: '1,250.00',
    balance: '1,250.00'
  },
  {
    date: '2025-02-04',
    description: 'Bill Payment - PayMaya',
    reference: 'TXN-20250204-001',
    type: 'payment',
    amount: '1,320.50',
    balance: '0.00'
  },
  {
    date: '2025-01-21',
    description: 'Monthly Electric Bill',
    reference: 'BILL-202501-001',
    type: 'charge',
    amount: '1,320.50',
    balance: '1,320.50'
  },
  {
    date: '2025-01-05',
    description: 'Bill Payment - UnionBank',
    reference: 'TXN-20250105-001',
    type: 'payment',
    amount: '1,180.75',
    balance: '0.00'
  },
  {
    date: '2024-12-20',
    description: 'Monthly Electric Bill',
    reference: 'BILL-202412-001',
    type: 'charge',
    amount: '1,180.75',
    balance: '1,180.75'
  },
  {
    date: '2024-12-15',
    description: 'Billing Adjustment - Meter Reading Error',
    reference: 'ADJ-20241215-001',
    type: 'adjustment',
    amount: '50.00',
    balance: '0.00'
  },
  {
    date: '2024-11-22',
    description: 'Monthly Electric Bill',
    reference: 'BILL-202411-001',
    type: 'charge',
    amount: '1,145.25',
    balance: '1,145.25'
  },
  {
    date: '2024-11-05',
    description: 'Bill Payment - BDO Online',
    reference: 'TXN-20241105-001',
    type: 'payment',
    amount: '1,210.30',
    balance: '0.00'
  },
  {
    date: '2024-10-21',
    description: 'Monthly Electric Bill',
    reference: 'BILL-202410-001',
    type: 'charge',
    amount: '1,210.30',
    balance: '1,210.30'
  },
  {
    date: '2024-10-04',
    description: 'Bill Payment - GCash',
    reference: 'TXN-20241004-001',
    type: 'payment',
    amount: '1,175.50',
    balance: '0.00'
  },
  {
    date: '2024-09-20',
    description: 'Monthly Electric Bill',
    reference: 'BILL-202409-001',
    type: 'charge',
    amount: '1,175.50',
    balance: '1,175.50'
  },
  {
    date: '2024-09-03',
    description: 'Bill Payment - PayMaya',
    reference: 'TXN-20240903-001',
    type: 'payment',
    amount: '1,225.75',
    balance: '0.00'
  },
  {
    date: '2024-08-22',
    description: 'Monthly Electric Bill',
    reference: 'BILL-202408-001',
    type: 'charge',
    amount: '1,225.75',
    balance: '1,225.75'
  },
  {
    date: '2024-08-05',
    description: 'Bill Payment - Over the Counter',
    reference: 'TXN-20240805-001',
    type: 'payment',
    amount: '1,190.25',
    balance: '0.00'
  },
  {
    date: '2024-07-21',
    description: 'Monthly Electric Bill',
    reference: 'BILL-202407-001',
    type: 'charge',
    amount: '1,190.25',
    balance: '1,190.25'
  },
  {
    date: '2024-07-10',
    description: 'Billing Adjustment - Promo Credit',
    reference: 'ADJ-20240710-001',
    type: 'adjustment',
    amount: '75.00',
    balance: '0.00'
  },
  {
    date: '2024-07-04',
    description: 'Bill Payment - GCash',
    reference: 'TXN-20240704-001',
    type: 'payment',
    amount: '1,205.80',
    balance: '0.00'
  },
  {
    date: '2024-06-20',
    description: 'Monthly Electric Bill',
    reference: 'BILL-202406-001',
    type: 'charge',
    amount: '1,205.80',
    balance: '1,205.80'
  },
  {
    date: '2024-06-05',
    description: 'Bill Payment - BPI Online',
    reference: 'TXN-20240605-001',
    type: 'payment',
    amount: '1,150.40',
    balance: '0.00'
  },
  {
    date: '2024-05-22',
    description: 'Monthly Electric Bill',
    reference: 'BILL-202405-001',
    type: 'charge',
    amount: '1,150.40',
    balance: '1,150.40'
  },
  {
    date: '2024-05-03',
    description: 'Bill Payment - UnionBank',
    reference: 'TXN-20240503-001',
    type: 'payment',
    amount: '1,195.60',
    balance: '0.00'
  },
  {
    date: '2024-04-21',
    description: 'Monthly Electric Bill',
    reference: 'BILL-202404-001',
    type: 'charge',
    amount: '1,195.60',
    balance: '1,195.60'
  }
]);

// Computed filtered transactions
const filteredTransactions = computed(() => {
  let result = [...transactions.value];

  // Apply transaction type filter
  if (transactionType.value !== 'all') {
    const type = transactionType.value === 'payments' ? 'payment' : 
                transactionType.value === 'charges' ? 'charge' : 'adjustment';
    result = result.filter(t => t.type === type);
  }

  // Apply date range filter
  if (dateRange.value === 'custom' && startDate.value && endDate.value) {
    const start = new Date(startDate.value);
    const end = new Date(endDate.value);
    result = result.filter(t => {
      const date = new Date(t.date);
      return date >= start && date <= end;
    });
  } else {
    // Apply predefined date ranges
    const today = new Date();
    let daysToSubtract = 30;
    
    if (dateRange.value === 'last90') daysToSubtract = 90;
    if (dateRange.value === 'last180') daysToSubtract = 180;
    if (dateRange.value === 'last365') daysToSubtract = 365;
    
    const startDate = new Date();
    startDate.setDate(today.getDate() - daysToSubtract);
    
    result = result.filter(t => {
      const date = new Date(t.date);
      return date >= startDate;
    });
  }

  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(t => 
      t.description.toLowerCase().includes(query) || 
      t.reference.toLowerCase().includes(query)
    );
  }

  // Apply sorting
  result.sort((a, b) => {
    let comparison = 0;
    
    if (sortField.value === 'date') {
      comparison = new Date(a.date) - new Date(b.date);
    } else if (sortField.value === 'amount') {
      comparison = parseFloat(a.amount.replace(',', '')) - parseFloat(b.amount.replace(',', ''));
    }
    
    return sortDirection.value === 'asc' ? comparison : -comparison;
  });

  // Apply pagination
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return result.slice(start, start + itemsPerPage.value);
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

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const getRandomHeight = () => {
  // Generate random heights for the chart bars
  return Math.floor(Math.random() * 150) + 50;
};

const applyFilters = () => {
  // Apply filters to transactions
  console.log('Applying filters:', {
    dateRange: dateRange.value,
    transactionType: transactionType.value,
    searchQuery: searchQuery.value,
    startDate: startDate.value,
    endDate: endDate.value
  });
  
  // Reset pagination
  currentPage.value = 1;
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const sortTransactions = (field) => {
  if (sortField.value === field) {
    // Toggle sort direction if clicking the same field
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
  } else {
    // Set new sort field and default to descending
    sortField.value = field;
    sortDirection.value = 'desc';
  }
};

// PDF Generation
const downloadPDF = () => {
  // Create a PDF document
  const doc = new jsPDF('landscape');
  
  // Add title and header information
  doc.setFontSize(18);
  doc.setTextColor(10, 59, 125); // #0A3B7D
  doc.text('MyANECO Transaction History', doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  doc.text(`Account Number: ${user.value.accountNumber}`, doc.internal.pageSize.getWidth() / 2, 30, { align: 'center' });
  doc.text(`Generated on: ${currentDate.value}`, doc.internal.pageSize.getWidth() / 2, 40, { align: 'center' });
  
  // Prepare table data
  const tableColumn = ["Date", "Description", "Reference", "Type", "Amount", "Balance"];
  const tableRows = transactions.value.map(transaction => [
    formatDate(transaction.date),
    transaction.description,
    transaction.reference,
    transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1),
    (transaction.type === 'payment' ? '-' : '') + '₱' + transaction.amount,
    '₱' + transaction.balance
  ]);
  
  // Generate the table
  doc.autoTable({
    head: [tableColumn],
    body: tableRows,
    startY: 50,
    styles: {
      fontSize: 10,
      cellPadding: 3,
      lineColor: [200, 200, 200],
      lineWidth: 0.1,
    },
    headStyles: {
      fillColor: [10, 59, 125], // #0A3B7D
      textColor: [255, 255, 255],
      fontStyle: 'bold',
    },
    alternateRowStyles: {
      fillColor: [240, 240, 240],
    },
    columnStyles: {
      0: { cellWidth: 35 }, // Date
      1: { cellWidth: 60 }, // Description
      2: { cellWidth: 40 }, // Reference
      3: { cellWidth: 25 }, // Type
      4: { cellWidth: 25, halign: 'right' }, // Amount
      5: { cellWidth: 25, halign: 'right' }, // Balance
    },
  });
  
  // Add footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text(`Page ${i} of ${pageCount}`, doc.internal.pageSize.getWidth() - 20, doc.internal.pageSize.getHeight() - 10);
    doc.text('© ANECO', 20, doc.internal.pageSize.getHeight() - 10);
  }
  
  // Save the PDF
  doc.save(`ANECO_Transaction_History_${user.value.accountNumber}.pdf`);
  
  // Show success message
  alert('Transaction history PDF has been downloaded successfully!');
};

// Print functionality - modified to preserve dark mode state
const printTransactions = () => {
  // Store current dark mode state
  const currentDarkMode = isDarkMode.value;
  
  // Trigger print dialog
  window.print();
  
  // Ensure dark mode state is preserved after printing
  setTimeout(() => {
    if (isDarkMode.value !== currentDarkMode) {
      isDarkMode.value = currentDarkMode;
      document.documentElement.classList.toggle('dark', currentDarkMode);
    }
  }, 500);
};

const subscribeNewsletter = async (e) => {
  e.preventDefault();
  // Implementation for newsletter subscription
  alert('Thank you for subscribing to our newsletter!');
};

// Initialize component
onMounted(() => {
  // Set default dates for custom range
  const today = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 30);
  
  startDate.value = thirtyDaysAgo.toISOString().split('T')[0];
  endDate.value = today.toISOString().split('T')[0];
});
</script>

<style>
/* Tailwind dark mode */
.dark {
  color-scheme: dark;
}

/* Base styles */
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

.dark ::-webkit-scrollbar-track {
  background: #2d3748;
}

.dark ::-webkit-scrollbar-thumb {
  background: #4a5568;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #718096;
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

.animate-dropdown {
  animation: dropdown 0.2s ease-out forwards;
}

/* Transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
        @media print {
          body * {
            visibility: hidden;
          }
          #transactionTable, #transactionTable * {
            visibility: visible;
          }
          #transactionTable {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
        }
        </style>
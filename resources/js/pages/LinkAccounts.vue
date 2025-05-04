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
            <a href="/linkaccount" class="flex items-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#0A3B7D]/10 to-[#1E56A0]/10 text-[#0A3B7D] font-medium mb-1 relative">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
              </svg>
              Link/ Remove Account
              <!-- Active indicator -->
              <span class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#0A3B7D] rounded-r-full"></span>
            </a>
            <a href="/userprofile" class="flex items-center px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 mb-1 group transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#0A3B7D] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
              User Profile
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
            <span class="bg-gradient-to-r from-[#0A3B7D] to-[#1E56A0] text-transparent bg-clip-text">Link or Remove Account</span>
            <div class="ml-2 h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></div>
          </h1>
          
          <!-- Page actions -->
          <div class="flex space-x-2">
            <button class="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 text-gray-700 hover:bg-white flex items-center shadow-sm transition-all hover:shadow">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export
            </button>
            <button class="px-4 py-2 bg-[#0A3B7D]/10 rounded-lg text-[#0A3B7D] hover:bg-[#0A3B7D]/20 flex items-center shadow-sm transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
          </div>
        </div>

        <!-- Linked Accounts Section -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-6 border border-white/50 hover:shadow-xl transition-all">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold text-gray-800">Your Linked Accounts</h2>
            <span class="text-sm text-gray-500">{{ linkedAccounts.length }} accounts</span>
          </div>
          
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50/80 rounded-lg">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg">Account Number</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Address</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Type</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white/50 divide-y divide-gray-200">
                <tr v-for="(account, index) in linkedAccounts" :key="index" class="hover:bg-blue-50/50 transition-colors">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#0A3B7D]">{{ account.accountNumber }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ account.address }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ account.type }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span :class="`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${account.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`">
                      <span class="h-1.5 w-1.5 rounded-full mr-1" :class="account.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'"></span>
                      {{ account.status }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      @click="viewAccountDetails(account)" 
                      class="text-[#0A3B7D] hover:text-[#0A2D5E] mr-4 py-1 px-2 rounded hover:bg-blue-100/50 transition-colors"
                    >
                      <span class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Details
                      </span>
                    </button>
                    <button 
                      @click="showRemoveConfirmation(account)" 
                      class="text-red-600 hover:text-red-900 py-1 px-2 rounded hover:bg-red-100/50 transition-colors"
                    >
                      <span class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0   stroke-linejoin=round stroke-width=2 d=M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Remove
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <!-- Empty state for when there are no accounts -->
          <div v-if="linkedAccounts.length === 0" class="py-12 flex flex-col items-center justify-center">
            <div class="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-1">No accounts linked yet</h3>
            <p class="text-gray-500 text-center max-w-md mb-4">Link your first ANECO account below to start managing your electricity services online.</p>
          </div>
        </div>

        <!-- Link New Account Section -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl text-black shadow-lg p-6 border border-white/50 hover:shadow-xl transition-all">
          <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Link a New Account
          </h2>
          
          <form @submit.prevent="linkNewAccount" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="group">
                <label for="accountNumber" class="block text-sm font-medium text-gray-700 mb-1">ANECO Account Number</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    id="accountNumber" 
                    v-model="newAccount.accountNumber" 
                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3B7D] focus:border-transparent group-hover:border-blue-300 transition-colors"
                    placeholder="Enter account number"
                    required
                  />
                </div>
                <p class="mt-1 text-xs text-gray-500">You can find your account number on your electricity bill</p>
              </div>
              
              <div class="group">
                <label for="soaNumber" class="block text-sm font-medium text-gray-700 mb-1">SOA Number</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    id="soaNumber" 
                    v-model="newAccount.soaNumber" 
                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3B7D] focus:border-transparent group-hover:border-blue-300 transition-colors"
                    placeholder="Enter SOA number"
                    required
                  />
                </div>
                <p class="mt-1 text-xs text-gray-500">Statement of Account number from your recent bill</p>
              </div>
            </div>
            
            <div class="group">
              <label for="orNumber" class="block text-sm font-medium text-gray-700 mb-1">OR Number</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  id="orNumber" 
                  v-model="newAccount.orNumber" 
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3B7D] focus:border-transparent group-hover:border-blue-300 transition-colors"
                  placeholder="Enter OR number"
                  required
                />
              </div>
              <p class="mt-1 text-xs text-gray-500">Official Receipt number from your recent payment</p>
            </div>
            
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="confirmOwnership" 
                v-model="newAccount.confirmOwnership" 
                class="h-4 w-4 text-[#0A3B7D] focus:ring-[#0A3B7D] border-gray-300 rounded"
                required
              />
              <label for="confirmOwnership" class="ml-2 block text-sm text-gray-700">
                I confirm that I am the owner or authorized user of this account
              </label>
            </div>
            
            <div class="flex justify-end">
              <button 
                type="submit" 
                class="px-6 py-2 bg-gradient-to-r from-[#0A3B7D] to-[#1E56A0] text-white rounded-lg hover:from-[#0A2D5E] hover:to-[#1E4A8A] focus:outline-none focus:ring-2 focus:ring-[#0A3B7D] focus:ring-offset-2 transition-all duration-300 shadow-lg flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Link Account
              </button>
            </div>
          </form>
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

    <!-- Remove Account Confirmation Modal -->
    <div v-if="showRemoveModal" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-center justify-center min-h-screen px-4 text-center">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" @click="closeRemoveModal"></div>
        
        <!-- Modal panel -->
        <div class="relative bg-white/90 backdrop-blur-xl rounded-2xl max-w-md w-full mx-auto shadow-2xl overflow-hidden transform transition-all animate-modal-in">
          <div class="p-6">
            <div class="flex flex-col items-center text-center">
              <div class="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Remove Account</h3>
              <p class="text-gray-600 mb-6">Are you sure you want to remove this account? This action cannot be undone.</p>
              
              <div class="bg-gray-50 rounded-xl p-4 mb-6 w-full">
                <p class="text-sm font-medium text-gray-900">{{ accountToRemove.accountNumber }}</p>
                <p class="text-sm text-gray-600">{{ accountToRemove.address }}</p>
              </div>
              
              <div class="flex space-x-4 w-full">
                <button 
                  @click="closeRemoveModal" 
                  class="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all"
                >
                  Cancel
                </button>
                <button 
                  @click="removeAccount" 
                  class="flex-1 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- View Account Details Modal -->
    <div v-if="showDetailsModal" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-center justify-center min-h-screen px-4 text-center">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" @click="closeDetailsModal"></div>
        
        <!-- Modal panel -->
        <div class="relative bg-white/90 backdrop-blur-xl rounded-2xl max-w-lg w-full mx-auto shadow-2xl overflow-hidden transform transition-all animate-modal-in">
          <div class="p-6">
            <!-- Header with account status -->
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-xl font-bold text-gray-900">Account Details</h3>
              <span :class="`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${selectedAccount.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`">
                <span class="h-1.5 w-1.5 rounded-full mr-1" :class="selectedAccount.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'"></span>
                {{ selectedAccount.status }}
              </span>
            </div>
            
            <!-- Account information -->
            <div class="space-y-6">
              <div class="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <div class="flex items-center mb-4">
                  <div class="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm font-medium text-gray-900">Account Information</h4>
                    <p class="text-xs text-gray-500">Basic details about your electricity account</p>
                  </div>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-xs text-gray-500">Account Number</p>
                    <p class="text-sm font-medium text-gray-900">{{ selectedAccount.accountNumber }}</p>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">Account Type</p>
                    <p class="text-sm font-medium text-gray-900">{{ selectedAccount.type }}</p>
                  </div>
                  <div class="col-span-2">
                    <p class="text-xs text-gray-500">Service Address</p>
                    <p class="text-sm font-medium text-gray-900">{{ selectedAccount.address }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Billing information -->
              <div class="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <div class="flex items-center mb-4">
                  <div class="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm font-medium text-gray-900">Billing Information</h4>
                    <p class="text-xs text-gray-500">Latest billing details for this account</p>
                  </div>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-xs text-gray-500">Last Bill Amount</p>
                    <p class="text-sm font-medium text-gray-900">₱1,245.50</p>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">Due Date</p>
                    <p class="text-sm font-medium text-gray-900">May 15, 2023</p>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">Payment Status</p>
                    <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">Last Payment Date</p>
                    <p class="text-sm font-medium text-gray-900">May 10, 2023</p>
                  </div>
                </div>
              </div>
              
              <!-- Usage information -->
              <div class="bg-green-50 rounded-xl p-5 border border-green-100">
                <div class="flex items-center mb-4">
                  <div class="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-sm font-medium text-gray-900">Energy Usage</h4>
                    <p class="text-xs text-gray-500">Recent electricity consumption data</p>
                  </div>
                </div>
                
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-xs text-gray-500">Current Month</p>
                    <p class="text-sm font-medium text-gray-900">245 kWh</p>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">Previous Month</p>
                    <p class="text-sm font-medium text-gray-900">230 kWh</p>
                  </div>
                  <div class="col-span-2">
                    <p class="text-xs text-gray-500">Usage Trend</p>
                    <div class="h-2 w-full bg-gray-200 rounded-full mt-1">
                      <div class="h-2 bg-green-500 rounded-full" style="width: 65%"></div>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">6.5% increase from last month</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Action buttons -->
            <div class="flex space-x-4 mt-6">
              <button 
                @click="closeDetailsModal" 
                class="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all"
              >
                Close
              </button>
              <button 
                @click="viewBillingHistory" 
                class="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Billing History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';

// User data
const user = ref({
  firstName: 'Bernardo',
  lastName: 'Rante',
  accountNumber: 'C000016070030',
  serviceAddress: 'CALOC-AN, MAGALLANES, CALOC-AN, MAGALLANES'
});

// UI state
const showUserDropdown = ref(false);
const showRemoveModal = ref(false);
const showDetailsModal = ref(false);
const accountToRemove = ref({});
const selectedAccount = ref({});

// Linked accounts data
const linkedAccounts = ref([
  {
    accountNumber: 'C000016070030',
    address: 'CALOC-AN, MAGALLANES, CALOC-AN, MAGALLANES',
    type: 'Residential',
    status: 'Active'
  },
  {
    accountNumber: 'C000023456789',
    address: '123 Main St, Butuan City',
    type: 'Commercial',
    status: 'Active'
  },
  {
    accountNumber: 'C000034567890',
    address: '456 Business Ave, Butuan City',
    type: 'Commercial',
    status: 'Pending Verification'
  }
]);

// New account form data
const newAccount = ref({
  accountNumber: '',
  soaNumber: '',
  orNumber: '',
  confirmOwnership: false
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

const showRemoveConfirmation = (account) => {
  accountToRemove.value = account;
  showRemoveModal.value = true;
};

const closeRemoveModal = () => {
  showRemoveModal.value = false;
};

const removeAccount = () => {
  // Remove account logic
  linkedAccounts.value = linkedAccounts.value.filter(
    account => account.accountNumber !== accountToRemove.value.accountNumber
  );
  
  // Close modal
  closeRemoveModal();
  
  // Show success notification (in a real app)
  console.log('Account removed:', accountToRemove.value.accountNumber);
};

const viewAccountDetails = (account) => {
  // Set the selected account and show details modal
  selectedAccount.value = account;
  showDetailsModal.value = true;
};

const closeDetailsModal = () => {
  showDetailsModal.value = false;
};

const viewBillingHistory = () => {
  // Navigate to billing history page for the selected account
  console.log('Viewing billing history for:', selectedAccount.value.accountNumber);
  // In a real app, you would navigate to a billing history page
  // window.location.href = `/billing-history/${selectedAccount.value.accountNumber}`;
};

const linkNewAccount = () => {
  // Link new account logic
  console.log('Linking new account:', newAccount.value);
  
  // In a real app, you would make an API call here
  // For demo purposes, we'll just add it to the list
  linkedAccounts.value.push({
    accountNumber: newAccount.value.accountNumber,
    address: 'New Address (Pending)',
    type: 'Residential',
    status: 'Pending Verification'
  });
  
  // Reset form
  newAccount.value = {
    accountNumber: '',
    soaNumber: '',
    orNumber: '',
    confirmOwnership: false
  };
  
  // Show success notification (in a real app)
  alert('Account linked successfully! Pending verification.');
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

@keyframes modal-in {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
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

.animate-modal-in {
  animation: modal-in 0.3s ease-out forwards;
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
</style>

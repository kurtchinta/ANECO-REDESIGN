<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <!-- Modern Header with Glassmorphism -->
      <header class="bg-gradient-to-r from-[#0A3B7D] to-[#1E56A0] sticky top-0 z-30">
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
              <!-- Notifications bell -->
              <div class="relative">
                <button class="p-2 text-white hover:bg-white/10 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span class="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">1</span>
                </button>
              </div>
              
              <!-- User dropdown -->
              <div class="relative">
                <button 
                  @click="toggleUserDropdown" 
                  class="flex items-center space-x-2 bg-white/10 hover:bg-white/20 rounded-full pl-2 pr-3 py-1.5 transition-colors"
                >
                  <div class="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold">
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
                  class="absolute right-0 mt-2 w-56 rounded-xl overflow-hidden backdrop-blur-lg bg-white/90 shadow-xl border border-white/20 py-1 z-50 transform transition-all duration-300 ease-in-out"
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
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-24">
            <!-- User welcome card -->
            <div class="bg-gradient-to-br from-[#0A3B7D] to-[#1E56A0] p-6 text-white">
              <h2 class="text-xl font-bold">Hello, {{ user.firstName }}!</h2>
              <p class="text-sm text-white/80 mt-1">Welcome back to MyANECO</p>
            </div>
            
            <!-- Navigation -->
            <nav class="p-3">
              <a href="/dashboard" class="flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 mb-1 group transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#0A3B7D] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Dashboard
              </a>
              <a href="/linkaccount" class="flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 mb-1 group transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#0A3B7D] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                </svg>
                Link/ Remove Account
              </a>
              <a href="/userprofile" class="flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 mb-1 group transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#0A3B7D] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
                User Profile
              </a>
              <a href="/accountledger" class="flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 mb-1 group transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#0A3B7D] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                Account Ledger
              </a>
              <a href="/statementofaccount" class="flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 mb-1 group transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400 group-hover:text-[#0A3B7D] transition-colors" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                </svg>
                Statement of Accounts
              </a>
              <a href="/notification" class="flex items-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#0A3B7D]/10 to-[#1E56A0]/10 text-[#0A3B7D] font-medium mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                Notifications
                <span class="ml-auto bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">1</span>
              </a>
            </nav>
            
            <!-- Quick actions -->
            <div class="p-4 border-t border-gray-100">
              <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Actions</h3>
              <div class="grid grid-cols-2 gap-2">
                <button class="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0A3B7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-xs mt-1 text-gray-700">Pay Bill</span>
                </button>
                <button class="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0A3B7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span class="text-xs mt-1 text-gray-700">Reports</span>
                </button>
                <button class="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0A3B7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-xs mt-1 text-gray-700">Support</span>
                </button>
                <button class="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#0A3B7D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-xs mt-1 text-gray-700">Settings</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Main Notifications Content -->
        <div class="flex-1">
          <!-- Page Header -->
          <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold text-gray-800">Notifications</h1>
            <div class="text-sm text-gray-500 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Updated {{ currentDate }}
            </div>
          </div>
          
          <!-- Notification Controls -->
          <div class="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div class="flex flex-wrap gap-2">
                <button 
                  @click="setFilter('all')" 
                  class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  :class="notificationFilter === 'all' ? 'bg-[#0A3B7D] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                >
                  All
                </button>
                <button 
                  @click="setFilter('unread')" 
                  class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  :class="notificationFilter === 'unread' ? 'bg-[#0A3B7D] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                >
                  Unread
                  <span class="ml-1 px-1.5 py-0.5 bg-red-500 text-white text-xs rounded-full">{{ unreadCount }}</span>
                </button>
                <button 
                  @click="setFilter('billing')" 
                  class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  :class="notificationFilter === 'billing' ? 'bg-[#0A3B7D] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                >
                  Billing
                </button>
                <button 
                  @click="setFilter('payments')" 
                  class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  :class="notificationFilter === 'payments' ? 'bg-[#0A3B7D] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                >
                  Payments
                </button>
                <button 
                  @click="setFilter('announcements')" 
                  class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  :class="notificationFilter === 'announcements' ? 'bg-[#0A3B7D] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                >
                  Announcements
                </button>
              </div>
              
              <div>
                <button 
                  @click="markAllAsRead" 
                  class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Mark all as read
                </button>
              </div>
            </div>
          </div>
          
          <!-- Notifications List -->
          <div class="space-y-4">
            <div v-for="(notification, index) in filteredNotifications" :key="index" 
                 class="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                 :class="{'border-l-4 border-[#0A3B7D]': !notification.read}">
              <div class="p-6">
                <div class="flex items-start">
                  <!-- Notification Icon -->
                  <div class="h-10 w-10 rounded-full flex items-center justify-center mr-4"
                       :class="{
                         'bg-blue-100 text-blue-600': notification.type === 'billing',
                         'bg-green-100 text-green-600': notification.type === 'payment',
                         'bg-yellow-100 text-yellow-600': notification.type === 'announcement',
                         'bg-purple-100 text-purple-600': notification.type === 'system'
                       }">
                    <svg v-if="notification.type === 'billing'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                    </svg>
                    <svg v-if="notification.type === 'payment'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                    </svg>
                    <svg v-if="notification.type === 'announcement'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clip-rule="evenodd" />
                    </svg>
                    <svg v-if="notification.type === 'system'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  
                  <!-- Notification Content -->
                  <div class="flex-1">
                    <div class="flex justify-between items-start">
                      <h3 class="text-base font-semibold text-gray-900">{{ notification.title }}</h3>
                      <div class="flex items-center">
                        <span class="text-xs text-gray-500">{{ formatDate(notification.date) }}</span>
                        <button 
                          v-if="!notification.read" 
                          @click="markAsRead(notification)" 
                          class="ml-2 text-gray-400 hover:text-gray-600"
                          title="Mark as read"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p class="mt-1 text-sm text-gray-600">{{ notification.message }}</p>
                    
                    <!-- Action Buttons -->
                    <div class="mt-3 flex flex-wrap gap-2">
                      <button 
                        v-for="(action, actionIndex) in notification.actions" 
                        :key="actionIndex"
                        class="px-3 py-1 text-xs font-medium rounded-md transition-colors"
                        :class="action.primary ? 'bg-[#0A3B7D] text-white hover:bg-[#0A2D5E]' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                      >
                        {{ action.label }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Empty state -->
            <div v-if="filteredNotifications.length === 0" class="bg-white rounded-2xl shadow-lg p-10 text-center">
              <div class="flex flex-col items-center">
                <div class="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-gray-900 mb-1">No notifications found</h3>
                <p class="text-gray-500">You're all caught up! Check back later for new notifications.</p>
              </div>
            </div>
          </div>
          
          <!-- Pagination -->
          <div class="mt-6 flex items-center justify-between">
            <div class="text-sm text-gray-700">
              Showing <span class="font-medium">{{ paginationStart }}</span> to <span class="font-medium">{{ paginationEnd }}</span> of <span class="font-medium">{{ totalNotifications }}</span> notifications
            </div>
            <div class="flex space-x-2">
              <button @click="prevPage" :disabled="currentPage === 1" class="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button @click="nextPage" :disabled="currentPage === totalPages" class="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded-md bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Next
              </button>
            </div>
          </div>
          
          <!-- Notification Settings Card -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden mt-6">
            <div class="p-6">
              <h2 class="text-lg font-bold text-gray-800 mb-4">Notification Settings</h2>
              
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Billing Notifications</h3>
                    <p class="text-xs text-gray-500">Receive notifications about new bills and payment reminders</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="notificationSettings.billing" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A3B7D]"></div>
                  </label>
                </div>
                
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Payment Notifications</h3>
                    <p class="text-xs text-gray-500">Receive notifications about successful payments and receipts</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="notificationSettings.payments" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A3B7D]"></div>
                  </label>
                </div>
                
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Announcements</h3>
                    <p class="text-xs text-gray-500">Receive notifications about service interruptions and updates</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="notificationSettings.announcements" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A3B7D]"></div>
                  </label>
                </div>
                
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">System Notifications</h3>
                    <p class="text-xs text-gray-500">Receive notifications about account security and system updates</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="notificationSettings.system" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A3B7D]"></div>
                  </label>
                </div>
                
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">Email Notifications</h3>
                    <p class="text-xs text-gray-500">Also send notifications to your email address</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="notificationSettings.email" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A3B7D]"></div>
                  </label>
                </div>
                
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">SMS Notifications</h3>
                    <p class="text-xs text-gray-500">Also send notifications to your mobile number</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="notificationSettings.sms" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A3B7D]"></div>
                  </label>
                </div>
              </div>
              
              <div class="mt-6">
                <button class="px-4 py-2 bg-[#0A3B7D] text-white rounded-lg hover:bg-[#0A2D5E] transition-colors">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
    
    <script setup>
    import { ref, computed, onMounted } from 'vue';
    
    // User data
    const user = ref({
      firstName: 'Bernardo',
      lastName: 'Rante',
      accountNumber: 'C000016070030'
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
    const notificationFilter = ref('all');
    const currentPage = ref(1);
    const itemsPerPage = 5;
    
    // Notification settings
    const notificationSettings = ref({
      billing: true,
      payments: true,
      announcements: true,
      system: true,
      email: false,
      sms: false
    });
    
    // Notifications data
    const notifications = ref([
      {
        id: 1,
        title: 'New Bill Available',
        message: 'Your April 2025 electricity bill is now available. Amount due: ₱1,250.00',
        date: new Date('2025-04-15T08:30:00'),
        type: 'billing',
        read: false,
        actions: [
          { label: 'View Bill', primary: true },
          { label: 'Pay Now', primary: false }
        ]
      },
      {
        id: 2,
        title: 'Payment Confirmation',
        message: 'Your payment of ₱1,180.75 for March 2025 has been received. Thank you!',
        date: new Date('2025-03-30T14:45:00'),
        type: 'payment',
        read: true,
        actions: [
          { label: 'View Receipt', primary: false }
        ]
      },
      {
        id: 3,
        title: 'Scheduled Power Interruption',
        message: 'There will be a scheduled power interruption in your area on April 25, 2025 from 9:00 AM to 3:00 PM for maintenance work.',
        date: new Date('2025-04-18T10:15:00'),
        type: 'announcement',
        read: false,
        actions: [
          { label: 'View Details', primary: false },
          { label: 'Add to Calendar', primary: false }
        ]
      },
      {
        id: 4,
        title: 'Account Security Alert',
        message: 'We detected a login to your account from a new device. If this was you, you can ignore this message.',
        date: new Date('2025-04-10T22:05:00'),
        type: 'system',
        read: true,
        actions: [
          { label: 'Review Activity', primary: true },
          { label: 'Secure Account', primary: false }
        ]
      },
      {
        id: 5,
        title: 'Energy Saving Tips',
        message: 'Check out our latest blog post on how to reduce your electricity consumption during summer months.',
        date: new Date('2025-04-05T11:30:00'),
        type: 'announcement',
        read: true,
        actions: [
          { label: 'Read Article', primary: false }
        ]
      },
      {
        id: 6,
        title: 'Payment Reminder',
        message: 'Your bill of ₱1,250.00 is due in 5 days. Please make your payment to avoid late fees.',
        date: new Date('2025-04-25T09:00:00'),
        type: 'billing',
        read: false,
        actions: [
          { label: 'Pay Now', primary: true },
          { label: 'View Bill', primary: false }
        ]
      },
      {
        id: 7,
        title: 'New Feature Available',
        message: 'You can now link multiple ANECO accounts to your profile for easier management.',
        date: new Date('2025-04-02T16:20:00'),
        type: 'system',
        read: true,
        actions: [
          { label: 'Try Now', primary: true },
          { label: 'Learn More', primary: false }
        ]
      }
    ]);
    
    // Computed properties
    const filteredNotifications = computed(() => {
      let filtered = [...notifications.value];
      
      if (notificationFilter.value === 'unread') {
        filtered = filtered.filter(notification => !notification.read);
      } else if (notificationFilter.value !== 'all') {
        filtered = filtered.filter(notification => notification.type === notificationFilter.value);
      }
      
      filtered.sort((a, b) => b.date - a.date);
      
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      
      return filtered.slice(start, end);
    });
    
    const totalNotifications = computed(() => {
      if (notificationFilter.value === 'unread') {
        return notifications.value.filter(notification => !notification.read).length;
      } else if (notificationFilter.value !== 'all') {
        return notifications.value.filter(notification => notification.type === notificationFilter.value).length;
      }
      return notifications.value.length;
    });
    
    const totalPages = computed(() => {
      return Math.ceil(totalNotifications.value / itemsPerPage);
    });
    
    const paginationStart = computed(() => {
      return Math.min((currentPage.value - 1) * itemsPerPage + 1, totalNotifications.value);
    });
    
    const paginationEnd = computed(() => {
      return Math.min(currentPage.value * itemsPerPage, totalNotifications.value);
    });
    
    const unreadCount = computed(() => {
      return notifications.value.filter(notification => !notification.read).length;
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
    
    const setFilter = (filter) => {
      notificationFilter.value = filter;
      currentPage.value = 1;
    };
    
    const markAsRead = (notification) => {
      const index = notifications.value.findIndex(n => n.id === notification.id);
      if (index !== -1) {
        notifications.value[index].read = true;
      }
    };
    
    const markAllAsRead = () => {
      notifications.value.forEach(notification => {
        notification.read = true;
      });
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
    
    const formatDate = (date) => {
      const now = new Date();
      const diff = now - date;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      
      if (days === 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        if (hours === 0) {
          const minutes = Math.floor(diff / (1000 * 60));
          return minutes === 0 ? 'Just now' : `${minutes}m ago`;
        }
        return `${hours}h ago`;
      } else if (days === 1) {
        return 'Yesterday';
      } else if (days < 7) {
        return `${days} days ago`;
      } else {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      }
    };
    
    // Initialize component
    onMounted(() => {
      // Any initialization logic
    });
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
    
    /* Transitions */
    .transition-all {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 300ms;
    }
    </style>

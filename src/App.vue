<script setup lang="ts">

</script>

<template>
  <div class="bg-gray-200 min-h-screen w-full">
    <div class="bg-gray-800 shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <a href="#" class="flex items-center py-4 px-2">
                <span class="font-semibold text-gray-200 text-lg">Appify</span>
              </a>
            </div>
            <div class="flex items-center space-x-1">
              <router-link
                  to="/"
                  class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  :class="$route.name === 'Home' ? 'border-b-4 border-green-500 text-green-500' : ''">Apps</router-link>
              <router-link
                  to="/about"
                  class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  :class="$route.name === 'About' ? 'border-b-4 border-green-500 text-green-500' : ''">About</router-link>
              <a
                  href="#"
                  class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  :class="$route.name === 'App' ? 'border-b-4 border-green-500 text-green-500' : 'hidden'">App</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6 py-3 max-w-6xl">
      <router-view />
    </div>
  </div>
</template>

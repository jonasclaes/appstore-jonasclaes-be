<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div class="bg-white rounded-lg shadow-lg p-4 col-span-1 md:col-span-2">
      <h1 class="font-semibold text-xl">App list</h1>
      <p>A list of all apps!</p>
    </div>

    <div v-for="app in apps" v-bind:key="app.id">
      <router-link
          :to="`/app/${app.id}`">
        <div class="bg-white rounded-lg shadow-lg p-4 flex gap-3 content-start">
          <img :src="`/assets/img/${app.id}/${app.icon}`" alt="Icon" class="h-full max-h-20 shadow-lg">
          <div class="flex flex-col overflow-x-hidden content-start">
            <h2 class="font-semibold text-lg">{{ app.name }}</h2>
            <div>
              <span class="text-gray-400 text-sm pr-2 mr-2 border-gray-300 border-r-2">{{ app.author }}</span>
              <span class="text-gray-400 text-sm">{{ app.category }}</span>
            </div>
            <p class="truncate">{{ app.description }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import apps from "../../apps.json";

export default {
  name: "AppList",
  data: function () {
    return {
      apps
    }
  }
}
</script>
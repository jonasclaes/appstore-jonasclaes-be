<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div class="bg-gray-800 text-white rounded-lg shadow-lg p-4 col-span-1 md:col-span-2">
      <h1 class="font-semibold text-xl">App list</h1>
      <p>A list of all apps!</p>
    </div>

    <div v-for="app in apps" v-bind:key="app.id">
      <router-link
          :to="`/app/${app.id}`">
        <div class="bg-gray-800 text-white rounded-lg shadow-lg p-4">
          <h2 class="font-semibold text-lg">{{ app.name }}</h2>
          <h3 class="text-gray-400">Made by {{ app.author }}</h3>
          <p class="truncate">Trainplannr is route planner for destinations in Belgium. It will also show the physical train carriages that make up the train. Train timetables and planning will be obtained through an external API, provided by the NMBS and iRail. Train compositions are retrieved from NMBS and iRail API.</p>
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
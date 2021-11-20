<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-start">
    <div class="bg-white rounded-lg shadow-lg p-4 col-span-1 md:col-span-2">
      <img :src="`/assets/img/${app.id}/${app.icon}`" alt="Icon" class="float-left mr-2 mb-2 h-20 shadow-lg">
      <img :src="qrCode" alt="QR-code" class="float-right ml-2 mb-2">
      <h2 class="font-extrabold text-xl">{{ app.name }}</h2>
      <span class="text-gray-400 text-sm pr-2 mr-2 border-gray-300 border-r-2">{{ app.author }}</span>
      <span class="text-gray-400 text-sm">{{ app.category }}</span>
      <h3 class="font-semibold text-lg">Description:</h3>
      <p>Trainplannr is route planner for destinations in Belgium. It will also show the physical train carriages that make up the train. Train timetables and planning will be obtained through an external API, provided by the NMBS and iRail. Train compositions are retrieved from NMBS and iRail API.</p>
      <div class="mt-2 w-full flex flex-row-reverse">
        <a :href="`/assets/files/${app.id}/${app.file}`" class="bg-blue-600 text-white rounded py-2 px-4">Download</a>
      </div>
    </div>
    <div class="bg-white rounded-lg shadow-lg p-4 col-span-1 md:col-span-2 flex gap-1 overflow-x-auto">
      <img :src="image" alt="" class="h-96 inline-flex" v-for="image in images">
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import QRCode from 'qrcode';

import apps from "../../apps.json";

export default defineComponent({
  name: "App",
  props: ['id'],
  data: function () {
    return {
      app: null,
      qrCode: null,
      images: [],
      imageActive: 0
    }
  },
  async created() {
    this.app = this.getApp(this.id);
    this.qrCode = await QRCode.toDataURL(`https://appstore.jonasclaes.be/app/${this.app.id}`, {
      errorCorrectionLevel: "medium",
      margin: 2
    });

    for (const imagesKey of this.app.images) {
      this.images.push(`/assets/img/${this.id}/${imagesKey}`);
    }
  },
  methods: {
    getApp(id: string) {
      return apps.find(app => app.id === id);
    }
  }
})
</script>

<style scoped>

</style>
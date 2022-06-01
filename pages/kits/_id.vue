<template>
  <div>
    <nav class="bg-brightPink flex justify-between px-6 items-center py-6">
      <div class="flex items-center space-x-2">
        <NuxtLink to="/" class="text-white font-bold text-xl font-title cursor-pointer">Kits d'action</NuxtLink>
      </div>
    </nav>
    <div class="md:w-1/2 mx-10 md:mx-auto mt-4">
      <div v-if="content" v-html="content.html"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      content: null,
    };
  },
  name: 'ShowKit',
  async created() {
    const res = await axios.get(`http://wiki.xrbnb.eu/api/pages/${this.$route.params.id}`, {
      headers: {
        authorization: process.env.apiToken,
      }
    });
    this.content = res.data;
  }
}
</script>

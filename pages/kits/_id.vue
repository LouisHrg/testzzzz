<template>
  <div>
    <nav class="bg-brightPink flex justify-between px-6 items-center py-6">
      <div class="flex items-center space-x-2">
        <NuxtLink to="/" class="text-white font-bold text-xl font-title cursor-pointer">Kits d'action</NuxtLink>
      </div>
    </nav>
    <div class="md:w-1/2 mx-10 md:mx-auto mt-4">
      <div v-if="content" v-html="content.content"></div>
    </div>
  </div>
</template>

<script>
import data from '@/build/database/data.json';

export default {
  data() {
    return {
      content: null,
    };
  },
  name: 'ShowKit',
  created() {
    const id = parseInt(this.$route.params.id);
    this.content = data.find(el => el.id === id);
  }
}
</script>

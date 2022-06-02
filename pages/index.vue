<template>
  <div v-if="loaded">
    <nav class="bg-brightPink flex justify-between px-6 items-center py-6">
      <div class="flex items-center space-x-2">
        <NuxtLink to="/" class="text-white font-bold text-xl font-title cursor-pointer">Kits d'action</NuxtLink>
      </div>
    </nav>
    <div class="md:w-1/2 mx-10 md:mx-auto mt-4">
      <input
        v-model="query"
        class="w-full bg-gray-200 text-lg font-title py-2 px-3 rounded-lg my-3"
        type="text"
        placeholder="Rechercher parmis les kits"
        />
        <ul class="shadow border py-4 px-4 rounded-lg my-4 w-full" v-if="results.length > 0 && query.length > 0">
          <li @click="$router.push(`/kits/${result.id}`)" class="cursor-pointer py-3 px-3 text-center font-title hover:text-pink rounded-lg text-gray-800 hover:bg-gray-200 w-full" v-for="(result, index) in results" :key="index">
              {{ result.title }}
          </li>
        </ul>
      <div class="grid md:grid-cols-2 gap-4">
        <PageCard v-for="(link, index) in links" :key="index" :link="link"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import data from '@/build/database/data.json';
import useSearchStore from '~/stores/searchStore';

export default {
  data() {
    return {
      links: null,
      query: '',
      results: [],
      loaded: false,
    };
  },
  watch: {
    query(val) {
      if(val.length > 0) {
        this.results = this.searchData(val);
      }
    }
  },
  name: 'IndexPage',
  created() {
    this.warmupSearch();
    this.links = data;
    this.loaded = true;
  },
  methods: {
    ...mapActions(useSearchStore, ['warmupSearch', 'searchData']),
  }
}
</script>

import { defineStore } from 'pinia';
import * as JsSearch from 'js-search';
import data from '@/build/database/search.json';

const useSearchStore = defineStore('searchStore', {
  state: () => ({ content: [] }),
  actions: {
    warmupSearch() {
      this.search = new JsSearch.Search('id');
      this.search.addIndex('content');
      this.search.addIndex('title');
      this.search.addDocuments(data);
    },
    searchData(query) {
      return this.search.search(query);
    }
  }
});

export default useSearchStore;

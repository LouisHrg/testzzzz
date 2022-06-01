import { defineStore } from 'pinia';
import axios from 'axios';
import * as JsSearch from 'js-search';

const useSearchStore = defineStore('searchStore', {
  state: () => ({ content: [] }),
  actions: {
    async warmupSearch() {
      const res = await axios.get('http://wiki.xrbnb.eu/api/search?query=[kit_antipub]', {
        headers: {
          authorization: process.env.apiToken,
        }
      });
      const links = res.data.data.map(el => ({ id: el.id }));

      console.log(links);

      /* eslint-disable */
      for(let i = 0; i < links.length; i++) {
         const res = await axios.get(`http://wiki.xrbnb.eu/api/pages/${links[i].id}`, {
           headers: {
             authorization: process.env.apiToken,
           }
         });
         this.content.push({ id: res.data.id, title: res.data.name, content: res.data.html.replace(/<[^>]+>/g, '') });
      }

      this.search = new JsSearch.Search('id');
      this.search.addIndex('content');
      this.search.addIndex('title');
      this.search.addDocuments(this.content);

      console.log(this.search);
    },
    searchData(query) {
      return this.search.search(query);
    }
  }
});

export default useSearchStore;

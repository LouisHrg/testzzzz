const axios = require('axios');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

(async() => {
  let content = [];
  let search = [];

  const res = await axios.get('http://wiki.xrbnb.eu/api/search?query=[kit_antipub]', {
    headers: {
      authorization: process.env.apiToken,
    }
  });
  const links = res.data.data.map(el => ({ id: el.id }));

  for(let i = 0; i < links.length; i++) {
     const res = await axios.get(`http://wiki.xrbnb.eu/api/pages/${links[i].id}`, {
       headers: {
         authorization: process.env.apiToken,
       }
     });
     content.push({ id: res.data.id, title: res.data.name, content: res.data.html });
     search.push({ id: res.data.id, title: res.data.name, content: res.data.html.replace(/<[^>]+>/g, '') });
  }

  fs.writeFileSync('./database/data.json', JSON.stringify(content));
  fs.writeFileSync('./database/search.json', JSON.stringify(search));
})();


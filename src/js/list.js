async function get(url) {
  try {
    const result = await fetch(url, { credentials: 'include' })
      .then((res) => res.json());
    return [null, result];
  } catch (error) {
    return [error, null];
  }
}

const app = new Vue({
  el: '#listFeatured',
  data: {
    featured: [],
  },
  methods: {
    async getData() {
      const [error, results] = await get(`/data/capabilities.json`);

      if(error) {
        console.error(error);
        return;
      }

      return results;
    }
  },
  async mounted() {
    this.featured = await this.getData();
  },
});

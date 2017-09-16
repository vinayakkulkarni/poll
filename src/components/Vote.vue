<template>
  <div class="container">
    <div class="column is-half is-offset-one-quarter">
      <div class="box">
        <div class="field" v-for="option in options" :key="option.name">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="option.checked">
              <a :href="option.url" target="_blank">{{ option.name }}</a>
            </label>
          </div>  
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary" @click="addVote" :class="{'is-loading': dataLoading}">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'voting',
  data() {
    return {
      dataLoading: false,
      options: this.defaultOptionsParams(),
      results: null,
      errors: null,
    };
  },
  methods: {
    addVote() {
      const t = this;
      t.dataLading = true;
      axios.post('/api/v2/vote', t.options)
       .then((response) => {
         t.results = response.data;
         t.dataLading = false;
       })
       .catch((error) => {
         t.errors = error.data;
       });
    },
    defaultOptionsParams() {
      return [
        {
          name: 'VueJS',
          url: 'https://vuejs.org',
          checked: false,
          votes: null,
        },
        {
          name: 'Preact',
          url: 'https://preactjs.com/',
          checked: false,
          votes: null,
        },
        {
          name: 'Ember.js',
          url: 'https://www.emberjs.org',
          checked: false,
          votes: null,
        },
        {
          name: 'Marko.js',
          url: 'https://markojs.com',
          checked: false,
          votes: null,
        },
        {
          name: 'Angular',
          url: 'https://angular.io',
          checked: false,
          votes: null,
        },
        {
          name: 'Inferno',
          url: 'https://infernojs.org',
          checked: false,
          votes: null,
        },
      ];
    },
  },
};
</script>
<style scoped>
[v-cloak] { display: none; }
</style>

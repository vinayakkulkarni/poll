<template>
  <div class="container">
    <div class="column is-half is-offset-one-quarter">
      <div class="box">
        <div class="field" v-for="option in frameworks" :key="option.votes">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="option.vote">
              <a :href="option.url" target="_blank">{{ option.title }}</a>
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
import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDTgMinzwEKicJiPRnMOzAS1dghDwDZvaQ',
  authDomain: 'gutenberg-poll.firebaseapp.com',
  databaseURL: 'https://gutenberg-poll.firebaseio.com',
  projectId: 'gutenberg-poll',
  storageBucket: 'gutenberg-poll.appspot.com',
  messagingSenderId: '80168469319',
};
const app = Firebase.initializeApp(config);
const db = app.database();

const frameworksRef = db.ref('frameworks');

export default {
  name: 'voting',
  firebase: {
    frameworks: frameworksRef,
  },
  data() {
    return {
      dataLoading: false,
    };
  },
  methods: {
    addVote() {
      const t = this;
      t.dataLading = true;
      // frameworksRef.child(framework['.key'].votes = framework['.key'].votes + 1);
    },
  },
};
</script>
<style scoped>
[v-cloak] { display: none; }
</style>

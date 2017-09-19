<template>
  <div class="container">
    <div class="column is-half is-offset-one-quarter">
      <div class="box">
        <div class="field" v-for="option in frameworks" :key="option.title">
          <div class="control">
            <label for="vote" class="checkbox">
              <input v-if="!voted" type="checkbox" name="vote" :value="option" v-model="checkedVotes">
              <a :href="option.url" target="_blank">{{ option.title }} ({{ option.votes }})</a>
            </label>
          </div>  
        </div>
        <div class="field">
          <div class="control">
            <button v-if="!voted" class="button is-primary" @click.once="addVote" :class="{'is-loading': dataLoading}">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueLocalStorage from 'vue-localstorage';
import Firebase from 'firebase';
import Vue from 'vue';
import Toasted from 'vue-toasted';
import NProgress from 'nprogress';

Vue.use(VueLocalStorage);
Vue.use(Toasted, { position: 'bottom-right', duration: 3000 });

const app = Firebase.initializeApp({ databaseURL: 'https://gutenberg-poll.firebaseio.com' });
const db = app.database();
const frameworksRef = db.ref('frameworks');

export default {
  name: 'voting',
  firebase: {
    frameworks: frameworksRef,
  },
  localStorage: {
    voted: {
      type: Boolean,
    },
  },
  data() {
    return {
      voted: false,
      dataLoading: false,
      checkedVotes: [],
    };
  },
  mounted() {
    const t = this;
    if (t.$localStorage.get('voted') && t.$localStorage.get('voted') !== undefined) {
      t.voted = t.$localStorage.get('voted');
    }
  },
  methods: {
    addVote() {
      const t = this;
      t.dataLoading = true;
      NProgress.start();
      setTimeout(() => { this.dataLoading = false; }, 2000);
      if (t.checkedVotes.length === 0) { return; }
      for (let i = 0; i < t.checkedVotes.length; i += 1) {
        frameworksRef.child(t.checkedVotes[i]['.key']).child('votes').set(t.checkedVotes[i].votes += 1);
        t.$localStorage.set('voted', true);
        t.voted = true;
        NProgress.done(true);
        Vue.toasted.success(`Thank you for Voting: ${t.checkedVotes[i].title}!`);
      }
    },
  },
};
</script>
<style scoped>
[v-cloak] { display: none; }
</style>

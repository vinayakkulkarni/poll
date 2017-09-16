<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link 
        tag="a"
        class="navbar-item" 
        :class="{'is-active': $route.name == 'Vote'}"
        :to="{ name: 'Vote' }" exact>
        Vote
      </router-link>
      <router-link 
        tag="a"
        :class="{'is-active': $route.name == 'Results'}"
        class="navbar-item" 
        :to="{ name: 'Results' }" exact>
        Results
      </router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Header',
};
</script>

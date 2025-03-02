<template>
  <nav>
<Header  :categories="categories"  :cartCount="cartCount"/>

  </nav>
  <router-view/>
</template>

<script>
import {mapActions , mapGetters} from "vuex";
import Header from '@/components/layouts/Header.vue'
export default {
  name:'App',
  components: {
      Header
  },
  mounted() {
    this.fetchCategories()
  },


  methods:{
    ...mapActions({
      fetchCategories:'fetchCategories'
    })
},
  computed:{
    ...mapGetters({
      categories:'categories',
      cartCount:'cartCount'
    })
  }

}
</script>

<style>
body ,
html{
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

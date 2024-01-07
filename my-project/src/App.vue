<template>
  <div id="app">
    <Header/>
    <TypeNav></TypeNav>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
import TypeNav from './components/TypeNav'

// import {ref} from 'vue'



export default {
  name: 'App',
  components: {
    Header,
    Footer,
    TypeNav
  },
  data(){
    return {
      
    }
  },
  methods: {
    handle(){
      
    }
  },
}
</script>

<style>

</style>

<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" >
        <v-toolbar-title >Login</v-toolbar-title>
      </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
        <input type="email" name="email" v-model="email" placeholder="Enter Email"> <br>
        <input type="password" name="password" v-model="password" placeholder="Enter Password"><br>
        <div class="error" v-html="error"></div>
        <v-btn class="cyan" @click="login">Login</v-btn>
      </div>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import authenticationService from '../services/authenticationService'
/* eslint-disable */
export default {
  name: 'Register',
  data () {
    return {
      // v-model is a two way binding which we can grab in this controller
      email: '',
      password: '',
      error: null
    }
  },
  /* eslint-disable */
  methods: {
    async login () {
      try {
        const response = await authenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>

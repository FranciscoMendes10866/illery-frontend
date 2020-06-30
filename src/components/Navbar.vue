<template>
  <b-navbar class="is-fixed-top">
    <template slot="brand">
      <b-navbar-item class="no-bg" tag="router-link" :to="{ path: '/' }">
        <h1>Illery</h1>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item class="no-bg" tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
      <b-navbar-item class="no-bg" tag="router-link" :to="{ path: '/ListEvents' }">Find Events</b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item class="no-bg" tag="router-link" :to="{ path: '/Form' }">
        <div class="buttons">
          <a class="button is-warning">
            <strong>Add event</strong>
          </a>
        </div>
      </b-navbar-item>
      <b-navbar-item class="no-bg" tag="router-link" :to="{ path: '/SignUp' }">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
        </div>
      </b-navbar-item>
      <b-navbar-item class="no-bg" tag="router-link" :to="{ path: '/Login' }">
        <div class="buttons">
          <a class="button is-light">
            <strong>Login</strong>
          </a>
        </div>
      </b-navbar-item>
      <b-navbar-item class="no-bg" tag="router-link" :to="{ path: '/' }">
        <div class="buttons">
          <a class="button is-light">
            <strong>Logout</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {

}
</script>

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
      <b-navbar-item class="no-bg" v-show="isLoggedIn">
        <div class="buttons">
          <a class="button is-white has-text-grey">
            <span class="icon is-small">
              <i class="fas fa-user"></i>
            </span>
            <span class="is-size-6 has-text-weight-normal">{{ userName }}</span>
          </a>
        </div>
      </b-navbar-item>
      <b-navbar-item class="no-bg" tag="router-link" :to="{ path: '/Form' }" v-show="isLoggedIn">
        <div class="buttons">
          <a class="button is-warning">
            <span class="icon is-small">
              <i class="fas fa-plus"></i>
            </span>
            <span class="is-size-6 has-text-weight-bold">add Event</span>
          </a>
        </div>
      </b-navbar-item>
      <b-navbar-item class="no-bg" tag="router-link" :to="{ path: '/SignUp' }" v-show="!isLoggedIn">
        <div class="buttons">
          <a class="button is-primary">
            <span class="icon is-small">
              <i class="fas fa-fingerprint"></i>
            </span>
            <span class="is-size-6 has-text-weight-bold">Sign up</span>
          </a>
        </div>
      </b-navbar-item>
      <b-navbar-item class="no-bg" tag="router-link" :to="{ path: '/Login' }" v-show="!isLoggedIn">
        <div class="buttons">
          <a class="button is-light">
            <span class="icon is-small">
              <i class="fas fa-sign-in-alt"></i>
            </span>
            <span class="is-size-6 has-text-weight-bold">Login</span>
          </a>
        </div>
      </b-navbar-item>
      <b-navbar-item class="no-bg" @click.prevent="logout" v-show="isLoggedIn">
        <div class="buttons">
          <a class="button is-light">
            <span class="icon is-small">
              <i class="fas fa-sign-out-alt"></i>
            </span>
            <span class="is-size-6 has-text-weight-bold">Logout</span>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('auth', [
      'isLoggedIn',
      'userName'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'logout'
    ])
  }
}
</script>

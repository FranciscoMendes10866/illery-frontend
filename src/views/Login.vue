<template>
  <div>
    <section class="hero is-fullheight-with-navbar has-text-centered">
      <div class="hero-body">
        <div class="container">
          <b-message
            class="my-sub-margin"
            :active="loginError"
            type="is-danger"
            has-icon
            size="is-small"
          >
            <p
              class="is-size-6"
            >An error has occurred, please do not give up. Try again later&nbsp;🥺.</p>
          </b-message>
          <div class="columns">
            <div class="column is-4"></div>
            <div class="column is-4">
              <div class="columns">
                <div class="column">
                  <h1 class="is-size-3">Login</h1>
                  <p
                    class="my-sub-margin is-size-6 has-text-grey-light"
                  >Login into an existing account.</p>
                </div>
              </div>
              <div class="columns my-sub-margin">
                <div class="column">
                  <b-field>
                    <b-input
                      maxlength="30"
                      type="email"
                      placeholder="Email"
                      :value="loginEmail"
                      @input="setLoginEmail"
                    ></b-input>
                  </b-field>
                  <b-field>
                    <b-input
                      type="password"
                      placeholder="Password"
                      maxlength="24"
                      :value="loginPassword"
                      @input="setLoginPassword"
                      password-reveal
                    ></b-input>
                  </b-field>
                  <b-button
                    type="is-primary"
                    @click.prevent="login"
                    icon-right="image-filter-center-focus-strong-outline"
                    outlined
                  >Login</b-button>
                </div>
              </div>
            </div>
            <div class="column is-4"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('auth', [
      'loginEmail',
      'loginPassword',
      'loginError'
    ])
  },
  methods: {
    ...mapMutations('auth', [
      'setLoginEmail',
      'setLoginPassword',
      'setLoginError'
    ]),
    ...mapActions('auth', [
      'login'
    ])
  }
}
</script>

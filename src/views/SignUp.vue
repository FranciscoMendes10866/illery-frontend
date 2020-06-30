<template>
  <div>
    <section class="hero is-fullheight-with-navbar has-text-centered">
      <div class="hero-body">
        <div class="container">
          <b-message
            class="my-sub-margin"
            :active="registerError"
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
                  <h1 class="is-size-3">Sign up</h1>
                  <p class="my-sub-margin is-size-6 has-text-grey-light">Create a new account.</p>
                </div>
              </div>
              <div class="columns my-sub-margin">
                <div class="column">
                  <b-field>
                    <b-input
                      type="text"
                      placeholder="Name"
                      maxlength="30"
                      :value="registerUsername"
                      @input="setRegisterUsername"
                    ></b-input>
                  </b-field>
                  <b-field>
                    <b-input
                      maxlength="30"
                      type="email"
                      placeholder="Email"
                      :value="registerEmail"
                      @input="setRegisterEmail"
                    ></b-input>
                  </b-field>
                  <b-field>
                    <b-input
                      type="password"
                      placeholder="Password"
                      maxlength="24"
                      :value="registerPassword"
                      @input="setRegisterPassword"
                      password-reveal
                    ></b-input>
                  </b-field>
                  <b-button
                    type="is-primary"
                    @click.prevent="register"
                    icon-right="plus-circle-outline"
                    outlined
                  >Create</b-button>
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
      'registerEmail',
      'registerPassword',
      'registerUsername',
      'registerError'
    ])
  },
  methods: {
    ...mapMutations('auth', [
      'setRegisterEmail',
      'setRegisterPassword',
      'setRegisterUsername',
      'setRegisterError'
    ]),
    ...mapActions('auth', [
      'register'
    ])
  }
}
</script>

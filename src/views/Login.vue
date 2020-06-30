<template>
  <div>
    <section class="hero is-fullheight-with-navbar has-text-centered">
      <div class="hero-body">
        <div class="container">
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
                    <b-input maxlength="30" type="email" placeholder="Email" v-model="loginEmail"></b-input>
                  </b-field>
                  <b-field>
                    <b-input
                      type="password"
                      placeholder="Password"
                      maxlength="24"
                      v-model="loginPassword"
                    ></b-input>
                  </b-field>
                  <b-button
                    type="is-primary"
                    v-on:click.prevent="loginAccount"
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
export default {

}
</script>

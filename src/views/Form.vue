<template>
  <div>
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="is-size-3">Form</h1>
              <p
                class="my-sub-margin is-size-6 has-text-grey-light"
              >Fill the following form if you want to add a new Event.</p>
            </div>
          </div>
          <div class="columns my-sub-margin">
            <div class="column">
              <b-field>
                <b-input type="text" placeholder="Event name"></b-input>
              </b-field>
              <b-field>
                <b-input type="text" placeholder="Slogan"></b-input>
              </b-field>
              <b-field>
                <b-input type="text" placeholder="Location"></b-input>
              </b-field>
              <b-field>
                <b-input type="email" placeholder="Event email"></b-input>
              </b-field>
              <b-field>
                <b-input type="number" placeholder="Phone"></b-input>
              </b-field>
            </div>
            <div class="column">
              <b-field>
                <b-datetimepicker
                  rounded
                  placeholder="Select date"
                  v-model="date"
                  icon="calendar-today"
                  :timepicker="{ enableSeconds, hourFormat: format }"
                  horizontal-time-picker
                ></b-datetimepicker>
              </b-field>
              <b-field>
                <b-input type="text" placeholder="Website"></b-input>
              </b-field>
              <b-field>
                <b-input type="textarea" placeholder="Body"></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns my-sub-margin">
            <div class="column">
              <div class="buttons">
                <b-field class="file" style="margin-top: 10px !important;">
                  <b-upload v-model="file" expanded>
                    <a class="button is-info">
                      <b-icon icon="cloud-upload-outline"></b-icon>
                      <span>{{ file.name || "Upload image"}}</span>
                    </a>
                  </b-upload>
                </b-field>
                <b-button
                  style="margin-left: 40px !important;"
                  type="is-primary"
                  icon-right="send"
                  outlined
                >Submit form</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      file: {}
    }
  }
}
</script>

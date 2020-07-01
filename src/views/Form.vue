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
                <b-input
                  type="text"
                  placeholder="Event name"
                  :value="eventName"
                  @input="setEventName"
                ></b-input>
              </b-field>
              <b-field>
                <b-input
                  type="text"
                  placeholder="Slogan"
                  :value="eventSlogan"
                  @input="setEventSlogan"
                ></b-input>
              </b-field>
              <b-field>
                <b-input
                  type="text"
                  placeholder="Location"
                  :value="eventLocation"
                  @input="setEventLocation"
                ></b-input>
              </b-field>
              <b-field>
                <b-input
                  type="email"
                  placeholder="Event email"
                  :value="eventEmail"
                  @input="setEventEmail"
                ></b-input>
              </b-field>
              <b-field>
                <b-input
                  type="number"
                  placeholder="Phone"
                  :value="eventPhone"
                  @input="setEventPhone"
                ></b-input>
              </b-field>
            </div>
            <div class="column">
              <b-field>
                <b-datetimepicker
                  :value="eventDate"
                  @input="setEventDate"
                  placeholder="Click to select..."
                  horizontal-time-picker
                ></b-datetimepicker>
              </b-field>
              <b-field>
                <b-input
                  type="text"
                  placeholder="Website"
                  :value="eventWebsite"
                  @input="setEventWebsite"
                ></b-input>
              </b-field>
              <b-field>
                <b-input
                  type="textarea"
                  placeholder="Body"
                  :value="eventBody"
                  @input="setEventBody"
                ></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns my-sub-margin">
            <div class="column">
              <div class="buttons">
                <b-field class="file">
                  <b-upload :value="eventFile" @input="setEventFile">
                    <a class="button is-primary">
                      <b-icon icon="upload"></b-icon>
                      <span>Click to upload</span>
                    </a>
                  </b-upload>
                  <span class="file-name" v-if="eventFile">{{ eventFile.name }}</span>
                </b-field>
                <b-button
                  style="margin-left: 40px !important;"
                  type="is-primary"
                  icon-right="send"
                  outlined
                  @click.prevent="createEvent"
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
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      datetime: new Date()
    }
  },
  computed: {
    ...mapState('places', [
      'eventName',
      'eventEmail',
      'eventLocation',
      'eventPhone',
      'eventFile',
      'eventDate',
      'eventWebsite',
      'eventSlogan',
      'eventBody'
    ])
  },
  methods: {
    ...mapMutations('places', [
      'setEventName',
      'setEventEmail',
      'setEventLocation',
      'setEventPhone',
      'setEventFile',
      'setEventDate',
      'setEventWebsite',
      'setEventSlogan',
      'setEventBody'
    ]),
    ...mapActions('places', [
      'createEvent'
    ])
  }
}
</script>

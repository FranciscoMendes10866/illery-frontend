<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="has-text-centered my-margin is-size-3 has-text-weight-bold">All Events</h1>
        <p class="has-text-centered my-sub-margin is-size-6">All Multimedia events are listed here:</p>
        <div class="columns is-multiline my-margin is-variable is-6">
          <div class="column is-6 my-sub-margin" v-for="event in eventList" :key="event.id">
            <div class="box is-size-7 grow">
              <div class="media-content">
                <div class="content">
                  <h3>
                    {{ event.name }}
                    <span>
                      <b-button
                        size="is-small"
                        type="is-text"
                        class="has-text-danger"
                        icon-right="delete"
                        @click="deleteEvent(event)"
                        v-show="isLoggedIn"
                        v-if="event.authorId === userId"
                      ></b-button>
                    </span>
                  </h3>
                  <p>
                    <strong>Slogan:</strong>
                    &nbsp;{{ event.slogan }}
                  </p>
                  <p>
                    <strong>Location:</strong>
                    &nbsp;{{ event.location }}
                  </p>
                  <p>
                    <strong>Date:</strong>
                    &nbsp;{{ event.openClose | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}
                  </p>
                </div>
                <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                  <a slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                    <b-icon size="is-small" :icon="!props.open ? 'chevron-down' : 'chevron-up'"></b-icon>
                    {{ !props.open ? 'Know more' : 'It\'s enough' }}
                  </a>
                  <div class="columns">
                    <div class="column content">
                      <p>
                        <strong>Phone:</strong>
                        &nbsp;{{ event.phone }}
                      </p>
                      <p>
                        <strong>Website:</strong>&nbsp;
                        <a>{{ event.website }}</a>
                      </p>
                      <p>
                        <strong>Email:</strong>&nbsp;
                        <a>{{ event.eventEmail }}</a>
                      </p>
                      <p>{{ event.content }}</p>
                    </div>
                    <div class="column">
                      <figure class="image is-fullwidth">
                        <img :src="event.picture" alt="Event image" />
                      </figure>
                    </div>
                  </div>
                </b-collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  mounted () {
    this.fetchEvents()
  },
  computed: {
    ...mapState('places', [
      'eventList'
    ]),
    ...mapGetters('auth', [
      'isLoggedIn',
      'userId'
    ])
  },
  methods: {
    ...mapMutations('places', [
      'setFetchEvents',
      'setRemoveEvent',
      'setDeleteError'
    ]),
    ...mapActions('places', [
      'fetchEvents',
      'deleteEvent'
    ])
  }
}
</script>

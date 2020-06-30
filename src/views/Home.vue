<template>
  <div>
    <!-- Hero Landing -->
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column my-pad-hero">
              <h1 class="is-size-1">{{ hero.title }}</h1>
              <p class="is-size-6 has-text-grey-light my-margin">{{ hero.text }}</p>
              <b-button
                class="my-margin"
                type="is-primary is-medium"
                :icon-right="hero.button.mdIcon"
                tag="router-link"
                :to="hero.button.to"
                outlined
              >
                {{
                hero.button.text
                }}
              </b-button>
            </div>
            <div class="column my-pad-hero">
              <img v-lazy="hero.img.src" :alt="hero.img.alt" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Level Section -->
    <section class="section has-background-light">
      <nav class="level my-level">
        <div class="level-item has-text-centered" v-for="level in levels" :key="level.id">
          <div>
            <b-icon class="has-text-grey-light" :icon="level.mdIcon" size="is-large"></b-icon>
            <p class="subtitle my-sub-margin">{{ level.title }}</p>
            <p class="heading has-text-grey-light my-sub-margin">{{ level.text }}</p>
          </div>
        </div>
      </nav>
    </section>
    <!-- Feature Section -->
    <section class="section">
      <div class="container my-padding">
        <div class="columns has-text-centered">
          <div class="column">
            <h1 class="is-size-3">{{ features.title }}</h1>
            <p class="is-size-6 has-text-grey-light my-margin">{{ features.text }}</p>
          </div>
        </div>
        <div class="columns is-multiline my-margin is-variable is-8 my-pad-features">
          <div class="column is-4" v-for="field in fields" :key="field.name">
            <div class="card my-cards">
              <div class="card-image">
                <figure class="image is-square">
                  <img v-lazy="field.cloudImg" :alt="field.alt" class="my-images" />
                </figure>
              </div>
              <div class="content">
                <p class="has-text-centered has-text-grey-light is-size-6">{{ field.desc }}</p>
              </div>
              <div class="card-content my-card-buttons">
                <div class="content has-text-centered">
                  <b-button type="is-light">{{ field.name }}</b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Get Started Section -->
    <section class="hero is-medium has-background-white-bis">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column my-pad-hero">
              <img v-lazy="started.img.src" :alt="started.img.alt" />
            </div>
            <div class="column my-pad-hero">
              <h1 class="is-size-3">{{ started.title }}</h1>
              <p class="is-size-6 has-text-grey-light my-margin">{{ started.text }}</p>
              <b-button
                class="my-margin no-bg"
                type="is-primary is-medium"
                :icon-right="started.button.mdIcon"
                tag="router-link"
                :to="started.button.to"
                inverted
              >
                {{
                started.button.text
                }}
              </b-button>
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
      hero: {
        title: 'Multimedia Events',
        text:
          'Find and share with other people, all Multimedia Events that can be out right now.',
        img: {
          src:
            'https://res.cloudinary.com/dj5iihhqv/image/upload/v1592917742/illeryLandingPage/Searching_ng1wx2.png',
          alt: 'Man looking for content'
        },
        button: {
          text: 'Know more',
          mdIcon: 'arrow-right',
          to: '/SignUp'
        }
      },
      levels: [
        {
          id: 1,
          mdIcon: 'currency-usd',
          title: 'No BS Billing',
          text: 'All inclusive features available for free.'
        },
        {
          id: 2,
          mdIcon: 'calendar-text-outline',
          title: 'Simple UI',
          text: 'Get up and running in 5 minutes.'
        },
        {
          id: 3,
          mdIcon: 'delete-forever-outline',
          title: 'Delete Anytime',
          text: 'Delete simply with a click of a button.'
        }
      ],
      features: {
        title: 'Fields',
        text:
          'We make it simple by un-complicating the platform with our enhanced features. Easy escalation policies, suppressing repeat incidents, activity logs and more.'
      },
      fields: [
        {
          cloudImg:
            'https://res.cloudinary.com/dj5iihhqv/image/upload/v1592917740/illeryLandingPage/Design_mvuhxj.png',
          name: 'Design',
          desc: 'UI, UX, Product Design, etc',
          alt: 'Ilustration of a woman designing'
        },
        {
          cloudImg:
            'https://res.cloudinary.com/dj5iihhqv/image/upload/v1592917740/illeryLandingPage/Coding_jjim2w.png',
          name: 'Programing',
          desc: 'HTML, CSS, JS, PHP, etc',
          alt: 'Ilustration of a man coding'
        },
        {
          cloudImg:
            'https://res.cloudinary.com/dj5iihhqv/image/upload/v1592917738/illeryLandingPage/No_Comments_Yet_s58hff.png',
          name: 'Comunication',
          desc: 'Seminars, etc',
          alt: 'Ilustration of a man listening to the wind'
        },
        {
          cloudImg:
            'https://res.cloudinary.com/dj5iihhqv/image/upload/v1592917741/illeryLandingPage/Vlog_id70zh.png',
          name: 'Video',
          desc: 'Tecniques, etc',
          alt: 'Ilustration of a woman recording herself'
        },
        {
          cloudImg:
            'https://res.cloudinary.com/dj5iihhqv/image/upload/v1593014933/illeryLandingPage/We_re_hiring_eofnxm.png',
          name: 'Photography',
          desc: 'Skills, etc',
          alt: 'Ilustration of a man taking a photo'
        },
        {
          cloudImg:
            'https://res.cloudinary.com/dj5iihhqv/image/upload/v1593014921/illeryLandingPage/Product_Launch_hwzgv9.png',
          name: 'Marketing',
          desc: 'Skills, etc',
          alt: 'Ilustration of a man launching a boat'
        }
      ],
      started: {
        title: 'Try it, it’s Free!',
        text:
          'Find and share with other people, all Multimedia Events that can be out right now.',
        img: {
          src:
            'https://res.cloudinary.com/dj5iihhqv/image/upload/v1592917740/illeryLandingPage/No_Messages_xkaois.png',
          alt: 'Woman looking inside of a box'
        },
        button: {
          text: 'Get Started',
          mdIcon: 'arrow-right',
          to: '/SignUp'
        }
      }
    }
  }
}
</script>

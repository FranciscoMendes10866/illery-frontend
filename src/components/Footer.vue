<template>
  <div>
    <footer class="section has-background-white-ter">
      <div class="columns">
        <div class="column has-text-centered my-footer-pad">
          <p
            class="is-size-6 has-text-grey-light my-footer-margin"
            v-for="info in infos"
            :key="info.id"
          >
            {{ info.intro}}
            <a :href="info.url" :target="info.target">{{ info.extra }}</a>.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      infos: [
        {
          id: 1,
          intro: 'Illery - Made by ',
          url: 'https://francisco-mendes.tk',
          target: 'blank',
          extra: 'Francisco Mendes'
        },
        {
          id: 2,
          intro: 'License - ',
          url: 'https://choosealicense.com/licenses/mit/',
          target: 'blank',
          extra: 'MIT'
        }
      ]
    }
  }
}
</script>

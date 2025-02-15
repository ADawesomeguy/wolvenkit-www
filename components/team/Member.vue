<template>
  <div class="teamMember">
    <div v-if="profileImage" class="teamMember__imageContainer">
      <img v-lazy="profileImage" :alt="`${member.name}'s profile picture`">
    </div>
    <div v-else class="teamMember__imageContainerNone">
      <div class="teamMember__color" :style="{ background: member.color ? `rgb(${member.color})` : null }" />
    </div>

    <div class="teamMember__info">
      <div class="teamMember__personalInfo">
        <p class="teamMember__name">
          {{ member.name }}
        </p>
        <ul v-if="member.socials || member.country" class="teamMember__socials">
          <li
            v-if="member.country"
            class="teamMember__socialIcon"
          >
            <CountryFlag
              :country="member.country"
              size="small"
              class="teamMember__socialIcon__flag"
            />
          </li>
          <template v-if="member.socials">
            <li
              v-for="social in member.socials"
              :key="social.service"
              class="teamMember__socialIcon"
            >
              <a :href="social.link">
                <GithubIcon v-if="social.service === 'github'" />
                <TwitterIcon v-else-if="social.service === 'twitter'" />
                <RedditIcon v-else-if="social.service === 'reddit'" />
                <WebIcon v-else-if="social.service === 'website'" />
                <OtherIcon v-else />
              </a>
            </li>
          </template>
        </ul>
      </div>
      <ul class="teamMember__projects">
        <li
          v-for="project in member.projects"
          :key="project"
          class="teamMember__project"
          :class="{'highlighted': projectFilter === project}"
        >
          {{ project }}
        </li>
      </ul>
      <p class="teamMember__description">
        {{ member.description }}
      </p>
    </div>
  </div>
</template>

<script>
import GithubIcon from 'vue-material-design-icons/Github.vue'
import TwitterIcon from 'vue-material-design-icons/Twitter.vue'
import RedditIcon from 'vue-material-design-icons/Reddit.vue'
import WebIcon from 'vue-material-design-icons/Web.vue'
import OtherIcon from 'vue-material-design-icons/OpenInNew.vue'
import CountryFlag from 'vue-country-flag'

export default {
  components: {
    GithubIcon,
    TwitterIcon,
    RedditIcon,
    WebIcon,
    OtherIcon,
    CountryFlag
  },

  props: {
    member: {
      type: Object,
      required: true
    },
    projectFilter: {
      type: String,
      default: null
    }
  },

  data () {
    return {
      profileImage: null,
      defaultProfileImage: 'image.png'
    }
  },

  async created () {
    this.profileImage = await this.getProfileImage()
  },

  methods: {
    getProfileImage () {
      if (this.member.profileImage && this.member.profileImage !== this.defaultProfileImage) {
        const profileImg = this.member.profileImage.substring(1)
        try {
          return new Promise((resolve) => {
            resolve({
              src: require(`~/static/${profileImg}`),
              loading: require(`~/static/${profileImg}?lqip`)
            })
          })
        } catch (err) {
          return this.getDefaultProfileImage()
        }
      } else {
        return this.getDefaultProfileImage()
      }
    },
    getDefaultProfileImage () {
      return '/logo_temp.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.teamMember {
  display: flex;
  align-items: center;
  margin-bottom: 2em;
  width: 100%;

  &__imageContainer,
  &__imageContainerNone {
    width: 7em;
    min-width: 7em;
    height: 7em;
    margin-right: 2em;
    border-radius: 100%;
    overflow: hidden;
    border: 5px solid var(--color-bg-alt);
    box-shadow: 0 0.25em 15px 0 rgba(0, 0, 0, 0.2);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(25px);
      transform: scale(1.1);
      transition: all 0.2s ease;

      &[lazy=loaded] {
        transform: scale(1);
        filter: none;
      }
    }
  }

  &__color {
    width: 100%;
    height: 100%;
    background: var(--color-primary);
  }

  &__info {
    width: 100%;

    &::after {
      content: '';
      display: block;
      height: 2px;
      width: 100%;
      margin-top: 1em;
      background: linear-gradient(to right, var(--color-primary), transparent);
    }
  }

  &__personalInfo {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__name {
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 0.25em;
    margin-right: 0.5em;
    word-break: break-all;
  }

  &__socials {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
  }

  &__socialIcon {
    display: inline-block;
    margin-right: 0.5em;
    transition: all 0.2s ease;

    > a {
      color: inherit;
    }

    &:hover {
      color: var(--color-primary-light);
    }

    &__flag {
      margin: -11px -18.5px !important;
      transform: scale(0.35) !important;
    }
  }

  &__projects {
    list-style: none;
    padding: 0;
    margin-bottom: 1em;
  }

  &__project {
    display: inline-block;
    margin-right: 0.5em;
    color: var(--color-text-dark);
    padding: 0.3em 0.5em;
    border-radius: 0.5em;
    font-size: 0.9em;
    background: var(--color-bg-alt);

    &.highlighted {
      filter: brightness(150%);
      color: var(--color-primary-light);
    }
  }

  &__description {
    min-height: 25px;
  }
}
</style>

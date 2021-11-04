<template>
  <div>
    <user-input-form :user="user" submit="createUser"></user-input-form>
  </div>
</template>
<script lang="ts">
import Component from 'vue-class-component'
import { Vue } from 'vue-property-decorator'
import UserInputForm from '@/components/syncprops/syncChild.vue'
import { defaultUser } from '@/components/syncprops/helperUser.js'

@Component({
  components: {
    UserInputForm,
  },
})
export default class SyncParent extends Vue {
  user: object = defaultUser()
}
</script>

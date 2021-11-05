<template>
  <div>
    <user-input-form
      :email.sync="user.email"
      :name.sync="user.name"
      @submit="createUser"
    ></user-input-form>
  </div>
</template>
<script lang="ts">
import Component from 'vue-class-component'
import { Vue } from 'vue-property-decorator'
import UserInputForm from '@/components/syncprops/syncChild.vue'
import { defaultUser } from '@/components/syncprops/helperUser'

@Component({
  components: {
    UserInputForm,
  },
})
export default class SyncParent extends Vue {
  user: object = defaultUser()

  createUser() {
    console.log('確認します', this.user)
  }
}
</script>

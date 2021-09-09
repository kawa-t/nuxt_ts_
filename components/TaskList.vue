<template>
  <div></div>
</template>
<script lang="ts">
import { Componrnt, Vue, Prop } from 'vue-property-decorator'
import axios from 'axios'
import InputForm from '@/components/InputForms.vue'

interface Task {
  id: number
  todo: string
  priority: number
  completeFlag: boolean
}

interface Priority {
  [key: number]: string
}

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'

@Component({
  components: {
    InputForm,
  },
})
export default class TaskList extends Vue {}
</script>

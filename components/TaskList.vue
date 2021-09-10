<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
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
export default class TaskList extends Vue {
  taskList: Task[] = []
  priority: Priority = { 0: '小', 1: '中', 2: '大' }
  @Prop({ type: Boolean, required: true })
  completeFlag!: boolean

  getTodoList() {
    try {
      axios
        .get(process.env.API + '/tasks/', {
          responseType: 'json',
          params: { complete_flag: this.completeFlag },
        })
        .then((response) => {
          this.taskList = response.data
        })
        .catch((error) => {
          return error
        })
    } catch (e) {
      return e
    }
  }

  created() {
    this.getTodoList()
  }
}
</script>

<template>
  <div>
    <template v-if="!completeFlag">
      <InputForm @init-todo-list="getTodoLIst()" />
    </template>
    <v-container fluid>
      <v-simple-table>
        <thead>
          <tr>
            <th>ID</th>
            <th>やること</th>
            <th>優先度</th>
            <th>ステータス</th>
            <th v-if="!completeFlag" class="text-center">編集</th>
            <th>削除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in taskList" :key="task.id">
            <td>{{ task.id }}</td>
            <td>{{ task.todo }}</td>
            <td>{{ stringPriority(task.priority) }}</td>
            <td v-if="!completeFlag" class="text-center">
              <v-btn
                class="ma-2"
                color="primary"
                dark
                @click="completeClick(task.id)"
                >Complete</v-btn
              >
            </td>
            <td v-else class="text-center">
              <v-btn
                class="ma-2"
                color="secondary"
                dark
                @click="compkleteClick(task.id)"
                >Incomplete</v-btn
              >
              <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-container>
  </div>
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

  completedClick(id: string) {
    try {
      axios
        .patch(process.env.API + '/tasks/' + id + '/', {
          complete_flag: !this.completeFlag,
        })
        .then(() => {
          this.getTodoList()
        })
    } catch (e) {
      return e
    }
  }

  deleteClick(id: string) {
    try {
      axios.delete(process.env.API + '/tasks/' + id + '/').then(() => {
        this.getTodoList()
      })
    } catch (e) {
      return e
    }
  }

  stringPriority(priority: number): string {
    return this.priority[priority]
  }

  created() {
    this.getTodoList()
  }
}
</script>

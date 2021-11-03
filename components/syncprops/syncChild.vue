<template>
  <div>
    <form action="">
      <label>
        メールアドレス
        <input type="text" v-model="user.email" />
      </label>
      <label>
        名前
        <input type="text" v-model="user.name" />
      </label>
      <button type="submit" @click="$emit('submit')">登録</button>
    </form>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class SyncChild extends Vue {
  @Prop({ type: Object, default: false }) user?: string
}
</script>

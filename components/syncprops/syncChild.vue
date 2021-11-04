<template>
  <div>
    <form action="">
      <label>
        メールアドレス
        <input v-model="user.email" type="text" />
      </label>
      <label>
        名前
        <input v-model="user.name" type="text" />
      </label>
      <button type="submit" @click="$emit('submit')">登録</button>
    </form>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class SyncChild extends Vue {
  @Prop({ type: Object, default: () => ({}) }) user?: string
}
</script>

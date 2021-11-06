<template>
  <div>
    <div>
      子は親から渡ってきたデータが更新されたことを子から親に通知するために、.sync修飾子を使う
    </div>
    <form action="" class="flex flex-col">
      <div>
        <label>
          メールアドレス
          <input
            v-model="user.email"
            type="text"
            class="
              shadow
              appearance-none
              border
              rounded
              w-1/2
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none
              focus:shadow-outline
            "
            :value="email"
            @ipunt="$emit('update:email,$event.target.value')"
          />
        </label>
      </div>
      <div>
        <label>
          名前
          <input
            v-model="user.name"
            type="text"
            class="
              shadow
              appearance-none
              border
              rounded
              w-1/2
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none
              focus:shadow-outline
            "
            value="name"
            @input="$emit('update:name', $event.target.value)"
          />
        </label>
      </div>
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

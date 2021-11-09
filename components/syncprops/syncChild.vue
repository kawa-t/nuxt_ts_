<template>
  <div>
    <div>
      子は親から渡ってきたデータが更新されたことを子から親に通知するために、.sync修飾子を使う
    </div>
    <form class="flex flex-col" @submit.prevent="$emit('send')">
      <div class="my-4">
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
            value="email"
            @ipunt="$emit('update:email,$event.target.value')"
          />
        </label>
      </div>
      <div class="my-4">
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
      <button
        type="submit"
        class="
          inline-block
          bg-indigo-500
          hover:bg-indigo-600
          active:bg-indigo-700
          focus-visible:ring
          ring-indigo-300
          text-white text-sm
          md:text-base
          font-semibold
          text-center
          rounded-lg
          outline-none
          transition
          duration-100
          px-8
          py-3
        "
        @click="$emit('submit')"
      >
        登録
      </button>
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

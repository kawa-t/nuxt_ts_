<template>
  <div>
    <div class="mt-5">
      <button
        class="
          px-2
          py-1
          text-green-500
          border border-green-500
          font-semibold
          rounded
          hover:bg-green-100
        "
        :disabled="isStop"
        :class="{ disable: isStop }"
        @click="callbackfn('callback')"
      >
        {{ callbackVer }}
      </button>
      <button
        class="
          px-2
          py-1
          text-yellow-500
          border border-yellow-500
          font-semibold
          rounded
          hover:bg-yellow-100
        "
        :disabled="isStop"
        :class="{ disable: isStop }"
        @click="promisefn('promise')"
      >
        {{ promiseVer }}
      </button>
      <button
        class="
          px-2
          py-1
          text-blue-500
          border border-blue-500
          font-semibold
          rounded
          hover:bg-blue-100
        "
        :disabled="isStop"
        :class="{ disable: isStop }"
        @click="asyncawaitfn('async')"
      >
        {{ asyncAwaitVer }}
      </button>
    </div>
    <div v-show="isActive == 'callback'">普通の書き方</div>
    <div v-show="isActive == 'promise'">Promiseの書き方</div>
    <div v-show="isActive == 'async'">
      <span class="prism-title">AsyncとAwaitを使って記述</span>
      <pre class="shadow-lg">
        <code class="language-typescript">
export default async function asyncawaitSmaple() {
  const url = &#039;https://api.github.com/users/kawa-t&#039;

  type Profile = {
    login: string
    id: number
  }

  // Promiseの処理を型定義する
  // Promiseの処理の結果、Profileの型の形式のオブジェクトまたはnullが帰ってくる
  type FetchProfileType = () =&gt; Promise&lt;Profile | null | undefined &gt;

  // 上で非同期処理の型と定義したので、アノテーションでこの関数は非同期処理であることを明示する
  const fetchProfile: FetchProfileType = async () =&gt; {
    const response = await fetch(url)
      .then((res) =&gt; res)
      .catch((error) =&gt; {
        console.log(error)
        return null
      })

    // responceに値が返ってこない（=null）だったときはnullを返すことを明示
    if (!response) {
      return null
    }

    const result = await response
      .json()
      .then((json: Profile) =&gt; {
        console.log(json)
        return json
      })
      .catch((error) =&gt; {
        console.log(error)
        return null
      })
    console.log(&#039;Async Awaitの結果&#039;, result)
  }

  // 上記関数を実行して表示する
  const profile = await fetchProfile()
  if (profile) {
    console.log(&#039;取得した結果:3&#039;, profile)
  }
}
        </code>
      </pre>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Prism from '@/plugins/prism'
import callbackAction from '../utils/asyncPractice/callback'
import promiseAction from '../utils/asyncPractice/promise'
import asyncawaitAction from '../utils/asyncPractice/asyncawait'

@Component
export default class CounterComponent extends Vue {
  // data
  callbackVer: string = 'callback関数で実行'
  promiseVer: string = 'Promiseで実行'
  asyncAwaitVer: string = 'AsyncAwawitで実行'
  isActive: string = 'callback'
  isStop: boolean = false
  timeout: number = 10000 // 10秒間

  // メソッド
  callbackfn(version: string) {
    this.isActive = version
    this.buttonControl(version)
  }

  promisefn(version: string) {
    this.isActive = version
    this.buttonControl(version)
  }

  asyncawaitfn(version: string) {
    this.isActive = version
    this.buttonControl(version)
  }

  buttonControl(version: string) {
    if (this.isStop === false) {
      switch (version) {
        case 'callback':
          callbackAction()
          break
        case 'promise':
          promiseAction()
          break
        case 'async':
          asyncawaitAction()
          break
      }
      this.isStop = true
    }
    // ボタン制御
    setTimeout(() => {
      this.isStop = false
    }, this.timeout)
  }

  // Computed

  // Mounted
  mounted() {
    Prism.highlightAll()
  }
}
</script>
<style>
.disable {
  @apply px-2
  py-1
  border border-gray-500
  font-semibold
  rounded
  hover:bg-gray-100 opacity-50;
}
.prism-title {
  position: relative;
  top: 35px;
  right: 17px;
  z-index: 30;
  background: #272822;
  font-size: 90%;
  display: inline-block;
  color: #fff;
  letter-spacing: 0.1em;
  margin: 0px 20px;
  padding: 3px 15px 0px 15px;
  border-radius: 0px 5px 0px 0px;
}
</style>

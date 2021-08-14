<template>
  <div>
    <button @click="callbackfn">{{ callbackVer }}</button>
    <button @click="promisefn">{{ promiseVer }}</button>
    <button @click="asyncawaitfn">{{ asyncAwaitVer }}</button>
    <div class="prism__block">
      <span class="prism-title">AsyncとAwaitを使って記述</span>
      <pre>
        <code class="language-js">
export default async function asyncawaitSmaple() {
  const url = &#039;https://api.github.com/users/kawa-t&#039;

  type Profile = {
    login: string
    id: number
  }

  // Promiseの処理を型定義する
  // Promiseの処理の結果、Profileの型の形式のオブジェクトまたはnullが帰ってくる
  type FetchProfileType = () =&gt; Promise&lt;Profile | null | undefined&gt;

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

  // メソッド
  callbackfn() {
    callbackAction()
  }

  promisefn() {
    promiseAction()
  }

  asyncawaitfn() {
    asyncawaitAction()
  }

  mounted() {
    Prism.highlightAll()
  }
}
</script>
<style>
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

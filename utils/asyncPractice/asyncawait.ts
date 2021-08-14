export default async function asyncawaitSmaple() {
  const url = 'https://api.github.com/users/kawa-t'

  type Profile = {
    login: string
    id: number
  }

  // Promiseの処理を型定義する
  // Promiseの処理の結果、Profileの型の形式のオブジェクトまたはnullが帰ってくる
  type FetchProfileType = () => Promise<Profile | null | undefined>

  // 上で非同期処理の型と定義したので、アノテーションでこの関数は非同期処理であることを明示する
  const fetchProfile: FetchProfileType = async () => {
    const response = await fetch(url)
      .then((res) => res)
      .catch((error) => {
        console.log(error)
        return null
      })

    // responceに値が返ってこない（=null）だったときはnullを返すことを明示
    if (!response) {
      return null
    }

    const result = await response
      .json()
      .then((json: Profile) => {
        console.log(json)
        return json
      })
      .catch((error) => {
        console.log(error)
        return null
      })
    console.log('Async Awaitの結果', result)
  }

  // 上記関数を実行して表示する
  const profile = await fetchProfile()
  if (profile) {
    console.log('取得した結果:3', profile)
  }
}

export default function promiseSample() {
  const url = 'https://api.github.com/users/kawa-t'

  type Profile = {
    login: string
    id: number
  }

  // Promiseの処理を型定義する
  // Promiseの処理の結果、Profileの型の形式のオブジェクトまたはnullが帰ってくる
  type FetchProfileType = () => Promise<Profile | null>

  // 定義した型をアノテーションする
  const fetchProfile: FetchProfileType = () => {
    // new Promiseでインスタンス化して、fetchProfile関数はPromiseを返すことを宣言する
    // return new Promise()
    // さらに、Promiseはresolveとrejectを持っているのでこうなる。
    // return new Promise((resolve, reject) => {})

    return new Promise((resolve, reject) => {
      return fetch(url)
        .then((res) => {
          res
            .json()
            .then((json) => {
              console.log('Promise results First:', json)
              // return jsonをresolveに置き換える
              resolve(json)
            })
            .catch((error) => {
              console.log(error)
              // rejectでerrorを返す
              reject(error)
            })
        })
        .catch((error) => {
          console.log(error)
          // rejectでerrorを返す
          reject(error)
        })
    })
  }

  // Peomiseを返すのでthenメソッドまたはcatchメソッドが使える
  fetchProfile()
    .then((profile) => {
      if (profile) {
        console.log('profile is Second', profile)
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

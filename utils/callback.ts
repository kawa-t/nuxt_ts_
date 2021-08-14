export default function callbackSample() {
  const url = 'https://api.github.com/users/kawa-t'

  const fetchProfile = () => {
    return fetch(url) // returnはfetchメソッドを
      .then((res) => {
        res
          .json()
          .then((json) => {
            console.log('Async results:', json)
            return json
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const profile = fetchProfile()
  console.log(profile)
}

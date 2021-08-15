export default function objectSample(num: number) {
  if (num === 1) {
    type Hogefunction = (hikisuu: string) => string

    const roadfunction: Hogefunction = (street) => 'street name is' + street
    const resultRoad = roadfunction('沖縄')

    return resultRoad
  }

  if (num === 2) {
    // オブジェクトの型のエイリアス
    // type Country = {
    //   lang: string
    //   count: number
    // }
    // const japan: Country = {
    //   lang: 'ja',
    //   count: 3,
    // }
    return '23'
  }
}

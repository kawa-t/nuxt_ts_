export default function objectSample(num: number) {
  if (num === 1) {
    type Hogefunction = (hikisuu: string) => string

    const roadfunction: Hogefunction = (street) => 'street name is' + street
    const resultRoad = roadfunction('Tokyo')

    return resultRoad
  }

  if (num === 2) {
    // 配列の型を定義する
    // number[]
    function SumOfpos(arr: number[]) {
      return arr.filter((num) => num >= 0).reduce((acc, num) => acc + num, 0)
    }
    const sum: number = SumOfpos([1, 3, -2, 0])
    console.log(sum)
  }

  if (num === 3) {
    console.log(3)
  }
}

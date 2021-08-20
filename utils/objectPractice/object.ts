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
    // 文字列を指定する
    type Speed = 'slow' | 'medium' | 'fast'
    function getSpeed(speed: Speed) {
      switch (speed) {
        case 'slow':
          return 10
        case 'medium':
          return 50
      }
    }
    console.log(getSpeed('fast'))
  }

  if (num === 24) {
    // interface AddEventListenerOptionsObject {
    //   capture?: boolean
    //   once?: boolean
    //   passive?: boolean
    // }
    // declare function addEvenrListerner(
    //   type: string,
    //   handler: () => void,
    //   options?: boolean | AddEventListenerOptionsObject
    // ): void
    // addEvenrListerner('footer', () => {})
  }
}

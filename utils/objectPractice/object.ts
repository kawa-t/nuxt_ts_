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

  if (num === 34) {
    type Action =
      | {
          type: 'increment'
          amount: number
        }
      | {
          type: 'decrement'
          amount: number
        }
      | {
          type: 'reset'
          value: number
        }

    const reducer = (state: number, action: Action) => {
      switch (action.type) {
        case 'increment':
          return state + action.amount
        case 'decrement':
          return state - action.amount
        case 'reset':
          return action.value
        default:
          break
      }
    }
    console.log(reducer)
  }

  if (num === 41) {
    function getFoo<T extends object>(
      obj: T
    ): T extends { foo: infer E } ? E : unknown {
      return (obj as any).foo
    }

    // numなら数値型
    const numShow = getFoo({
      foo: 123,
    })

    const strShow = getFoo({
      foo: 'hoge',
      bar: 0,
    })

    console.log(numShow)
    console.log(strShow)
  }
}

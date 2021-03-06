import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

// 新たにモジュールを作成するたびに、作成したモジュールをこのファイルに追加する
import Todo from '@/store/modules/todo'
// 追加でNewsを追加してみる
// import News from '@/store/modules/news'

// eslint-disable-next-line import/no-mutable-exports
let TodoStore: Todo

function initialiseStores(store: Store<any>): void {
  TodoStore = getModule(Todo, store)
}

export { initialiseStores, TodoStore }

import { Asset } from 'contentful'

export interface IPostProps {
  slug: string
  id: string
  headerImage: Asset
  headerImageLight: Asset
  content: string
  summary: string
  publishedAt: string
  title: string
  tags: string[]
  isPublished: boolean
  relatedPosts: string[]
}

export default class PostEntity {
  private _props: IPostProps

  constructor(props: IPostProps) {
    this._props = {
      // relatedPosts: [],
      ...props,
    }
  }

  get props(): IPostProps {
    return this._props
  }

  updateRelatedPosts(relatedPosts: string[]) {
    this._props = {
      ...this._props,
      relatedPosts,
    }
  }
}

// const AssetFactory = (): Asset => {
// }

// export const PostPropsFactory = (props?: Partial<IPostProps>): IPostProps => {
//   return {
//     slug: 'dummy',
//     id: 'dummyId',
//     tags: ['Life', 'Space'],
//     summary:
//       '海外ゲストのアテンドスタッフとして、日本初のVue.jsカンファレンスに参加してきました。イベントの参加レポートと、翌日の東京観光の様子をお届けします。 ',
//     content: 'テスト',
//     publishedAt: '2018-11-09T12:30+09:00',
//     title: 'VueFes 2018にスタッフとして参加してきました。',
//     // headerImage: AssetFactory(),
//     // headerImageLight: AssetFactory(),
//     isPublished: true,
//     relatedPosts: [],
//     ...props,
//   }
// }

// export const PostEntityFactory = (props?: Partial<IPostProps>): PostEntity => {
//   return new PostEntity(PostPropsFactory(props))
// }

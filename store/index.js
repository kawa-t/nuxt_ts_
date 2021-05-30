import taxonomy from '../plugins/taxonomy'
export const state = () => ({
  category: [...taxonomy.category],
  tags: [...taxonomy.tags],
})

export const getters = {
  getTagTextBySlug(state) {
    return (slug) => {
      const idx = state.tags.findIndex((tag) => {
        return tag.slug === slug
      })
      return idx > -1 ? state.tags[idx].text : undefined
    }
  },
  getCategoryTextBySlug(state) {
    return (slug) => {
      const idx = state.category.findIndex((tag) => {
        return tag.slug === slug
      })
      return idx > -1 ? state.category[idx].text : undefined
    }
  },
}

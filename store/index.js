import taxonomy from '../taxonomy'
export const state = () => ({
  category: [...taxonomy.category],
  tags: [...taxonomy.tags],
})

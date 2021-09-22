module.exports = {
  presets: [],
  env: {
    test: {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    },
  },
}

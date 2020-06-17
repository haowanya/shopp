module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //vant组件的按需引入
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}

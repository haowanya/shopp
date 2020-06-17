module.exports = {
  lintOnSave: false, // 关闭eslint规则检查

  
    
      css: {
        loaderOptions: {
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 75
              })
            ]
          }
        }
      },
      configureWebpack:{
        resolve: {
            alias: {
                '@':resolve('src/'),
                'pages': resolve('src/pages/'),
                'components': resolve('src/components'),
            }
        }
    }
}


 




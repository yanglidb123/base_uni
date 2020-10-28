# base_uni
uniapp H5 APP 基本项目结构 配置了多语言 插件添加 全局过滤器 mixins

│  App.vue
│  env.js
│  main.js
│  manifest.json
│  package-lock.json
│  package.json
│  pages.json
│  README.md
│  uni.scss
│  vue.config.js
│  
├─components 
├─filters
│      filterDate.js
│      filterDecimal.js
│      filterFixed.js
│      index.js
│      
├─hybrid
│  └─html
├─language
│  │  index.js
│  │  
│  └─modules
│          en.js
│          jp.js
│          zh.js
│          
├─mixins
│      countdown.js
│      index.js
│      
├─pages
│  └─index
│          index.vue
│          
├─plugins
│      arrayShuffle.js
│      getCopy.js
│      getRandom.js
│      index.js
│      loaded.js
│      loading.js
│      previewImg.js
│      Router.js
│      setCopy.js
│      showModal.js
│      toast.js
│      toastSuc.js
│      
├─static
│      logo.png
│      
├─store
│      index.js
│      
└─style
        base.scss
        common.scss
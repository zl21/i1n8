<template>
  <div class="ProManuals">
    <ul>
      <li>
        <h2>介绍</h2>
        <span>
          @burgeon/internationalization是上海伯俊中台事业部产品中心项目架构私有依赖包仓库中针对于后期的海外用户有国际化需求开发的语言包功能模块;
          秉承前端项目工程化的思想, 独立模块依赖包便于后期迭代维护.
        </span>
      </li>
      <li>
        <h2>安装教程</h2>
        <h4>一. 简易化安装依赖:</h4>
        <span
          >命令行: npm install @burgeon/internationalization --registry
          http://47.102.123.140:4873;</span
        >
        <h4>二. nrm安装依赖:</h4>
      </li>
      <li>
        <h2>使用说明</h2>
        <h4>一. 全局(index.js)引入并挂载:</h4>
        <span>
          <!-- import i18n from '@burgeon/internationalization/i18n/i18n.js';
          window.vmI18n = i18n; -->
        </span>
        <h4>二. 在X.vue中使用</h4>
        <span>
          <!-- 1）注意要在该vue文件中的data中return一下：
     data() {
       return { vmI18n: window.vmI18n,}
     }
   2）具体使用方法：
     a. data中：vmI18n.t('btn.manualCreation')
     b. method中：this.vmI18n.t('btn.manualCreation')
     c. 标签中： {{ vmI18n.t("common.all") }}
     d. 暂不支持在独立的js文件中使用 -->
        </span>
      </li>
      <br />
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProManuals",
  data() {
    return {
      msg: "Welcome to @burgeon/internationalization",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2,
h4 {
  padding: 10px;
  font-weight: normal;
  text-align: left;
}
ul {
  list-style-type: none;
  padding: 10px;
  font-size: 14px;
}
li {
  /* display: inline-block; */
  margin: 5px 10px;
  text-align: left;
}
a {
  color: #42b983;
}
</style>

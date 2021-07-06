<template>
  <div class="ProManuals">
    <h3>* 注：</h3>
    <ul>
      <li>可以使用任意未被使用的字符串，建议驼峰或下划线'_'命名；</li>
      <li>可以在上方搜索栏中搜索目标KEY是否已经被占用；</li>
      <li>建议新增KEY而非改变现有的KEY。</li>
    </ul>
    <h2>可使用KEY列表</h2>
    <div class="hw-table">
      <Table border :columns="columns" :data="data"></Table>
    </div>
    <!-- <ul>
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
        <span> -->
    <!-- import i18n from '@burgeon/internationalization/i18n/i18n.js';
          window.vmI18n = i18n; -->
    <!-- </span>
        <h4>二. 在X.vue中使用</h4>
        <span> -->
    <!-- 1）注意要在该vue文件中的data中return一下：
     data() {
       return { vmI18n: window.vmI18n,}
     }
   2）具体使用方法：
     a. data中：vmI18n.t('btn.manualCreation')
     b. method中：this.vmI18n.t('btn.manualCreation')
     c. 标签中： {{ vmI18n.t("common.all") }}
     d. 暂不支持在独立的js文件中使用 -->
    <!-- </span>
      </li>
      <br />
    </ul> -->
  </div>
</template>

<script>
import { columnsKey, dataKey } from '../config'

export default {
  name: "ProManuals",
  data() {
    return {
      msg: "Welcome to @burgeon/internationalization",
      columns: columnsKey,
      data: dataKey,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hw-table {
  padding: 0 25vw 10px;
}

h1,
h2 {
  padding: 10px 0;
  font-weight: normal;
}
h3 {
  padding: 8px 30px;
  font-weight: normal;
  text-align: left;
}
/* ul {
  list-style-type: none;
  padding: 10px 0;
  font-size: 14px;
} */

ul {
  /* list-style-type: none; */
  padding: 0 50px;
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

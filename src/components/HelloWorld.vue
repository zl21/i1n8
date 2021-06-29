<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="hw-table">
      <Table border :columns="columns" :data="data"></Table>
    </div>
    <!--     <ul>
      <li>
        <a
          href="http://knowledge.ark.burgeononline.com/repository#/entryComponents/2/908030/2/2061"
          target="_blank"
        >
          产品主题布局规范文档
        </a>
      </li>
      <li>
        <a
          href="http://knowledge.ark.burgeononline.com/repository#/entryComponents/2/907859/2/2061"
          target="_blank"
        >
          omsUtils
        </a>
      </li>
      <li>
        <a
          href="http://knowledge.ark.burgeononline.com/repository#/entryComponents/2/907855/2/2061"
          target="_blank"
        >
          business-components使用文档
        </a>
      </li>
      <li>
        <a
          href="http://knowledge.ark.burgeononline.com/repository#/entryComponents/2/63456/2/2061"
          target="_blank"
        >
          project-logic使用文档
        </a>
      </li>
      <br />
    </ul> -->
    <!-- <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li> -->
  </div>
</template>

<script>
import { columns, data } from '../config'
export default {
  name: "HelloWorld",
  data() {
    return {
      columns,
      data,
      msg: "Welcome to @burgeon/internationalization",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hw-table {
  padding: 0 35vw;
}

h1,
h2 {
  padding: 10px 0;
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 10px 0;
  font-size: 14px;
}
li {
  /* display: inline-block; */
  margin: 5px 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <div class="jss1"></div>
    <div class="jss2">
      <div class="titleDom">
        <Icon type="ios-ionitron-outline" />
        <label>OMS2.0语言包查询站点</label>
      </div>
      <div class="selectDom">
        <DropDownSelectFilter
          style="width: '100%'"
          :single="true"
          :data="data"
          :totalRowCount="totalRowCount"
          :pageSize="pageSize"
          :showColnameKey="'show'"
          @on-page-change="changePage"
          @on-input-value-change="inputValueChange"
          @on-fkrp-selected="fkrpSelected"
          :dataEmptyMessage="dataEmptyMessage"
          :AutoData="AutoData"
          :columnsKey="columnsKey"
          :hidecolumns="hidecolumns"
          isBackRowItem
        >
        </DropDownSelectFilter>
        <!-- <Select
          v-model="selectValue"
          filterable
          remote
          :remote-method="remoteMethod"
          @on-change="onChange"
          @on-open-change="onOpenChange"
          @on-query-change="onQueryChange"
          :loading="loading"
          size="default"
          placeholder="请输入"
          label-in-value
          clickOutsideBlur
          not-found-text="包中暂无,请联系管理员添加"
        >
          <Option
            v-for="(option, index) in options"
            :value="option.value"
            :key="index"
            >{{ option.label }}</Option
          >
        </Select> -->

        <!-- <Button @click="search()">搜索</Button> -->
      </div>
    </div>
    <div class="jss3">
      <Tabs :value="showPane">
        <TabPane label="About" name="name1" icon="ios-home">
          <HelloWorld></HelloWorld>
        </TabPane>
        <TabPane label="Use" name="name2" icon="ios-at">
          <div class="name2">
            <h3>建议您在代码中这样使用：</h3>
            <label for="">{{ `$i18n.t('${msg}')` }}</label>
          </div>
        </TabPane>
        <TabPane label="Product manuals" name="name3" icon="ios-book">
          <ProManuals></ProManuals>
        </TabPane>
      </Tabs>
    </div>
    <div class="jss4">
      <div class="jss4_1">
        <h5>关于我们</h5>
        <p>OMS2.0语言包查询站点致力于语言包搜索。</p>
        <h5>版权申明</h5>
        <p>本站资源均来源于互联网，版权归原作者所有。</p>
        <p>如侵犯您的权益，请及时联系我们处理。</p>
      </div>
      <div class="jss4_1">
        <h5>联系方式</h5>
        <p>QQ群：4xxxxxxx</p>
        <h5>开发合作</h5>
        <p>zhou.l@burgeon.cn</p>
        <p style="margin: 10px 0px">
          <a
            class="jss53"
            href="https://gitee.com/product_centerfront_end/burgeon-internationalization"
            target="_blank"
            >测ICP试190xxxxx号-1</a
          >
        </p>
      </div>
      <div class="jss4_3">
        <div>
          <h5>微信公众号</h5>
          <img src="./assets/weixin.gif" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import ProManuals from "./components/ProManuals";
// import En from "./mock/en_US/en.js";
// import En from "@burgeon/internationalization/i18n/langs/zh_CN/zh.js";
import i18n from "@burgeon/internationalization/i18n"
var comType = ["object", "array"];
const lan = i18n.locale;
const lanData = i18n.messages[lan];
import { debounce } from 'lodash'

export default {
  name: "App",
  components: {
    HelloWorld,
    ProManuals,
  },
  data() {
    return {
      // columns: ['name', 'value'], // 表头
      dataEmptyMessage: '无',
      AutoData: [
        /* {
          "id": 0,
          "name": "03",
          "value": "北京仓库"
        }, */
      ],
      pageSize: 10,
      pageIndex: 1,
      totalRowCount: 0,
      totalData: [],
      columnsKey: ['label'],
      hidecolumns: ['ID'],
      data: {
        "start": 0,
        "tabth": [
          {
            "colname": "ID",
            "name": "序号",
            "show": false
          },
          {
            "colname": "label",
            "name": "文本",
            "show": true
          },
          {
            "colname": "value",
            "name": "编码",
            "show": false
          },
        ],
        "row": [
          /* {
            "ENAME": {
              "val": "总部"
            },
            "ECODE": {
              "val": "00"
            },
            "ID": {
              "val": "4919"
            }
          } */,]
      },
      selectValue: "",
      loading: false,
      options: [],
      showPane: "name1",
      currentLan: lanData,
      handelLanObj: {},
      handelLanList: [],
      msg: "",
    };
  },
  methods: {
    search() {
      if (this.msg) {
        this.showPane = "name2";
      } else {
        this.$Message.warning("请输入");
        return;
      }
    },
    remoteMethod(query) {

    },
    onChange(val) {
      this.msg = val.value;
      // this.showPane = "name2";
    },
    onOpenChange(val) {
      let jss2 = document.getElementsByClassName("jss2")[0];
      // if (val) {
      //   jss2.setAttribute("style", "height:350px");
      // } else jss2.setAttribute("style", "height:300px");
    },
    onQueryChange(val) { },
    changePage(e) {
      this.pageIndex = e;
      const startIndex = this.pageSize * (e - 1) + 1;
      const endIndex = e * this.pageSize;
      this.totalRowCount = this.totalData.length;
      this.$nextTick(() => {
        this.data.row = JSON.parse(JSON.stringify(this.totalData.slice(startIndex - 1, endIndex)));
        // bug：切到第二页loading一直在
      })
      // this.$set(this.data, 'row', this.totalData.slice(startIndex - 1, endIndex));
    },
    fkrpSelected(val) {
      const key = typeof val[0].rowItem.value == 'object' ? typeof val[0].rowItem.value.val : val[0].rowItem.value;
      if (key) {
        this.msg = key;
        this.showPane = "name2";
      } else {
        this.$Message.warning("请选择");
        return;
      }
    },
    inputValueChange: debounce(function (query) {
      if (query !== "") {
        this.loading = true;
        this.loading = false;
        const cl = JSON.parse(JSON.stringify(this.totalData));
        cl.map(i => {
          i.ID = i.ID.val;
          i.label = i.label.val;
          i.value = i.value.val;
        })
        const a1 = cl.filter(
          (item) => item.label.replace(/(^\s*)|(\s*$)/g, "").toLowerCase().indexOf(query.toLowerCase()) > -1
        );
        const a2 = cl.filter(
          (item) => item.value.replace(/(^\s*)|(\s*$)/g, "").toLowerCase().indexOf(query.toLowerCase()) > -1
        );
        this.AutoData = a1.concat(a2);
      } else {
        this.AutoData = [];
      }
    }, 500),
    handelLan() {
      const _this = this;
      const cl = _this.handelLanObj;
      // let aa = Object.entries(cl);
      /* for (const key in cl) {
        let item = { label: cl[key], value: key };
        // _this.handelLanList.push(item);

      } */
      let row = [];
      const arr = Object.keys(cl);
      for (let i = 0; i < arr.length; i++) {
        const item = {};
        item.ID = { val: i + 1 };
        item.value = { val: arr[i] };
        item.label = { val: cl[arr[i]] };
        row.push(item)
      }
      this.totalData = row;
      this.changePage(1);
    },
    plat(obj, prekey, resobj) {
      prekey = prekey ? prekey + "." : "";
      for (const key in obj) {
        let it = obj[key];
        let itType = typeof it;
        if (it && comType.indexOf(itType) != -1) {
          this.plat(it, prekey + key, resobj);
        } else {
          resobj[prekey + key] = it;
        }
      }
    },
  },
  mounted() {
    this.plat(this.currentLan, "", this.handelLanObj);
    this.handelLan();
  },
};
</script>
<style>
html {
  overflow-x: hidden;
}
</style>
<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
#app {
  .jss1 {
    top: -72px;
    width: 100%;
    z-index: 9;
    position: fixed;
    transition: top 600 ms;
  }
  .jss2 {
    position: relative;
    height: 300px;
    background: url(./assets/lan.jpg) fixed center 0 no-repeat;
    background-size: 100% 60%;
    box-shadow: 0px 2px 1px -1px #ccc;
    border-radius: 4px;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    .titleDom {
      position: relative;
      top: 44%;
      color: rgb(1, 57, 129);
      label {
        font-size: 20px;
        // border-bottom-style: groove;
      }
      /deep/ .ark-icon.iconfont.iconios-ionitron-outline.iconfont {
        font-size: 34px;
        position: relative;
        top: -7px;
      }
    }
    .selectDom {
      width: 80vw;
      height: 6vh;
      position: relative;
      top: 52%;
      left: 50%;
      transform: translateY(-50%) translateX(-12vw);
      display: flex;
      .ark-select.ark-select-single.ark-select-default {
        width: 300px;
      }
      /deep/ #dropDownSelectFilter {
        width: 25vw;
      }
      /deep/.ark-select-selection {
        border: solid 1px rgb(3, 102, 231);
        height: 100%;
        border-right: none;
        border-radius: 4px 0 0 4px;
      }
      /deep/.ark-select-input,
      /deep/.ark-select-selection-head {
        height: 100%;
      }
      /deep/.ark-btn.ark-btn-default {
        border-color: rgb(3, 102, 231);
        border-radius: 0 4px 4px 0;
      }
      /deep/.ark-select-dropdown {
        max-height: 100px;
      }
    }
  }
  .jss3 {
    overflow: hidden;
    min-height: 65vh;
    -webkit-overflow-scrolling: touch;
    display: flex;
    justify-content: center;
    /deep/.ark-tabs-bar {
      width: 388px;
      position: relative;
      left: 50%;
      transform: translateX(-45%);
    }
    .name2 {
      padding: 16px;
      label {
        display: inline-block;
        margin: 16px 0;
        font-size: 18px;
        color: #2d8cf0;
      }
    }
  }
  .jss4 {
    display: flex;
    padding: 5px 0;
    background: #ddd;
    justify-content: center;
    .jss4_1 {
      margin-right: 50px;
      h5 {
        margin: 10px 0 0 0;
      }
      p {
        margin: 0;
        font-size: 12px;
      }
    }
    .jss4_3 {
      display: flex;
      align-items: center;
      div {
        margin: 0 20px;
      }
      h5 {
        margin: 0;
        text-align: center;
      }
      img {
        width: 120px;
        display: block;
      }
    }
  }
}
</style>

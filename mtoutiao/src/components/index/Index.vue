<!--  -->
<template>
<div class='tt-m-index'>
    <div class="index-header">
        <div class="header-left">邮件</div>
        <div class="header-middle">头条</div>
        <div class="header-right">搜索</div>
    </div>
    <div class="center">
        <div class="index-nav">
        <a  class="list-nav">推荐</a >
        <a  class="list-nav">科技</a >
        <a  class="list-nav">汽车</a >
        <a  class="list-nav">体育</a >
        <a  class="list-nav">时尚</a >
        <a  class="list-nav">养生</a >
        <a  class="list-nav">故事</a>
        </div>
    </div>
    <div class="add">+</div>
    <div class="index-content">
        <div class="content-list">
            <div class="content-list-title">555</div>
            <div class="content-list-data">555</div>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less" scoped>
    .tt-m-index {
  .index-header {
      display: flex;
      justify-content: space-between;
      height: 4rem;
      background-color:var(--themeColor);
      font-size: 1.6rem;
      color: white;
      align-items: center;
      padding: 1rem;
    .header-left {

    }

    .header-middle {
        font-size: 2.5rem;
    }

    .header-right {

    }
  }
    .center{
        height: 3rem;
        .index-nav {
        //   overflow: hidden;
            overflow-y: hidden;
            overflow-x: scroll;
            white-space: nowrap;
            border-bottom: 1px solid #ddd;
            .list-nav {
            // float:left;
            width: 6rem;
            height: 3rem;
            line-height: 3rem;
            text-align: center;
            display: inline-block;
            }
        }
        .index-nav::-webkit-scrollbar{
            display: none;
        }
    }
    .add{
        height: 3rem;
        line-height: 3rem;
        float: right;
        font-size: 1.9rem;
        width: 3rem;
        text-align: center;
        color: var(--themeColor);
        margin-top: -3rem;
        background-color: white;
    }

  .index-content {
    .content-list {
      .content-list-title {

      }

      .content-list-data {

      }
    }
  }
}
</style>
<template>
  <div>
    <!-- <myheader></myheader> -->
    <!-- 轮播图 -->
    <swiper indicator-dots autoplay circular>
        <block v-for="(item,index) in swiperArr" :key="index">
            <swiper-item>
                <image mode="aspectFill" :src="item.image_src" />>
            </swiper-item>
        </block>
    </swiper>

    <!-- 分类布局 -->
    <ul class="cate-box">
      <li class="item" v-for="(item,index) in categoryArr" :key="index">
        <a :href="item.navigator_url">
          <image  :src="item.image_src"/>
        </a>
      </li>
    </ul>

    <!-- 楼层布局 -->
    <div class="section" v-for="(item, index) in floorList" :key="index">
      <!-- 标题 -->
      <div class="title">
        <img class="image" :src="item.floor_title.image_src" alt="">
      </div>
      <div class="content">
        <a class="nav" href="#" v-for="(it, i) in item.product_list" :key="i">
          <img class="image" :src="it.image_src" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// 导入模块
import  tools from "../../utils/index";

// import myheader from "../../components/header"

export default {
  data() { 
    return {
      swiperArr:[],  //轮播图数据
      categoryArr:[], //分类数据
      floorList:[]  //楼层数据
    }
  },

  methods: {
    // 用于请求数据
    getData(){

      //请求轮播图数据
      tools.ThenAjax(`home/swiperdata`)

      .then((data)=>{
        this.swiperArr=data;
        //请求分类信息
        return tools.ThenAjax(`home/catitems`);
      })
      .then((data)=>{
        this.categoryArr=data;
        return tools.ThenAjax(`home/floordata`);
      })
      .then((data)=>{
        this.floorList=data;
        wx.hideLoading()
      })
    }
    
  },

  created(){
    
    this.getData();
  },
  // 挂载组件
  // components:{
  //   myheader
  // }
}
</script>

<style lang="less" scoped>
  
  swiper{
    height: 340rpx;
    width: 100%;
    swiper-item {
      width: 100%;
      height: 100%;
      image{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .cate-box{
    background-color: #fff;
    display: flex;
    padding-top: 24rpx;
    padding-bottom: 29rpx;
    .item{
      flex: 1;
      a{
        image{
          width: 128rpx;
          height: 128rpx;
          display: block;
          margin: 0 auto;
        }
      }
    }
  }

  .section{
    .title{
      position: relative;
      .image{
        height: 88rpx;
        width: 100%;
        background-color: #f4f4f4;
        padding-top: 30rpx;
      }
    }
    .content{
      padding: 20rpx 16rpx;
      height: 440rpx;
      .nav {
        display: block;
        float: left;
        width: 33.333%;
        height: 100%;
        padding: 5rpx;
        box-sizing: border-box;
      }
      .image {
        display: block;
        width: 100%;
        height: 100%;
      }
      // 只要不是第一个 nav
      .nav:not(:first-child) {
        height: 50%;
      }
    }
  }
</style>
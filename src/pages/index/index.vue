<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <!-- 搜索图标 -->
      <icon type="search" size="16"></icon>
      <input type="text" placeholder="搜索">
    </div>
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
    },
    // getHomeSwiper(){
    //   wx.request({
    //     url: 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata', //开发者服务器接口地址",
    //     data: {}, //请求的参数",
    //     method: 'GET',
    //     dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
    //     success: res => {
    //       // console.log("请求回来的数据");
    //       // console.log(res);
    //       this.swiperArr=res.data.message
    //     },
    //     fail: () => {},
    //     complete: () => {}
    //   });
    // },

    // // 请求分类数据
    // getHomeCategories(){
    //   wx.request({
    //     url: 'https://www.zhengzhicheng.cn/api/public/v1/home/catitems', //开发者服务器接口地址",
    //     data: {}, //请求的参数",
    //     method: 'GET',
    //     dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
    //     success: res => {
    //       // console.log("请求回来的分类数据");
    //       // console.log(res);
    //       this.categoryArr=res.data.message
    //     },
    //     fail: () => {},
    //     complete: () => {}
    //   });
    // },
    // // 请求楼层数据
    // getHomefloordata(){
    //   wx.request({
    //     url: 'https://www.zhengzhicheng.cn/api/public/v1/home/floordata', //开发者服务器接口地址",
    //     data: {}, //请求的参数",
    //     method: 'GET',
    //     dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
    //     success: res => {
    //       // console.log("请求回来的楼层数据");
    //       // console.log(res);
    //       this.floorList=res.data.message
    //     },
    //     fail: () => {},
    //     complete: () => {}
    //   });
    // }
  },

  created(){
    // this.getHomeSwiper();

    //     // 请求 分类数据
    //     this.getHomeCategories();

    //     // 请求 楼层数据
    //     this.getHomefloordata();
    this.getData();
  }
}
</script>

<style lang="less" scoped>
  .header{
    width: 100%;
    background-color: #ff2d4a;
    padding: 20rpx 16rpx;
    box-sizing: border-box;
    position: relative;
    icon{
      position: absolute;
      top: 32rpx;
      left: 50%;
      transform: translateX(-200%);
    }
    input{
      width: 100%;
      height: 60rpx;
      background-color: #fff;
      font-size: 24rpx;
      color: #bbb;
      text-align: center;
      border-radius: 10rpx;
    }
  }
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
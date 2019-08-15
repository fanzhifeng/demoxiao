<template>
    <div>
        <!-- 头部 -->
        <div class="header">
          <!-- 搜索图标 -->
          <icon type="search" size="16"></icon>
          <input type="text" placeholder="搜索">
        </div>
    </div>
</template>

<script>
export default {
    data() { 
        return {
            
        }
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
</style>
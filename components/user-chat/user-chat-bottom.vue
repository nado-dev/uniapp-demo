<template>
    <!-- 输入框 -->
    <view class="user-chat-bottom u-f-ac">
        <!-- 文本框+图标 -->
        <input type="text" placeholder="(ゝ∀･)" v-model="text"/>
        <view class="icon iconfont icon-fabu u-f-ajc" @tap="submit"> </view>
    </view>
    <!-- 输入框 --> 
</template>

<script>
    export default {
        data(){
            return{
                text:""
            }
        },
        methods:{
            submit(){
                this.$emit("submit",this.text);
                this.text="";
            }
        }
    }
</script>

<style>
.user-chat-bottom{
  /* border: 1upx solid; */
   position: fixed; 
   /* 置于底部 */
   bottom: 0;
   left: 0;
   right: 0;
   height: 100upx;
   padding: 0 20upx ;
   background: #FFFFFF;
   border-top: 3upx solid #EEEEEE;
  
}
.user-chat-bottom>input{
   /* border: 1upx solid #009687; */
     /* 占满剩余所有空间 */
    flex:1;
    background: #EEEEEE;
    padding-top: 10upx;
    padding-bottom: 10upx;
    padding-left: 10upx;
    border-radius: 10upx;
}
.user-chat-bottom>view{
    width: 100upx;
    margin-right: 14upx;
    margin-left: 20upx;
    background: #009687;
    font-size: 40upx;
    padding: 0;
    border-radius: 10upx;
    color: #FFFFFF;
    font-weight: bold;
}    
</style>

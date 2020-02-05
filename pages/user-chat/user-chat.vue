<template>
	<view>
        <scroll-view id="scroll-view" scroll-y :scroll-top="scrollTop"  
        :scroll-with-animation="true" :style="{height:style.contentH+'px'}">
        <!-- 底部的bottom是固定的，所以要动态计算前面这个框架的高度，以免遮档 -->
            <!-- 聊天列表 -->
            <block v-for="(item,index) in list" :key="index">
                <user-chat-list :item="item"  :index="index"></user-chat-list>
            </block>
            
          
        </scroll-view>
       
         <!-- 输入框 -->
        <user-chat-bottom @submit="submit"></user-chat-bottom>
		
	</view>
</template>

<script>
    
    import userChatBottom from '../../components/user-chat/user-chat-bottom.vue';
    import time from "../../common/time.js";
    import userChatList from "../../components/user-chat/user-chat-list.vue"
	
    export default {
        components:{
            userChatBottom,
            userChatList
        },
		data() {
			return {
                list:[],
                style:{
                    contentH:0,
                    itemH:0,
                    lastItemH:0
                },
               
                scrollTop:0,
			}
		},
        //加载时就转化时间，更新formatedTime
        onLoad(e) {
            this.initdata(JSON.parse(e.chatData));
            this.getData();
            this.initData();
        },
        onReady() {
            this.pageToButtom();
        },
		methods: {
            //func1初始化参数
            initData(){
                try{
                    const res = uni.getSystemInfoSync();
                    this.style.contentH = res.windowHeight - uni.upx2px(120);
                }catch(e){
                    //TODO handle the exception
                    console.error("res request failed")
                }
            },
			submit(chatText){   
                console.log(chatText);
                //示例代码***********************************************************
                let nowtime = Math.round(new Date() / 1000);
                let newitem = {
                    isMyMsg:true,
                    userPic:"../../static/demo/userpic/15.jpg",
                    type:"text",
                    data:chatText,
                    time:"1586262166" ,//时间戳：js默认10位，php：13位，转化要在最低三位补零
                    formatedTime:time.gettime.getChatTime(nowtime, this.list[this.list.length-1].time)
                };
                this.list.push(newitem);
             
                //示例代码***********************************************************
                this.pageToButtom();
            },
             //func2滚动条置于底部
            pageToButtom(){
               	let q=uni.createSelectorQuery();
                q.select('#scroll-view').boundingClientRect();
                q.selectAll('.user-chat-item').boundingClientRect();
                q.exec((res)=>{
                    res[1].forEach((ret)=>{
                        this.style.itemH += ret.height;
                    });
                   
                    if(this.style.itemH > this.style.contentH){
                        this.scrollTop=this.style.itemH ;
                      
                    }
                					
                })
                
            },
            //func3获取聊天数据
           getData(){
               //1服务端获取的数据
               //2示例数据******************************************************************
               let arr=[
                      {
                          isMyMsg:false,
                          userPic:"../../static/demo/userpic/16.jpg",
                          type:"text",
                          data:"聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容",
                          time:"1586262166" //时间戳：js默认10位，php：13位，转化要在最低三位补零
                         
                      },
                      {
                          isMyMsg:true,
                          userPic:"../../static/demo/userpic/15.jpg",
                          type:"img",
                          data:"../../static/demo/datapic/34.jpg",
                          time:"1586262166" //时间戳：js默认10位，php：13位，转化要在最低三位补零
                          
                      }
                  ];
               //2示例数据******************************************************************
              
               //3追加新属性formatedTime
               for (let i=0;i<arr.length;i++) {
                   if(i==0){
                        arr[i].formatedTime = time.gettime.getChatTime(arr[i].time, 0);
                   }
                   else{
                        arr[i].formatedTime = time.gettime.getChatTime(arr[i].time, arr[i-1].time);
                   }
                    // console.log(arr[i].formatedTime)
               }
               //4更新list
               this.list=arr;
           },
           //func5初始化
           initdata(obj){
              //1、修改标题
              uni.setNavigationBarTitle({
                  title:obj.userName
              });
           }
		}
	}
</script>

<style>

</style>

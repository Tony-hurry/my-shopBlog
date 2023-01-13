<template>
    <div class='baseInfo' >
        <div class="avatorSet" :style="{height:H*2+'px'}">
            <img :src="this.$store.state.user.avator" alt="" srcset="">
            <span>{{ this.$store.state.user.name }}</span>
        </div>
        <div class="dataShow" :style="{height:H/2+'px'}">
            <div class="option" v-for="(item,index) in dataOptions" :key="index"> 
               
                    <div class="icon" >
                        <img :src="item.icon" alt="">
                    </div>
                    <span >{{ item.text }}</span>
            </div>

        </div>
    </div>
</template>
<script>
import GetH from '@/mixins/GetH.js'
export default {
    name: 'BaseInfo',
    mixins:[GetH],
    data(){
        return {
            dataOptions:[{
                icon:require('@/assets/img/personal/guanzhu.png'),
                text:'关注'
            },
            {
                icon:require('@/assets/img/personal/fensi.png'),
                text:'粉丝'
            },
            {
                icon:require('@/assets/img/personal/fangwen.png'),
                text:'访问'
            },
            {
                icon:require('@/assets/img/personal/paihang.png'),
                text:'排名'
            }]
        }
    }
}
</script>
<style scoped lang="less">
.baseInfo{
    
    .avatorSet{
        width:100%;
        background-color: #af1426;
        border-bottom: 1px solid #efefef;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        img{
            display: block;
            border-radius: 50%;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            height:30%;
        }
        span{
            font-size: 18px;
            margin-top: 10px;
            font-weight: bold;
        }
    }
    .dataShow{
            transform: translateY(-50%);
            background-color: rgba(66, 191, 17, 0.4);
            display:flex;
            justify-content: space-around;
            align-items: center;
            .option{
                text-align: center;
                border-right:2px solid #fff;
                width:100%;
                height:90%;
                font-size:14px;
                .icon{ 
                    height:80%;
                    img{
                        height:100%;
                    }
                }
                
            }
        }
}
</style>
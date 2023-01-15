<template>
    <div class='baseInfo'>
        <div class="login" v-if="Object.keys(this.$store.state.user) != 0">
            <div class="avatorSet" :style="{ height: H * 2 + 'px' }">
                <img :src="this.$store.state.user.avator" alt="" srcset="">
                <span>{{ this.$store.state.user.name }}</span>
            </div>
            <div class="dataShow" :style="{ height: H / 2 + 'px' }">
                <div class="option" v-for="(item, index) in dataOptions" :key="index">

                    <div class="icon">
                        <img :src="item.icon" alt="">
                    </div>
                    <span>{{ item.text }}</span>
                </div>

            </div>
            <OptionCard></OptionCard>
        </div>
        <div class="unLogin" v-else>
            <div class="icons">
                <img :src="require('@/assets/img/personal/unLogin.png')" alt="">
            </div>
            <span>
                未登录，请先登录！
            </span>
            <div class="btnLogin" @click="loging">一 键 登 录</div>
        </div>

    </div>
</template>
<script>
import GetH from '@/mixins/GetH.js'
import OptionCard from '@/components/content/optionCard/OptionCard'
export default {
    name: 'BaseInfo',
    mixins: [GetH],
    components: {

        OptionCard
    },
    data() {
        return {
            dataOptions: [{
                icon: require('@/assets/img/personal/guanzhu.png'),
                text: '关注'
            },
            {
                icon: require('@/assets/img/personal/fensi.png'),
                text: '粉丝'
            },
            {
                icon: require('@/assets/img/personal/fangwen.png'),
                text: '访问'
            },
            {
                icon: require('@/assets/img/personal/paihang.png'),
                text: '排名'
            }]
        }
    },
    created() {
        //this.$store.commit('clearUser')
    },
    methods:{
        loging(){
            console.log('用户登录')
            this.$emit('loging')
        }
    }
}
</script>
<style scoped lang="less">
.baseInfo {
    .login {
        width: 100%;

        .avatorSet {
            width: 100%;
            background-color: #af1426;
            border-bottom: 1px solid #efefef;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;

            img {
                display: block;
                border-radius: 50%;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                height: 30%;
            }

            span {
                font-size: 18px;
                margin-top: 10px;
                font-weight: bold;
            }
        }

        .dataShow {
            transform: translateY(-50%);
            background-color: rgba(66, 191, 17, 0.4);
            display: flex;
            justify-content: space-around;
            align-items: center;

            .option {
                text-align: center;
                border-right: 2px solid #fff;
                width: 100%;
                height: 90%;
                font-size: 14px;

                .icon {
                    height: 80%;

                    img {
                        height: 100%;
                    }
                }

            }
        }
    }

    .unLogin {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .icons {
            img {
                width: 200px;

            }

        }

        span {
            display: block;
            font-size: 18px;
            margin-top: 20px;
            color: #f00;
            font-family: '宋体';
            font-weight: bold;
        }
        .btnLogin{
            width:200px;
            height:50px;
            margin-top:10px;
            background-color: green;
            text-align: center;
            line-height: 50px;
            border-radius: 5px;
            font-size: 18px;
            color:#fff;
            cursor:pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        }
    }

}
</style>
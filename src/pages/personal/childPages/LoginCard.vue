<template>
    <div class='loginCard'>
        <div class="containerLogin" :style="{ height: H * 2 + 'px' }">
            <div class="login-left">
                <div class="helpImg">
                    <img :src="require('@/assets/img/personal/imgLogin.jpg')" alt="">
                </div>

            </div>
            <div class="login-right">
                <h2>Login!</h2>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="用户名">
                        <el-input placeholder="请输入用户名" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
                    </el-form-item>

                    <el-form-item label="记住密码">
                        <el-switch v-model="form.rememberPwd"></el-switch>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即登陆</el-button>
                        <el-button @click="cancel">取消</el-button>
                    </el-form-item>
                </el-form>


            </div>
        </div>
    </div>
</template>
<script>
import GetH from '@/mixins/GetH'
import {postLoginUser} from '@/network/personal'
export default {
    name: 'LoginCard',
    mixins: [GetH],
    data() {
        return {
            form: {
                name: '',
                password: '',
                rememberPwd: false,
            }

        }
    },
    mounted() {

    },
    methods: {
        onSubmit() {
            console.log('submit!');
            postLoginUser(this.form).then(res=>{
                const token = res.data.message.token
                this.$store.commit('updateToken',token)
                this.$store.commit('updateUser',res.data.message.user)
                if(res.data.meta.status === 200){
                    this.$toast.show(res.data.meta.msg)
                    this.$emit('cancel')
                }
            })
        },
        cancel(){
            this.$emit('cancel')
        }
    }
}
</script>
<style scoped lang="less">
.loginCard {
    position: fixed;

    background-color: rgba(0, 0, 0, .12);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding-bottom: 80px;

    @media (max-width : 768px) {
        .containerLogin {
            z-index: 99;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px;
            width: 80%;
            height: 300px !important;
            background-color: rgba(0, 0, 0, .4);
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

            .login-left {

                display: none;

            }

            .login-right {
                height: 100%;
                padding: 5px;
                color: #fff;
                font-size: 18px;
                overflow: hidden;

                h2 {
                    margin-bottom: 3px;
                    text-align: center;
                }

                /* display: flex;
                text-align: center;
                justify-content: center; */
            }
        }
    }

    @media (min-width:768px) {
        .containerLogin {
            z-index: 99;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px;
            width: 80%;
            background-color: rgba(0, 0, 0, .4);
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

            .login-left {
                padding: 10px;
                display: flex;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                overflow: hidden;

                border-right: 1px solid rgba(230, 223, 223, 0.895);
                flex: 2;

                .helpImg {
                    border-radius: 5px;
                    overflow: hidden;
                    height: 100%;

                    img {
                        width: 100%;
                        display: block;

                    }
                }

            }

            .login-right {
                flex: 3;
                height: 100%;
                padding: 5px 50px;
                color: #fff;
                font-size: 18px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                
                justify-content: center;

                h2 {
                    font-size:50px;
                    margin-bottom: 20px;
                    text-align: center;
                }

                


            }
        }
    }

}
</style>
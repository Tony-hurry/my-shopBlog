<template>
    <div class='toast' v-if="ishow">
        <i class="el-icon-loading" ></i>
        {{ msg }}
    </div>
</template>
<script>
export default {
    name: 'Toast',
    data(){
        return {
            ishow:false,
            msg:''
        }
    },
    methods:{
        show(msg="提示文本",time=2000){
            this.ishow = true
            this.msg=msg
            setTimeout(()=>{
                this.ishow = false
            },time)
        }
    }
}
</script>
<style scoped lang="less">
.toast{
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    width:150px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    font-weight: bold;
    background-color: pink;
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}
</style>
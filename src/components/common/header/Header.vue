<template>
    <div class='header'>
        <h3>欢迎来到我的博客！</h3>
        <div class="block">
            <el-avatar :size="50" :src="this.$store.state.user.avator||circleUrl"></el-avatar>
        </div>
        <div class="name">
            <span>{{ this.$store.state.user.name }}</span>
        </div>
        <div class="linkd">
            <el-link type="success">主页</el-link>
            <span class="setBorder" @click="editHandler"><el-link type="warning">发表文章</el-link></span>
            <el-link type="danger">退出</el-link>
        </div>

    </div>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return {
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        }
    },
    methods:{
        editHandler(){
            this.$emit('editClick')
            this.$router.push('/api/openEditor')
        }
    }
}   
</script>
<style scoped lang="less">
.header{
    text-align: center;
    padding:5px 0;
    border-bottom: 1px solid #f0f0f0;
    background-color: #efefef;
    font-family: '宋体';
    font-weight: bold;
    .name{
        font-size: 18px;
    }
    .linkd{
       .setBorder{
        padding:0 5px 5px 2px;
        text-align: center;
        line-height: 30px;
        border-left:1px solid#f00;
        border-right: 1px solid #f00;
       }
    }
}
</style>
<template>
    <div class='header'>
        <h3>欢迎来到我的博客！</h3>
        <div class="block">
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div>
        <div class="linkd">
            <el-link type="success">主页</el-link>
            <el-link type="warning">发表文章</el-link>
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
}
</style>
<template>
    <div class='mblog' v-if="Object.keys(info).length != 0">
        <Header></Header>
        <div class="container">
            <h1>{{ this.$store.state.user.allBlog[this.$route.params.index].title }}</h1>
            <el-divider></el-divider>
            <div v-html="info"></div>
        </div>
    </div>
</template>
<script>
import Header from '@/components/common/header/Header'
import { postBlogById } from '@/network/apps.js'
export default {
    name: 'Mblog',
    components: {
        Header
    },
    data() {
        return {
            info: ''
        }
    },
    created() {

        
        postBlogById(this.$store.state.user.allBlog[this.$route.params.index]).then(res => {

            if (res.data.meta.status !== 200) return res.meta.msg
            this.info = res.data.message
            const markDown = require('markdown-it')
            const md = new markDown()
            this.info = md.render(this.info)
        })
    }
}
</script>
<style scoped lang="less">
.mblog {
    width: 100%;

    .container {
        padding:5px 10px;
        margin: 5px auto;
        margin-top: 10px;
        width: 90%;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        h1 {
            display: block;
            height:80px;
            background-color: #f0f0f0;
            border-radius: 5px;
            line-height: 80px;
            text-align:center;
            color:red;
        }
    }
}
</style>
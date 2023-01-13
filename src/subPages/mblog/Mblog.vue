<template>
    <div class='mblog' v-if="Object.keys(info).length != 0">
        <Header></Header>
        <div class="container">
            <h2>{{ info.title }}</h2>
            <el-divider></el-divider>
            <div v-html="info.blog"></div>
        </div>
    </div>
</template>
<script>
import Header from '@/components/common/header/Header'
import { getBlogById } from '@/network/apps.js'
export default {
    name: 'Mblog',
    components: {
        Header
    },
    data() {
        return {
            info: {}
        }
    },
    created() {

        getBlogById(this.$route.params.index).then(res => {

            if (res.data.meta.status !== 200) return res.meta.msg
            this.info = res.data.message[0]
            const markDown = require('markdown-it')
            const md = new markDown()
            this.info.blog = md.render(this.info.blog)
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
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
}
</style>
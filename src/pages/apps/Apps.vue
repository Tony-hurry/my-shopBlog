<template>
    <div class="apps">
        <Header></Header>
        <BlogList @showBlog="blogHandler"></BlogList>
        
    </div>
</template>
<script>

import Header from '@/components/common/header/Header'
import BlogList from './childPages/BlogList.vue'

export default {
    name: 'Apps',
    components: {
        Header,
        BlogList
    },
    created(){

        
    },
    data(){
        return {
            
        }
    },
    methods:{
        blogHandler(index){
            
            this.$router.push('/api/mblog/'+index)
        }
    }
}
</script>
<style scoped>

</style>
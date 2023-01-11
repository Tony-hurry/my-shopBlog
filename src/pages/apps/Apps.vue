<template>
    <div class="apps">
        <Header></Header>
        <BlogEditor></BlogEditor>
    </div>
</template>
<script>
import BlogEditor from './childPages/BlogEditor.vue'
import Header from '@/components/common/header/Header'
export default {
    name: 'Apps',
    components: {
        BlogEditor,
        Header
    }
}
</script>
<style scoped>

</style>
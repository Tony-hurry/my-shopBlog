<template>
    <div class="personal">
        <BaseInfo></BaseInfo>
        <OptionCard></OptionCard>
    </div>
</template>
<script>
import BaseInfo from './childPages/BaseInfo.vue'
import OptionCard from '@/components/content/optionCard/OptionCard'
export default{
 name:'Personal',
 components:{
    BaseInfo,
    OptionCard
 }
}
</script>
<style scoped>
</style>
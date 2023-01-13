<template>
    <div class='optionCard'>
        <div class="option" v-for="(item,index) in options" :key="index">
            <div class="option-left">
                {{ item }}
            </div>
            <div class="option-right">
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'OptionCard',
    data(){
        return {
            options:[
                '内容管理',
                '粉丝数据',
                '内容数据',
                '收益明细'

            ]
        }
    }
}
</script>
<style scoped lang="less">
.optionCard{
    width:80%;
    border-radius: 10px;
    margin:10px auto;
    background-color: #efefef;
    .option{
        height:80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #fff;
        .option-left{
            text-align: center;
            flex:1;
            font-size:18px; 
        }
        .option-right{
            width:50px;
            
            text-align: center;
        }
    }
}
</style>
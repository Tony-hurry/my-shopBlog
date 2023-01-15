<template>
    <div class='maskDoor'>
        <div class="welTop">
            <span>
                欢迎来到我的博客！！！
            </span>

        </div>
        <div class="welBottom">
            <div>
                <img :src="this.$store.state.user.avator" alt="">
            </div>
            <div>
                <span class="name">{{ this.$store.state.user.name }}</span>
            </div>
            <div class="moveUp">
                <i class="el-icon-arrow-up"></i>
                <i class="el-icon-arrow-up"></i>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'MaskDoor'
}
</script>
<style scoped lang="less">
.maskDoor {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .4);
    display:flex;
    flex-direction: column;
    color:#fff;
    .welTop{
        text-align: center;
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span{
            display: block;
            font-size: 80px;
        }
    }
    .welBottom{
        display:flex;
        align-items:center;
        justify-content: center;
        flex-direction: column;
        margin-top:10px;
        flex:1;
        img{
            width:100px;
            height:100px;
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(255, 255, 255, .5), 0 0 6px rgba(255, 255, 255, .1);

        }
        .name{
            font-size: 18px;
            margin-top:20px;
            font-weight: bold;
        }
        @keyframes MoveUp {
            50% {
                transform: translateY(30px);
            }
            
            
        }
        .moveUp{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
            i{
                animation: MoveUp  2s linear infinite alternate ;
            }
            
        }
     }

 }
</style>
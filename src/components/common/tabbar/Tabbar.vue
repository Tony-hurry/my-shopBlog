<template>
    <div class='tabbar'>
        <div class="container" v-for="(item, index) in info" :key="index" @click="changeRouter(index)">
            <div class="itemTop">
                <img :src="currentIndex != index ? item.icon : item.iconActive" alt="">
            </div>
            <div :class="{ active: currentIndex === index }">
                {{ item.text }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Tabbar',
    data() {
        return {
            info: [
                {
                    icon: require('../../../assets/img/tabbar/home.png'),
                    iconActive: require('../../../assets/img/tabbar/home-active.png'),
                    text: '首页'
                },
                {
                    icon: require('../../../assets/img/tabbar/apps.png'),
                    iconActive: require('../../../assets/img/tabbar/apps-active.png'),
                    text: '应用'
                },
                {
                    icon: require('../../../assets/img/tabbar/personal.png'),
                    iconActive: require('../../../assets/img/tabbar/personal-active.png'),
                    text: '个人中心'
                }
            ],
            currentIndex: 0
        }
    },
    watch: {
        $route(newVal, oldVal) {
            this.setActive(newVal.path)
        }
    },
    mounted() {
        
    },
    methods: {
        changeRouter(index) {
            if (this.currentIndex === index) { return }
            switch (index) {
                case 0:
                    this.$router.push('/home')
                    break;
                case 1:
                    this.$router.push('/apps')
                    break;
                case 2:
                    this.$router.push('/personal')
                    break;
            }
            this.currentIndex = index
        },
        setActive(routerUrl) {
            switch (routerUrl) {
                case '/':
                case '/home':
                    this.currentIndex = 0
                    break;
                case '/apps':
                    this.currentIndex = 1
                    break;
                case '/personal':
                    this.currentIndex = 2
                    break;
            }
        }
    }
}
</script>
<style scoped lang="less">
.active {
    color: #f00;
}

.tabbar {
    width: 100%;
    height: 80px;
    display: flex;
    background-color: #f0f0f0;
    z-index: 2000;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0px;
    border-top: 1px solid #efefef;
    position: fixed;
    bottom: 0;
    left: 0;
    cursor: pointer;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;

        .itemTop {
            width: 45px;
            height: 45px;

            img {
                width: 100%;
                height: 100%;
            }
        }

    }
}
</style>
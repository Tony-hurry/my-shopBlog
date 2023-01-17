export default {
    data() {
        return {
            shopList: {
                type: Array,
                default() {
                    return []
                }
            },
            scrollObj: {
                innerHeight: 0,
                scrollTop: 0,
                winHeight: 0
            },
            isLoding:false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.getScrollTop)
    },
    methods: {
        getScrollTop() {
            this.scrollObj.scrollTop = window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop
            this.scrollObj.innerHeight = document.documentElement.scrollHeight
            this.scrollObj.winHeight = window.innerHeight
            if(this.scrollObj.innerHeight - this.scrollObj.winHeight -this.scrollObj.scrollTop < 100 && this.scrollObj.innerHeight !== this.scrollObj.winHeight){
                if(this.isLoding) return
                this.isLoding = true
                this.getList()
            }
            
        },
        clearScroll() {
            window.removeEventListener('scroll', this.getScrollTop)
        }
        
    },
    destroyed() {
        this.clearScroll()
    }
}
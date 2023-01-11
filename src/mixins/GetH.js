export default{
    data(){
        return {
            H:0
        }
    },
    methods: {
        
    },
    mounted() {
        this.H = document.body.clientWidth * 0.2
        window.addEventListener('resize',()=>{
            this.H = document.body.clientWidth * 0.2
        }) 
    },
}
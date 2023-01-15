<template>
    <div class='blogList' v-if="pagination.mblogs.length != 0">
        <el-timeline>
            <el-timeline-item v-for="(item, index) in pagination.mblogs" :key="index" timestamp="2018/4/12"
                placement="top">
                <div @click="showBlog(item.id)">
                    <el-card>
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.description }}</p>
                    </el-card>
                </div>

            </el-timeline-item>
        </el-timeline>

        <el-pagination class="pagination" background layout="prev, pager, next" ref="pagination"
            :page-size="pagination.pageSize" :total="pagination.total" @current-change="chengPagination">
        </el-pagination>
    </div>
</template>
<script>
import { postPagination, getAllBlog } from '@/network/apps'
export default {
    name: 'BlogList',
    props: {
        info: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            pagination: {
                pageSize: 5,
                total: 0,
                currentPage: 0,
                mblogs: []
            }
        }
    },
    methods: {
        showBlog(index) {

            this.$emit('showBlog', index)
        },
        getPagination() {
            const reqData = {
                pageSize: this.pagination.pageSize,
                currentPage: this.pagination.currentPage
            }
            postPagination(reqData).then(res => {

                if (res.data.meta.status != 200) return this.$toast.show('请求失败')

                this.pagination.mblogs = JSON.parse(res.data.message.mblogs)

            })
        },
        chengPagination() {
            this.pagination.currentPage = this.$refs.pagination.internalCurrentPage - 1
            this.getPagination()

        },
        queryStatus() {
           
            if (Object.keys(this.$store.state.user).length == 0) {
                this.pagination.mblogs = []

                this.$notify({
                    title: '通知',
                    message: '你还未登陆',
                    position: 'top-left'
                });
                return
            }

            getAllBlog().then(res => {
                this.pagination.total = res.data.message.total
                this.getPagination()
            })
        }
    },
    activated() {
        this.queryStatus()
    },
    mounted() {


    }
}
</script>
<style scoped lang="less">
.blogList {
    width: 80%;
    margin: 10px auto;
    cursor: pointer;

    .pagination {
        text-align: center;
        margin: 10px auto;
    }
}
</style>

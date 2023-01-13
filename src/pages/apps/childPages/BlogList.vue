<template>
    <div class='blogList' v-if="pagination.mblogs.length != 0">
        <el-timeline>
            <el-timeline-item v-for="(item, index) in pagination.mblogs" :key="index" timestamp="2018/4/12" placement="top">
                <div @click="showBlog(item.id)">
                    <el-card>
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.description }}</p>
                    </el-card>
                </div>

            </el-timeline-item>
        </el-timeline>

        <el-pagination class="pagination" background layout="prev, pager, next" :current-page="pagination.currentPage"
            :page-size="pagination.pageSize" :total="this.pagination.total">
        </el-pagination>
    </div>
</template>
<script>
import { postPagination } from '@/network/apps'
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
                mblogs:[]
            }
        }
    },
    methods: {
        showBlog(index) {

            this.$emit('showBlog', index)
        },
        getPagination() {
            postPagination(this.pagination).then(res => {
                this.pagination = res.data.message
            })
        }
    },
    created() {
        this.getPagination()

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

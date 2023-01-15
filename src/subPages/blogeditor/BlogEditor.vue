<template>

    <div class='blogEditor'>
        <Header></Header>
        <div class="container">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="标题" prop="title">
                    <el-input v-model="ruleForm.title"></el-input>
                </el-form-item>
                <el-form-item label="摘要" prop="description">
                    <el-input v-model="ruleForm.description"></el-input>
                </el-form-item>
                <el-form-item label="内容" prop="content">
                    <mavon-editor v-model="ruleForm.content"></mavon-editor>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>
<script>
import Header from '@/components/common/header/Header'
import { postCommitBlog } from '@/network/subPages.js'
export default {
    name: 'BlogEditor',
    components: {
        Header
    },
    data() {
        return {
            ruleForm: {
                title: '',
                description: '',
                content: '',

            },
            rules: {
                title: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 1, max: 25, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                description: [
                    { required: true, message: '请选择活动区域', trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '请添加内容', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {

            this.$refs[formName].validate((valid) => {
                if (valid) {

                    const h = this.$createElement;
                    this.$msgbox({
                        title: '消息',
                        message: h('p', null, [
                            h('span', null, "确认提交吗？")

                        ]),
                        showCancelButton: true,
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        beforeClose: (action, instance, done) => {
                            if (action === 'confirm') {
                                instance.confirmButtonLoading = true;
                                instance.confirmButtonText = '执行中...';
                                postCommitBlog(this.ruleForm).then(res => {
                                    if (res.data.meta.status !== 200) return done('请求失败')
                                    done()
                                    instance.confirmButtonLoading = false;
                                })

                            } else {
                                done()
                            }
                        }
                    }).then(action => {

                        this.$message({
                            type: 'info',
                            message: '提交成功！'
                        });
                    })








                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<style scoped lang="less">
.blogEditor {

    .container {
        margin-top: 10px;
        padding: 0px 5px;
    }
}
</style>
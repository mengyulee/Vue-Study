<template>
    <div class="tips" v-if="tips.show">
        <header class="tipsTitle">
            <h1>{{tips.title}}</h1>
            <span @click="close()">x</span>
        </header>
        <section class="tipsContent">{{tips.content}}</section>
        <footer>
            <span class="btn" @click="close()">确定</span>
        </footer>
    </div>
</template>
<script>
export default {
    props: ['tipsInfo'],
    computed: {
        tips: function() {
            return {
                title: this.tipsInfo.title,
                content: this.tipsInfo.content,
                show: this.tipsInfo.show
            }
        }
    },
    methods: {
        close() {
            this.tipsInfo.show = false;
        },
        confirm() {
            this.this.tipsInfo.show = false;
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../style/mixin.scss';
    .tips {
        margin: 0 auto;
        width: 14rem;
        height: 10rem;
        font-size: .44rem;
        background-color: #fff;
        text-align: center;
        header {
            background-color: $bgc;
            position: relative;
            height: 1.6rem;
            line-height: 1.6rem;
            span{
                display: inline-block;
                position: absolute;
                right: .6rem;
                top: .3rem;
                width: 1rem;
                height: 1rem;
                line-height: .6rem;
                font-size: 1rem;
                border: 2px solid #fff;
                border-radius: 50%;
            }
        }
        .tipsContent{
            color: #313131;
            height: 6rem;
            line-height: 6rem;
            font-size: .8rem;
        }
    }
</style>



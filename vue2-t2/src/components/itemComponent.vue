<template>
  <div>
    <header>
      <span v-if="fatherComponent == 'home'">{{level}}</span>
    </header>
    <div class="contaiver">
      <section v-if="fatherComponent == 'home'">
        <router-link tag="button" to="item" class="btn">开始测试</router-link>
      </section>
      <section v-if="fatherComponent == 'item'">
        <div v-if="items.length > 0">
          <header>{{items[itemNum-1].question}}</header>
          <ul>
            <li v-for="(vm, index) in items[itemNum-1].answers" :key="index" @click="choosedScore(vm.answer_score, index)">
              <span :class="[choosedNum === index ? 'choosed': '' ]">{{vm.answer_name}}</span>
              <span :class="[choosedNum === index ? 'choosed': '' ]">({{vm.answer_score}}分)</span>
            </li>
          </ul>
          <button class="btn" v-if="itemNum < items.length" @click="nextItem()">下一题</button>
          <button class="btn" v-else @click="submit()">提交</button>
        </div>
      </section>
      <tips-component v-bind:tipsInfo="tipsInfo"></tips-component>
    </div>
  </div>
</template>
<script>
import tipsComponent from './tips'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'itemCompontent',
  props: ['fatherComponent'],
  computed: mapState(['level','items','itemNum']),
  components: {tipsComponent},
  data() {
    return {
      score: 0,
      choosed: null,
      choosedNum: null,
      tipsInfo: {
        show: false,
        title: '错误信息',
        content: '还没有选择答案。'
      }
      
    }
  },
  methods: {
    ...mapActions([
      'addNum'
    ]),
    choosedScore(score, index) {
      this.choosed = !this.choosed;
      this.choosedNum = index;
      this.score = score;
    },
    nextItem() {
      this.choosedNum = null
      if(this.choosed !== null) {
        this.choosed = null;
        this.addNum(this.score);
      } else {
        this.tipsInfo.show = true;
      }
    },
    submit() {
      if(this.choosed !== null) {
        this.choosed = null;
        this.addNum(this.score);
        this.$router.push('score')
      } else {
        this.tipsInfo.show = true;
      }
      
    }
  }
}
</script>

<style lang="scss" scoped>
$btncolor: #313131;
$btnbgc: #ffd900;
.btn {
  color: $btncolor;
  background-color: $btnbgc;
}
.choosed {
  color: $btnbgc
}
</style>

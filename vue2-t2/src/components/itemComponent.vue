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
            <li v-for="(vm, index) in items[itemNum-1].answers" :key="index" @click="choosedScore(vm.answer_score)">
              <span >{{vm.answer_name}}</span>
              <span>({{vm.answer_score}}分)</span>
            </li>
          </ul>
          <button class="btn" v-if="itemNum < items.length" @click="nextItem()">下一题</button>
          <button class="btn" v-else @click="submit()">提交</button>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'itemCompontent',
  props: ['fatherComponent'],
  computed: mapState(['level','items','itemNum']),
  data() {
    return {
      score: 0,
      choosed: null,
    }
  },
  methods: {
    ...mapActions([
      'addNum'
    ]),
    choosedScore(score) {
      this.choosed = !this.choosed;
      this.score = score;
    },
    nextItem() {
      if(this.choosed !== null) {
        this.choosed === null;
        this.addNum(this.score);
      } else {
        alert('选择答案，please！')
      }
    },
    submit() {
      if(this.choosed !== null) {
        this.choosed === null;
        this.addNum(this.score);
        this.$router.push('score')
      } else {
        alert('选择答案，please！')
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
</style>

<template>
    <div>
        <header>
            <span>分数：{{ scoreAll }}</span>
        </header>
        <div class="container">
            <div class="scoreTip">
                <span v-if="scoreAll < 4">{{scoreTip[0]}}</span>
                <span v-if="scoreAll >= 4">{{scoreTip[1]}}</span>
            </div>
        </div>
    </div>

</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      scoreTip: ['结果一', '结果二']
    }
  },
  computed: mapState(['scoreAll'])
}
</script>


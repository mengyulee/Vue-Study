const ADD_ITEMNUM = 'ADD_ITEMNUM'
const ADD_SCORE = 'ADD_SCORE'

export default {
    [ADD_ITEMNUM](state) {
        state.itemNum += 1;
    },
    [ADD_SCORE](state, score) {
        state.scoreAll += score;
    }
}

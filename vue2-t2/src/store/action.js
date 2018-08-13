
export default {
    addNum({state, commit}, score) {
        commit('ADD_SCORE', score);
        if(state.itemNum < state.items.length) {
            commit('ADD_ITEMNUM');
        }
    }
}
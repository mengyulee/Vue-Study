import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'

Vue.use(Vuex)

const state = {
    level: '测试',
    itemNum: 1,
    scoreAll: 0,
    items: [{
        'question': '问题一',
        'answers': [{
            'answer_name': '答案一',
            'answer_score': 1
        }, {
          'answer_name': '答案二',
          'answer_score': 2
        }, {
          'answer_name': '答案三',
          'answer_score': 3
        }, {
          'answer_name': '答案四',
          'answer_score': 4
        }
        ]
    }, {
      'question': '问题二',
      'answers': [{
        'answer_name': '答案一',
        'answer_score': 1
      }, {
        'answer_name': '答案二',
        'answer_score': 2
      }, {
        'answer_name': '答案三',
        'answer_score': 3
      }, {
        'answer_name': '答案四',
        'answer_score': 4
      }]
    }, {
      'question': '问题三',
      'answers': [{
            'answer_name': '答案一',
            'answer_score': 1
          }, {
            'answer_name': '答案二',
            'answer_score': 2
          }, {
            'answer_name': '答案三',
            'answer_score': 3
          }, {
            'answer_name': '答案四',
            'answer_score': 4
          }
       ]}
    ]
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
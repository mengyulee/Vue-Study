import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home.vue')), 'home')
const item = r => require.ensure([], () => r(require('../page/item.vue')), 'item')
const score = r => require.ensure([], () => r(require('../page/score.vue')), 'score')

export default [{
      path: '/',
      component: App,
      children: [
        {
          path: '',
          component: home
        },{
          path: '/item',
          component: item
        },{
          path: '/score',
          component: score
        }
      ]
    }
  ]


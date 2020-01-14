import VueRouter from 'vue-router'
import Home from  './page/Home.vue'
export default new VueRouter ({
        routes: [
            {
                path: '',
                component: Home
            }
        ],
        mode: 'history'
})

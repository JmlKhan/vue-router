import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UserList },
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);
4;
app.use(router);
app.mount('#app');

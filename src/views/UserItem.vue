<template>
  <div>
    <h2 class="user__title">{{ users.name }}</h2>
    <h3 class="user__subtitle" v-if="$store.state.buttonClicked2">Список альбомов</h3>
    <!-- Здесь можно отобразить список альбомов пользователя -->
    <user-album  v-if="$store.state.buttonClicked2" :albumid="id"></user-album>
    <h3 class="user__subtitle" v-if="$store.state.buttonClicked" >Список постов</h3>
    <!-- Здесь можно отобразить список постов пользователя -->
    <user-posts  v-if="$store.state.buttonClicked"  :postsid="id" ></user-posts>
  </div>
</template>

<script>
import axios from 'axios';
import UserAlbum from '@/components/UserAlbum.vue';
import UserPosts from '@/components/UserPosts.vue';
export default {
    components:{
        UserAlbum , UserPosts
    },
    props: ['id'],
    data(){
        return{
            users: {}
        }
    },
    created() {
    const id = this.id; 
    this.fetchUser(id);
    
  },
    methods: {
    async fetchUser(id) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        this.users = response.data;
      } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
      }
    },
  },
  computed:{
   
  },
  
}
</script>

<style lang="sass" scoped>

</style>


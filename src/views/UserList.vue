<template>
  <div class="user">
    <div class="user__column">
      <div class="user__title title">
        <div class="title__item">Name</div>
        <div class="title__item">Username</div>
        <div class="title__item2">Address</div>
        <div class="title__item">Company</div>
        <div class="title__item">Phone</div>
        <div class="title__item">Email</div>
        <div class="title__item">Website</div>
      </div>
      <div class="user__items" v-for="user in users" :key="user.id" @click="UserItem(user.id)">
          <div class="user__item"  >{{ user.name }} </div>
          <div class="user__item ">{{ user.username }}</div>
          <div class="user__item user__item2">{{ user.address.city }}, {{ user.address.street }}, {{ user.address.suite }}, {{ user.address.zipcode }}</div>
          <div class="user__item">{{ user.company.name }}</div>
          <a href="#" class="user__item">{{ user.phone }}</a>
          <a href="#" class="user__item">{{ user.email }}</a>
          <a href="#" class="user__item">{{ user.website }}</a>
          <div class="user__action">
            <div class="user__button" @click="handleButtonClick">Посмотреть Альбом</div>
            <div class="user__button" @click="handleButtonClick2">Посмотреть Посты</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserList', 
  data(){
    return{ 
    }
  },
  
  computed: {
    users(){
      return this.$store.state['users'];
    }
  },
  mounted(){
    return this.$store.dispatch('fetchUsers'); 
  },
  methods:{
    UserItem(id){
      this.$router.push({ name: 'UserItem', params: { id: id} });
    },
    handleButtonClick() {
      this.$store.commit('setButtonClicked', false);
    },
    handleButtonClick2() {
      this.$store.commit('setButtonClicked2', false);
    }
  },
}
</script>

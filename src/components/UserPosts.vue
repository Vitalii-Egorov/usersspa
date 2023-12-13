  <template>
    <div >
        <div class="user__items posts" v-for="post in posts" :key="post.id">
        <div  class="posts__title">  {{ post.title }}</div>
        <div class="posts__body">{{ post.body }}</div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
      name:'UserPosts',
      props:['postsid'],
      data(){
          return{
  
          }
      },
      computed: {
    posts(){
      return this.$store.state['postst'];
    }
  },
  mounted(){
    return this.$store.dispatch('fetchPosts',this.postsid); 
  },
  }
  </script>
  
  <style>
  
  </style>
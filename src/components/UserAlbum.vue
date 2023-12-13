<template>
  <div>
    <div class="swiper" >
  <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="album in albums" :key="album.id">
        <img :src='album.thumbnailUrl'> 
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css';
export default {
    name:'UserAlbum',
    props:[
        "albumid",
    ],
    data(){
        return{
            
        }
    },
    computed: {
    albums(){
      return this.$store.state['albums'];
    }
  },
  mounted(){
    new Swiper('.swiper', {
    speed: 800,
    slidesPerView: 1,
    breakpoints: {
    // when window width is >= 320px
    425: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }
});
    return this.$store.dispatch('fetchAlbums',this.albumid); 
    
  },
  methods:{

  }
}
</script>   

<style lang="scss">
.swiper {
   width: 790px;

   @media (max-width: 1024px) {
    width: 540px;
   }

   @media (max-width: 768px) {
    width: 390px;
   }

   @media (max-width: 425px) {
    width: 150px;
   }
}
.swiper-slide{
    width: 150px;
}
</style>
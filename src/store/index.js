import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import axiosInstance from '@/api/index';
import { USERS } from '@/api/routes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    postst: [],
    albums: [],
    buttonClicked: true,
    buttonClicked2: true,
  },
  getters: {
    getUsers(state, users) {
      state.users = users;
    },
    getPosts(state, postst) {
      state.postst = postst;
    },
    getUAlbums(state, albums) {
      state.albums = albums;
    },
  },
  mutations: {
    setButtonClicked(state, value) {
      state.buttonClicked = value;
    },
    setButtonClicked2(state, value) {
      state.buttonClicked2 = value;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setPosts(state, postst) {
      state.postst = postst;
    },
    setUAlbums(state, albums) {
      state.albums = albums;
    },

  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axiosInstance.get(USERS);
        commit('setUsers', response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async fetchPosts({ commit }, postsid) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${postsid}/posts`);
        commit('setPosts', response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async fetchAlbums({ commit }, albumid) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumid}/photos`);
        commit('setUAlbums', response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  },
})

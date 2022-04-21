<template>
  <div class="container">
    <img class="logo" src="../assets/logo.svg" />
    <div class="buttons-container">
      <button @click.prevent="show = 'stores'">Show stores</button>
      <button @click.prevent="show = 'cities'">Show cities</button>
    </div>
    <div v-if="show === 'stores'">
    <input type="text" @input="setSearch" placeholder="Filter store by address name or city.."/>
    <ul>
      <li v-for="store in stores" :key="store.uuid">{{ store.addressName }}</li>
    </ul>
    </div>
    <ul v-if="show === 'cities'">
      <li v-for="city in cities" :key="city">{{ city }}</li>
    </ul>
  </div>
</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex';
import {loadData} from '@/services/loadDataService';

export default {
  methods: {
    ...mapActions([
      'setSearch'
    ])
  },
  computed: {
    ...mapGetters({
      cities: 'getCities',
      stores: 'getStores'
    }),
    ...mapState([
      'search'
    ])
  },
  data() {
    return {
      show: ""
    };
  },
  mounted() {
    (async() => {
      const data = await loadData();
      this.$store.commit('saveData', [data]);
    })();
  },
};
</script>

<style lang="scss">
.logo {
  width: 150px;
}
.container {
  width: 900px;
  margin:  0 auto;
}
.buttons-container {
  margin:  20px 0;
  button {
    box-sizing: border-box;
    border: none;
    cursor: pointer;
    background-color: #eeb717;
    font-weight: 700;
    padding: 10px 30px;
    height: 45px;
    line-height: 1;
    border-radius: 23px;
    transition: transform .6s cubic-bezier(.34,1.56,.64,1),opacity .35s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    will-change: transform;
    margin: 0 10px;
    &:hover {
      transform: scaleY(1.02) scaleX(1.04);
    }
  }
}
input {
  box-sizing: border-box;
  width: 350px;
  font-size: 16px;
  border-radius: 23px;
  height: 45px;
  padding: 10px 20px;
  color: #000;
  background: #fff;
  border: 2px solid rgba(0,0,0,.1);
  transition: border-color .15s;
  &:focus {
    outline: 0;
    border-color: #b3b3b3;
  }
}
ul {
  list-style: none;
}

li {
  display: inline-block;
  margin: 5px;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid;
  font-weight:  bold;
}
</style>

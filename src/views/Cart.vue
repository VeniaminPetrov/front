<template>
  <div class="container">
    <template v-if="cartItems">
      <ul class="list-group" >
        <li class="list-group-item"
            v-for="item in cartItems"
            :key="item.id"
        >
          {{ item.title }} -- {{ item.price }}$
        </li>
      </ul>
      <div class="panel">
        Quantity : {{ cartCount }}
        Total : {{ cartTotalPrice}}$
      </div>
    </template>
    <template v-else>
      <img class="empty-image"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OFcvGRnVCTRJXmrfgRxRSyz_jUnHu6XIdw&s" alt="">
      <hr>
      Your cart is empty , add items!
      Quantity : 0
      Total : 0
    </template>
  </div>

</template>

<script>
import {mapGetters} from "vuex";
import ProductCardVue from "@/components/ProductCard.vue";

export default {
  name: 'CartView',
  components: {ProductCardVue},// eslint-disable-line
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
      cartTotalPrice: 'cartTotalPrice',
      cartCount: 'cartCount'
    })
  }
}
</script>
<style scoped>
.empty-image {
  width: 400px;


}
.container{
  margin-top: 50px;
}

</style>

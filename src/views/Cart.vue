<template>
  <div class="cart-container">
    <template v-if="cartItems">
      <ul>
        <li
            v-for="item in cartItems"
            :key="item.id"
        >
          {{ item.title }} -- {{ item.price }}$
        </li>
      </ul>
      <div class="panel">
        Quantity : {{ cartCount }}
        Total : {{ cart.total }}
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
  components: {ProductCardVue},
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
      cart: 'cart',
      cartCount: 'cartCount'
    })
  }
}
</script>
<style scoped>
.empty-image {
  width: 400px;


}

</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
 <div class="product-list">
    <ProductCardVue  v-for="(product , key) in products"
                     :key="key"
                     :title="product.title"
                     :price="product.price"
                     :image-url="product.imageUrl"
                     @add-To-Cart="addToCart(product)"
    />
 </div>
  </div>
</template>

<script>
import {mapGetters, mapActions , mapMutations} from "vuex";

// @ is an alias to /src
import ProductCardVue from '@/components/ProductCard.vue'

export default {
  name: 'HomeView',
  components: {
ProductCardVue
  },
  mounted(){
this.fetchProducts()
    console.log(this.$store)
  },
  computed:{
    ...mapGetters({
      products: 'products'
    })
  },
  methods:{
    ...mapActions({
      fetchProducts: 'fetchProducts'
    }),
    ...mapMutations({
      addToCart:'addToCart'
    })
  }
}
</script>
<style lang="scss" scoped>
.product-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}
</style>

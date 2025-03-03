<template>
  <div class="card">
      <div class="card_header">{{ title }}-{{ price }}$</div>

      <img :src="imageUrl" alt="img">


    <div class="card_footer">
      <button class="btn btn-primary" @click="$emit('add-To-Cart' )">PAY</button>
    </div>
  </div>

</template>
<script>
export default {
  name: 'ProductCardVue',
  props: {
    title: {
      type: String,
      default: 'default'
    },
    price: {
      type: Number,
      default: 0
    },
    imageUrl: {
      type: String,
      default: ''
    },

  },

}
</script>
<style lang="scss" scoped>
.card{
  display: block;

  width: 340px;
  height: 200px;
  padding: 25px;
  margin: 25px;
  border: 1px solid black;
  border-radius: 12px;

 img {
    /* width: 200px; */
    padding: revert;
    height: 150px;
  }

}
.card_footer
{
  margin-top: 10px;
  padding: 0;
}
.card_header{

  margin-top: -10px;
}
</style>

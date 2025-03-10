<template>
<header class="header">
  <div class="header_left">
LOGO
  </div>
  <div class="header_right">
    <router-link to="/cart">
      Cart : {{cartCount}}
    </router-link>
<ul class="nav">
  <li class="nav_link" v-for="(category , key) in categories"
  :key="key"
  >
  <router-link :to="`category/${category.id}`"  >{{category.title}}</router-link>
  </li>
</ul>
  </div>
</header>


</template>
<script>
export default {
  name:'HeaderView',
  props:{
    categories:{
      type:Array,
      default:()=>[]
    },
    cartCount :{
      type:Number,
      default:0
    }
  }
}
</script>
<style lang="scss" scoped>
.header{
  border-bottom: 16px solid;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.nav{
  display: flex;
  justify-content: space-between;
    list-style-type: none;
  width: 100%;
  padding-inline-start: 0;
  &_link{
    padding-right: 10px;
    a{
      cursor: pointer;
      text-decoration: none;
      color: red;
      &:hover{
        color: aquamarine;
      }
    }
  }
}
</style>

<template>
  <div>
    <label>Card Number</label>
    <div id="card-number"></div>
    <label>Card Expiry</label>
    <div id="card-expiry"></div>
    <label>Card CVC</label>
    <div id="card-cvc"></div>
    <div id="card-error"></div>
    <button id="custom-button" @click="createToken">Generate 1 Token</button>
  </div>

  <div>
    <stripe-element-card
        ref="elementRef"
        :pk="publishableKey"
        @token="tokenCreated"
    />
    <button @click="submit">Generate  2 token</button>
  </div>

</template>

<script>
import { StripeElementCard } from '@vue-stripe/vue-stripe';

export default {
  name:"BanckVue",
components:{
  StripeElementCard
},
  data () {
    return {
      token: null,
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
    };
  },
  computed: {
    stripeElements () {
      return this.$stripe.elements();
    },
  },
  mounted () {
    // Style Object documentation here: https://stripe.com/docs/js/appendix/style
    const style = {
      base: {
        color: 'black',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '14px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };
    this.cardNumber = this.stripeElements.create('cardNumber', { style });
    this.cardNumber.mount('#card-number');
    this.cardExpiry = this.stripeElements.create('cardExpiry', { style });
    this.cardExpiry.mount('#card-expiry');
    this.cardCvc = this.stripeElements.create('cardCvc', { style });
    this.cardCvc.mount('#card-cvc');
  },
  beforeUnmount () {
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  },
  methods: {
    async createToken () {
console.log('PROVERCA')
      const { token, error } = await this.$stripe.createToken(this.cardNumber);
      if (error) {
        // handle error here
        document.getElementById('card-error').innerHTML = error.message;
        return;
      }
      console.log(token);
      // handle the token
      // send it to your server
    },
  }
};
</script>

<style scoped>
#custom-button {
  height: 30px;
  outline: 1px solid grey;
  background-color: green;
  padding: 5px;
  color: white;
}

#card-error {
  color: red;
}
</style>

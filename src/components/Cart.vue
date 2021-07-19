<template>
  <div class="carts">
    <div class="cart">
      <div class="head">
        <h3>Product</h3>
        <div class="price">Price</div>
        <div class="quantity">Quantity</div>
        <div class="total">Total</div>
      </div>
      <CartItem
        v-for="item in cart.items"
        :key="item.id"
        :item="item"
        @plus="plus"
        @minus="minus"
        @remove="remove"
      />
    </div>
    <div class="verticalLine"></div>
    <div class="cart-sidebar">
      <div class="cart-total">
        <div class="head">
          <div>Cart Totals</div>
        </div>
        <h4>Subtotal: ${{ subTotal }}</h4>
        <h4>Discount:${{discount}}</h4>
        <h4>Total:${{ total }}</h4>
        <button type="button" class="btn btn-danger">
          PROCEED TO CHECKOUT
        </button>
      </div>

      <div class="coupon">
        <div class="head">
          <div>Coupon</div>
        </div>
          <b-form-input
            type="text"
            placeholder="Enter coupon code"
            v-model="vouchercode"
          >
          </b-form-input>
          <button type="button" class="btn btn-outline-secondary">Apply coupon</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  name: "Cart",
  components: {
    CartItem,
  },
  computed: {
    subTotal() {
      let sum = 0;
      for (let i = 0; i < this.cart.items.length; i++) {
        sum += this.cart.items[i].total;
      }
      return sum;
    },
    total() {
      let sum = this.subTotal - this.discount;
      if(sum<0) return 0;
      return sum;
    },
  },
  data() {
    return {
      vouchercode: "",
      subtotal: 0,
      discount: 0,
      totalBill: 0,
      cart: {
        items: [
          {
            id: 239,
            image:
              "https://images-na.ssl-images-amazon.com/images/I/91K1X8kQjoL._AC_SL1500_.jpg",
            product_name:
              "Reveal - Grain Free | Wet Canned Cat Food | 2.47oz Cans - Premium Nutrition, 100% Natural, No Additives, and Limited Ingredients",
            alias:
              "victor-purpose---performance-dry-dog-food-40-lbs1626370321823",
            variant_name: "2kg/A",
            price: 110,
            total: 110,
            original_price: 120,
            quantity: 1,
            stock: 20,
            weight: "2kg",
            product_id: 73,
          },
          {
            id: 229,
            image:
              "https://images-na.ssl-images-amazon.com/images/I/91K1X8kQjoL._AC_SL1500_.jpg",
            product_name: "VICTOR Purpose - Performance, Dry Dog Food 40 lbs",
            alias:
              "victor-purpose---performance-dry-dog-food-40-lbs1626370321823",
            variant_name: "2kg/A",
            price: 110,
            total: 110,
            original_price: 120,
            stock: 30,
            quantity: 1,
            weight: "2kg",
            product_id: 73,
          },
        ],
      },
    };
  },
  methods: {
    checkVoucher(){
      
    }
    ,plus(i) {
      const item = this.cart.items.find((item) => item.id === i.id);
      // const item = this.cart.items[this.cart.items.indexof(i)];
      if (i.quantity === item.stock) return;
      item.quantity++;
      item.total += item.price;
    },
    minus(i) {
      const item = this.cart.items.find((item) => item.id === i.id);
      if (item.quantity == 1) return;
      item.quantity--;
      item.total -= item.price;
    },
    remove(i) {
      const index = this.cart.items.indexOf(i);
      this.cart.items.splice(index, 1);
    },
  },
};
</script>


<style scoped>
.verticalLine {
  border: 1px solid #bfbfbf;
}
.carts {
  display: flex;
  /* padding: 5% 10%; */
  /* flex-direction: column; */
}
.cart {
  /* margin-top: 50px; */
  margin: 5%;
  overflow: hidden;
}
.cart .head {
  width: 100%;
  border-bottom: 1px solid #bfbfbf;
  height: 40px;
  display: block;
}
.cart .head h3 {
  display: inline-block;
  line-height: 40px;
  margin: 0;
}
.cart .head .price {
  display: inline-block;
  color: #777777;
  margin-left: 250px;
  line-height: 40px;
}
.cart .head .quantity {
  display: inline-block;
  color: #777777;
  margin-left: 100px;
  line-height: 40px;
}
.cart .head .total {
  display: inline-block;
  color: #777777;
  line-height: 40px;
  float: right;
}
</style>

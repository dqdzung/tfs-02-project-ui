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
        v-for="item in this.cart"
        :key="item.variant.id"
        :item="item"
        @plus="plus"
        @minus="minus"
        @remove="remove"
      />
    </div>
    <div class="verticalLine"></div>
    <div class="cart">
      <div class="cart-total">
        <div class="head">
          <h3>Cart Totals</h3>
        </div>
        <div class="summary">
          <div class="">
            <p>Subtotal:</p>
            <p v-if="discount > 0">Discount:</p>
            <p>Total:</p>
          </div>
          <div class="">
            <p>${{ this.GET_CART_TOTAL }}</p>
            <p v-if="discount > 0">${{ discount }}</p>
            <p>${{ total }}</p>
          </div>
        </div>
        <button type="button" class="btn btn-danger">
          PROCEED TO CHECKOUT
        </button>
      </div>

      <div class="cart-total">
        <div class="head">
          <h5>Coupon</h5>
        </div>
        <b-form-input
          class="input"
          type="text"
          placeholder="Enter coupon code"
          v-model="vouchercode"
        >
        </b-form-input>
        <ErrorMessage :message="this.error.message" />
        <button
          @click="checkVoucher"
          type="button"
          class="btn btn-outline-secondary"
        >
          Apply coupon
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import ErrorMessage from "./ErrorMessage.vue";
import { mapState, mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Cart",
  components: {
    CartItem,
    ErrorMessage,
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart.items,
    }),
    ...mapGetters(["GET_CART_TOTAL"]),

    total() {
      let sum = this.GET_CART_TOTAL - this.discount;
      if (sum < 0) return 0;
      return sum;
    },
  },
  data() {
    return {
      vouchercode: "",
      finalCode: "",
      discount: 0,
      totalBill: 0,
      error: {
        message: "",
      },
    };
  },
  methods: {
    ...mapActions(["ADD_QUANTITY", "REMOVE_ITEM"]),
    async checkVoucher() {
      try {
        const { data } = await axios({
          url: `http://localhost:8081/api/orders/voucher/${this.vouchercode}`,
        });
        this.error.message = data.message;
        if (data.success == 1) {
          this.finalCode = data.data.code;
          let sale = data.data.discount;
          let unit = data.data.unit;
          let maxSaleAmount = data.data.max_sale_amount;
          switch (unit) {
            case "percent":
              this.discount = (this.GET_CART_TOTAL * sale) / 100;
              if (this.discount > maxSaleAmount) {
                this.discount = maxSaleAmount;
              }
              break;
            default:
              this.discount = sale;
          }
        }
      } catch (error) {
        this.error.message = error.response.data.message;
      }

      
    },
    plus(i) {
      // const item = this.cart.find((item) => item.variant.id === i.variant.id);
      let index = this.cart.indexOf(i);
      let quantity = i.quantity + 1;
      if (quantity >= i.stock) {
        quantity = i.stock;
      }
      const payload = {
        index: index,
        quantity: quantity,
      };

      this.ADD_QUANTITY(payload);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    minus(i) {
      let index = this.cart.indexOf(i);
      let quantity = i.quantity - 1;
      if (quantity < 1) {
        quantity = 1;
      }
      const payload = {
        index: index,
        quantity: quantity,
      };
      this.ADD_QUANTITY(payload);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    remove(i) {
      const index = this.cart.indexOf(i);
      const payload = {
        index: index,
      };
      this.REMOVE_ITEM(payload);
      localStorage.setItem("cart", JSON.stringify(this.cart));
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
  margin-left: 3%;
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
  margin-left: 33%;
  line-height: 40px;
}
.cart .head .quantity {
  display: inline-block;
  color: #777777;
  margin-left: 105px;
  line-height: 40px;
}
.cart .head .total {
  display: inline-block;
  color: #777777;
  line-height: 40px;
  float: right;
}
.summary {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.summary p {
  margin-bottom: 0%;
}
.input {
  margin-top: 20px;
}
.cart-total {
  margin-bottom: 20px;
}
</style>

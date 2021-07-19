<template>
  <div class="item">
    <img :src="item.image" />
    <div class="text-center">{{item.product_name}}</div>
    <p>${{item.price}}</p>
    <div @click="$emit('minus', item)" class="qty-minus">-</div>
    <div class="qty">{{item.quantity}}</div>
    <div  @click="$emit('plus', item)" class="qty-plus">+</div>
    <div @click="$emit('remove',item)" class="del">Remove</div>
    <div class="total-price">${{item.total}}</div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
        item: Object,
    },
  
};
</script>

<style scoped>
.item {
  width: 100%;
  border-bottom: 1px solid #bfbfbf;
  overflow: hidden;
  padding: 10px 0;
  display: block;
}
.item img {
  height: 100px;
  float: left;
}
.item .text-center {
  float: left;
  /* line-height: 50px; */
  margin: 0 0 0 20px;
  width: 200px;
}
.item p {
  float: left;
  width: 90px;
  line-height: 100px;
  margin: 0 0 0 35px;
  text-align: center;
}
.item .qty-minus {
  float: left;
  width: 20px;
  line-height: 100px;
  margin-left: 60px;
  text-align: center;
  cursor: pointer;
}
.item .qty {
  float: left;
  width: 20px;
  line-height: 100px;
  margin-left: 20px;
  text-align: center;
}
.item .qty-plus {
  float: left;
  width: 20px;
  line-height: 100px;
  margin-left: 20px;
  text-align: center;
  cursor: pointer;
}
.item .del {
  float: left;
  width: 80px;
  line-height: 100px;
  margin-left: 60px;
  cursor: pointer;
  text-decoration: underline;
  color: #ed277f;
}
.item .total-price {
  float: left;
  width: 80px;
  line-height: 100px;
  margin-left: 10px;
  text-align: right;
}
</style>

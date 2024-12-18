<script>
export default {
    props: {
        products: Array
    }
};
</script>

<template>
    <div class="product-list">
        <h1>상품 목록</h1>
        <div v-if="products.length > 0" class="product-container">
            <div v-for="(product, index) in products" :key="index" class="product-item">
                <img :src="product.image" :alt="product.title" />
                <div>{{ product.title }}</div>
                <div>{{ product.lprice }} 원</div>
            </div>
        </div>
        <div v-else>상품이 없습니다.</div>
    </div>
</template>

<style scoped>
.product-list {
    padding: 20px;
}
.product-container {
    display: flex;
    flex-wrap: wrap;
}
.product-item {
    width: 200px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
}
.product-item img {
    width: 100%;
    height: auto;
}
</style>

<template>
  <div class="container">
    <div class="card">

      <div class="image-container">
        <img src="../img/image-product-desktop.jpg" alt="Product Image" />
      </div>

      <div class="product-info">
        <div class="product-info-content">
          <span class="product-title ">P E R F U M E</span>
          <h1 class="">Gabrielle Essence Eau De Parfum</h1>
          <p class="product-info-content-description">A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div class="product-info-content-price">
            <h1 class="product-info-content-price-new">$149.99</h1>
            <span class="product-info-content-price-old">$169.99</span>
          </div>
          <button class="product-info-content-button">Add to Cart</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.card {
  width: 550px;
  height: 450px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  display: flex;
  overflow: hidden;
}

.container {
  width: 100vw;
  height: 100vh;
  background-color: rgb(243, 234, 227);
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  width: 50%;
  height: 100%;
}

.image-container img {
  width: 100%;
  height: 100%;

  border-radius: 10px 0 0 10px;
}

.product-title {
  margin-top: 20px;
  color: rgb(133, 134, 139);

}

.product-info {
  box-sizing: border-box;
  flex: 1;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.product-info-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.product-info-content-price {
  color: rgb(83, 136, 118);
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 20px;

  .product-info-content-price-old {
    color: rgb(133, 134, 139);
    text-decoration: line-through;
  }
}

.product-info-content-button {
  padding: 10px;
  width: 100%;
  height: 40px;
  background-color: rgb(83, 136, 118);
  color: white;
  border-radius: 10px;
  border: none;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .card {
    width: 400px;
    height: 600px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }

  .image-container {
    width: 100%;
    height: 50%;
  }

  .product-info-content {
    width: 100%;
    height: 100%;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
  }

  .product-info {
    width: 100%;
  }

}
</style>
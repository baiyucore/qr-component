<template>
  <div class="desktop">


    <div class="title">
      <div> 
        图片 <span>Extendsions</span>
      </div>  
      <div>
        <button>
          图片
        </button>
     
      </div>
    </div>


    <div class="choose">
      <span>Extensions List</span>
      <div class="choose-item">
        <button class="Chooseitme">
          All
        </button>
        <button class="Chooseitme">
          Active
        </button>
        <button class="Chooseitme">
          Inactive
        </button>
      </div>
    </div>

    <div class="CardItem">
      <div class="Item">
        <div class="Item-title">
          <span>图片</span>
          <div >
            <h5>DevLens</h5>
            <span>1.0.0</span>
          </div>
        </div>
        <div class="Item-button">
          <button>Remove</button> 
          <span>滚动</span>
        </div>
      </div>
      <div class="Item">
        <div class="Item-title">
          <span>图片</span>
          <div >
            <h5>DevLens</h5>
            <span>1.0.0</span>
          </div>
        </div>
        <div class="Item-button">
          <button>Remove</button> 
          <span>滚动</span>
        </div>
      </div>
      <div class="Item">
        <div class="Item-title">
          <span>图片</span>
          <div >
            <h5>DevLens</h5>
            <span>1.0.0</span>
          </div>
        </div>
        <div class="Item-button">
          <button>Remove</button> 
          <span>滚动</span>
        </div>
      </div>
      <div class="Item">
        <div class="Item-title">
          <span>图片</span>
          <div >
            <h5>DevLens</h5>
            <span>1.0.0</span>
          </div>
        </div>
        <div class="Item-button">
          <button>Remove</button> 
          <span>滚动</span>
        </div>
      </div>
      <div class="Item">
        <div class="Item-title">
          <span>图片</span>
          <div >
            <h5>DevLens</h5>
            <span>1.0.0</span>
          </div>
        </div>
        <div class="Item-button">
          <button>Remove</button> 
          <span>滚动</span>
        </div>
      </div>
    </div>
    
  </div>

</template>
  
<style scoped>
.desktop {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px auto;
  width: 47rem;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(252, 253, 255);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.choose {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 10px;
}
.choose span{
  font-size: 1.2rem;
  font-weight: 600;
}
.choose-item {
  display: flex;
  gap: 10px;
}
.Chooseitme {
  padding: 8px 16px;
  outline: 1px solid #ff0000;
  outline-offset: 2px; /* 在outline和padding之间创建间隔 */
  background: white;
  cursor: pointer;
  border-radius: 15px;
  font-weight: 600;
  color: #333;
  border: none; /* 移除原来的border */
}
.Chooseitme:hover {
  background-color: #ff0202;
}
.CardItem{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.Item{
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: rgb(252, 253, 255);
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #81818128;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.Item-title{
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 8px;
  margin-bottom: 10px;
}
.Item-button{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.Item-button button{
  padding: 8px 16px;
  border-radius: 15px;
  outline: 1.5px solid red;
  border: none;
  outline-offset: 2px;
}
</style>

<script setup lang="ts">

</script>
<template>
  <div class="container">
    <div class="card">
      <div class="card-content">
        <div class="image-container">
          <img src="../img/image-omelette.jpeg" alt="recipe-page-main" />
        </div>
        <h3 class="title">Simple Omelette Recipe</h3>
        <span class="description">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.</span
        >

        <div class="preparation-time">
          <span> Preparation time</span>
          <li><span>Total:</span> Approximately 10 minutes</li>
          <li><span>Preparation:</span> 5 minutes</li>
          <li><span>Cooking:</span> 5 minutes</li>
          <li><span>Total:</span> Approximately 10 minutes</li>
        </div>

        <div class="ingredients">
          <span>Ingredients</span>
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </div>

        <div class="Instructions">
          <span>Instructions</span>

          <li>
            <span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of
            salt and pepper until they are well mixed. You can add a tablespoon
            of water or milk for a fluffier texture.
          </li>

          <li>
            <span>Heat the pan:</span> Place a non-stick frying pan over medium
            heat and add butter or oil.
          </li>

          <li>
            <span>Cook the omelette:</span> Once the butter is melted and
            bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
            coat the surface.
          </li>

          <li>
            <span>Add fillings (optional):</span> When the eggs begin to set at
            the edges but are still slightly runny in the middle, sprinkle your
            chosen fillings over one half of the omelette.
          </li>

          <li>
            <span>Fold and serve:</span> As the omelette continues to cook,
            carefully lift one edge and fold it over the fillings. Let it cook
            for another minute, then slide it onto a plate.
          </li>

          <li>
            <span>Enjoy:</span> Serve hot, with additional salt and pepper if
            needed.
          </li>
        </div>
        <div class="line"></div>

        <div class="nutrition">
          <h3>Nutrition</h3>
          <span
            >The table below shows nutritional values per serving without the
            additional fillings.</span
          >
          <div class="nutrition-item">
            <span>Calories</span>
            <span>277kcal</span>
          </div>
          <div class="nutrition-item">
            <span>Carbs</span>
            <span>0g</span>
          </div>
          <div class="nutrition-item">
            <span>Protein</span>
            <span>20g</span>
          </div>
          <div class="nutrition-item">
            <span>Fat</span>
            <span>22g</span>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: rgb(243, 229, 216);
  font-family: "Georgia", sans-serif;
  overflow-y: auto;
}
.card {
  width: 450px;
  height: auto;
  background-color: rgb(31, 31, 31);
  border-radius: 10px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
}
.card-content {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  gap: 10px;
}
.image-container {
  width: 100%;
  height: 100%;
}
.image-container img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}
.description {
  font-size: 12px;
  color: rgb(124, 118, 113);
}
.preparation-time {
  margin-bottom: 20px;
  padding-left: 20px;
  width: 100%;
  background-color: rgb(255, 247, 252);
}
.preparation-time span {
  color: rgb(116, 44, 72);
  font-weight: bold;
}
.preparation-time li {
  font-size: 12px;
  color: rgb(138, 136, 135);
}
.preparation-time li span {
  font-weight: bold;
  color: rgb(96, 87, 81);
}
.preparation-time li::marker {
  color: rgb(116, 44, 72);
}
.ingredients {
  width: 100%;
}
.ingredients span {
  color: rgb(116, 44, 72);
  font-weight: bold;
  font-size: 16px;
  font-family: "Georgia", sans-serif;
}
.ingredients li {
  font-size: 12px;
  color: rgb(138, 136, 135);
}
.ingredients li::marker {
  color: rgb(116, 44, 72);
  font-size: 12px;
}
.title {
  width: 100%;
}
.line {
  width: 100%;
  border: 1px solid rgb(224, 224, 224);
}
.Instructions {
  width: 100%;
  color: rgb(116, 44, 72);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.Instructions li {
  list-style-type: decimal;
  font-size: 12px;
}
.Instructions li span {
  font-weight: bold;
  color: rgb(96, 87, 81);
  margin-left: 4px;
}

.Instructions li::marker {
  color: rgb(116, 44, 72);
}
.nutrition {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.nutrition h3 {
  font-size: 16px;
  color: rgb(116, 44, 72);
  font-weight: bold;
  margin: 4px 0;
}
.nutrition span {
  font-size: 12px;
  color: rgb(138, 136, 135);
}
.nutrition-item {
  display: flex;
  gap: 4px;
  padding-left: 12px;
  padding-bottom: 4px;
  border-bottom: 1px solid rgb(224, 224, 224);
}
.nutrition-item span {
  font-size: 12px;
  color: rgb(116, 44, 72);
  width: 50%;
  font-weight: bold;
}
.nutrition-item span:first-child {
  color: rgb(135, 133, 131);
  font-weight: 500;
}
</style>

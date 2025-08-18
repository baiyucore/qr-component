<template>
  <div class="container">
    <div class="card">
      <div class="card-content">
        <img src="../img/illustration-article.svg" alt="qr-code" />
        <span class="tag">Learning </span>
        <span class="time">Published 21 Dec 2023</span>
        <span class="title">HTML & CSS foundations</span>
        <span class="description"
          >These languages are the backbone of every website, defining
          structure, content, and presentation.</span
        >
        <div class="author">
          <img src="../img/image-avatar.webp" alt="avatar" />
          Greg Hooper
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
  align-items: center;
  height: 100vh;
  background-color: rgb(245, 208, 78);
}

.card {
  width: 270px;
  height: 370px;
  background-color: #000000;
  border-radius: 10px;
}
.card-content {
  width: 250px;
  height: 350px;
  background-color: #fff;

  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #000000;
  transform: translate(-10px, -10px);
}
.card-content img {
  border-radius: 10px;
}
.tag {
  color: #000000;
  font-size: 11px;
  font-weight: bolder;
  background-color: rgb(243, 211, 75);
  height: 20px;
  width: 60px;
  text-align: center;
  line-height: 20px;
  border-radius: 3px;
  padding: 2px;
}
.time {
  color: #000000;
  font-size: 11px;
  font-weight: 600;
}
.title {
  color: rgb(243, 211, 75);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}
.description {
  color: rgb(106, 106, 106);
  font-size: 11px;
}
.author {
  font-size: 11px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  & img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
}
</style>

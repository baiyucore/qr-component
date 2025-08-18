<template>
  <div class="container">
    <div class="card">
      <div>
        <img src="../img/avatar-jessica.jpeg" alt="avatar" />
      </div>
      <span class="name">Jessica Randall</span>
      <span class="location">London, United Kingdom</span>
      <span class="description">"Front-end developer and avid reader."</span>
      <button>Github</button>
      <button>Frontend Mentor</button>
      <button>LinkedIn</button>
      <button>Twitter</button>
      <button>Instagram</button>
    </div>
  </div>
</template> 

  <script setup lang="ts">  </script>

  <style scoped>  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgb(0, 0, 0);
  }
  
  .card {
    width: 350px;
    height: 450px;
    background-color: rgb(31, 31, 31);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .name{
    color: #fff;
    font-size: 30px;
  }
  .location{
    color: rgb(172, 198, 63);
    font-size: 15px;
    margin-bottom: 10px;
  }
  .description{
    color: rgb(136, 136, 136);
    font-size: 10px;
    margin-bottom: 10px;
  }
  .card button {
    background-color: rgb(51, 51, 51);
    color: #fff;
    height: 30px;
    width: 75%;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .card button:hover {
    background-color: rgb(195, 248, 42);
    color: rgb(0, 0, 0);
  }
  .card img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  </style>
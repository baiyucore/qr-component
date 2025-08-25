<template>
  <div class="container"> 

    <div class="card">
      <div class="card-header">
        <h1>
          Reliable, efficient delivery
        </h1>
        <h1>  Powered by Technology</h1>
        <p>  Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
      </div>
      <div class="card-body">
        <div class="first-card number-card">
          <div class="card-content">
            <h1>Supervisor</h1>
            <p>Monitors activity to identify project roadblocks</p>
            <img src="../img/icon-supervisor.svg" alt="Supervisor">
          </div>
        </div>
        <div class="second-card number-card"> 
          <div class="card-content team-builder-card">
            <h1>Team Builder</h1>
            <p>Scans our talent network to create the optimal team for your project</p>
            <img src="../img/icon-team-builder.svg" alt="Team Builder">
          </div>
          <div class="card-content karma-card">
            <h1>Karma</h1>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img src="../img/icon-karma.svg" alt="Karma">
          </div>
        </div>
        <div class="third-card number-card">  
          <div class="card-content calculator-card"> 
            <h1>Calculator</h1>
            <p>Uses data from past projects to provide better delivery estimates</p>
            <img src="../img/icon-calculator.svg" alt="Calculator">
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .container {
    width: 100vw;
    height: 100vh;
    background-color: #ff0000;
    display: flex;
    justify-content: center;
    align-items: center;

    --card-color-1: rgb(88, 199, 198);
    --card-color-2: rgb(255, 224, 102);
    --card-color-3: rgb(255, 176, 171);
    --card-color-4: rgb(105, 152, 192);

  }

  .card {
    width: 80%;
    height: 80%;

    padding: 20px 10px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0 ,0.5);
    background-color: #ffffff;
    display: flex;
    flex-direction: column;

    align-items: center;
  }
  .card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 60%;
  }
  .card-header p {
    text-align: center;
    text-indent: 20px;
  }
  .card-body {
    flex:1;
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
  }
  .number-card {
    flex:1;

    border-radius: 10px;


  }

  .card-content {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0 ,0.5);
    width: 300px;
    height: 200px;
    padding: 20px;
    position: relative;
    & img {
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
  }


  .first-card {
    display: flex;
    justify-content: center;
    align-items: center;
    .card-content {
      border-top: 5px solid var(--card-color-1);
    }

  }
  .second-card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    .team-builder-card {
      border-top: 5px solid var(--card-color-3);
    }
    .karma-card {
      border-top: 5px solid var(--card-color-2);
    }
    
  }
  .third-card {
    display: flex;
    justify-content: center;
    align-items: center;
    .calculator-card {
      border-top: 5px solid var(--card-color-4);
    }
  }

  @media (max-width: 768px) {
    .card {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
    .card-body {

    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    flex-direction: column;
  }
  }
</style>
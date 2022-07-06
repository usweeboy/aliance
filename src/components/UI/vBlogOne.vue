<template>
<div class="expert_blog" @click="$router.push('/blog-one')">
  <div class="expert_blog_content">
    <h1>Современная методология разработки одухотворила всех причастных</h1>
    <p>Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</p>
  </div>
</div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.expert_blog{
  max-width: 580px;
  margin-top: 30px;
  height: 430px;
  background-image: url('@/assets/img/blog-one.jpg');
  background-size: cover;
  .expert_blog_content{
    padding: 150px 70px 50px 70px;
    & h1, p{
      font-size: 28px;
      line-height: 160%;
      color: #FFFFFF;
    }
    & p{
      font-size: 16px;
    }
  }
}

@media (min-width: 360px) and (max-width: 469px){
  .expert_blog{
    width: 95%;
    .expert_blog_content{
      padding: 100px 20px 20px 20px;
      & h1{
        font-size: 20px;
      }
      & p{
        display: none;
      }
    }
  }
}

@media (min-width: 470px) and (max-width: 767px){
  .expert_blog{
    width: 95%;
    .expert_blog_content{
      padding: 70px 20px 20px 20px;
    }
  }
}
</style>
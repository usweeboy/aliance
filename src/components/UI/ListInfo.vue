<template>
<div class="info_list container">
  <div class="info_list_block">
    <img src="@/assets/img/icon-hourglass.png" alt="" class="info_list_img">
    <div class="info_list_block_text">Непрерывная работа c 2017 года</div>
  </div>
  <div class="info_list_block">
    <img src="@/assets/img/icon-sertification.png" alt="" class="info_list_img">
    <div class="info_list_block_text">Вся продукция сертифицирована</div>
  </div>
  <div class="info_list_block">
    <img src="@/assets/img/icon-worker.png" alt="" class="info_list_img">
    <div class="info_list_block_text">Контроль качества на всех этапах</div>
  </div>
  <div class="info_list_block">
    <img src="@/assets/img/icon-truck.png" alt="" class="info_list_img">
    <div class="info_list_block_text">Возможны поставки по всей России</div>
  </div>
  <div class="info_list_block">
    <img src="@/assets/img/icon-speedometr.png" alt="" class="info_list_img">
    <div class="info_list_block_text">Оперативное производство</div>
  </div>
</div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.container{
  max-width: 1220px;
  margin: 0px auto;
}
.info_list{
  display: flex;
  .info_list_block{
    border: 1px solid #EBEBF0;
    padding: 30px 50px;
  }
  .info_list_block_text{
    font-size: 14px;
    line-height: 160%;
    color: #292D33;
    margin-top: 23px;
  }
}

@media (min-width: 360px) and (max-width: 767px){
  .info_list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .info_list_block{
      margin-top: 20px;
      width: 60%;
    }
  }
}

@media (min-width: 425px) and (max-width: 767px){
  .info_list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .info_list_block{
      margin-right: 10px;
      margin-left: 10px;
      margin-top: 10px;
      width: 30%;
    }
    .info_list_block:last-child{
      display: none;
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px){
  .info_list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .info_list_block{
      margin-right: 10px;
      margin-left: 10px;
      margin-top: 10px;
      width: 35%;
    }
  }
}
</style>
<template>
  <section class="own_brands container">
    <div class="own_brands_block_one" @click="$router.push('/product-agtech')">
      <div class="own_brands_block_img">
        <img src="@/assets/img/ag-tech-icon.svg" alt="">
      </div>
      <div class="own_brands_block_content">
        <h3 class="own_brands_block_title">Автохимия AG-Tech</h3>
        <p class="own_brands_block_text">Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление создаёт предпосылки для поставленных обществом задач.</p>
      </div>
    </div>
    <div class="own_brands_block_two" @click="$router.push('/product-ap')">
      <div class="own_brands_block_img">
        <img src="@/assets/img/aliance-icon.svg" alt="">
      </div>
      <div class="own_brands_block_content">
        <h3 class="own_brands_block_title">Автохимия AP</h3>
        <p class="own_brands_block_text">Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление создаёт предпосылки для поставленных обществом задач.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.own_brands{
  display: flex;
  margin-top: 50px;
  .own_brands_block_one,.own_brands_block_two{
    border: 1px solid #EBEBF0;
    display: flex;
    align-items: center;
    margin-top: 30px;
    padding: 50px 70px 70px 70px;
    &:hover{
      border: 1px solid #5C8EE6;
      cursor: pointer;
      h3 {
        color: #5C8EE6;
      }
    }
  }
  .own_brands_block_content{
    margin-left: 70px;
    .own_brands_block_title{
      font-size: 28px;
      line-height: 160%;
      color: #292D33;
    }
    .own_brands_block_text{
      margin-top: 10px;
      font-size: 16px;
      line-height: 160%;
      color: #828A99;
    }
  }
}
@media (min-width: 360px) and (max-width: 767px){
  .own_brands{
    margin-top: 30px;
    flex-wrap: wrap;
    .own_brands_block_one,.own_brands_block_two{
      display: block;
      margin-top: 30px;
      padding: 30px 15px;
    }
    .own_brands_block_two{
      margin-top: 0px;
    }
    .own_brands_block_content{
      margin-left: 0px;
      margin-top: 20px;
    }
  }
}

@media (min-width: 620px) and (max-width: 767px){
  .own_brands{
    .own_brands_block_one,.own_brands_block_two{
      padding: 30px 30px;
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px){
  .own_brands{
    margin-top: 30px;
    flex-wrap: wrap;
    .own_brands_block_one,.own_brands_block_two{
      margin-top: 30px;
      display: block;
    }
    .own_brands_block_two{
      margin-top: 0px;
    }
    .own_brands_block_content{
      margin-left: 0px;
      margin-top: 20px;
    }
  }
}
</style>
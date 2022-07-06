<template>
  <section class="contract_manufacturing container">
    <div class="contract_manufacturing_blocks">

      <div class="contract_manufacturing_block_one">
        <div class="contract_manufacturing_block_title">
          <h1>Автомобильная химия</h1>
          <p class="contract_manufacturing_block_text">Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.</p>
        </div>
        <img src="@/assets/img/avto-him.png" alt="" class="contract_manufacturing_block_photo">
      </div>

      <div class="contract_manufacturing_block_two">
        <div class="contract_manufacturing_block_title">
          <h1>Бытовая химия</h1>
          <p class="contract_manufacturing_block_text">А также стремящиеся вытеснить традиционное производство, нанотехнологии функционально разнесены на независимые элементы.</p>
        </div>
        <img src="@/assets/img/bit-him.png" alt="" class="contract_manufacturing_block_photo">
      </div>

      <div class="contract_manufacturing_block_three">
        <div class="contract_manufacturing_block_title">
          <h1>Дезинфицирующие средства</h1>
          <p class="contract_manufacturing_block_text">Лишь интерактивные прототипы призваны к ответу.</p>
        </div>
        <img src="@/assets/img/dezinfect.png" alt="" class="contract_manufacturing_block_photo">
      </div>

      <div class="contract_manufacturing_block_four">
        <div class="contract_manufacturing_block_title">
          <h1>Пищевые аэрозоли</h1>
          <p class="contract_manufacturing_block_text">Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.</p>
        </div>
        <img src="@/assets/img/dezinfect.png" alt="" class="contract_manufacturing_block_photo">
      </div>

      <div class="contract_manufacturing_block_five">
        <div class="contract_manufacturing_block_title">
          <h1>Косметическая продукция</h1>
          <p class="contract_manufacturing_block_text">Лишь интерактивные прототипы призваны к ответу.</p>
        </div>
        <img src="@/assets/img/avto-him.png" alt="" class="contract_manufacturing_block_photo">
      </div>

      <div class="contract_manufacturing_block_six">
        <div class="contract_manufacturing_block_title">
          <h1>Краски аэрозольные</h1>
          <p class="contract_manufacturing_block_text">А также стремящиеся вытеснить традиционное производство, нанотехнологии функционально разнесены на независимые элементы.</p>
        </div>
        <img src="@/assets/img/bit-him.png" alt="" class="contract_manufacturing_block_photo">
      </div>

    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.contract_manufacturing{
  .contract_manufacturing_blocks{
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    .contract_manufacturing_block_one,.contract_manufacturing_block_two,.contract_manufacturing_block_three,.contract_manufacturing_block_four,.contract_manufacturing_block_five,.contract_manufacturing_block_six{
      border: 1px solid #EBEBF0;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &:hover{
        border: 1px solid #5C8EE6;
        cursor: pointer;
        h1{
          color: #5C8EE6;
        }
      }
    }
    .contract_manufacturing_block_title{
      padding-right: 110px;
      padding-top: 40px;
      padding-left: 30px;
      & h1{
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 160%;
        color: #292D33;
      }
      .contract_manufacturing_block_text{
        margin-top: 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: #828A99;
      }
    }
    .contract_manufacturing_block_photo{
      margin-top: 70px;
      width: 100%;
      display: flex;
    }
  }
}

@media (min-width: 360px) and (max-width: 424px){
  .contract_manufacturing{
    .contract_manufacturing_blocks{
      .contract_manufacturing_block_one,.contract_manufacturing_block_two,.contract_manufacturing_block_three,.contract_manufacturing_block_four,.contract_manufacturing_block_five,.contract_manufacturing_block_six{
        max-width: 95%;
      }
    }
  }
}

@media (min-width: 425px) and (max-width: 767px){
  .contract_manufacturing{
    .contract_manufacturing_blocks{
      display: block;
      margin-left: 15px;
      .contract_manufacturing_block_one,.contract_manufacturing_block_two,.contract_manufacturing_block_three,.contract_manufacturing_block_four,.contract_manufacturing_block_five,.contract_manufacturing_block_six{
        max-width: 95%;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px){
  .contract_manufacturing{
    .contract_manufacturing_blocks{
      display: block;
      margin-left: 15px;
      .contract_manufacturing_block_one,.contract_manufacturing_block_two,.contract_manufacturing_block_three,.contract_manufacturing_block_four,.contract_manufacturing_block_five,.contract_manufacturing_block_six{
        max-width: 95%;
      }
    }
  }
}
</style>
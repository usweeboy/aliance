<template>
  <section class="customer_attitude">
    <div class="customer_attitude_img">
      <img src="@/assets/img/customer-attitude-img.png" alt="">
    </div>
    <div class="customer_attitube_content">
      <div class="customer_attitube_content_line"></div>
      <h1 class="customer_attitube_content_title">Отношение к делу и к клиентам</h1>
      <p class="customer_attitube_content_text">Кстати, интерактивные прототипы описаны максимально подробно. Повседневная практика показывает, что укрепление и развитие внутренней структуры говорит о возможностях соответствующих условий активизации.
         Внезапно, независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований.
         С учётом сложившейся международной обстановки, синтетическое тестирование выявляет срочную потребность системы массового участия.
         А ещё действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены сами себе. Не следует, однако, забывать, что выбранный нами инновационный путь в значительной степени обусловливает важность дальнейших направлений развития.</p>
      <div class="more_about_company" @click="$router.push('/about-company')">
        <div class="more_about_company_line"></div>
        <div class="more_about_company_text">Подробнее о компании</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
%preset_line{
  width: 150px;
  height: 2px;
  background: #5C8EE6;
}
%preset_title{
  margin-top: 30px;
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 120%;
  color: #292D33;
}

.customer_attitude{
  margin-top: 150px;
  display: flex;
  align-items: center;
  .customer_attitude_img{
    & img{
      width: 700px;
    }
  }
  .customer_attitube_content{
    margin-left: 100px;
    .customer_attitube_content_line{
      @extend %preset_line;
    }
    .customer_attitube_content_title{
      @extend %preset_title;
    }
    .customer_attitube_content_text{
      margin-top: 20px;
      font-size: 16px;
      line-height: 160%;
      color: #828A99;
    }
    .more_about_company{
      display: flex;
      margin-top: 30px;
      align-items: center;
      cursor: pointer;
      .more_about_company_line{
        width: 40px;
        height: 2px;
        background: #5C8EE6;
      }
      .more_about_company_text{
        font-style: normal;
        margin-left: 20px;
        font-weight: 600;
        font-size: 16px;
        line-height: 160%;
        color: #5C8EE6;
      }
    }
  }
}

@media (min-width: 360px) and (max-width: 1220px){
  .customer_attitude{
    margin-top: 100px;
    display: block;
    .customer_attitude_img{
      & img{
        width: 100%;
      }
    }
    .customer_attitube_content{
      margin: 0px 15px;
      margin-top: 50px;
      .customer_attitube_content_title{
        font-size: 36px;
      }
    }
  }
}

@media (min-width: 560px) and (max-width: 1220px){
  .customer_attitude{
    .customer_attitube_content{
      .customer_attitube_content_title{
        font-size: 56px;
      }
    }
  }
}
</style>
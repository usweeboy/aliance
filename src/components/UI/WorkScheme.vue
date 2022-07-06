<template>
  <section class="work_scheme container">
    <div class="work_scheme_title">
      <div class="work_scheme_title_line"></div>
      <h1>Схема работы</h1>
    </div>

    <div class="work_scheme_blocks">
      <div class="work_scheme_block_one">
        <div class="work_scheme_block_numbers">
          <h1>01</h1>
          <div class="work_scheme_block_numbers_line"></div>
        </div>
        <div class="work_scheme_block_content">
          <h1 class="work_scheme_block_content_title">Знакомство</h1>
          <p class="work_scheme_block_content_text">Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.</p>
        </div>
        <div class="work_scheme_block_request">
          <div class="work_scheme_block_request_line"></div>
          <p class="work_scheme_block_request_text">Оставить заявку</p>
        </div>
      </div>

      <div class="work_scheme_block_two">
        <div class="work_scheme_block_numbers">
          <h1>02</h1>
          <div class="work_scheme_block_numbers_line"></div>
        </div>
        <div class="work_scheme_block_content">
          <h1 class="work_scheme_block_content_title">Заключение договора</h1>
          <p class="work_scheme_block_content_text">Лишь интерактивные прототипы призваны к ответу.</p>
        </div>
        <div class="work_scheme_block_request">
          <div class="work_scheme_block_request_line"></div>
          <p class="work_scheme_block_request_text">Оставить заявку</p>
        </div>
      </div>

      <div class="work_scheme_block_three">
        <div class="work_scheme_block_numbers">
          <h1>03</h1>
          <div class="work_scheme_block_numbers_line"></div>
        </div>
        <div class="work_scheme_block_content">
          <h1 class="work_scheme_block_content_title">Производство</h1>
          <p class="work_scheme_block_content_text">А также стремящиеся вытеснить традиционное производство, нанотехнологии функционально разнесены на независимые элементы.</p>
        </div>
        <div class="work_scheme_block_request">
          <div class="work_scheme_block_request_line"></div>
          <p class="work_scheme_block_request_text">Оставить заявку</p>
        </div>
      </div>

      <div class="work_scheme_block_four">
        <div class="work_scheme_block_numbers">
          <h1>04</h1>
          <div class="work_scheme_block_numbers_line"></div>
        </div>
        <div class="work_scheme_block_content">
          <h1 class="work_scheme_block_content_title">Доставка</h1>
          <p class="work_scheme_block_content_text">В частности, экономическая повестка сегодняшнего дня говорит о возможностях приоритизации разума над эмоциями.</p>
        </div>
        <div class="work_scheme_block_request">
          <div class="work_scheme_block_request_line"></div>
          <p class="work_scheme_block_request_text">Оставить заявку</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
    }
  }
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

.work_scheme{
  margin-top: 130px;
  .work_scheme_title{
    .work_scheme_title_line{
      @extend %preset_line;
    }
    & h1{
      @extend %preset_title;
    }
  }
  .work_scheme_blocks{
    margin-top: 50px;
    display: flex;
    .work_scheme_block_two,.work_scheme_block_three,.work_scheme_block_four{
      margin-left: 30px;
      max-width: 300px;
    }
    .work_scheme_block_one{
      max-width: 300px;
    }
    .work_scheme_block_numbers{
      display: flex;
      align-items: center;
      & h1{
        font-family: 'Bebas Neue';
        font-size: 48px;
        line-height: 120%;
        color: #5C8EE6;
      }
      .work_scheme_block_numbers_line{
        margin-left: 30px;
        width: 80%;
        background: #EBEBF0;
        height: 2px;
      }
    }
    .work_scheme_block_content{
      margin-top: 30px;
      .work_scheme_block_content_title{
        font-size: 28px;
        line-height: 160%;
        color: #292D33;
      }
      .work_scheme_block_content_text{
        margin-top: 10px;
        font-size: 16px;
        line-height: 160%;
        color: #828A99;
      }
    }
    .work_scheme_block_request{
      display: flex;
      align-items: center;
      padding-top: 20px;
      opacity: 0;
      cursor: pointer;
      .work_scheme_block_request_line{
        width: 40px;
        height: 1px;
        background: #5C8EE6;
      }
      .work_scheme_block_request_text{
        margin-left: 20px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 160%;
        color: #5C8EE6;
      }
    }
    .work_scheme_block_one:hover .work_scheme_block_request{
      opacity: 1;
    }
    .work_scheme_block_two:hover .work_scheme_block_request{
      opacity: 1;
    }
    .work_scheme_block_three:hover .work_scheme_block_request{
      opacity: 1;
    }
    .work_scheme_block_four:hover .work_scheme_block_request{
      opacity: 1;
    }
  }
}

@media (min-width: 360px) and (max-width: 767px){
  .work_scheme{
    .work_scheme_title{
      margin-top: 100px;
      margin-left: 15px;
      & h1{
        font-size: 46px;
      }
    }
    .work_scheme_blocks{
      margin-top: 20px;
      flex-wrap: wrap;
      .work_scheme_block_one,.work_scheme_block_two,.work_scheme_block_three,.work_scheme_block_four{
        margin-top: 30px;
        margin-left: 15px;
      }
    }
  }
}

@media (min-width: 425px) and (max-width: 767px){
  .work_scheme{
    .work_scheme_title{
      & h1{
        font-size: 56px;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px){
  .work_scheme{
    .work_scheme_title{
      margin-left: 15px;
    }
    .work_scheme_blocks{
      flex-wrap: wrap;
      .work_scheme_block_one,.work_scheme_block_two,.work_scheme_block_three,.work_scheme_block_four{
        margin: 0px 15px;
      }
    }
  }
}

@media (min-width: 1024px) and (max-width: 1220px){
  .work_scheme{
    .work_scheme_title{
      margin-left: 15px;
    }
    .work_scheme_blocks{
      .work_scheme_block_one,.work_scheme_block_two,.work_scheme_block_three,.work_scheme_block_four{
        margin-left: 15px;
      }
    }
  }
}
</style>
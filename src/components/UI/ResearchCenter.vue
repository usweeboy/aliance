<template>
  <section class="research_center container">
    <div class="research_center_content">
      <div class="research_center_content_line"></div>
      <h1>Исследовательский центр 
        <span>ALIANCE production</span>
      </h1>
      <div class="research_center_content_text">
        <p>Явные признаки победы институционализации рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. 
          Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира могут быть ограничены исключительно образом мышления. 
          Лишь независимые государства набирают популярность среди определенных слоев населения, а значит, должны быть указаны как претенденты на роль ключевых факторов. 
          Лишь акционеры крупнейших компаний могут быть призваны к ответу.
        </p>
        <p class="research_center_content_text_two">
          С учётом сложившейся международной обстановки, синтетическое тестирование требует определения и уточнения анализа существующих паттернов поведения. 
          Не следует, однако, забывать, что высокотехнологичная концепция общественного уклада представляет собой интересный эксперимент проверки как самодостаточных, 
          так и внешне зависимых концептуальных решений. Предварительные выводы неутешительны: разбавленное изрядной долей эмпатии, рациональное мышление однозначно фиксирует необходимость стандартных подходов.
        </p>
      </div>
      <div class="research_center_content_img">
        <img src="@/assets/img/research-center1.png" alt="" class="research_center_img_one">
        <img src="@/assets/img/research-center2.png" alt="">
      </div>
      <div class="research_center_content_swipper_btn">
        <button>
          <img src="@/assets/img/arrow-left.svg" alt="">
        </button>
        <button>
          <img src="@/assets/img/arrow-right.svg" alt="" class="research_center_content_swipper_img">
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
%preset_line{
  width: 150px;
  height: 2px;
  background: #5C8EE6;
}
%preset_title{
  margin-top: 20px;
  font-family: 'Bebas Neue';
  font-size: 60px;
  line-height: 120%;
  color: #292D33;
}
%preset_text{
  font-size: 16px;
  line-height: 160%;
  color: #828A99;
}
.research_center{
  .research_center_content{
    .research_center_content_line{
      @extend %preset_line;
    }
    & h1{
      @extend %preset_title;
      & span{
        display: block;
      }
    }
    .research_center_content_text{
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      & p{
        @extend %preset_text;
      }
    }
    .research_center_content_img{
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      & img{
        width: 600px;
      }
    }
    .research_center_content_swipper_btn{
      display: flex;
      justify-content: end;
      margin-top: 30px;
      & button{
        background: #5C8EE6;
        border: none;
        cursor: pointer;
        & img{
          padding: 20px 16px 20px 30px;
        }
        .research_center_content_swipper_img{
          padding: 20px 30px 20px 16px;
        }
      }
    }
  }
}

@media (min-width: 360px) and (max-width: 1023px){
  .research_center{
    .research_center_content{
      margin-left: 15px;
      & h1{
        font-size: 36px;
      }
      .research_center_content_text{
        .research_center_content_text_two{
          display: none;
        }
      }
      .research_center_content_img{
        margin-top: 30px;
        .research_center_img_one{
          display: none;
        }
        & img{
          width: 95%;
        }
      }
      .research_center_content_swipper_btn{
        margin-right: 20px;
        & button{
          & img{
            width: 25px;
          }
        }
      }
    }
  }
}

@media (min-width: 560px) and (max-width: 767px){
  .research_center{
    .research_center_content{
      & h1{
        font-size: 56px;
      }
      .research_center_content_img{
        & img{
          width: 97%;
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px){
  .research_center{
    .research_center_content{
      & h1{
        font-size: 56px;
      }
      .research_center_content_img{
        & img{
          width: 98%;
        }
      }
    }
  }
}

@media (min-width: 1024px) and (max-width: 1220px){
  .research_center{
    .research_center_content{
      & h1{
        margin-left: 15px;
        font-size: 56px;
      }
      .research_center_content_text{
        margin-left: 15px;
        display: block;
      }
      .research_center_content_img{
        & img{
          width: 50%;
        }
      }
    }
  }
}
</style>
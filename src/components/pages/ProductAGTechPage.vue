<template>
<div class="product_agtech">
  <navbar />
  <header class="header"> 
    <div class="header_content container">
      <div class="header_content_one">
        <div class="header_content_line"></div>
        <h1>Автохимия AG-Tech</h1>
        <div class="header_content_location_info">
          <router-link to="/"><span class="location_info_main">Главная</span></router-link>
          <span class="location_info_dash">—</span>
          <router-link to="/own-product"><span class="location_info_text_one">Собственные торговые марки</span></router-link>
          <span class="location_info_dash">—</span>
          <router-link to="/product-agtech"><span class="location_info_text">Автохимия AG-Tech</span></router-link>
        </div>
      </div>
      <div class="header_content_two">
        <img src="@/assets/img/ag-tech-icon.svg" alt="">
      </div>
    </div>
  </header>
  <main class="main">
    <section class="section_one container">
      <img src="@/assets/img/img39.png" alt="">
      <div class="section_one_content">
        <div class="section_one_content_line"></div>
        <h1>Собственное производство автохимия AG-Tech</h1>
        <div class="section_one_content_text">
          <p>
            Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость приоритизации разума над эмоциями. 
            Кстати, представители современных социальных резервов неоднозначны и будут описаны максимально подробно.</p>
          <p>
            Но социально-экономическое развитие напрямую зависит от поставленных обществом задач! 
            Безусловно, постоянный количественный рост и сфера нашей активности предоставляет широкие возможности для системы обучения кадров, соответствующей насущным потребностям. 
            В целом, конечно, выбранный нами инновационный путь обеспечивает широкому кругу (специалистов) участие в формировании своевременного выполнения сверхзадачи. 
            А ещё элементы политического процесса представлены в исключительно положительном свете. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: 
            высокотехнологичная концепция общественного уклада создаёт предпосылки для глубокомысленных рассуждений. В своём стремлении повысить качество жизни, они забывают, что дальнейшее развитие различных форм деятельности, 
            а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для поставленных обществом задач.
          </p>
        </div>
      </div>
    </section>

    <list-info class="list_info"/>

    <section class="section_two">
      <div class="section_two_blocks">
        <div class="section_two_content container">
          <div class="section_two_content_line"></div>
          <h1>Генеральный дистрибьютор премиальной автохимии</h1>
          <p class="section_two_content_text">Внезапно, активно развивающиеся страны третьего мира могут быть объявлены нарушающими общечеловеческие нормы этики и морали.</p>
          <div class="section_two_content_list">
            <div class="section_two_content_list_one">
              <div class="section_two_content_list_item">
                <img src="@/assets/img/chemical-production-icon.png" alt="">
                <p>Полное описание товаров</p>
              </div>
              <div class="section_two_content_list_item item_last">
                <img src="@/assets/img/carwashes-icon.png" alt="">
                <p>Актуальные цены</p>
              </div>
            </div>
            <div class="section_two_content_list_two">
              <div class="section_two_content_list_item">
                <img src="@/assets/img/paints-and-varnishes-icon.png" alt="">
                <p>Лаки и краски</p>
              </div>
              <div class="section_two_content_list_item item_last">
                <img src="@/assets/img/chemical-production-icon.png" alt="">
                <p>Химические производства</p>
              </div>
            </div>
          </div>
          <button class="section_two_content_btn">
            <div class="section_two_content_download">
              <img src="@/assets/img/download-icon.png" alt="">
              <p>Скачать каталог</p>
            </div>
          </button>
        </div>
        <img src="@/assets/img/img63.png" alt="" width="700" class="section_two_img">
      </div>
    </section>

    <research-center :style="{marginTop: '150px'}"/>

    <work-scheme />

    <produce-aerosol-products />
  </main>

  <basement />
</div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import ListInfo from '@/components/UI/ListInfo'
import ResearchCenter from '@/components/UI/ResearchCenter'
import WorkScheme from '@/components/UI/WorkScheme'
import ProduceAerosolProducts from '@/components/UI/ProduceAerosolProducts'
import Basement from '@/components/layout/Basement'
export default {
  components: {Navbar, ListInfo, ResearchCenter, WorkScheme, ProduceAerosolProducts, Basement}
}
</script>

<style lang="scss" scoped>
.container{
  max-width: 1220px;
  margin: 0px auto;
}
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

.product_agtech{
  background: #FAFBFC;
  font-family: 'Noto Sans', sans-serif;
  .header{
    background: #F0F2F5;
    .header_content{
      display: flex;
      justify-content: space-between;
      padding-top: 120px;
      padding-bottom: 50px;
      .header_content_one{
        .header_content_line{
          @extend %preset_line;
        }
        & h1{
          @extend %preset_title;
        }
        .header_content_location_info{
          margin-top: 20px;
          .location_info_main,.location_info_dash,.location_info_text,.location_info_text_one{
            font-size: 14px;
            line-height: 160%;
            color: #828A99;
          }
          .location_info_text_one{
            margin-left: 10px;
          }
          .location_info_dash{
            margin-left: 10px;
          }
          .location_info_text{
            color: #292D33;
            margin-left: 10px;
          }
        }
      }
      .header_content_two{
        padding-right: 30px;
        & img{
          width: 150px;
        }
      }
    }
  }
  .main{
    .section_one{
      margin-top: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .section_one_content{
        margin-left: 100px;
        .section_one_content_line{
          @extend %preset_line;
        }
        & h1{
          @extend %preset_title
        }
        .section_one_content_text{
          margin-top: 10px;
          & p{
            @extend %preset_text;
            margin-top: 10px;
          }
        }
      }
    }
    .list_info{
      margin-top: 100px;
    }
    .section_two{
      background: #F0F2F5;
      margin-top: 150px;
      .section_two_blocks{
        display: flex;
        margin-left: 30px;
        .section_two_content{
          padding-top: 100px;
          padding-bottom: 50px;
          .section_two_content_line{
            @extend %preset_line;
          }
          & h1{
            @extend %preset_title;
          }
          .section_two_content_text{
            @extend %preset_text;
            margin-top: 20px;
          }
          .section_two_content_list{
            display: flex;
            margin-top: 30px;
            justify-content: space-between;
            .section_two_content_list_item{
              display: flex;
              align-items: center;
              & img{
                width: 20px;
              }
              & p{
                margin-left: 20px;
                font-size: 16px;
                line-height: 160%;
                color: #292D33;
              }
            }
            .item_last{
              margin-top: 20px;
            }
          }
          .section_two_content_btn{
            margin-top: 70px;
            background: #5C8EE6;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            .section_two_content_download{
              display: flex;
              align-items: center;
              padding: 25px 50px 25px 50px;
              & p{
                font-size: 16px;
                line-height: 160%;
                color: #FFFFFF;
                margin-left: 15px;
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: 360px) and (max-width: 1023px){
  %side_indents{
    margin-left: 15px;
    margin-right: 15px;
  }
  .product_agtech{
    .header{
      .header_content{
        @extend %side_indents;
        .header_content_one{
          & h1{
            font-size: 46px;
          }
          .header_content_location_info{
            .location_info_text{
              margin-left: 0px;
            }
          }
        }
        .header_content_two{
          display: none;
        }
      }
    }
    .main{
      .section_one{
        margin-top: 50px;
        display: block;
        @extend %side_indents;
        & img{
          width: 100%;
        }
        .section_one_content{
          margin-left: 0px;
          margin-top: 30px;
          & h1{
            font-size: 36px;
          }
        }
      }
      .list_info{
        margin-top: 50px;
      }
      .section_two{
        margin-top: 100px;
        .section_two_blocks{
          display: block;
          @extend %side_indents;
          .section_two_content{
            & h1{
              font-size: 36px;
            }
            .section_two_content_list{
              display: block;
              .section_two_content_list_two{
                margin-top: 20px;
              }
            }
            .section_two_content_btn{
              margin-top: 50px;
              width: 100%;
              .section_two_content_download{
                & img{
                  width: 15px;
                }
              }
            }
          }
          & img{
            width: 100%;
          }
        }
      }
    }
  }
}

@media (min-width: 560px) and (max-width: 1023px){
  .product_agtech{
    .header{
      .header_content{
        .header_content_one{
          & h1{
            font-size: 54px;
          }
        }
      }
    }
    .main{
      .section_one{
        .section_one_content{
          & h1{
            font-size: 54px;
          }
        }
      }
      .section_two{
        .section_two_blocks{
          .section_two_content{
            & h1{
              font-size: 54px;
            }
            .section_two_content_btn{
              margin: 0px auto;
              margin-top: 50px;
              width: 70%;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px){
  .product_agtech{
    .header{
      .header_content{
        .header_content_two{
          display: block;
        }
      }
    }
    .main{
      .section_two{
        .section_two_blocks{
          .section_two_content{
            .section_two_content_btn{
              margin: 0px auto;
              margin-top: 50px;
              width: 60%;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) and (max-width: 1220px){
  .product_agtech{
    .header{
      .header_content{
        margin-left: 15px;
        .header_content_one{
          & h1{
            font-size: 60px;
          }
        }
      }
    }
    .main{
      .section_one{
        margin-top: 50px;
        display: block;
        margin: 0px 15px;
        margin-top: 80px;
        & img{
          width: 100%;
        }
        .section_one_content{
          margin-left: 0px;
          margin-top: 50px;
          & h1{
            font-size: 54px;
          }
        }
      }
      .list_info{
        margin-top: 70px;
      }
      .section_two{
        margin-top: 100px;
        .section_two_blocks{
          display: block;
          .section_two_content{
            .section_two_content_list{
              margin-right: 15px;
            }
            .section_two_content_btn{
              margin-top: 50px;
            }
          }
          .section_two_img{
            display: none;
          }
        }
      }
    }
  }
}
</style>
<template>
<div class="about_company">
  <navbar />
  <header class="header">
    <div class="header_content container">
      <div class="header_content_line"></div>
      <h1>О компании</h1>
      <div class="header_content_location_info">
        <router-link to="/"><span class="location_info_main">Главная</span></router-link>
        <span class="location_info_dash">—</span>
        <router-link to="/about-company"><span class="location_info_text">О компании</span></router-link>
      </div>
    </div>
  </header>
  <main class="main">
    <section class="section_one container">
      <div class="section_one_img">
        <img src="@/assets/img/about-company1.png" alt="">
      </div>
      <div class="section_one_content">
        <div class="section_one_content_line"></div>
        <h1>Мы - эксперты в области производства химии</h1>
        <p>Разнообразный и богатый опыт говорит нам, что перспективное планирование однозначно фиксирует необходимость поставленных обществом задач!
          Есть над чем задуматься: ключевые особенности структуры проекта могут быть объединены в целые кластеры себе подобных. Интерактивные прототипы,
          которые представляют собой яркий пример континентально-европейского типа политической культуры, будут описаны максимально подробно.
          Значимость этих проблем настолько очевидна, что перспективное планирование играет важную роль в формировании системы массового участия.</p>
      </div>
    </section>

    <list-info class="list_info"/>

    <section class="section_two container">
      <div class="section_two_content">
        <div class="section_two_content_line"></div>
        <h1>Наше производство</h1>
        <p>Предварительные выводы неутешительны: разбавленное изрядной долей эмпатии, рациональное мышление обеспечивает широкому кругу (специалистов) участие в формировании глубокомысленных рассуждений. 
          Но граница обучения кадров создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса кластеризации усилий.
        </p>
        <p>Реализация намеченных плановых заданий, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для соответствующих условий активизации. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня требует анализа анализа существующих паттернов поведения.</p>
        <div class="section_two_content_list">
          <div class="section_two_content_list_items_one">
            <div>
              <img src="@/assets/img/carwashes-icon.png" alt="">
              <div>Автомобильная химия</div>
            </div>
            <div>
              <img src="@/assets/img/household-chemicals-icon.png" alt="">
              <div>Бытовая химия</div>
            </div>
            <div>
              <img src="@/assets/img/disinfectants-icon.png" alt="">
              <div>Дезинфицирующие средства</div>
            </div>
          </div>
          <div class="section_two_content_list_items_two">
            <div>
              <img src="@/assets/img/food-sprays-icon.png" alt="">
              <div>Пищевые аэрозоли</div>
            </div>
            <div>
              <img src="@/assets/img/cosmetic-products-icon.png" alt="">
              <div>Косметическая продукция</div>
            </div>
            <div>
              <img src="@/assets/img/paints-and-varnishes-icon.png" alt="">
              <div>Краски аэрозольные</div>
            </div>
          </div>
        </div>
      </div>
      <div class="section_two_img">
        <img src="@/assets/img/about-company2.png" alt="" width="600">
      </div>
    </section>

    <customer-attitube />

    <research-center class="research_center"/>

    <produce-aerosol-products class="produce_aerosol_products"/>

    <basement />

  </main>
</div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import ListInfo from '@/components/UI/ListInfo'
import CustomerAttitube from '@/components/UI/СustomerAttitude'
import ResearchCenter from '@/components/UI/ResearchCenter'
import ProduceAerosolProducts from '@/components/UI/ProduceAerosolProducts'
import Basement from '@/components/layout/Basement'
export default {
  components: {Navbar, ListInfo, CustomerAttitube, ResearchCenter, ProduceAerosolProducts, Basement},
  data() {
    return {
      
    }
  }
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

.about_company{
  background: #FAFBFC;
  font-family: 'Noto Sans', sans-serif;
  .header{
    background: #F0F2F5;
    .header_content{
      padding: 125px 0px 50px 0px;
      .header_content_line{
        @extend %preset_line;
      }
      & h1{
        @extend %preset_title;
      }
      .header_content_location_info{
        margin-top: 20px;
        .location_info_main,.location_info_dash,.location_info_text{
          font-size: 14px;
          line-height: 160%;
          color: #828A99;
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
  }
  .main{
    .section_one{
      margin-top: 80px;
      display: flex;
      align-items: center;
      .section_one_content{
        margin-left: 120px;
        .section_one_content_line{
          @extend %preset_line;
        }
        & h1{
          @extend %preset_title;
        }
        & p{
          @extend %preset_text;
          margin-top: 20px;
        }
      }
    }
    .list_info{
      margin-top: 100px;
    }
    .section_two{
      display: flex;
      align-items: center;
      margin-top: 100px;
      .section_two_content{
        .section_two_content_line{
          @extend %preset_line;
        }
        & h1{
          @extend %preset_title;
        }
        & p{
          @extend %preset_text;
          margin-top: 20px;
        }
        .section_two_content_list{
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
          .section_two_content_list_items_one,.section_two_content_list_items_two{
            & div{
              padding-top: 15px;
              display: flex;
              align-items: center;
              & img{
                width: 25px;
              }
              & div{
                margin-left: 15px;
                margin-bottom: 10px;
                font-size: 16px;
                line-height: 160%;
                color: #292D33;
              }
            }
          }
        }
      }
      .section_two_img{
        margin-left: 50px;
      }
    }
    .research_center{
      margin-top: 150px;
    }
  }
}

@media (min-width: 360px) and (max-width: 767px){
  .about_company{
    .header{
      .header_content{
        margin-left: 15px;
        & h1{
          font-size: 54px;
        }
      }
    }
    .main{
      .section_one{
        display: block;
        .section_one_img{
          text-align: center;
          & img{
            width: 90%;
          }
        }
        .section_one_content{
          margin-top: 50px;
          margin-left: 15px;
          & h1{
            font-size: 36px;
          }
        }
      }
      .list_info{
        margin-top: 50px;
      }
      .section_two{
        display: block;
        .section_two_content{
          margin-left: 15px;
          & h1{
            font-size: 36px;
          }
          .section_two_content_list{
            display: block;
          }
        }
        .section_two_img{
          display: none;
        }
      }
      .produce_aerosol_products{
        margin-top: 100px;
      }
    }
  }
}

@media (min-width: 560px) and (max-width: 767px){
  .about_company{
    .main{
      .section_two{
        .section_two_content{
          & h1{
            font-size: 56px;
          }
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1220px){
  .about_company{
    .header{
      .header_content{
        margin-left: 15px;
        & h1{
          font-size: 60px;
        }
      }
    }
    .main{
      .section_one{
        display: block;
        .section_one_img{
          text-align: center;
          & img{
            width: 80%;
          }
        }
        .section_one_content{
          margin-top: 50px;
          margin-left: 15px;
          & h1{
            font-size: 54px;
          }
        }
      }
      .list_info{
        margin-top: 50px;
      }
      .section_two{
        display: block;
        .section_two_content{
          margin-left: 15px;
          & h1{
            font-size: 54px;
          }
          .section_two_content_list{
            display: block;
          }
        }
        .section_two_img{
          display: none;
        }
      }
      .produce_aerosol_products{
        margin-top: 100px;
      }
    }
  }
}
</style>
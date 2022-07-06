<template>
<div class="home_page">
  <navbar />
  <header class="header">
    <div class="header_content container">
      <div class="header_content_section">
        <div class="header_content_title_line"></div>
        <h1 class="header_content_title">Комплексное обеспечение товарами и расходными материалами бизнеса</h1>
        <p class="header_content_text">Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от анализа существующих паттернов поведения.</p>
        <div class="header_content_read_more">
          <div class="header_content_read_more_text" @click="$router.push('/about-company')">Подробнее о компании</div>
        </div>
      </div>
      <div class="info_list">
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
    </div>
  </header>
  <main class="main">
    <work-scheme class="work_scheme"/>
    <div class="contract_manufacturing_title container">
      <div class="contract_manufacturing_title_line"></div>
      <h1>Контрактное производство</h1>
    </div>
    <contract-manufacturing/>
    <div class="own_brands_title container">
      <div class="own_brands_title_line"></div>
      <h1>Собственные торговые марки</h1>
    </div>
    <own-brands/>
    <customer-attitude/>
    <produce-aerosol-products :style="{marginTop: '100px'}"/>
    <div class="expert_blog container">
      <header class="expert_blog_title">
        <div class="expert_blog_title_line"></div>
        <h1>Блог экспертов в области производства</h1>
      </header>
      <main class="expert_blog_blocks">
        <div class="expert_blog_block_one">
          <div class="expert_blog_block_one_content">
            <h1>Современная методология разработки одухотворила всех причастных</h1>
            <p>Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</p>
          </div>
        </div>
        <div class="expert_blog_block_two">
          <div class="expert_blog_block_two_content">
            <h1>Сложно сказать, почему жизнь прекрасна</h1>
            <p>Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</p>
          </div>
          <div class="expert_blog_block_two_content_adaptive">
            <h4>Современная методология разработки одухотворила всех причастных</h4>
          </div>
        </div>
      </main>
      <footer class="expert_blog_footer">
        <div class="expert_blog_footer_block_one" @click="$router.push('/blog')">
          <div></div>
          <h3>Весь блог</h3>
        </div>
      </footer>
    </div>
  </main>
  <basement/>
</div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import WorkScheme from '@/components/UI/WorkScheme'
import ContractManufacturing from '@/components/UI/ContractManufacturing'
import OwnBrands from '@/components/UI/OwnBrands'
import CustomerAttitude from '@/components/UI/СustomerAttitude'
import ProduceAerosolProducts from '@/components/UI/ProduceAerosolProducts'
import Basement from '@/components/layout/Basement'
export default {
  components: {Navbar, WorkScheme, ContractManufacturing,  OwnBrands,  CustomerAttitude, ProduceAerosolProducts, Basement},
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
  margin-top: 30px;
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 120%;
  color: #292D33;
}
%preset_text_one{
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #FFFFFF;
}
%line_over_text{
  width: 150px;
  height: 2px;
  background: #5C8EE6;
}
%menu_hover_effect{
  border-bottom: 2px solid transparent;
  &:hover{
    border-bottom: 2px solid #5C8EE6;
  }
}
%preset_button_one{
  cursor: pointer;
  background: #5C8EE6;
  display: flex;
  justify-content: center;
  align-items: center;
  & div{
    @extend %preset_text_one;
    font-weight: 600;
    padding: 10px 20px;
  }
}

.home_page{
  background: #FAFBFC;
  font-family: 'Noto Sans', sans-serif;
  .header{
    background-image: url('@/assets/img/bg-main-page.jpg');
    .header_content{
      padding-top: 150px;
      .header_content_section{
        .header_content_title_line{
          @extend %line_over_text;
        }
        .header_content_title{
          font-style: normal;
          margin-top: 20px;
          font-family: 'Bebas Neue';
          font-size: 70px;
          line-height: 120%;
          color: #FFFFFF;
        }
        .header_content_text{
          margin-top: 30px;
          font-weight: 400;
          font-size: 15px;
          line-height: 160%;
          color: #FFFFFF;
          max-width: 650px;
        }
        .header_content_read_more{
          margin-top: 50px;
          @extend %preset_button_one;
          max-width: 280px;
          .header_content_read_more_text{
            padding: 20px 50px;
          }
        }
      }
      .info_list{
        margin-top: 100px;
        display: flex;
        .info_list_block{
          border: 1px solid rgba(235, 235, 240, 0.2);
          padding: 30px 50px;
        }
        .info_list_block_text{
          @extend %preset_text_one;
          margin-top: 23px;
        }
      }
    }
  }
  .main{
    .work_scheme{
      margin-top: 100px;
    }
    .contract_manufacturing_title,.own_brands_title,.expert_blog_title{
      margin-top: 150px;
      .contract_manufacturing_title_line,.own_brands_title_line,.expert_blog_title_line{
        @extend %preset_line;
      }
      & h1{
        @extend %preset_title;
      }
    }
    .expert_blog{
      .expert_blog_blocks{
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        .expert_blog_block_one{
          width: 60%;
          background-image: url('@/assets/img/blog-one.jpg');
          background-size: cover;
          .expert_blog_block_one_content{
            padding: 200px 70px 50px 70px;
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
        .expert_blog_block_two{
          margin-left: 30px;
          width: 60%;
          background-image: url('@/assets/img/blog-two.jpg');
          background-size: cover;
          .expert_blog_block_two_content{
            padding: 200px 70px 50px 70px;
            & h1, p{
              font-size: 28px;
              line-height: 160%;
              color: #FFFFFF;
            }
            & p{
              font-size: 16px;
            }
          }
          .expert_blog_block_two_content_adaptive{
            display: none;
            padding: 100px 20px 20px 20px;
            & h4{
              font-size: 20px;
              line-height: 120%;
              color: #FFFFFF;
            }
          }
        }
      }
      .expert_blog_footer{
        margin-top: 40px;
        .expert_blog_footer_block_one{
          display: flex;
          align-items: center;
          & div{
            cursor: pointer;
            width: 40px;
            height: 1px;
            background: #5C8EE6;
          }
          & h3{
            cursor: pointer;
            margin-left: 20px;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 160%;
            color: #5C8EE6;
          }
        }
      }
    }
  }
}

@media (min-width: 360px) and (max-width: 424px){
  %side_indents{
    margin-left: 15px;
    margin-right: 15px;
  }
  .home_page{
    .header{
      .header_content{
        .header_content_section{
          @extend %side_indents;
          .header_content_title{
            font-size: 48px;
          }
          .header_content_text{
            margin-top: 20px;
            font-size: 14px;
          }
          .header_content_read_more{
            margin-top: 30px;
            max-width: 95%;
          }
        }
        .info_list{
          margin-top: 30px;
          padding-bottom: 30px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          .info_list_block{
            margin-top: 20px;
            width: 60%;
          }
        }
      }
    }
    .main{
      .work_scheme{
        margin-top: 50px;
      }
      .contract_manufacturing_title,.own_brands_title,.expert_blog_title{
        @extend %side_indents;
        & h1{
          font-size: 36px;
        }
      }
      .expert_blog{
        margin-top: 100px;
        .expert_blog_blocks{
          display: flex;
          margin-top: 30px;
          .expert_blog_block_one{
            display: none;
          }
          .expert_blog_block_two{
            width: 90%;
            @extend %side_indents;
            .expert_blog_block_two_content{
              display: none;
            }
            .expert_blog_block_two_content_adaptive{
              display: block;
            }
          }
        }
        .expert_blog_footer{
          margin-top: 30px;
          @extend %side_indents;
        }
      }
    }
  }
}

@media (min-width: 425px) and (max-width: 767px){
  .home_page{
    .header{
      .header_content{
        .header_content_section{
          margin: 0px 15px;
          .header_content_title{
            font-size: 52px;
          }
          .header_content_read_more{
            margin-top: 30px;
            max-width: 300px;
          }
        }
        .info_list{
          margin-top: 50px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding-bottom: 20px;
          .info_list_block{
            margin-right: 10px;
            margin-left: 10px;
            margin-top: 10px;
            width: 60%;
          }
          .info_list_block:last-child{
            display: none;
          }
        }
      }
    }
    .main{
      .work_scheme{
        margin-top: 80px;
      }
      .contract_manufacturing_title,.own_brands_title,.expert_blog_title{
        margin-top: 100px;
        margin-left: 15px;
        margin-right: 15px;
        & h1{
          font-size: 36px;
        }
      }
      .expert_blog{
        margin-top: 100px;
        .expert_blog_blocks{
          display: flex;
          margin-top: 30px;
          .expert_blog_block_one{
            display: none;
          }
          .expert_blog_block_two{
            width: 90%;
            margin: 0px 15px;
            .expert_blog_block_two_content{
              display: none;
            }
            .expert_blog_block_two_content_adaptive{
              display: block;
            }
          }
        }
        .expert_blog_footer{
          margin: 30px 15px 0px 15px;
        }
      }
    }
  }
}

@media (min-width: 560px) and (max-width: 767px){
  .home_page{
    .main{
      .contract_manufacturing_title,.own_brands_title,.expert_blog_title{
        & h1{
          font-size: 56px;
        }
      }
      .expert_blog{
        .expert_blog_blocks{
          .expert_blog_block_two{
            width: 95%;
            .expert_blog_block_two_content{
              display: block;
            }
            .expert_blog_block_two_content_adaptive{
              display: none;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px){
  .home_page{
    .header{
      .header_content{
        margin: 0px 15px;
        .header_content_section{
          .header_content_title{
            font-size: 60px;
          }
        }
        .info_list{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding-bottom: 20px;
          margin-top: 50px;
          .info_list_block{
            margin-right: 10px;
            margin-left: 10px;
            margin-top: 10px;
            width: 35%;
          }
        }
      }
    }
    .main{
      .contract_manufacturing_title,.own_brands_title,.expert_blog_title{
        margin: 0px 15px;
        margin-top: 100px;
        & h1{
          font-size: 56px;
        }
      }
      .expert_blog{
        margin-top: 100px;
        .expert_blog_blocks{
          display: flex;
          margin-top: 30px;
          .expert_blog_block_one{
            display: none;
          }
          .expert_blog_block_two{
            width: 95%;
            margin: 0px 15px;
            .expert_blog_block_two_content{
              display: block;
            }
            .expert_blog_block_two_content_adaptive{
              display: none;
            }
          }
        }
        .expert_blog_footer{
          margin: 30px 15px 0px 15px;
        }
      }
    }
  }
}

@media (min-width: 1024px) and (max-width: 1220px){
  .home_page{
    .header{
      .header_content{
        margin: 0px 15px;
        .header_content_section{
          .header_content_title{
            font-size: 74px;
          }
        }
      }
    }
    .main{
      .contract_manufacturing_title,.own_brands_title,.expert_blog_title{
        margin: 0px 15px;
        margin-top: 130px;
        & h1{
          font-size: 60px;
        }
      }
    }
  }
}
</style>
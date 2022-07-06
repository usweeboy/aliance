<template>
<div class="contract_product">
  <navbar />
  <header class="header">
    <div class="header_content container">
      <div class="header_content_line"></div>
      <h1>Контрактное производство</h1>
      <div class="header_content_location_info">
        <router-link to="/"><span class="location_info_main">Главная</span></router-link>
        <span class="location_info_dash">—</span>
        <router-link to="/contract-product"><span class="location_info_about_company">Контрактное производство</span></router-link>
      </div>
    </div>
  </header>
  <main class="main">
    <contract-manufacturing />
    <section class="section_one container">
      <h3>SEO Заголовок</h3>
      <p>Также как дальнейшее развитие различных форм деятельности предполагает независимые способы реализации существующих финансовых и административных условий. 
        Каждый из нас понимает очевидную вещь: курс на социально-ориентированный национальный проект играет важную роль в формировании как самодостаточных, так и внешне зависимых концептуальных решений. 
        Внезапно, интерактивные прототипы набирают популярность среди определенных слоев населения, а значит, должны быть...
      </p>
      <div class="section_one_read_more">
        <img src="@/assets/img/read-more-icon.png" alt="">
        <div>Читать больше</div>
      </div>
    </section>
  </main>
  <basement />
</div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import ContractManufacturing from '@/components/UI/ContractManufacturing'
import Basement from '@/components/layout/Basement'
export default {
  components: {Navbar, ContractManufacturing, Basement}
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

.contract_product{
  background: #FAFBFC;
  font-family: 'Noto Sans', sans-serif;
  .header{
    background: #F0F2F5;
    .header_content{
      padding-top: 125px;
      padding-bottom: 50px;
      .header_content_line{
        @extend %preset_line;
      }
      & h1{
        @extend %preset_title;
      }
      .header_content_location_info{
        margin-top: 20px;
        .location_info_main,.location_info_dash,.location_info_about_company{
          font-size: 14px;
          line-height: 160%;
          color: #828A99;
        }
        .location_info_dash{
          margin-left: 10px;
        }
        .location_info_about_company{
          color: #292D33;
          margin-left: 10px;
        }
      }
    }
  }
  .main{
    .section_one{
      margin-top: 100px;
      & h3{
        font-size: 28px;
        line-height: 160%;
        color: #292D33;
      }
      & p{
        margin-top: 10px;
        font-size: 16px;
        line-height: 160%;
        color: #828A99;
      }
      .section_one_read_more{
        display: flex;
        align-items: center;
        margin-top: 20px;
        cursor: pointer;
        & div{
          margin-left: 10px;
          font-size: 16px;
          line-height: 160%;
          color: #5C8EE6;
        }
      }
    }
  }
}

@media (min-width: 360px) and (max-width: 1023px){
  .contract_product{
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
        margin-left: 15px;
      }
    }
  }
}

@media (min-width: 1024px) and (max-width: 1220px){
  .contract_product{
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
        margin-left: 15px;
      }
    }
  }
}
</style>
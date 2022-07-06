<template>
<div class="own_product">
  <navbar />
  <header class="header">
    <div class="header_content container">
      <div class="header_content_line"></div>
      <h1>Собственные торговые марки</h1>
      <div class="header_content_location_info">
        <router-link to="/"><span class="location_info_main">Главная</span></router-link>
        <span class="location_info_dash">—</span>
        <router-link to="/own-product"><span class="location_info_text">Собственные торговые марки</span></router-link>
      </div>
    </div>
  </header>
  <main>
    <own-brands :style="{marginTop: '50px'}"/>
  </main>
  <basement />
</div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Basement from '@/components/layout/Basement'
import OwnBrands from '@/components/UI/OwnBrands'
export default {
  components: {Navbar, Basement, OwnBrands },
  
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

.own_product{
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
}

@media (min-width: 360px) and (max-width: 1023px){
  .own_product{
    .header{
      .header_content{
        margin-left: 15px;
        & h1{
          font-size: 54px;
        }
      }
    }
  }
}

@media (min-width: 1024px) and (max-width: 1220px){
  .own_product{
    .header{
      .header_content{
        margin-left: 15px;
        & h1{
          font-size: 60px;
        }
      }
    }
  }
}
</style>
<template>
<div class="blog">
  <navbar />
  <header class="header">
    <div class="header_content container">
      <div class="header_content_line"></div>
      <h1>Блог</h1>
      <div class="header_content_location_info">
        <router-link to="/"><span class="location_info_main">Главная</span></router-link>
        <span class="location_info_dash">—</span>
        <router-link to="/own-product"><span class="location_info_text">Блог</span></router-link>
      </div>
    </div>
  </header>
  <main class="main">
    <section class="section_one container">
      <v-blog-one :style="{marginLeft: '30px'}"/>
      <v-blog-two :style="{marginLeft: '30px'}"/>
      <v-blog-two :style="{marginLeft: '30px'}"/>
      <v-blog-one :style="{marginLeft: '30px'}"/>
      <v-blog-one :style="{marginLeft: '30px'}"/>
      <v-blog-two :style="{marginLeft: '30px'}"/>
      <v-blog-two :style="{marginLeft: '30px'}"/>
      <v-blog-one :style="{marginLeft: '30px'}"/>
      <v-blog-one :style="{marginLeft: '30px'}"/>
      <v-blog-two :style="{marginLeft: '30px'}"/>
      <div class="scrolling_blocks_btn">
        <button class="scrolling_blocks_btn_active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
    </section>
  </main>
  <basement />
</div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import vBlogOne from '@/components/UI/vBlogOne'
import vBlogTwo from '@/components/UI/vBlogTwo'
import Basement from '@/components/layout/Basement'
export default {
  components: {Navbar, vBlogOne, vBlogTwo, Basement},
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
.blog{
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
  .main{
    .section_one{
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      .scrolling_blocks_btn{
        display: flex;
        width: 100%;
        margin-top: 40px;
        justify-content: end;
        & button{
          font-weight: 600;
          font-size: 16px;
          line-height: 160%;
          text-align: center;
          color: #292D33;
          padding: 12px 20px;
          border: none;
          background: #FAFBFC;
          border-bottom: 2px solid transparent;
          cursor: pointer;
        }
        .scrolling_blocks_btn_active{
          border: 2px solid #5C8EE6;
          box-sizing: border-box;
        }
      }
    }
  }
}

@media (min-width: 360px) and (max-width: 1023px){
  .blog{
    .header{
      .header_content{
        margin: 0px 15px;
        & h1{
          font-size: 54px;
        }
      }
    }
    .main{
      .section_one{
         margin-right: 5px;
        .scrolling_blocks_btn{
          justify-content: center;
        }
      }
    }
  }
}

@media (min-width: 470px) and (max-width: 1023px){
  .blog{
    .header{
      .header_content{
        margin: 0px 15px;
        & h1{
          font-size: 54px;
        }
      }
    }
    .main{
      .section_one{
        display: flex;
        justify-content: center;
        .scrolling_blocks_btn{
          justify-content: center;
        }
      }
    }
  }
}

@media (min-width: 1024px) and (max-width: 1220px){
  .blog{
    .header{
      .header_content{
        margin: 0px 15px;
        & h1{
          font-size: 60px;
        }
      }
    }
    .main{
      .section_one{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .scrolling_blocks_btn{
          margin-right: 15px;
        }
      }
    }
  }
}
</style>
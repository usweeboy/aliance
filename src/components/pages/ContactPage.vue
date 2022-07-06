<template>
<div class="contact_page">
  <navbar />
  <header class="header">
    <div class="header_content container">
      <div class="header_content_line"></div>
      <h1>Контакты</h1>
      <div class="header_content_location_info">
        <router-link to="/"><span class="location_info_main">Главная</span></router-link>
        <span class="location_info_dash">—</span>
        <router-link to="/own-product"><span class="location_info_text">Контакты</span></router-link>
      </div>
    </div>
  </header>
  <main class="main">
    <section class="section_one container">
      <div class="main_content_number">
          <h3>+7 (499) 686-10-14</h3>
        </div>
        <div class="main_content_address">
          <img src="@/assets/img/gps-icon.png" alt="">
          <a href="https://www.google.com/maps/place/%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%BF%D0%B5%D1%80.,+4,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+115191/@55.7082264,37.6222514,17z/data=!3m1!4b1!4m5!3m4!1s0x46b54b46b0a20c5f:0xb3f08060e8544675!8m2!3d55.7082234!4d37.6244401" target="_blank">г. Мосвка, Холодильный пер. 4к1с8</a>
        </div>
        <div class="main_content_email">
          <img src="@/assets/img/mail-icon.png" alt="">
          <a href="#" target="_blank">a.dragunov@tdaliance.ru</a>
        </div>
        <div class="main_content_social">
          <a href="https://vk.com/dgrachkov" target="_blank"><img src="@/assets/img/vk-icon.svg" alt=""></a> 
          <a href="https://www.instagram.com/usweeboy/" target="_blank"><img src="@/assets/img/inst-icon.png" alt="" class="inst_icon"></a>
        </div>
    </section>
    <section class="section_two container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.8934748356382!2d37.62225141592884!3d55.70822338054145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b46b0a20c5f%3A0xb3f08060e8544675!2z0KXQvtC70L7QtNC40LvRjNC90YvQuSDQv9C10YAuLCA0LCDQnNC-0YHQutCy0LAsIDExNTE5MQ!5e0!3m2!1sru!2sru!4v1651468559902!5m2!1sru!2sru" width="1220" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="small_map"></iframe>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4495.91457865303!2d37.62513747282885!3d55.707114161161925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b46b0a20c5f%3A0xb3f08060e8544675!2z0KXQvtC70L7QtNC40LvRjNC90YvQuSDQv9C10YAuLCA0LCDQnNC-0YHQutCy0LAsIDExNTE5MQ!5e0!3m2!1sru!2sru!4v1652604545952!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="middle_map"></iframe>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.8934748356382!2d37.62225141592884!3d55.70822338054145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b46b0a20c5f%3A0xb3f08060e8544675!2z0KXQvtC70L7QtNC40LvRjNC90YvQuSDQv9C10YAuLCA0LCDQnNC-0YHQutCy0LAsIDExNTE5MQ!5e0!3m2!1sru!2sru!4v1652856256105!5m2!1sru!2sru" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="large_map"></iframe>
    </section>
  </main>
  <basement />
</div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Basement from '@/components/layout/Basement'
export default {
  components: {Navbar, Basement}
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

.contact_page{
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
      margin-top: 75px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .main_content_number{
        & h3{
          font-weight: 600;
          font-size: 30px;
          line-height: 160%;
          text-decoration-line: underline;
          color: #292D33;
        }
      }
      .main_content_address,.main_content_email{
        display: flex;
        align-items: center;
        & a{
          margin-left: 15px;
          font-size: 16px;
          line-height: 160%;
          color: #292D33;
        }
      }
      .main_content_social{
        display: flex;
        .inst_icon{
          margin-left: 20px;
        }
      }
    }
    .section_two{
      margin-top: 100px;
      .middle_map,.large_map{
        display: none;
      }
    }
  }
}

@media (min-width: 360px) and (max-width: 1023px){
  %side_indents{
    margin-left: 15px;
    margin-right: 15px;
  }
  .contact_page{
    .header{
      .header_content{
        @extend %side_indents;
        & h1{
          font-size: 54px;
        }
      }
    }
    .main{
      .section_one{
        margin-top: 50px;
        display: block;
        @extend %side_indents;
        .main_content_address,.main_content_email{
          margin-top: 30px;
        }
        .main_content_email{
          margin-top: 20px;
        }
        .main_content_social{
          margin-top: 30px;
        }
      }
      .section_two{
        display: flex;
        justify-content: center;
        .small_map{
          display: none;
        }
        .middle_map{
          display: block;
        }
      }
    }
  }
}

@media (min-width: 360px) and (max-width: 1023px){
  .contact_page{
    .main{
      .section_two{
        .middle_map{
          display: none;
        }
        .large_map{
          display: block;
        }
      }
    }
  }
}

@media (min-width: 1024px) and (max-width: 1220px){
  .contact_page{
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
        margin: 0px 15px;
        margin-top: 75px;
        .main_content_number{
          & h3{
            font-size: 26px;
          }
        }
      }
      .section_two{
        display: flex;
        justify-content: center;
        .small_map{
          display: none;
        }
        .middle_map{
          display: none;
        }
        .large_map{
          display: block;
        }
      }
    }
  }
}
</style>
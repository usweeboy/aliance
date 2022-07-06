<template>
  <nav class="navbar">
    <div class="navbar_block_one">
      <img src="@/assets/img/logo-aliance-black.svg" @click="$router.push('/')" alt="" :style="{cursor: 'pointer'}">
    </div>
    <div class="navbar_block_two">
      <ul class="navbar_list">
        <li class="navbar_list_item">
          <router-link to="/about-company">О компании</router-link>
        </li>
        <li class="navbar_list_item">
          <router-link to="/contract-product">Контрактное производство</router-link>
        </li>
        <li class="navbar_list_item">
          <router-link to="/own-product">Собственные торговые марки</router-link>
        </li>
        <li class="navbar_list_item">
          <router-link to="/blog">Новости</router-link>
        </li>
        <li class="navbar_list_item">
          <router-link to="/contact">Контакты</router-link>
        </li>
      </ul>
      <div class="navbar_adaptive_menu" @click="showAdaptiveMenu">
        <img src="@/assets/img/menu-burger-icon.svg" alt="" v-if="menuBurgerIcon">
        <img src="@/assets/img/close-icon.svg" alt="" v-if="closeIcon">
      </div>
      <div class="adaptive_menu" v-if="adaptiveMenu">
        <section class="adaptive_menu_one">
          <router-link to="/about-company">
            <h3>О компании</h3>
          </router-link>
          <router-link to="/contract-product">
            <h3>Контрактное производство</h3>
          </router-link>
          <ul class="adaptive_menu_one_list">
            <li class="adaptive_menu_one_list_item">Автомобильная химия</li>
            <li class="adaptive_menu_one_list_item">Бытовая химия</li>
            <li class="adaptive_menu_one_list_item">Дезинфицирующие средства</li>
            <li class="adaptive_menu_one_list_item">Пищевые аэрозоли</li>
            <li class="adaptive_menu_one_list_item">Косметическая продукция</li>
            <li class="adaptive_menu_one_list_item">Краски аэрозольные</li>
          </ul>
          <router-link to="/own-product">
            <h3>Собственные марки</h3>
          </router-link>
          <ul class="adaptive_menu_one_list">
            <li class="adaptive_menu_one_list_item">
              <router-link to="/product-agtech">Автохимия AG-Tech</router-link>
            </li>
            <li class="adaptive_menu_one_list_item">
             <router-link to="/product-ap">Автохимия AP</router-link>
            </li>
          </ul>
          <router-link to="/blog">
            <h3>Новости</h3>
          </router-link>
          <router-link to="/contact">
            <h3>Контакты</h3>
          </router-link>
        </section>
        <section class="adaptive_menu_two">
          <div class="adaptive_menu_two_number">
            <h3>+7 (499) 686-10-14</h3>
          </div>
          <div class="adaptive_menu_two_address">
            <img src="@/assets/img/gps-icon.png" alt="">
            <a href="https://www.google.com/maps/place/%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%BF%D0%B5%D1%80.,+4,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+115191/@55.7082264,37.6222514,17z/data=!3m1!4b1!4m5!3m4!1s0x46b54b46b0a20c5f:0xb3f08060e8544675!8m2!3d55.7082234!4d37.6244401" target="_blank">г. Мосвка, Холодильный пер. 4к1с8</a>
          </div>
          <div class="adaptive_menu_two_email">
            <img src="@/assets/img/mail-icon.png" alt="">
            <a href="#" target="_blank">a.dragunov@tdaliance.ru</a>
          </div>
          <div class="adaptive_menu_two_social">
            <a href="https://vk.com/dgrachkov" target="_blank"><img src="@/assets/img/vk-icon.svg" alt=""></a> 
            <a href="https://www.instagram.com/usweeboy/" target="_blank"><img src="@/assets/img/inst-icon.png" alt="" class="inst_icon"></a>
          </div>
        </section>
      </div>
      <div class="navbar_contact">
        <img src="@/assets/img/icon-phone.png" alt="">
        <span class="navbar_contact_number">+7 (499) 686-10-14</span>
      </div>
    </div>
    <div class="navbar_block_three" @click="showModalWin">
      <div class="navbar_consult">Получить консультацию</div>
      <img src="@/assets/img/phone-icon.svg" alt="" class="navbar_consult_adaptive">
    </div>
    <v-modal-win v-show="visibleModalWin" @closeModalWin="closeModalWin"/>
  </nav>
</template>

<script>
import vModalWin from '@/components/UI/vModalWin'
export default {
  components: {vModalWin},
  data(){
    return{
      adaptiveMenu: false,
      menuBurgerIcon: true,
      closeIcon: false,
      visibleModalWin: false
    }
  },
  methods: {
    showAdaptiveMenu() {
      this.adaptiveMenu = !this.adaptiveMenu
      this.menuBurgerIcon = !this.menuBurgerIcon
      this.closeIcon = !this.menuBurgerIcon
    },
    showModalWin() {
      this.visibleModalWin = true
    },
    closeModalWin() {
      this.visibleModalWin = false
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  max-width: 1220px;
  margin: 0px auto;
}
%preset_text_one{
  font-size: 14px;
  line-height: 160%;
  color: #292D33;
  cursor: pointer;
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
    color: white;
    font-weight: 600;
    padding: 10px 20px;
  }
}

.navbar{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #EBEBF0;
  background: #FAFBFC;
  position: fixed;
  width: 100%;
  .navbar_block_one{
    padding: 15px 30px;
    border-right: 1px solid #EBEBF0;
  }
  .navbar_block_two{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navbar_list{
      display: flex;
      .navbar_list_item{
        @extend %preset_text_one;
        cursor: pointer;
        margin-left: 30px;
        padding: 15px 0px 15px 0px;
        border-bottom: 2px solid transparent;
        @extend %menu_hover_effect;
      }
    }
    .navbar_adaptive_menu,.adaptive_menu{
      display: none;
    }
    .navbar_contact{
      margin-left: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 0px 15px 0px;
      .navbar_contact_number{
        margin-left: 5px;
        margin-right: 10px;
        @extend %preset_text_one;
        cursor: default;
      }
    }
  }
  .navbar_block_three{
    @extend %preset_button_one;
    .navbar_consult_adaptive{
      display: none;
    }
  }
}

@media (min-width: 360px) and (max-width: 1023px){
  .navbar{
    display: flex;
    justify-content: space-between;
    .navbar_block_one{
      order: 1;
      border: none
    }
    .navbar_block_two{
      border-right: 1px solid #EBEBF0;
      order: 0;
      .navbar_list{
        display: none;
      }
      .navbar_adaptive_menu{
        padding: 27.5px 30px;
        display: block;
        cursor: pointer;
      }
      .adaptive_menu{
        overflow: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        display: block;
        width: 100%;
        background: #FAFBFC;
        position: fixed;
        top: 77px;
        bottom: 0;
        right: 0;
        left: 0;
        .adaptive_menu_one{
          padding-bottom: 25px;
          border-bottom: 1px solid #EBEBF0;
          & h3{
            margin-left: 15px;
            margin-top: 25px;
            font-weight: 700;
            font-size: 14px;
            line-height: 160%;
            color: #292D33;
          }
          .adaptive_menu_one_list{
            margin-top: 20px;
            margin-left: 30px;
            .adaptive_menu_one_list_item{
              margin-top: 10px;
              font-size: 14px;
              line-height: 160%;
              color: #828A99;
            }
          }
        }
        .adaptive_menu_two{
          padding-bottom: 20px;
          .adaptive_menu_two_number{
            margin-top: 30px;
            margin-left: 15px;
            & h3{
              font-weight: 600;
              font-size: 24px;
              line-height: 160%;
              text-decoration-line: underline;
              color: #292D33;
            }
          }
          .adaptive_menu_two_address,.adaptive_menu_two_email{
            display: flex;
            align-items: center;
            margin-left: 20px;
            margin-top: 20px;
            & a{
              margin-left: 15px;
              font-size: 14px;
              line-height: 160%;
              color: #292D33;
            }
          }
          .adaptive_menu_two_email{
            margin-top: 12px;
          }
          .adaptive_menu_two_social{
            margin-top: 25px;
            margin-left: 20px;
            display: flex;
            align-items: center;
            .inst_icon{
              margin-left: 15px;
            }
          }
        }
      }
      .navbar_contact{
        display: none;
      }
    }
    .navbar_block_three{
      order: 3;
      .navbar_consult{
        display: none;
      }
      .navbar_consult_adaptive{
        display: block;
        cursor: pointer;
        padding: 26px 32px;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px){
  .navbar{
    .navbar_block_two{
      .adaptive_menu{
        .adaptive_menu_one{
          & h3{
            font-weight: 700;
            font-size: 22px;
          }
          .adaptive_menu_one_list{
            .adaptive_menu_one_list_item{
              font-size: 18px;
            }
          }
        }
        .adaptive_menu_two{
          .adaptive_menu_two_number{
            & h3{
              font-size: 24px;
            }
          }
          .adaptive_menu_two_address,.adaptive_menu_two_email{
            & a{
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1024px) and (max-width: 1220px){
  .navbar{
    .navbar_block_two{
      .navbar_list{
        .navbar_list_item{
          font-size: 13px;
        }
      }
      .navbar_contact{
        display: none;
      }
    }
    .navbar_block_three{
      .navbar_consult{
        display: none;
      }
      .navbar_consult_adaptive{
        display: block;
        cursor: pointer;
        padding: 26px 32px;
      }
    }
  }
}

@media (min-width: 1035px) and (max-width: 1220px){
  .navbar{
    .navbar_block_two{
      .navbar_list{
        .navbar_list_item{
          font-size: 14px;
        }
      }
    }
  }
}

@media (min-width: 1221px) and (max-width: 1348px){
  .navbar{
    .navbar_block_two{
      .navbar_contact{
        display: none;
      }
    }
    .navbar_block_three{
      .navbar_consult{
        display: none;
      }
      .navbar_consult_adaptive{
        display: block;
        cursor: pointer;
        padding: 26px 32px;
      }
    }
  }
}
</style>
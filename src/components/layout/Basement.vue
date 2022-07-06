<template>
  <section>
    <header class="header">
      <div class="header_content container">
        <div class="header_block_one ">
          <img src="@/assets/img/ag-tech-footer.png" alt="" class="header_block_one_img">
        </div>
        <div class="header_block_two">
          <h1 class="header_block_two_title">Хотите сотрудничать?</h1>
          <p class="header_block_two_text">Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время ответит на все интересующие вопросы и поможем даже в самых сложных случаях!</p>
          <form action="" class="header_form">
            <input type="text" placeholder="Имя" class="header_form_input_name">
            <input type="tel" class="header_form_input_tel" placeholder="Номер телефона">
          </form>
          <div class="header_form_two">
            <button @click="showModalWin">
              <p>Отправить заявку</p>
            </button>
            <div class="modal_window" v-if="modalWin">
              <div class="modal_window_content">
                <header class="modal_window_header">
                  <img src="@/assets/img/modal-win-thanks.png" alt="">
                  <img src="@/assets/img/close-icon.svg" alt="" class="img_close_modal" @click="closeModalWin">
                </header> 
                <main class="modal_window_main">
                  <h1>Спасибо за заявку!</h1>
                  <p>Наш менеджер свяжется с Вами в ближайшее время ответит на все интересующие вопросы и поможем даже в самых сложных случаях!</p>
                </main>
              </div>
            </div>
            <div class="header_form_two_content">
              <div class="header_form_two_content_img">
                <img src="@/assets/img/shield-icon.png" alt="">
              </div>
              <p>Обращаясь к нам вы получаете не только профессиональную работу, но и абсолютную конфиденциальность информации!</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="main_content container">
        <div class="main_content_logo">
          <img src="@/assets/img/logo-aliance-black.svg" alt="">
        </div>
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
      </div>
    </main>

    <footer class="footer">
      <div class="footer_content container">
        <div class="contract_manufacturing_block">
          <div class="contract_manufacturing_block_title">
            <h3>Контрактное производство</h3>
            <h3>Собственные марки</h3>
          </div>
          <div class="contract_manufacturing_block_list">
            <div class="contract_manufacturing_block_list_one">
              <p>Автомобильная химия</p>
              <p>Бытовая химия</p>
              <p>Дезинфицирующие средства</p>
            </div>
            <div class="contract_manufacturing_block_list_two">
              <p>Пищевые аэрозоли</p>
              <p>Косметическая продукция</p>
              <p>Краски аэрозольные</p>
            </div>
            <div class="contract_manufacturing_block_list_three">
              <router-link to="/product-agtech"><p>Автохимия AG-Tech</p></router-link>
              <router-link to="/product-ap"><p>Автохимия AP</p></router-link>
            </div>
          </div>
        </div>
        <div class="contract_manufacturing_menu_items">
          <router-link to="/about-company">
            <h3 class="about_company">О компании</h3>
          </router-link>
          <router-link to="/blog">
            <h3 class="news">Новости</h3>
          </router-link>
          <router-link to="/contact">
            <h3 class="contact">Контакты</h3>
          </router-link>
        </div>
      </div>
    </footer>

    <aside>
      <div class="aside_content container">
        <div class="aside_block_one">
          <p>© 2022 «Aliance Production». Все права защищены.</p>
          <p class="privacy_policy">
            <router-link to="/politics">Политики конфиденциальности</router-link>
          </p>
        </div>
        <div class="aside_block_two">
          <span>Сделано в</span>
          <img src="@/assets/img/RUSO.svg" alt="">
        </div>
      </div>
    </aside>
  </section>
</template>

<script>
export default {
  data() {
    return{
      modalWin: false
    }
  },
  methods: {
    closeModalWin() {
      this.modalWin = !this.modalWin
    },
    showModalWin() {
      this.modalWin = !this.modalWin
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
  margin-top: 30px;
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 120%;
  color: #292D33;
}

section{
  margin-top: 150px;
  .header{
    background: #F0F2F5;
    .header_content{
      display: flex;
      .header_block_two{
        margin-left: 50px;
        .header_block_two_title{
          margin-top: 100px;
          @extend %preset_title;
        }
        .header_block_two_text{
          margin-top: 20px;
          font-size: 16px;
          line-height: 160%;
          color: #828A99;
        }
        .header_form{
          display: flex;
          flex-wrap: wrap;
          margin-top: 50px;
          .header_form_input_name,.header_form_input_tel{
            border: 1px solid #cbcbcb;
            background: #F0F2F5;
            width: 400px;
            padding: 15px 0px 15px 15px;
            font-size: 16px;
            line-height: 160%;
            color: black;
          }
          .header_form_input_tel{
            margin-top: 30px;
            border: 1px solid #5C8EE6;
          }
        }
        .header_form_two{
          display: flex;
          align-items: center;
          margin-top: 30px;
          & button{
            cursor: pointer;
            & p{
              font-style: normal;
              font-weight: 700;
              font-size: 14px;
              line-height: 160%;
              color: #FFFFFF;
              padding: 10px 50px;
            }
            background: #5C8EE6;
            border: none;
            width: 235px;
            height: 62px;
          }
          .modal_window{
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            overflow: hidden;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            z-index: 99;
            padding: 30px 0px;
            background: rgba(0,0,0,.5);
            .modal_window_content{
              width: 460px;
              padding: 30px 40px;
              background: white;
              position: relative;
              .modal_window_header{
                display: flex;
                justify-content: center;
                .img_close_modal{
                  position: absolute;
                  cursor: pointer;
                  border: 1px solid #EBEBF0;
                  padding: 16px;
                  right: 30px;
                }
              }
              .modal_window_main{
                & h1{
                  margin-top: 30px;
                  @extend %preset_title;
                }
                & p{
                  margin-top: 15px;
                  font-size: 16px;
                  line-height: 160%; 
                  color: #828A99;
                }
              }
            }
          }
          .header_form_two_content{
            margin-left: 30px;
            display: flex;
             & p{
              margin-left: 10px;
              font-style: normal;
              font-weight: 400;
              font-size: 12px;
              line-height: 160%;
              color: #828A99;
            }
          }
        }
      }
    }
  }
  .main{
    border-bottom: 1px solid #EBEBF0;
    background: #FAFBFC;
    .main_content{
      display: flex;
      align-items: center;
      padding: 50px 0px;
      .main_content_logo{
        & img {
          width: 180px;
        }
      }
      .main_content_number{
        margin-left: 50px;
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
        margin-left: 50px;
        & a{
          margin-left: 15px;
          font-size: 16px;
          line-height: 160%;
          color: #292D33;
        }
      }
      .main_content_social{
        display: flex;
        margin-left: 40px;
        .inst_icon{
          margin-left: 15px;
        }
      }
    }
  }
  .footer{
    padding: 50px 0px;
    border-bottom: 1px solid #EBEBF0;
    .footer_content{
      display: flex;
      .contract_manufacturing_block{
        .contract_manufacturing_block_title{
          display: flex;
          justify-content: space-between;
          & h3{
            font-weight: 600;
            font-size: 16px;
            line-height: 160%;
            color: #292D33;
          }
        }
        .contract_manufacturing_block_list{
          display: flex;
          margin-top: 15px;
          .contract_manufacturing_block_list_one,.contract_manufacturing_block_list_two,.contract_manufacturing_block_list_three{
            margin-left: 15px;
            & p{
              cursor: pointer;
              margin-top: 15px;
              font-weight: 400;
              font-size: 16px;
              line-height: 160%;
              color: #828A99;
              &:hover{
                color: #5C8EE6;
              }
            }
          }
          .contract_manufacturing_block_list_two,.contract_manufacturing_block_list_three{
            margin-left: 130px;
          }
        }
      }
      .contract_manufacturing_menu_items{
        margin-left: 150px;
        & h3{
          font-weight: 600;
          font-size: 16px;
          line-height: 160%;
          color: #292D33;
          cursor: pointer;
        }
        .news,.contact{
          margin-top: 30px;
        }
      }
    }
  }
  & aside{
    .aside_content{
      padding: 20px 0px;
      display: flex;
      justify-content: space-between;
      .aside_block_one{
        display: flex;
        & p{
          font-size: 13px;
          line-height: 160%;
          color: #828A99;
        }
        .privacy_policy{
          cursor: pointer;
          margin-left: 20px;
          text-decoration-line: underline;
        }
      }
      .aside_block_two{
        display: flex;
        border: 1px solid #FAFBFC;
        & span{
          font-size: 12px;
          line-height: 160%;
          color: #828A99;
          margin-right: 10px;
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
  section{
    margin-top: 100px;
    .header{
      .header_content{
        @extend %side_indents;
        .header_block_one{
          display: none;
        }
        .header_block_two{
          margin-left: 0px;
          .header_block_two_title{
            margin-top: 50px;
            font-size: 36px;
          }
          .header_block_two_text{
            margin-top: 10px;
            font-size: 14px;
          }
          .header_form{
            display: flex;
            flex-wrap: wrap;
            margin-top: 50px;
            .header_form_input_name,.header_form_input_tel{
              width: 90%;
            }
          }
          .header_form_two{
            display: block;
            & button{
              width: 95%;
            }
            .header_form_two_content{
              margin-left: 0px;
              margin-top: 30px;
              padding-bottom: 50px;
            }
            .modal_window{
              .modal_window_content{
                width: 80%;
                 .modal_window_main{
                  & h1{
                    font-size: 40px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .main{
      .main_content{
        display: block;
        padding: 50px 0px 30px 15px;
        .main_content_number{
          margin-left: 0px;
          margin-top: 30px;
        }
        .main_content_address,.main_content_email{
          margin-top: 20px;
          display: flex;
          align-items: center;
          margin-left: 0px;
        }
        .main_content_email{
          margin-top: 12px;
        }
        .main_content_social{
          margin-left: 0px;
          margin-top: 25px;
        }
      }
    }
    .footer{
      display: none;
    }
    & aside{
      .aside_content{
        @extend %side_indents;
        display: block;
        .aside_block_one{
          display: block;
          .privacy_policy{
            margin-top: 10px;
            margin-left: 0px;
          }
        }
        .aside_block_two{
          margin-top: 10px;
        }
      }
    }
  }
}

@media (min-width: 500px) and (max-width: 767px){
  section{
    .header{
      .header_content{
        .header_block_two{
          .header_block_two_title{
            font-size: 52px;
          }
          .header_form{
            .header_form_input_name,.header_form_input_tel{
              width: 80%;
            }
          }
          .header_form_two{
            & button{
              width: 60%;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 560px) and (max-width: 1023px){
  section{
    .header{
      .header_content{
        .header_block_two{
          text-align: center;
          .header_block_two_title{
            font-size: 54px;
          }
          .header_form{
            .header_form_input_name,.header_form_input_tel{
              width: 60%;
              margin: 0px auto;
            }
            .header_form_input_tel{
              margin-top: 30px;
            }
          }
          .header_form_two{
            & button{
              width: 62%;
            }
            .header_form_two_content{
              justify-content: center;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px){
  section{
    & aside{
      .aside_content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .aside_block_one{
          display: flex;
          justify-content: space-between;
          .privacy_policy{
            margin-top: 0px;
            margin-left: 30px;
          }
        }
        .aside_block_two{
          margin-top: 0px;
        }
      }
    }
  }
}

@media (min-width: 1024px) and (max-width: 1098px){
  section{
    .main{
      .main_content{
        .main_content_number{
          margin-left: 30px;
          & h3{
            font-size: 18px;
          }
        }
        .main_content_address,.main_content_email{
          margin-left: 30px;
          & a{
            margin-left: 15px;
            font-size: 14px;
          }
        }
      }
    }
  }
}

@media (min-width: 1099px) and (max-width: 1220px){
  section{
    .main{
      .main_content{
        .main_content_number{
          margin-left: 40px;
          & h3{
            font-size: 24px;
          }
        }
        .main_content_address,.main_content_email{
          margin-left: 40px;
          & a{
            margin-left: 15px;
            font-size: 16px;
            line-height: 160%;
            color: #292D33;
          }
        }
      }
    }
  }
}
</style>
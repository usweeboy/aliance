<template>
<div class="modal_window">
  <div class="modal_window_content_one" v-if="modalWinContentOne">
    <header class="modal_window_content_one_header">
      <h1>Есть вопросы?</h1>
      <img src="@/assets/img/close-icon.svg" alt="" @click="closeModalWin">
    </header>
    <p>Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время ответит на все интересующие вопросы и поможем даже в самых сложных случаях!</p>
    <form action="" class="modal_window_form">
      <div class="modal_window_form_content">
        <input type="text" placeholder="Имя" class="modal_window_input_name">
        <input type="text" placeholder="Номер телефона" class="modal_window_input_tel">
      </div>
    </form>
    <button class="modal_window_btn" @click="sendRequest">Отправить</button>
    <div class="confidentiality_information">
      <img src="@/assets/img/shield-icon.png" alt="">
      <span>Обращаясь к нам вы получаете не только профессиональную работу, но и абсолютную конфиденциальность информации!</span>
    </div>
  </div>
  <div class="modal_window_content_two" v-if="modalWinContentTwo">
    <header class="modal_window_content_two_header">
      <img src="@/assets/img/modal-win-thanks.png" alt="">
      <img src="@/assets/img/close-icon.svg" alt="" class="img_close_modal" @click="closeModalWin">
    </header> 
    <main class="modal_window_content_two_main">
      <h1>Спасибо за заявку!</h1>
      <p>Наш менеджер свяжется с Вами в ближайшее время ответит на все интересующие вопросы и поможем даже в самых сложных случаях!</p>
      <button @click="closeModalWin">Вернуться на главную</button>
    </main>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      modalWinContentOne: true,
      modalWinContentTwo: false
    }
  },
  methods: {
    closeModalWin() {
      this.$emit('closeModalWin')
    },
    sendRequest() {
      this.modalWinContentOne = false
      this.modalWinContentTwo = true
    },
  }
}
</script>

<style lang="scss" scoped>
%preset_title{
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 120%;
  color: #292D33;
}
%preset_text{
  margin-top: 15px;
  font-size: 16px;
  line-height: 160%; 
  color: #828A99;
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
  .modal_window_content_one{
    width: 460px;
    padding: 30px 40px;
    background: white;
    .modal_window_content_one_header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      & img{
        cursor: pointer;
        border: 1px solid #EBEBF0;
        padding: 16px;
      }
      & h1{
        @extend %preset_title;
      }
    }
    & p{
      @extend %preset_text;
    }
    .modal_window_form{
      margin-top: 30px;
      display: flex;
      justify-content: center;
      .modal_window_form_content{
        width: 100%;
        .modal_window_input_name,.modal_window_input_tel{
          padding: 20px 10px 20px 30px;
          display: block;
          width: 90%;
          border: 1px solid #E4E4EB;
          color: #292D33;
        } 
        .modal_window_input_tel{
          margin-top: 30px;
        }
      }
    }
    .modal_window_btn{
      margin-top: 30px;
      width: 100%;
      border: none;
      background: #5C8EE6;
      font-weight: 700;
      font-size: 14px;
      line-height: 160%;
      color: #FFFFFF;
      padding: 20px 50px;
      cursor: pointer;
    }
    .confidentiality_information{
      margin-top: 25px;
      & span{
        margin-left: 11px;
        @extend %preset_text;
      }
    }
  }
  .modal_window_content_two{
    width: 460px;
    padding: 30px 40px;
    background: white;
    position: relative;
    .modal_window_content_two_header{
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
    .modal_window_content_two_main{
      & h1{
        margin-top: 30px;
        @extend %preset_title;
      }
      & p{
        @extend %preset_text;
      }
      & button{
        margin-top: 30px;
        width: 100%;
        border: none;
        background: #5C8EE6;
        font-weight: 700;
        font-size: 14px;
        line-height: 160%;
        color: #FFFFFF;
        padding: 20px 50px;
        cursor: pointer;
      }
    }
  }
}

@media (min-width: 360px) and (max-width: 407px){
  .modal_window{
    display: block;
    .modal_window_content_one{
      width: 80%;
      .modal_window_content_one_header{
        & h1{
          font-size: 40px;
        }
      }
    }
    .modal_window_content_two{
      width: 80%;
      .modal_window_content_two_main{
        & h1{
          font-size: 40px;
        }
      }
    }
  }
}

@media (min-width: 408px) and (max-width: 767px){
  .modal_window{
    display: block;
    .modal_window_content_one{
      width: 90%;
      .modal_window_content_one_header,.modal_window_form{
        margin-right: 15px;
      }
      & p{
        margin-right: 15px;
      }
      .modal_window_btn{
        width: 95%;
      }
    }
    .modal_window_content_two{
      width: 90%;
      .modal_window_content_two_main{
        margin-right: 15px;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px){
  .modal_window{
    display: block;
    .modal_window_content_one,.modal_window_content_two{
      margin: 0px auto;
    }
  }
}
</style>
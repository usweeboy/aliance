<template>
  <section class="produce_aerosol_products container">

    <div class="produce_aerosol_products_line"></div>
    <div class="produce_aerosol_products_blocks">
      <div class="block_one">
        <h1 class="block_one_title">Производим аэрозольную продукцию для разных сфер</h1>
        <div class="list_of_spheres">
          <div class="list_of_spheres_block_one">
            <div class="list_of_spheres_items">
              <img src="@/assets/img/chemical-production-icon.png" alt="">
              <div>Химические производства</div>
            </div>
            <div class="list_of_spheres_items">
              <img src="@/assets/img/carwashes-icon.png" alt="">
              <div>Автомойки</div>
            </div>
            <div class="list_of_spheres_items">
              <img src="@/assets/img/food-products-icon.png" alt="">
              <div>Пищевая продукция</div>
            </div>
            <div class="list_of_spheres_items">
              <img src="@/assets/img/paints-and-varnishes-icon.png" alt="">
              <div>Лаки и краски</div>
            </div>
            <div class="list_of_spheres_items">
              <img src="@/assets/img/cosmetic-products-icon.png" alt="">
              <div>Косметические средства</div>
            </div>
          </div>
          <div class="list_of_spheres_block_two">
            <div class="list_of_spheres_items">
              <img src="@/assets/img/car-cosmetics-icon.png" alt="">
              <div>Автомобильная косметика</div>
            </div>
            <div class="list_of_spheres_items">
              <img src="@/assets/img/clothing-cosmetics-icon.png" alt="">
              <div>Косметика по уходу за одеждой</div>
            </div>
            <div class="list_of_spheres_items">
              <img src="@/assets/img/shoe-cosmetics-icon.png" alt="">
              <div>Косметика по уходу за обувью</div>
            </div>
            <div class="list_of_spheres_items">
              <img src="@/assets/img/construction-materials-icon.png" alt="">
              <div>Строительные материалы</div>
            </div>
            <div class="list_of_spheres_items">
              <img src="@/assets/img/many-others-icon.png" alt="">
              <div>И многих других</div>
            </div>
          </div>
        </div>
      </div>

      <div class="block_two">
        <div class="pictures_blocks">
          <div class="pictures_block_item">
            <img src="@/assets/img/bk-gray-logo.png" alt="">
          </div>
          <div class="pictures_block_item">
            <img src="@/assets/img/bk-gray-logo.png" alt="">
          </div>
          <div class="pictures_block_item">
            <img src="@/assets/img/bk-gray-logo.png" alt="">
          </div>
          <div class="pictures_block_item">
            <img src="@/assets/img/bk-gray-logo.png" alt="">
          </div>
          <div class="pictures_block_item">
            <img src="@/assets/img/bk-gray-logo.png" alt="">
          </div>
          <div class="pictures_block_item">
            <img src="@/assets/img/bk-gray-logo.png" alt="">
          </div>
          <div class="pictures_block_item">
            <img src="@/assets/img/bk-gray-logo.png" alt="">
          </div>
          <div class="pictures_block_item">
            <img src="@/assets/img/bk-gray-logo.png" alt="">
          </div>
          <div class="pictures_block_item">
            <img src="@/assets/img/bk-gray-logo.png" alt="">
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      ShowBkGrayOne: true,
      ShowBkColor: false
    }
  }
}
</script>

<style lang="scss" scoped>

%preset_line{
  width: 150px;
  height: 2px;
  background: #5C8EE6;
}
%preset_title{
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 120%;
  color: #292D33;
}
.produce_aerosol_products{
  margin-top: 150px;
  .produce_aerosol_products_line{
    @extend %preset_line;
  }
  .produce_aerosol_products_blocks{
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .list_of_spheres{
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .list_of_spheres_items{
        display: flex;
        align-items: center;
        margin-top: 24px;
        & img {
          width: 27px;
        }
        & div{
          font-size: 16px;
          line-height: 160%;
          color: #292D33;
          margin-left: 25px;
        }
      }
    }
    .block_one{
      flex-basis: 50%;
      .block_one_title{
        @extend %preset_title;
      }
    }
    .block_two{
      flex-basis: 50%;
      height: 100%;
      .pictures_blocks{
        display: flex;
        justify-content: end;
        flex-wrap: wrap;
        .pictures_block_item{
          border: 1px solid #EBEBF0;
          & img {
            padding: 30px 60px;
          }
        }
      }
    }
  }
}

@media (min-width: 360px) and (max-width: 585px){
  %side_indents{
    margin-left: 15px;
    margin-right: 15px;
  }
  .produce_aerosol_products{
    margin-top: 100px;
    .produce_aerosol_products_line{
      @extend %side_indents;
    }
    .produce_aerosol_products_blocks{
      margin-top: 30px;
      @extend %side_indents;
      display: block;
      .list_of_spheres{
        margin-top: 34px;
        display: block;
      }
      .block_one{
        .block_one_title{
          font-size: 40px;
        }
      }
    }
    .block_two{
      display: none;
    }
  }
}

@media (min-width: 586px) and (max-width: 1220px){
  .produce_aerosol_products{
    margin-top: 100px;
    .produce_aerosol_products_line{
      margin: 0px 15px;
    }
    .produce_aerosol_products_blocks{
      display: block;
      .block_one{
        margin-left: 15px;
        .block_one_title{
          font-size: 56px;
        }
      }
      .list_of_spheres{
        margin: 0px 15px;
        margin-top: 15px;
      }
      .block_two{
        margin-top: 50px;
        .pictures_blocks{
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
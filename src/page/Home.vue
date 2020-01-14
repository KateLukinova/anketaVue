<template>
    <div class="page">
        <header>
          <div class="logo">
            <img src="../assets/img/io.png" alt="">
          </div>
        </header>
      <div class="caption">
        <img src="../assets/img/caption.png" alt="">
      </div>
      <div class="main-info">
        <div class="main-info__item">
          <h4>Полное ФИО</h4>
         <div class="fill-text">Лукинова Екатерина Александровна</div>
        </div>
        <div class="main-info__item">
          <h4>Год рождения</h4>
          <div class="fill-text">1987</div>
        </div>
        <div class="main-info__item">
          <h4>Место жительства</h4>
          <div class="fill-text">г. Ставрополь</div>
        </div>
        <div class="main-info__item">
          <h4>Скайп</h4>
          <div class="fill-text">live:802eaa40545fb18c</div>
        </div>
        <div class="main-info__item">
          <h4>Почта</h4>
          <div class="fill-text">katyushta@rambler.ru</div>
        </div>
      </div>
      <div class="page__caption">
        <h4>Расскажите о себе чекбоксами</h4>
        <p>
          Отметьте чекбоксами пункты, которые соответствуют вашим скиллам.
          Отсутствие опыта не означает, что у вас меньше шансов стать одним из наших товарищей.
          Это означает, что вы будете получать те задачи, с которыми гарантировано будете справляться.
        </p>
      </div>
      <div class="checkbox-group">
        <div class="checkbox-group__item">
          <div class="input-box">
            <input type="checkbox" id="bem" checked>
            <label for="bem">Методология БЭМ</label>
          </div>
          <div class="input-box">
            <input type="checkbox" id="jq" checked>
            <label for="jq">Jquery</label>
          </div>
          <div class="input-box">
            <input type="checkbox" id="haml">
            <label for="haml">HAML</label>
          </div>
          <div class="input-box">
            <input type="checkbox" id="sass" checked>
            <label for="sass">SASS</label>
          </div>
        </div>
        <div class="checkbox-group__item">
          <div class="input-box">
            <input type="checkbox" id="less">
            <label for="less">LESS</label>
          </div>
          <div class="input-box">
            <input type="checkbox" id="jade">
            <label for="jade">Jade</label>
          </div>
          <div class="input-box">
            <input type="checkbox" id="stylus">
            <label for="stylus">Stylus</label>
          </div>
        </div>
        <div class="checkbox-group__item">
          <div class="input-box">
            <input type="checkbox" id="angular">
            <label for="angular">Знаю(изучаю) Angular</label>
          </div>
          <div class="input-box">
            <input type="checkbox" id="em" checked>
            <label for="em">Верстка рассылок</label>
          </div>
          <div class="input-box">
            <input type="checkbox" id="ad" checked>
            <label for="ad">Адаптивная верстка</label>
          </div>
        </div>
      </div>
      <div class="page__caption">
        <h4>Уровень владения JavaScript</h4>
      </div>
      <div class="slider-box">
        <div class="slider" @click="barClick">
          <div class="slider__bar" ref="elem">
            <div class="slider__handle"
                 :style="{ left: position + 'px' }"
                 @mousedown="dragStart($event, 0)"></div>
            <div class="slider__process"
                 :style="{ width: position + 'px' }"></div>
            <div class="slider__control control-one">
              <div class="control-dots"></div>
              Не владею
            </div>
            <div class="slider__control control-two">
              <div class="control-dots"></div>
              Использую готовые решения
            </div>
            <div class="slider__control control-three">
              <div class="control-dots"></div>
              Использую готовые решения<br> и умею их переделывать
            </div>
            <div class="slider__control control-four">
              <div class="control-dots"></div>
              Пишу сложный JS с нуля
            </div>
          </div>
        </div>
      </div>
      <div class="main-info date">
        <div class="main-info__item">
          <h4>Дата заполнения</h4>
          <div class="fill-text">13.01.2020</div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                position: '',
                dragging: false,
                width: null,
                offset: null
            };
        },
        mounted: function() {
            this.$nextTick(function() {
                this.width = this.$refs.elem.offsetWidth;
                this.offset = this.$refs.elem.getBoundingClientRect().left;
                this.bindListener();
            });
        },
        methods: {
            bindListener: function() {
                document.addEventListener("mousemove", this.drag);
                document.addEventListener("mouseup", this.dragEnd);
            },
            getPosition: function(ev) {
                return ev.clientX - this.offset;
            },
            setPosition: function(pos) {
                this.position = pos - 17;
            },
            barClick: function(ev) {
                var pos = this.getPosition(ev);
                this.setPosition(pos);
            },
            dragStart: function() {
                this.dragging = true;
            },
            drag: function(ev) {
                if (!this.dragging) {
                    return;
                }
                var pos = this.getPosition(ev);
                if (pos > 0 && pos < this.width) {
                    this.setPosition(pos);
                }
            },
            dragEnd: function() {
                if (!this.dragging) {
                    return;
                }
                this.dragging = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  h4 {
    font-family: 'PT Sans', sans-serif;
    font-size: 22px;
    color: #2f1b15;
    font-weight: bold;
    margin-right: 20px;
    white-space: nowrap;
    margin-bottom: 0;
  }
  p {
    font-family: 'PT Sans', sans-serif;
    font-size: 15px;
    color: #3d3d3d;
    line-height: 1.5;
  }
  .page {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      box-sizing: border-box;
      height: auto;
      min-height: 100vh;
      width: 90%;
      max-width: 1000px;
      margin: auto;
      padding: 50px 10%;
      background-image: url("../assets/img/bg-cover.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 98%;
      header {
        width: 100%;
      }
      .caption {
        mix-blend-mode: darken;
        margin: 40px auto;
    }
      .main-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        width: 100%;
        &.date {
          align-self: flex-start;
          width: 50%;
        }
      .main-info__item {
        display: flex;
        align-items: flex-end;
        width: 100%;
        margin-bottom: 25px;
        .fill-text {
          font-family: 'Courier New', sans-serif;
          font-size: 30px;
          color: #231f20;
          position: relative;
          width: 100%;
          padding-bottom: 10px;
          &:after {
            content: '';
            background-image: url("../assets/img/liner.png");
            background-repeat: repeat-x;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 10px;
          }
        }
      }
     }
    .page__caption {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 20px;
      h4 {
        margin-bottom: 20px;
        white-space: normal;
      }
    }
   }
  .checkbox-group {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 30px;
    .checkbox-group__item {
      display: flex;
      flex-direction: column;
    }
  }
  .input-box {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    input {
      padding: 0;
      height: initial;
      width: initial;
      margin-bottom: 0;
      display: none;
      cursor: pointer;
    }
    label {
      position: relative;
      cursor: pointer;
      font-family: 'PT Sans', sans-serif;
      font-weight: bold;
      font-size: 21px;
      color: #000000;
      line-height: 1;
      &:before {
        content: url("../assets/img/checkbox.png");
        padding: 10px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        cursor: pointer;
        margin-right: 5px;
      }
    }
    input:checked + label:after {
      content: url("../assets/img/check.png");
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(13px, -3px) ;
    }
  }
  .slider-box {
    height: auto;
    min-height: 105px;
    width: 100%;
    max-width: 1000px;
    .slider {
      width: auto;
      padding: 10px 0;
      .slider__bar {
        height: 4px;
        position: relative;
        display: block;
        background-color: #4c204e;
        .slider__handle {
          width: 0;
          height: 0;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-top: 15px solid #4c204e;
          transition: all 0s;
          will-change: transform;
          cursor: pointer;
          z-index: 3;
          transition-duration: 0s;
          position: absolute;
          left: 50%;
          transform: translateY(-150%);
        }
        .slider__control {
          width: 24%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          position: absolute;
          top: 0;
          left: 0;
          font-family: 'PT Sans', sans-serif;
          font-weight: bold;
          font-size: 13px;
          color: #2f1b15;
          &.control-two {
            left: 20%;
            .control-dots {
              height: 20px;
              margin-bottom: 15px;
            }
          }
          &.control-three {
            left: 50%;
            .control-dots {
              height: 20px;
              margin-bottom: 15px;
            }
          }
          &.control-four {
            left: auto;
            right: 0;
            align-items: flex-end;
          }
          .control-dots {
            width: 4px;
            height: 30px;
            background-color: #4c204e;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .page {
      .main-info {
        .main-info__item {
          h4 {
            font-size: 18px;
          }
          .fill-text {
            font-size: 22px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .page {
      padding: 30px 20px;
      .main-info {
        .main-info__item {
          .fill-text {
            font-size: 16px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 680px) {
    .checkbox-group {
      flex-direction: column;
    }
    .slider-box {
      height: 200px;
      .slider .slider__bar {
        .slider__control {
          font-size: 11px;
        }
      }
    }
  }





</style>

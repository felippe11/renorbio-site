<template lang="pug">
  #cse.gcse-search
</template>

<script>
export default {
};
</script>

<style lang="scss">

#cse {
  .gsc-tabsArea, .gsc-orderby-container{
    display: none;
  }

  .gsc-adBlock{
    display: none !important;
  }

  .gcsc-branding{
    display: none !important;
  }

  .cse .gsc-control-cse,
  .gsc-control-cse {
    padding: 0;
    margin-top: 30px;
  }

  .gsc-search-box {
    margin: 0;

    .gsc-input {
      .gsc-input-box {
        border: none;
        color: $cor-azul-1;
        height: 38px;
        padding: 6px 0 0 10px;
        background: $cor-azul-2;
        border-radius: 4px;

        .gsib_a {
          padding: 0;
        }

        .gsib_b {
          // display: none;
        }
      }

      .gsst_a .gscb_a {
        color: $cor-azul-1;
        font-size: 22px;
        padding-right: 5px;

        &:hover {
          color: $cor-azul-3;
        }
      }
    }

    input#gsc-i-id1 {
      background: $cor-azul-2 !important;
      font-size: 14px;
    }

    .gsc-search-button {
      .gsc-search-button-v2 {
        background: $cor-azul-1;
        color: red;
        border: none;
        height: 37px;
        border-radius: 0;

        svg {
          fill: #fff;
          height: 16px;
          width: 16px;
        }

        &:hover,
        &:focus {
          background: $cor-azul-3;

          svg {
            fill: #fff;
          }
        }
      }
    }
  }
  .gsc-above-wrapper-area {
    border: none;

    .gsc-result-info-container {
      .gsc-result-info {
        padding: 10px 0 10px 0;
      }
    }
    .gsc-above-wrapper-area-container {
      .gsc-orderby {
        display: none;
      }
    }
  }

  .gs-webResult.gs-result a.gs-title:visited,
  .gs-webResult.gs-result a.gs-title:visited b,
  .gs-imageResult a.gs-title:visited,
  .gs-imageResult a.gs-title:visited b,
  .gs-webResult.gs-result a.gs-title:link,
  .gs-webResult.gs-result a.gs-title:link b,
  .gs-imageResult a.gs-title:link,
  .gs-imageResult a.gs-title:link b {
    color: $cor-azul-1;

    &:hover {
      color: $cor-azul-3;
    }
  }

  .gs-result .gs-title,
  .gs-result .gs-title * {
    text-decoration: none;
    font-weight: 600;
    min-height: 30px;
    height: auto;
    color: $cor-azul-1;
  }

  .gs-webResult div.gs-visibleUrl,
  .gs-imageResult div.gs-visibleUrl {
    color: $cor-azul-3;
  }

  .gsc-table-cell-thumbnail,
  .gs-promotion-image-cell {
    display: none;
  }

  .gsc-table-cell-snippet-close,
  .gsc-table-cell-snippet-open {
    padding-left: 7px;
    padding-top: 7px;
  }

  .gsc-webResult.gsc-result,
  .gsc-results .gsc-imageResult {
    border: none;
    margin-bottom: 0;
  }

  .gs-webResult.gs-result {
    border-left: 3px solid $cor-azul-1;
    &:hover {
      border-color: $cor-azul-3;
    }
  }

  .gsc-results .gsc-cursor-box {
    margin: 0 0 30px 0;
    display: flex;
    justify-content: center;
  }

  .gsc-results .gsc-cursor {
    display: flex;
    flex-wrap: wrap;

  }

  .gsc-results .gsc-cursor-box .gsc-cursor-current-page {
    color: #fff;
    background: $cor-azul-1;
    padding: 0 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    height: 28px;
    font-weight: normal;
  }

  .gsc-cursor-page {
    color: $cor-cinza;
    background: transparent;
    margin-top: 10px;
    padding: 0 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
    border-radius: 15px;
    height: 28px;
    font-weight: normal;

    &:hover,
    &:focus {
      color: $cor-azul-1;
      text-decoration: none;
      font-weight: normal;
    }
  }

  .gs-no-results-result .gs-snippet,
  .gs-error-result .gs-snippet {
    border-color: $cor-vermelho;
    background: transparent;
    color: $cor-vermelho;
    border-radius: 7px;
    text-align: center;
    padding: 10px 15px;
  }

  .gs-webResult.gs-result.gs-no-results-result {
    border: none;
  }
}
</style>

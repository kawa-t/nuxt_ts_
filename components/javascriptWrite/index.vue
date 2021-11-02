<template>
  <div><button @click="typeAssertClick">Switch文を書かない</button></div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TsBasic extends Vue {
  typeAssertClick() {
    let coloeCode = ''
    // 列挙型
    enum enumColor {
      blue,
      red,
      green,
    }

    const colorName: enumColor = 0

    switch (colorName) {
      case enumColor.red:
        coloeCode = '#FF0000'
        break
      case enumColor.blue:
        coloeCode = '#FF0000'
        break
      case enumColor.green:
        coloeCode = '#008000'
        break
    }
    console.log(coloeCode)
  }

  tsVersionSwitch() {
    const COLOR_NAME = {
      RED: 'red',
      BLUE: 'blue',
      GREEN: 'green',
    }

    const color = {
      [COLOR_NAME.RED]: '#FF0000',
      [COLOR_NAME.BLUE]: '#0000FF',
      [COLOR_NAME.GREEN]: '#008000',
    }

    console.log(color[COLOR_NAME.BLUE]) // #0000FF
  }

  spredfunction() {
    // const arr = []
  }
}
</script>
<style></style>

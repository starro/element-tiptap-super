<template>
  <div>
    <el-popover
      :disabled="isCodeViewMode"
      placement="bottom"
      trigger="click"
      popper-class="el-tiptap-popper"
      ref="popoverRef"
    >
      <div class="color-set">
        <div v-for="color in colorSet" :key="color" class="color__wrapper">
          <div
            :style="{
              'background-color': color,
            }"
            :class="{ 'color--selected': selectedColor === color }"
            class="color"
            @mousedown.prevent
            @click.stop="confirmColor(color)"
          />
        </div>

        <div class="color__wrapper">
          <div
            class="color color--remove"
            @mousedown.prevent
            @click.stop="confirmColor()"
          />
        </div>
      </div>

      <template #reference>
        <div>
          <span>
            <command-button
              :enable-tooltip="enableTooltip"
              :tooltip="t('editor.extensions.TextHighlight.tooltip')"
              icon="highlight"
              :readonly="isCodeViewMode"
            />
          </span>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, unref, watch } from 'vue';
import { Editor, getMarkAttributes } from '@tiptap/vue-3';
import { ElButton, ElPopover, ElInput } from 'element-plus';
import CommandButton from './CommandButton.vue';

export default defineComponent({
  name: 'HighlightPopover',

  components: {
    ElButton,
    ElPopover,
    ElInput,
    CommandButton,
  },

  props: {
    editor: {
      type: Editor,
      required: true,
    },
  },

  setup(props) {
    const t = inject('t');
    const enableTooltip = inject('enableTooltip', true);
    const isCodeViewMode = inject('isCodeViewMode', false);

    const popoverRef = ref();
    const popoverVisible = ref(false);

    function confirmColor(color?: string) {
      if (color) {
        props.editor.commands.setHighlight({ color });
      } else {
        props.editor.commands.unsetHighlight();
      }

      unref(popoverRef).hide();
    }

    const selectedColor = computed<string>(() => {
      return getMarkAttributes(props.editor.state, 'highlight').color || '';
    });

    return {
      t,
      enableTooltip,
      isCodeViewMode,
      popoverRef,
      selectedColor,
      popoverVisible,
      confirmColor,
    };
  },

  computed: {
    colorSet(): string[] {
      const colorOptions = this.editor.extensionManager.extensions.find(
        (e) => e.name === 'highlight'
      )!.options;
      return colorOptions.colors;
    },
  },
});
</script>

<template>
  <div>
    <command-button
      :command="callAlert"
      :enable-tooltip="enableTooltip"
      :tooltip="buttonTooltip"
      :icon="'schema'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { Editor } from '@tiptap/vue-3';
import CommandButton from './CommandButton.vue';

export default defineComponent({
  name: 'TestAlertButton',

  components: {
    CommandButton,
  },

  props: {
    editor: {
      type: Editor,
      required: false,
    },
  },

  setup() {
    const t = inject('t');
    const enableTooltip = inject('enableTooltip', true);
    const callAlert = () => {
      console.log('aabbvv');
    };

    return { t, enableTooltip, callAlert };
  },

  computed: {
    buttonTooltip() {
      return '테스트버튼';
    },
  },
});
</script>

<template>
  <div>
    <command-button
      @click="callFn"
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
  name: 'EntitySchemaButton',

  components: {
    CommandButton,
  },

  props: {
    editor: {
      type: Editor,
      required: true,
    },
  },

  setup() {
    const t = inject('t');
    const enableTooltip = inject('enableTooltip', true);

    const onClick = () => {
      console.log('zzzzz');
    };

    return { t, enableTooltip, onClick };
  },

  computed: {
    buttonTooltip() {
      return 'Entity Schema';
    },
  },

  methods: {
    async callFn() {
      this.editor.commands.callSchemaPop();
    },
  },
});
</script>

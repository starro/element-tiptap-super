import type { Editor } from '@tiptap/core';
import { Extension } from '@tiptap/core';
import EntitySchemaButton from '@/components/MenuCommands/EntitySchemaButton.vue';

const EntitySchema = Extension.create({
  name: 'EntitySchemaButton',

  addOptions() {
    return {
      ...this.parent?.(),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: EntitySchemaButton,
          componentProps: {
            editor,
          },
        };
      },
    };
  },
});

export default EntitySchema;

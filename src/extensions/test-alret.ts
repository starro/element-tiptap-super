import type { Editor } from '@tiptap/core';
import { Extension } from '@tiptap/core';
import TestAlertButton from '@/components/MenuCommands/TestAlertButton.vue';

const TestAlert = Extension.create({
  name: 'TestAlertButton',

  addOptions() {
    return {
      ...this.parent?.(),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: TestAlertButton,
        };
      },
    };
  },
});

export default TestAlert;

import type { Editor } from '@tiptap/core';
import { Extension } from '@tiptap/core';
import FullscreenCommandButton from '@/components/MenuCommands/FullscreenCommandButton.vue';

const Fullscreen = Extension.create({
  name: 'fullscreen',

  addOptions() {
    return {
      ...this.parent?.(),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: FullscreenCommandButton,
        };
      },
    };
  },
});

export default Fullscreen;

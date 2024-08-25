<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {CreateDialogProps, CreateDialogReturn} from './create-dialog.svelte.js';

  export interface DialogProps extends CreateDialogProps {
    children?: Snippet<[dialog: CreateDialogReturn]>;
  }
</script>

<script lang="ts">
  import {dialogContext} from './context.svelte.js';
  import {createDialog} from './create-dialog.svelte.js';

  let {children, ...props}: DialogProps = $props();

  let dialog = createDialog(props);

  dialogContext.set(dialog);
</script>

{@render children?.(dialog)}

<script lang="ts" context="module">
  import type {Snippet} from 'svelte';
  import type {
    CreateDialogContextProps,
    CreateDialogContextReturn,
  } from './context.svelte.js';

  export interface DialogProps extends Omit<CreateDialogContextProps, 'id'> {
    id?: string | null;
    children?: Snippet<[CreateDialogContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {createDialogContext, setDialogContext} from './context.svelte.js';

  let {id, children, ...props}: DialogProps = $props();

  let context = createDialogContext({
    id: id ?? uuid(),
    ...props,
  });

  setDialogContext(context);
</script>

{@render children?.(context)}

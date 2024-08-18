<script lang="ts" context="module">
  import type {Snippet} from 'svelte';
  import type {CreateDialogContextProps} from './context.svelte.js';

  export interface DialogProps extends OptionalId<CreateDialogContextProps> {
    children?: Snippet;
  }
</script>

<script lang="ts">
  import type {OptionalId} from '$lib/types.js';
  import {nanoid} from 'nanoid/non-secure';
  import {createDialogContext, setDialogContext} from './context.svelte.js';

  let {id = nanoid(), children, ...props}: DialogProps = $props();

  let context = createDialogContext({id, ...props});

  setDialogContext(context);
</script>

{@render children?.()}

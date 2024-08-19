<script lang="ts" context="module">
  import type {Snippet} from 'svelte';
  import type {CreateDialogContextProps, CreateDialogContextReturn} from './context.svelte.js';

  export interface DialogProps extends OptionalId<CreateDialogContextProps> {
    children?: Snippet<[CreateDialogContextReturn]>;
  }
</script>

<script lang="ts">
  import type {OptionalId} from '$lib/types.js';
  import {uuid} from '$lib/utils.svelte.js';
  import {createDialogContext, setDialogContext} from './context.svelte.js';

  let {id = uuid(), children, ...props}: DialogProps = $props();

  let context = createDialogContext({id, ...props});

  setDialogContext(context);
</script>

{@render children?.(context)}

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
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {uuid} from '$lib/utils.svelte.js';
  import {createDialogContext, setDialogContext} from './context.svelte.js';

  let {id, dir, children, ...props}: DialogProps = $props();

  let localeContext = useLocaleContext();

  let context = createDialogContext({
    id: id ?? uuid(),
    dir: dir ?? localeContext?.dir,
    ...props,
  });

  setDialogContext(context);
</script>

{@render children?.(context)}

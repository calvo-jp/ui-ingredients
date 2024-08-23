<script lang="ts" module>
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
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.js';
  import {createDialogContext, setDialogContext} from './context.svelte.js';

  let {id, dir, getRootNode, children, ...props}: DialogProps = $props();

  let localeContext = useLocaleContext();
  let environmentContext = useEnvironmentContext();

  let context = createDialogContext({
    id: id ?? createUniqueId(),
    dir: dir ?? localeContext?.dir,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
    ...props,
  });

  setDialogContext(context);
</script>

{@render children?.(context)}

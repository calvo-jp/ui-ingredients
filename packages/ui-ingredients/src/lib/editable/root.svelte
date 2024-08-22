<script lang="ts" context="module">
  import type {Snippet} from 'svelte';
  import type {
    CreateEditableContextProps,
    CreateEditableContextReturn,
  } from './context.svelte.js';

  export interface EditableProps
    extends Omit<CreateEditableContextProps, 'id'> {
    id?: string | null;
    children?: Snippet<[CreateEditableContextReturn]>;
  }
</script>

<script lang="ts">
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {uuid} from '$lib/utils.svelte.js';
  import {createEditableContext, setEditableContext} from './context.svelte.js';

  let {id, dir, getRootNode, children, ...props}: EditableProps = $props();

  let localeContext = useLocaleContext();
  let environmentContext = useEnvironmentContext();

  let context = createEditableContext({
    id: id ?? uuid(),
    dir: dir ?? localeContext?.dir,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
    ...props,
  });

  setEditableContext(context);
</script>

{@render children?.(context)}

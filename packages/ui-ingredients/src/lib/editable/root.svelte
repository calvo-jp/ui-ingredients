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
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {uuid} from '$lib/utils.svelte.js';
  import {createEditableContext, setEditableContext} from './context.svelte.js';

  let {id, dir, children, ...props}: EditableProps = $props();

  let localeContext = useLocaleContext();

  let context = createEditableContext({
    id: id ?? uuid(),
    dir: dir ?? localeContext?.dir,
    ...props,
  });

  setEditableContext(context);
</script>

{@render children?.(context)}

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
  import {uuid} from '$lib/utils.svelte.js';
  import {createEditableContext, setEditableContext} from './context.svelte.js';

  let {id, children, ...props}: EditableProps = $props();

  let context = createEditableContext({
    id: id ?? uuid(),
    ...props,
  });

  setEditableContext(context);
</script>

{@render children?.(context)}

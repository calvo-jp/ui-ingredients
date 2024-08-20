<script lang="ts" context="module">
  import type {OptionalId} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateEditableContextProps, CreateEditableContextReturn} from './context.svelte.js';

  export interface EditableProps extends OptionalId<CreateEditableContextProps> {
    children?: Snippet<[CreateEditableContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {createEditableContext, setEditableContext} from './context.svelte.js';

  let {id = uuid(), children, ...props}: EditableProps = $props();

  let context = createEditableContext({id, ...props});

  setEditableContext(context);
</script>

{@render children?.(context)}

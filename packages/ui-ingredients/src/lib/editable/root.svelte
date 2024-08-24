<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {CreateEditableProps, CreateEditableReturn} from './create-editable.svelte.js';

  export interface EditableProps extends CreateEditableProps {
    children?: Snippet<[api: CreateEditableReturn]>;
  }
</script>

<script lang="ts">
  import {editableContext} from './context.svelte.js';
  import {createEditable} from './create-editable.svelte.js';

  let {children, ...props}: EditableProps = $props();

  let context = createEditable(props);

  editableContext.set(context);
</script>

{@render children?.(context)}

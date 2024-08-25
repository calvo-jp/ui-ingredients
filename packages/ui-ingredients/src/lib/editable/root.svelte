<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {CreateEditableProps, CreateEditableReturn} from './create-editable.svelte.js';

  export interface EditableProps extends CreateEditableProps {
    children?: Snippet<[editable: CreateEditableReturn]>;
  }
</script>

<script lang="ts">
  import {editableContext} from './context.svelte.js';
  import {createEditable} from './create-editable.svelte.js';

  let {children, ...props}: EditableProps = $props();

  let editable = createEditable(props);

  editableContext.set(editable);
</script>

{@render children?.(editable)}

<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {CreateEditableProps, CreateEditableReturn} from './create-editable.svelte.js';

  export interface EditableProps extends Omit<CreateEditableProps, 'id'> {
    id?: string | null;
    children?: Snippet<[api: CreateEditableReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {editableContext} from './context.svelte.js';
  import {createEditable} from './create-editable.svelte.js';

  let {id, dir, getRootNode, children, ...props}: EditableProps = $props();

  let localeContext = useLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createEditable({
    id: id ?? uid,
    dir: dir ?? localeContext?.dir,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
    ...props,
  });

  editableContext.set(context);
</script>

{@render children?.(context)}

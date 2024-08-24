<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {CreateEditableContextProps, CreateEditableContextReturn} from './context.svelte.js';

  export interface EditableProps extends Omit<CreateEditableContextProps, 'id'> {
    id?: string | null;
    children?: Snippet<[CreateEditableContextReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {createEditableContext, setEditableContext} from './context.svelte.js';

  let {id, dir, getRootNode, children, ...props}: EditableProps = $props();

  let localeContext = useLocaleContext();
  let environmentContext = getEnvironmentContext();

  let context = createEditableContext({
    id: id ?? createUniqueId(),
    dir: dir ?? localeContext?.dir,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
    ...props,
  });

  setEditableContext(context);
</script>

{@render children?.(context)}

<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {CreateDialogProps, CreateDialogReturn} from './create-dialog.svelte.js';

  export interface DialogProps extends Omit<CreateDialogProps, 'id'> {
    id?: string | null;
    children?: Snippet<[api: CreateDialogReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {dialogContext} from './context.svelte.js';
  import {createDialog} from './create-dialog.svelte.js';

  let {id, dir, getRootNode, children, ...props}: DialogProps = $props();

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createDialog({
    id: id ?? uid,
    dir: dir ?? localeContext?.dir,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
    ...props,
  });

  dialogContext.set(context);
</script>

{@render children?.(context)}

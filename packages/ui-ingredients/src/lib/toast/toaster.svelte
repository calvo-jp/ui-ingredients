<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateToastReturn} from './create-toast.svelte.js';
  import type {CreateToasterReturn} from './create-toaster.svelte.js';

  export interface ToasterProps extends Omit<HTMLProps<'div'>, 'children'> {
    toaster: CreateToasterReturn;
    children: Snippet<[toast: CreateToastReturn]>;
  }
</script>

<script lang="ts">
  import {Portal} from '$lib/portal/index.js';
  import {mergeProps} from '$lib/utils.svelte.js';
  import {normalizeProps, useMachine} from '@zag-js/svelte';
  import * as toast from '@zag-js/toast';
  import ToastActor from './actor.svelte';

  let {toaster, children, ...props}: ToasterProps = $props();

  let [snapshot, send] = useMachine(toaster.machine);

  let placement = $derived(snapshot.context.placement);
  let api = $derived(toast.group.connect(snapshot, send, normalizeProps));
  let toasts = $derived(api.getToastsByPlacement(placement));
  let mergedProps = $derived(mergeProps(props, api.getGroupProps({placement})));
</script>

<Portal>
  <div {...mergedProps}>
    {#each toasts as toast (toast.id)}
      <ToastActor actor={toast}>
        {#snippet children$(ctx)}
          {@render children(ctx)}
        {/snippet}
      </ToastActor>
    {/each}
  </div>
</Portal>

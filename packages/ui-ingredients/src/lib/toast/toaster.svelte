<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateToastReturn} from './create-toast.svelte.js';
  import type {CreateToasterReturn} from './create-toaster.svelte.js';

  export interface ToasterProps extends Omit<HtmlProps<'div'>, 'children'> {
    toaster: CreateToasterReturn;
    children: Snippet<[toast: CreateToastReturn]>;
  }
</script>

<script lang="ts">
  import {Portal} from '$lib/portal/index.js';
  import {mergeProps, normalizeProps, useMachine} from '@zag-js/svelte';
  import * as toast from '@zag-js/toast';
  import ToastActor from './actor.svelte';

  let {toaster, children, ...props}: ToasterProps = $props();

  let [state, send] = useMachine(toaster.machine);

  let placement = $derived(state.context.placement);
  let api = $derived(toast.group.connect(state, send, normalizeProps));
  let toasts = $derived(api.getToastsByPlacement(placement));
  let attrs = $derived(mergeProps(props, api.getGroupProps({placement})));
</script>

<Portal>
  <div {...attrs}>
    {#each toasts as toast (toast.id)}
      <ToastActor actor={toast}>
        {#snippet children$(ctx)}
          {@render children(ctx)}
        {/snippet}
      </ToastActor>
    {/each}
  </div>
</Portal>

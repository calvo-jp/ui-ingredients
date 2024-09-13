<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {CreateToastReturn} from './create-toast.svelte.js';
  import type {CreateToasterReturn} from './create-toaster.svelte.js';

  export interface ToasterProps
    extends HtmlIngredientProps<'div', CreateToastReturn> {
    toaster: CreateToasterReturn;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {Portal} from '$lib/portal/index.js';
  import {normalizeProps, useMachine} from '@zag-js/svelte';
  import * as toast from '@zag-js/toast';
  import ToastActor from './actor.svelte';

  let {this: e, toaster, children, ...props}: ToasterProps = $props();

  let [snapshot, send] = useMachine(toaster.machine);

  let placement = $derived(snapshot.context.placement);
  let api = $derived(toast.group.connect(snapshot, send, normalizeProps));
  let toasts = $derived(api.getToastsByPlacement(placement));
  let mergedProps = $derived(mergeProps(props, api.getGroupProps({placement})));
</script>

<Portal>
  <div bind:this={e} {...mergedProps}>
    {#each toasts as toast (toast.id)}
      <ToastActor actor={toast}>
        {#snippet children$(ctx)}
          {@render children?.(ctx)}
        {/snippet}
      </ToastActor>
    {/each}
  </div>
</Portal>

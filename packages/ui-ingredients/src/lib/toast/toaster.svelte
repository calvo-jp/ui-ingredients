<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {CreateToastReturn} from './create-toast.svelte.js';
  import type {CreateToasterReturn} from './create-toaster.svelte.js';

  export interface ToasterProps
    extends HtmlIngredientProps<'div', HTMLDivElement, CreateToastReturn> {
    toaster: CreateToasterReturn;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
  import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {Portal} from '$lib/portal/index.js';
  import {normalizeProps, useMachine} from '@zag-js/svelte';
  import * as toast from '@zag-js/toast';
  import ToastActor from './toast-actor.svelte';

  let {
    ref = $bindable(null),
    toaster,
    children: children_,
    ...props
  }: ToasterProps = $props();

  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  let [snapshot, send] = useMachine(toaster.machine, {
    context: {
      dir: locale?.dir,
      getRootNode: environment?.getRootNode,
    },
  });

  let placement = $derived(snapshot.context.placement);
  let api = $derived(toast.group.connect(snapshot, send, normalizeProps));
  let toasts = $derived(api.getToastsByPlacement(placement));
  let mergedProps = $derived(mergeProps(props, api.getGroupProps({placement})));
</script>

<Portal>
  <div bind:this={ref} {...mergedProps}>
    {#each toasts as toast (toast.id)}
      <ToastActor actor={toast}>
        {#snippet children(ctx)}
          {@render children_?.(ctx)}
        {/snippet}
      </ToastActor>
    {/each}
  </div>
</Portal>

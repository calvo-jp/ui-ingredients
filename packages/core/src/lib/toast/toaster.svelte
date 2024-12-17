<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {CreateToastReturn} from './create-toast.svelte.js';
  import type {CreateToasterReturn} from './create-toaster.svelte.js';

  export interface ToasterProps
    extends Omit<
      HtmlIngredientProps<'div', HTMLDivElement, CreateToastReturn>,
      'asChild'
    > {
    toaster: CreateToasterReturn;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/enviroment-provider-context.svelte.js';
  import {getLocaleContext} from '$lib/locale-provider/local-provider-context.svelte.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {normalizeProps, portal, useMachine} from '@zag-js/svelte';
  import * as toast from '@zag-js/toast';
  import type {HTMLAttributes} from 'svelte/elements';
  import ToastActor from './toast-actor.svelte';

  let {
    ref = $bindable(null),
    toaster,
    children,
    ...props
  }: ToasterProps = $props();

  let locale = getLocaleContext();
  let environment = getEnvironmentContext();

  let [state, send] = useMachine(toaster.machine, {
    context: {
      get dir() {
        return locale?.dir;
      },
      getRootNode: environment?.getRootNode,
    },
  });

  let placement = $derived(state.context.placement);
  let api = $derived(toast.group.connect(state, send, normalizeProps));
  let toasts = $derived(api.getToastsByPlacement(placement));
  let mergedProps = $derived(
    mergeProps<HTMLAttributes<HTMLDivElement>>(
      api.getGroupProps({placement}),
      props,
    ),
  );
</script>

<div bind:this={ref} use:portal {...mergedProps}>
  {#each toasts as toast (toast.id)}
    <ToastActor actor={toast} {children} />
  {/each}
</div>

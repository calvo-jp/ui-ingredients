<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';
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
  import {normalizeProps, portal, useMachine} from 'zagjs-legacy-svelte';
  import * as toast from 'zagjs-legacy-toast';
  import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
  import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';
  import {mergeProps} from '../merge-props.js';
  import {getPortalProviderPropsContext} from '../portal/portal-context.svelte.js';
  import ToastActor from './toast-actor.svelte';

  let {
    ref = $bindable(null),
    toaster,
    children,
    ...props
  }: ToasterProps = $props();

  let locale = getLocaleContext();
  let environment = getEnvironmentContext();
  let portalProviderProps = getPortalProviderPropsContext();

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
  let mergedProps = $derived(mergeProps(api.getGroupProps({placement}), props));
</script>

<div
  bind:this={ref}
  use:portal={{
    container: portalProviderProps?.container ?? undefined,
    getRootNode: environment?.getRootNode,
  }}
  {...mergedProps}
>
  {#each toasts as toast (toast.id)}
    <ToastActor actor={toast} {children} />
  {/each}
</div>

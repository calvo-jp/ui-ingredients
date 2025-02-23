<script lang="ts" module>
  export interface ToasterProps {
    toaster: toast.Store;
    children: Snippet;
  }
</script>

<script lang="ts">
  import {normalizeProps, portal, reflect, useMachine} from '@zag-js/svelte';
  import * as toast from '@zag-js/toast';
  import type {Snippet} from 'svelte';
  import {createUniqueId} from '../create-unique-id.js';
  import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
  import {getLocaleContext} from '../locale-provider/local-provider-context.svelte.js';
  import {getPortalProviderPropsContext} from '../portal/portal-context.svelte.js';
  import ToastProvider from './toast-provider.svelte';

  let {children, ...props}: ToasterProps = $props();

  let id = createUniqueId();
  let locale = getLocaleContext();
  let environment = getEnvironmentContext();
  let portalProviderProps = getPortalProviderPropsContext();

  let context: toast.GroupProps = reflect(() => ({
    id,
    dir: locale?.dir,
    store: props.toaster,
    getRootNode: environment?.getRootNode,
  }));

  const service = useMachine(toast.group.machine, context);
  const api = reflect(() => toast.group.connect(service, normalizeProps));
</script>

<div
  use:portal={{
    container: portalProviderProps?.container ?? undefined,
    getRootNode: environment?.getRootNode,
  }}
  {...api.getGroupProps()}
>
  {#each api.getToasts() as toast, index (toast.id)}
    <ToastProvider {index} parent={service} {...toast}>
      {@render children()}
    </ToastProvider>
  {/each}
</div>

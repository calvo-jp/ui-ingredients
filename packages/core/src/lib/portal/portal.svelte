<script lang="ts" module>
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  interface PortalActionProps {
    disabled?: boolean;
    container?: HTMLElement | null;
  }

  export interface PortalProps
    extends Assign<SvelteHTMLElements['div'], PortalActionProps> {}
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {portal} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {getPortalProviderPropsContext} from './portal-context.svelte.js';

  let {children, ...props}: PortalProps = $props();

  let [portalActionProps, localProps] = createSplitProps<PortalActionProps>([
    'container',
    'disabled',
  ])(props);

  let portalProviderProps = getPortalProviderPropsContext();
  let environment = getEnvironmentContext();
</script>

<div
  use:portal={{
    container:
      portalActionProps.container ??
      portalProviderProps?.container ??
      undefined,
    disabled: portalActionProps.disabled ?? false,
    getRootNode: environment?.getRootNode,
  }}
  {...localProps}
>
  {@render children?.()}
</div>

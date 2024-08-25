<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {CreatePresenceProps} from './create-presence.svelte.js';

  export interface PresenceProps extends Assign<HtmlProps<'div'>, CreatePresenceProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createPresence} from './create-presence.svelte.js';

  let {
    /**/
    present,
    immediate,
    onExitComplete,
    children,
    ...props
  }: PresenceProps = $props();

  let presence = createPresence({
    present,
    immediate,
    onExitComplete,
  });

  let attrs = $derived(mergeProps(props, presence.getRootProps()));
</script>

<div use:presence.ref {...attrs}>
  {@render children?.()}
</div>

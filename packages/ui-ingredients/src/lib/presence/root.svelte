<script lang="ts" module>
  import type {Assign, HTMLProps} from '$lib/types.js';
  import type {CreatePresenceProps} from './create-presence.svelte.js';

  export interface PresenceProps extends Assign<HTMLProps<'div'>, CreatePresenceProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {createPresence} from './create-presence.svelte.js';

  let {
    /**/
    present = $bindable(false),
    keepMounted,
    children,
    ...props
  }: PresenceProps = $props();

  let presence = createPresence({
    present,
    keepMounted,
  });

  let attrs = $derived(mergeProps(props, presence.getRootProps()));
</script>

{#if !presence.unmounted}
  <div use:presence.ref {...attrs}>
    {@render children?.()}
  </div>
{/if}

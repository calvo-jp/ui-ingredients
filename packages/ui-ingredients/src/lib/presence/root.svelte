<script lang="ts" module>
  import type {Assign, HTMLProps} from '$lib/types.js';
  import type {CreatePresenceProps} from './create-presence.svelte.js';

  export interface PresenceProps
    extends Assign<HTMLProps<'div'>, CreatePresenceProps> {}
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {createPresence} from './create-presence.svelte.js';

  let {children, ...props}: PresenceProps = $props();

  let [presenceProps, otherProps] = $derived(
    createSplitProps<CreatePresenceProps>(['present', 'keepMounted'])(props),
  );

  let presence = createPresence(presenceProps);

  let mergedProps = $derived(mergeProps(otherProps, presence.getRootProps()));
</script>

{#if !presence.unmounted}
  <div use:presence.ref {...mergedProps}>
    {@render children?.()}
  </div>
{/if}

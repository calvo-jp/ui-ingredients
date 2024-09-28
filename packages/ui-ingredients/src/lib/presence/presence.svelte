<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {CreatePresenceProps} from './create-presence.svelte.js';

  export interface PresenceProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, never, Action>,
      CreatePresenceProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import type {Action} from 'svelte/action';
  import {createPresence} from './create-presence.svelte.js';

  let {asChild, children, ...props}: PresenceProps = $props();

  let [createPresenceProps, localProps] = $derived(
    createSplitProps<CreatePresenceProps>([
      'present',
      'lazyMount',
      'keepMounted',
    ])(props),
  );

  let presence = createPresence(reflect(() => createPresenceProps));

  let mergedProps = $derived(
    mergeProps(presence.getPresenceProps() as any, localProps),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(presence.ref, mergedProps)}
  {:else}
    <div use:presence.ref {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}

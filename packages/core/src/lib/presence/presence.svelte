<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {CreatePresenceProps} from './create-presence.svelte.js';

  export interface PresenceProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, never, Action>,
      CreatePresenceProps
    > {}
</script>

<script lang="ts">
  import {mergeProps, reflect} from '@zag-js/svelte';
  import type {Action} from 'svelte/action';
  import type {HTMLAttributes} from 'svelte/elements';
  import {createSplitProps} from '../create-split-props.js';
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
    mergeProps<HTMLAttributes<HTMLDivElement>>(
      presence.getPresenceProps(),
      localProps,
    ),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(presence.setReference, mergedProps)}
  {:else}
    <div use:presence.setReference {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}

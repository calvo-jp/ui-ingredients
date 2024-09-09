<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateSelectProps,
    CreateSelectReturn,
  } from './create-select.svelte.js';

  export interface SelectProps<T>
    extends Assign<
      HtmlIngredientProps<'div', CreateSelectReturn>,
      CreateSelectProps<T>
    > {}
</script>

<script lang="ts" generics="T">
  import {mergeProps} from '$lib/merge-props.js';
  import {setPresenceContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setSelectContext} from './context.svelte.js';
  import {createSelect} from './create-select.svelte.js';

  let {asChild, children, ...props}: SelectProps<T> = $props();

  let [selectProps, otherProps] = $derived(
    createSplitProps<CreateSelectProps<T>>([
      'id',
      'ids',
      'form',
      'name',
      'open',
      'defaultOpen',
      'value',
      'items',
      'invalid',
      'multiple',
      'disabled',
      'readOnly',
      'required',
      'loopFocus',
      'composite',
      'positioning',
      'closeOnSelect',
      'highlightedValue',
      'itemToValue',
      'itemToString',
      'isItemDisabled',
      'onOpenChange',
      'onValueChange',
      'onFocusOutside',
      'onHighlightChange',
      'onInteractOutside',
      'onPointerDownOutside',
      'scrollToIndexFn',
    ])(props),
  );

  let select = createSelect(reflect(() => selectProps));
  let presence = createPresence({
    get present() {
      return select.open;
    },
  });

  let mergedProps = $derived(mergeProps(otherProps, select.getRootProps()));

  setSelectContext(select);
  setPresenceContext(presence);
</script>

{#if asChild}
  {@render asChild(mergedProps, select)}
{:else}
  <div {...mergedProps}>
    {@render children?.(select)}
  </div>
{/if}

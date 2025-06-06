<script module>
  import * as focusTrap from '@zag-js/focus-trap';

  interface FocusTrapOptions
    extends Omit<focusTrap.FocusTrapOptions, 'document'> {
    disabled?: boolean;
  }

  export interface FocusTrapProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, never, Action>,
      FocusTrapOptions
    > {}

  function noop() {}

  const trapFocus: Action<HTMLElement, FocusTrapOptions> = (node, options) => {
    let destroy: () => void = noop;

    function update(newOptions: FocusTrapOptions) {
      if (newOptions.disabled) {
        destroy();
        destroy = noop;
      } else {
        destroy = focusTrap.trapFocus(node, newOptions);
      }
    }

    update(options);

    return {
      update,
      destroy,
    };
  };
</script>

<script lang="ts">
  import {browser} from '$app/environment';
  import {getEnvironmentContext} from '$lib/environment-provider/environment-provider-context.svelte.js';
  import type {Action, ActionReturn} from 'svelte/action';
  import {createSplitProps} from '../create-split-props.js';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FocusTrapProps = $props();

  let [focusTrapProps, localProps] = $derived(
    createSplitProps<FocusTrapOptions>([
      'allowOutsideClick',
      'checkCanFocusTrap',
      'checkCanReturnFocus',
      'clickOutsideDeactivates',
      'delayInitialFocus',
      'disabled',
      'escapeDeactivates',
      'fallbackFocus',
      'initialFocus',
      'isKeyBackward',
      'isKeyForward',
      'onActivate',
      'onDeactivate',
      'onPause',
      'onPostActivate',
      'onPostDeactivate',
      'onPostPause',
      'onPostUnpause',
      'onUnpause',
      'preventScroll',
      'returnFocusOnDeactivate',
      'setReturnFocus',
      'trapStack',
    ])(props),
  );

  let environment = getEnvironmentContext();

  let focusTrapOptions: focusTrap.FocusTrapOptions = $derived({
    ...focusTrapProps,
    document: browser ? environment?.getDocument() : undefined,
  });

  let mergedProps = $derived({
    ...localProps,
    'data-scope': 'focus-trap',
    'data-part': 'root',
  });
</script>

{#if asChild}
  {@render asChild(
    (node: HTMLElement) =>
      trapFocus(node, focusTrapOptions) as unknown as ActionReturn,
    mergedProps,
  )}
{:else}
  <div bind:this={ref} use:trapFocus={focusTrapOptions} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}

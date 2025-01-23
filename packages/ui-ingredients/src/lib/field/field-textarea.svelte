<script lang="ts" module>
  import {autoresizeTextarea} from '@zag-js/auto-resize';
  import type {Action} from 'svelte/action';
  import type {HtmlIngredientProps} from '../types.js';

  export interface FieldTextareaProps
    extends HtmlIngredientProps<
      'textarea',
      HTMLTextAreaElement,
      never,
      Action<HTMLTextAreaElement>
    > {
    autoResize?: boolean;
  }

  function action(node: HTMLTextAreaElement) {
    const destroy = autoresizeTextarea(node);

    return {
      destroy,
    };
  }
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getFieldContext} from './field-context.svelte.js';

  let {
    ref = $bindable(null),
    autoResize,
    asChild,
    ...props
  }: FieldTextareaProps = $props();

  let field = getFieldContext();
  let mergedProps = $derived(
    mergeProps(field?.getTextareaProps() ?? {}, props),
  );

  function wrappedAction(node: HTMLTextAreaElement) {
    return autoResize ? action(node) : {};
  }
</script>

{#if asChild}
  {@render asChild(wrappedAction, mergedProps)}
{:else}
  <textarea bind:this={ref} use:wrappedAction {...mergedProps}></textarea>
{/if}

<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface RadioGroupItemTextProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {radioGroupContext, radioGroupItemPropsContext} from './context.svelte.js';

  let {children, ...props}: RadioGroupItemTextProps = $props();

  let radioGroup = radioGroupContext.get();
  let itemProps = radioGroupItemPropsContext.get();

  let attrs = $derived(mergeProps(props, radioGroup.getItemTextProps(itemProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>

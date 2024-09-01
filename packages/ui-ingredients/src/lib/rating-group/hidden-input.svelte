<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface RatingGroupHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {getFieldContext} from '$lib/field/context.svelte.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {ratingGroupContext} from './context.svelte.js';

  let {...props}: RatingGroupHiddenInputProps = $props();

  let field = getFieldContext();
  let radioGroup = ratingGroupContext.get();

  let mergedProps = $derived(
    mergeProps(props, radioGroup.getHiddenInputProps()),
  );
</script>

<input aria-describedby={field?.['aria-describedby']} {...mergedProps} />

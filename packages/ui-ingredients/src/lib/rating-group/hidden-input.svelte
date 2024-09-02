<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface RatingGroupHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getRatingGroupContext} from './context.svelte.js';

  let {...props}: RatingGroupHiddenInputProps = $props();

  let radioGroup = getRatingGroupContext();

  let mergedProps = $derived(
    mergeProps(props, radioGroup.getHiddenInputProps()),
  );
</script>

<input {...mergedProps} />

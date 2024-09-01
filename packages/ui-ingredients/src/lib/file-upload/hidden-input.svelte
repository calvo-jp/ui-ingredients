<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface FileUploadHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {getFieldContext} from '$lib/field/context.svelte.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {fileUploadContext} from './context.svelte.js';

  let {...props}: FileUploadHiddenInputProps = $props();

  let field = getFieldContext();
  let fileUpload = fileUploadContext.get();

  let mergedProps = $derived(
    mergeProps(props, fileUpload.getHiddenInputProps()),
  );
</script>

<input aria-describedby={field?.['aria-describedby']} {...mergedProps} />

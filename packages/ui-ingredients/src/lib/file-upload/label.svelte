<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface FileUploadLabelProps extends HtmlProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {fileUploadContext} from './context.svelte.js';

  let {children, ...props}: FileUploadLabelProps = $props();

  let fileUpload = fileUploadContext.get();

  let attrs = $derived(mergeProps(props, fileUpload.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>

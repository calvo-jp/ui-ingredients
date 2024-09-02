<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {
    CreateFieldProps,
    CreateFieldReturn,
  } from './create-field.svelte.js';

  export interface FieldProps
    extends Assign<HTMLProps<'div'>, CreateFieldProps> {
    asChild?: AsChild<CreateFieldReturn>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {setFieldContext} from './context.svelte.js';
  import {createField} from './create-field.svelte.js';

  let {asChild, children, ...props}: FieldProps = $props();

  let [fieldProps, otherProps] = createSplitProps<CreateFieldProps>([
    'id',
    'ids',
    'invalid',
    'disabled',
    'readOnly',
    'required',
  ])(props);

  let field = createField(fieldProps);

  let mergedProps = $derived(mergeProps(otherProps, field.getRootProps()));

  setFieldContext(field);
</script>

{#if asChild}
  {@render asChild(mergedProps, field)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}

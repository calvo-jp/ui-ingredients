<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreatePasswordInputProps,
    CreatePasswordInputReturn,
  } from './create-password-input.svelte.js';

  export interface PasswordInputProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreatePasswordInputReturn>,
      Optional<CreatePasswordInputProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createPasswordInputContext} from './create-password-input.svelte.js';
  import {setPasswordInputContext} from './password-input-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PasswordInputProps = $props();

  let uid = $props.id();

  let [createPasswordInputProps, localProps] = $derived(
    createSplitProps<Omit<CreatePasswordInputProps, 'id'>>([
      'autoComplete',
      'defaultVisible',
      'disabled',
      'ids',
      'ignorePasswordManagers',
      'invalid',
      'name',
      'onVisibilityChange',
      'readOnly',
      'required',
      'translations',
      'visible',
    ])(props),
  );

  let PasswordInput = createPasswordInputContext(
    reflect(() => ({...createPasswordInputProps, id: id ?? uid})),
  );

  let mergedProps = $derived(
    mergeProps(PasswordInput.getRootProps(), localProps),
  );

  setPasswordInputContext(PasswordInput);
</script>

{#if asChild}
  {@render asChild(mergedProps, PasswordInput)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(PasswordInput)}
  </div>
{/if}

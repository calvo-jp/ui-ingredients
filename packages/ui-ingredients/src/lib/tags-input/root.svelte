<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateTagsInputContextProps,
    CreateTagsInputContextReturn,
  } from './context.svelte.js';

  export interface TagsInputProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateTagsInputContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateTagsInputContextReturn]>;
  }
</script>

<script lang="ts">
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.js';
  import {mergeProps} from '@zag-js/svelte';
  import {
    createTagsInputContext,
    setTagsInputContext,
  } from './context.svelte.js';

  let {
    id,
    ids,
    dir,
    max,
    form,
    name,
    value,
    invalid,
    disabled,
    editable,
    readOnly,
    validate,
    required,
    delimiter,
    autoFocus,
    maxLength,
    addOnPaste,
    inputValue,
    blurBehavior,
    translations,
    allowOverflow,
    onValueChange,
    onFocusOutside,
    onValueInvalid,
    onInteractOutside,
    onHighlightChange,
    onInputValueChange,
    onPointerDownOutside,
    getRootNode,
    children,
    ...props
  }: TagsInputProps = $props();

  let localeContext = useLocaleContext();
  let environmentContext = useEnvironmentContext();

  let context = createTagsInputContext({
    id: id ?? createUniqueId(),
    ids,
    dir: dir ?? localeContext?.dir,
    max,
    form,
    name,
    value: $state.snapshot(value),
    invalid,
    disabled,
    editable,
    readOnly,
    validate,
    required,
    delimiter,
    autoFocus,
    maxLength,
    addOnPaste,
    inputValue,
    blurBehavior,
    translations,
    allowOverflow,
    onValueChange,
    onFocusOutside,
    onValueInvalid,
    onInteractOutside,
    onHighlightChange,
    onInputValueChange,
    onPointerDownOutside,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setTagsInputContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>

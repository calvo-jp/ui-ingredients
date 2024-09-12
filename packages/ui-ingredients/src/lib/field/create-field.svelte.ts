import {getEnvironmentContext} from '$lib/environment-provider/context.svelte.js';
import type {HtmlProps} from '$lib/types.js';
import {ariaAttr, dataAttr, getDocument, getWindow} from '@zag-js/dom-query';
import {reflect} from '@zag-js/svelte';
import {uid} from 'uid';
import {parts} from './anatomy.js';

interface ElementIds {
  root?: string;
  label?: string;
  control?: string;
  errorText?: string;
  helperText?: string;
}

export interface CreateFieldProps {
  id?: string | null;
  ids?: ElementIds;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface CreateFieldReturn extends ReturnType<typeof createField> {}

export function createField(props: CreateFieldProps) {
  const environment = getEnvironmentContext();

  const id_ = uid();

  const {
    /**/
    ids,
    invalid,
    disabled,
    required,
    readOnly,
  } = $derived.by(() => {
    const id = props.id ?? id_;

    const ids = {
      root: props.ids?.root ?? `field:${id}`,
      label: props.ids?.label ?? `field:${id}:label`,
      control: props.ids?.control ?? `field:${id}:control`,
      errorText: props.ids?.errorText ?? `field:${id}:error-text`,
      helperText: props.ids?.helperText ?? `field:${id}:helper-text`,
    };

    return {
      ids,
      invalid: props.invalid ?? false,
      required: props.required ?? false,
      disabled: props.disabled ?? false,
      readOnly: props.readOnly ?? false,
    };
  });

  let hasErrorText = $state(false);
  let hasHelperText = $state(false);

  const ariaDescribedby = $derived.by(() => {
    const l: string[] = [];

    if (hasErrorText) {
      l.push(ids.errorText);
    }

    if (hasHelperText) {
      l.push(ids.helperText);
    }

    return l.join(' ');
  });

  $effect(() => {
    const rootNode = environment?.getRootNode() ?? document;

    const doc = getDocument(rootNode);
    const win = getWindow(rootNode);

    function handler() {
      hasErrorText = invalid && doc.getElementById(ids.errorText) !== null;
      hasHelperText = doc.getElementById(ids.helperText) !== null;
    }

    handler();

    const observer = new win.MutationObserver(handler);
    observer.observe(rootNode, {childList: true, subtree: true});

    return () => observer.disconnect();
  });

  function getRootProps(): HtmlProps<'div'> {
    return {
      ...parts.root.attrs,
      id: ids.root,
      role: 'group',
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readOnly),
    };
  }

  function getLabelProps(): HtmlProps<'label'> {
    return {
      ...parts.label.attrs,
      id: ids.label,
      for: ids.control,
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readOnly),
    };
  }

  function getErrorTextProps(): HtmlProps<'div'> {
    return {
      ...parts.errorText.attrs,
      id: ids.errorText,
      hidden: !hasErrorText,
      'aria-live': 'polite',
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readOnly),
    };
  }

  function getHelperTextProps(): HtmlProps<'div'> {
    return {
      id: ids.helperText,
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readOnly),
    };
  }

  function getInputProps(): HtmlProps<'input'> {
    return {
      ...parts.input.attrs,
      id: ids.control,
      disabled,
      required,
      readonly: readOnly,
      'aria-invalid': ariaAttr(invalid),
      'aria-describedby': ariaDescribedby,
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readOnly),
    };
  }

  function getSelectProps(): HtmlProps<'select'> {
    return {
      ...parts.select.attrs,
      id: ids.control,
      disabled,
      required,
      'aria-invalid': ariaAttr(invalid),
      'aria-readonly': ariaAttr(readOnly),
      'aria-describedby': ariaDescribedby,
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readOnly),
    };
  }

  function getTextareaProps(): HtmlProps<'textarea'> {
    return {
      ...parts.textarea.attrs,
      id: ids.control,
      disabled,
      required,
      readonly: readOnly,
      'aria-describedby': ariaDescribedby,
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readOnly),
    };
  }

  return reflect(() => ({
    ids,
    disabled,
    required,
    readOnly,
    invalid,
    'aria-describedby': ariaDescribedby,
    getRootProps,
    getLabelProps,
    getErrorTextProps,
    getHelperTextProps,
    getInputProps,
    getSelectProps,
    getTextareaProps,
  }));
}

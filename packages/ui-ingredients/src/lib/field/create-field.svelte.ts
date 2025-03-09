import {getLocaleContext} from '$lib/locale-provider/locale-provider-context.svelte.js';
import {ariaAttr, dataAttr, getDocument, getWindow} from '@zag-js/dom-query';
import {reflect} from '@zag-js/svelte';
import type {
  HTMLAttributes,
  HTMLInputAttributes,
  HTMLLabelAttributes,
  HTMLSelectAttributes,
  HTMLTextareaAttributes,
} from 'svelte/elements';
import {getEnvironmentContext} from '../environment-provider/enviroment-provider-context.svelte.js';
import {parts} from './field-anatomy.js';

interface ElementIds {
  root?: string;
  label?: string;
  control?: string;
  errorText?: string;
  helperText?: string;
  requiredIndicator?: string;
}

export interface CreateFieldProps {
  id: string;
  ids?: ElementIds;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface CreateFieldReturn {
  ids: ElementIds;
  disabled: boolean;
  required: boolean;
  readOnly: boolean;
  invalid: boolean;
  'aria-describedby': string;
  getRootProps(): HTMLAttributes<HTMLElement>;
  getLabelProps(): HTMLLabelAttributes;
  getErrorTextProps(): HTMLAttributes<HTMLElement>;
  getHelperTextProps(): HTMLAttributes<HTMLElement>;
  getInputProps(): HTMLInputAttributes;
  getSelectProps(): HTMLSelectAttributes;
  getTextareaProps(): HTMLTextareaAttributes;
  getRequiredIndicatorProps(): HTMLAttributes<HTMLElement>;
}

export function createField(props: CreateFieldProps): CreateFieldReturn {
  const locale = getLocaleContext();
  const environment = getEnvironmentContext();

  const {
    /**/
    ids,
    invalid,
    disabled,
    required,
    readOnly,
  } = $derived.by(() => {
    const id = props.id;

    const ids = {
      root: props.ids?.root ?? `field:${id}`,
      label: props.ids?.label ?? `field:${id}:label`,
      control: props.ids?.control ?? `field:${id}:control`,
      errorText: props.ids?.errorText ?? `field:${id}:error-text`,
      helperText: props.ids?.helperText ?? `field:${id}:helper-text`,
      requiredIndicator:
        props.ids?.requiredIndicator ?? `field:${id}:required-indicator`,
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

  function getRootProps(): HTMLAttributes<HTMLElement> {
    return {
      ...parts.root.attrs,
      id: ids.root,
      dir: locale?.dir,
      role: 'group',
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readOnly),
    };
  }

  function getLabelProps(): HTMLLabelAttributes {
    return {
      ...parts.label.attrs,
      id: ids.label,
      dir: locale?.dir,
      for: ids.control,
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readOnly),
    };
  }

  function getRequiredIndicatorProps(): HTMLAttributes<HTMLElement> {
    return {
      ...parts.requiredIndicator.attrs,
      id: ids.requiredIndicator,
      dir: locale?.dir,
      hidden: !required,
      'aria-hidden': true,
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-readonly': dataAttr(readOnly),
    };
  }

  function getErrorTextProps(): HTMLAttributes<HTMLElement> {
    return {
      ...parts.errorText.attrs,
      id: ids.errorText,
      dir: locale?.dir,
      hidden: !hasErrorText,
      'aria-live': 'polite',
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readOnly),
    };
  }

  function getHelperTextProps(): HTMLAttributes<HTMLElement> {
    return {
      ...parts.helperText.attrs,
      id: ids.helperText,
      dir: locale?.dir,
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readOnly),
    };
  }

  function getControlProps() {
    return {
      id: ids.control,
      dir: locale?.dir,
      disabled,
      required,
      'aria-describedby': ariaDescribedby,
      'aria-invalid': ariaAttr(invalid),
      'aria-disabled': ariaAttr(disabled),
      'aria-required': ariaAttr(required),
      'aria-readonly': ariaAttr(readOnly),
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readOnly),
    };
  }

  function getInputProps(): HTMLInputAttributes {
    return {
      readonly: readOnly,
      ...getControlProps(),
      ...parts.input.attrs,
    };
  }

  function getTextareaProps(): HTMLTextareaAttributes {
    return {
      readonly: readOnly,
      ...getControlProps(),
      ...parts.textarea.attrs,
    };
  }

  function getSelectProps(): HTMLSelectAttributes {
    return {
      ...getControlProps(),
      ...parts.select.attrs,
    };
  }

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
    getRequiredIndicatorProps,
  }));
}

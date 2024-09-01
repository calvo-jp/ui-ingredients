import type {HTMLProps} from '$lib/types.js';
import {ariaAttr, dataAttr} from '@zag-js/dom-query';
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
  const id_ = uid();

  const {
    /**/
    ids,
    invalid,
    disabled,
    required,
    readonly,
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
      readonly: props.readOnly ?? false,
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
    if (invalid && document.getElementById(ids.errorText)) {
      hasErrorText = true;
    }
  });

  $effect(() => {
    if (document.getElementById(ids.helperText)) {
      hasHelperText = true;
    }
  });

  function getRootProps(): HTMLProps<'div'> {
    return {
      ...parts.root.attrs,
      id: ids.root,
      role: 'group',
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readonly),
    };
  }

  function getLabelProps(): HTMLProps<'label'> {
    return {
      ...parts.label.attrs,
      id: ids.label,
      for: ids.control,
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readonly),
    };
  }

  function getErrorTextProps(): HTMLProps<'div'> {
    return {
      ...parts.errorText.attrs,
      id: ids.errorText,
      hidden: !hasErrorText,
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readonly),
    };
  }

  function getHelperTextProps(): HTMLProps<'div'> {
    return {
      id: ids.helperText,
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readonly),
    };
  }

  function getInputProps(): HTMLProps<'input'> {
    return {
      ...parts.input.attrs,
      id: ids.control,
      disabled,
      required,
      readonly,
      'aria-invalid': ariaAttr(invalid),
      'aria-describedby': ariaDescribedby,
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readonly),
    };
  }

  function getSelectProps(): HTMLProps<'select'> {
    return {
      ...parts.select.attrs,
      id: ids.control,
      disabled,
      required,
      'aria-invalid': ariaAttr(invalid),
      'aria-readonly': ariaAttr(readonly),
      'aria-describedby': ariaDescribedby,
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readonly),
    };
  }

  function getTextareaProps(): HTMLProps<'textarea'> {
    return {
      ...parts.textarea.attrs,
      id: ids.control,
      disabled,
      required,
      readonly,
      'aria-describedby': ariaDescribedby,
      'data-invalid': dataAttr(invalid),
      'data-disabled': dataAttr(disabled),
      'data-required': dataAttr(required),
      'data-readonly': dataAttr(readonly),
    };
  }

  return {
    getRootProps,
    getLabelProps,
    getErrorTextProps,
    getHelperTextProps,
    getInputProps,
    getSelectProps,
    getTextareaProps,
  };
}

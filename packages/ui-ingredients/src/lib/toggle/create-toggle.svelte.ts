import {ariaAttr, dataAttr} from '@zag-js/dom-query';
import {reflect} from '@zag-js/svelte';
import type {HTMLButtonAttributes} from 'svelte/elements';
import {parts} from './anatomy.js';

export interface CreateToggleProps {
  disabled?: boolean;
  pressed?: boolean;
  pressedControlled?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

export interface CreateToggleReturn {
  pressed: boolean;
  setPressed: (pressed: boolean) => void;
  getRootProps: () => HTMLButtonAttributes;
}

export function createToggle(props: CreateToggleProps) {
  let pressed = $state(props.pressed ?? false);

  function setPressed(value: boolean) {
    props.onPressedChange?.(value);

    if (!props.pressedControlled) {
      pressed = value;
    }
  }

  function getRootProps(): HTMLButtonAttributes {
    return {
      disabled: props.disabled,
      onclick() {
        if (props.disabled) return;
        setPressed(!pressed);
      },
      'aria-pressed': ariaAttr(pressed),
      'data-state': pressed ? 'on' : 'off',
      'data-pressed': dataAttr(pressed),
      'data-disabled': dataAttr(props.disabled),
      ...parts.root.attrs,
    };
  }

  $effect(() => {
    if (props.pressedControlled) {
      pressed = props.pressed ?? false;
    }
  });

  return reflect(() => ({
    pressed,
    setPressed,
    getRootProps,
  }));
}

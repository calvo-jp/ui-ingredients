# Toggle

A component for switching between two states, such as on/off.

## Usage

```svelte
<script>
  import {Toggle} from 'ui-ingredients';
  import {Bell02Icon, BellOff02Icon} from '$lib/icons';

  let pressed = $state(false);
</script>

<Toggle.Root
  {pressed}
  onPressedChange={function () {
    pressed = !pressed;
  }}
  pressedControlled
>
  {#if pressed}
    <BellOff02Icon />
  {:else}
    <Bell02Icon />
  {/if}
</Toggle.Root>
```

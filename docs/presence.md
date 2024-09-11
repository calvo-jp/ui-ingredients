# Presence

A component that controls content rendering and unmounting based on state.

## Usage

```svelte
<script>
  import {Presence} from 'ui-ingredients';

  let present = $state(false);
</script>

<button
  onclick={function () {
    present = !present;
  }}
>
  Toggle
</button>

<Presence
  {present}
  lazyMount
  keepMounted={false}
  class="data-open:animate-fade-in data-closed:animate-fade-out"
>
  Hello World
</Presence>
```

<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Context} from '@zag-js/presence';

  export interface PresenceProps
    extends Assign<HtmlIngredientProps<'div'>, Context> {}
</script>

<script lang="ts">
  import * as presence from '@zag-js/presence';
  import {normalizeProps, useMachine} from '@zag-js/svelte';

  let {
    /**/
    present,
    immediate,
    onExitComplete,
    children,
    ...props
  }: PresenceProps = $props();

  let [machineState, send] = useMachine(
    presence.machine({
      present,
      immediate,
      onExitComplete,
    }),
  );

  let api = $derived(presence.connect(machineState, send, normalizeProps));
</script>

<div
  use:api.setNode
  hidden={!api.present}
  data-state={api.skip ? undefined : present ? 'open' : 'closed'}
  {...props}
>
  {@render children?.()}
</div>

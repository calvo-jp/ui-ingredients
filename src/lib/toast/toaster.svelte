<script lang="ts" context="module">
  import type {Snippet} from 'svelte';
  import type {CreateToastContextReturn} from './context.svelte.js';
  import type {CreateToasterReturn} from './create-toaster.svelte.js';

  export interface ToasterProps {
    toaster: CreateToasterReturn;
    children: Snippet<[CreateToastContextReturn]>;
  }
</script>

<script lang="ts">
  import {Portal} from '$lib/portal/index.js';
  import ToastActor from './toast-actor.svelte';

  let {toaster, children}: ToasterProps = $props();
</script>

<Portal>
  {#each toaster.getPlacements() as placement}
    <div {...toaster.getGroupProps({placement})}>
      {#each toaster.getToastsByPlacement(placement) as toast (toast.id)}
        <ToastActor actor={toast}>
          {#snippet children$(ctx)}
            {@render children(ctx)}
          {/snippet}
        </ToastActor>
      {/each}
    </div>
  {/each}
</Portal>

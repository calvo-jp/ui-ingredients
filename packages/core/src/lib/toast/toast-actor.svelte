<script lang="ts">
  import type {Snippet} from 'svelte';
  import type {Service} from 'zagjs-legacy-toast';
  import {createToast, type CreateToastReturn} from './create-toast.svelte.js';
  import {setToastContext} from './toast-context.svelte.js';

  interface Props {
    actor: Service;
    children?: Snippet<[toast: CreateToastReturn]>;
  }

  let {actor, children}: Props = $props();

  let toast = createToast(actor);

  setToastContext(toast);
</script>

{@render children?.(toast)}

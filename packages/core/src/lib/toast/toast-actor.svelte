<script lang="ts">
  import * as toast$ from '@zag-js/toast';
  import type {Snippet} from 'svelte';
  import {createToast, type CreateToastReturn} from './create-toast.svelte.js';
  import {setToastContext} from './toast-context.svelte.js';

  interface Props {
    actor: toast$.Service;
    children: Snippet<[toast: CreateToastReturn]>;
  }

  let {actor, children}: Props = $props();

  let toast = createToast(actor);

  setToastContext(toast);
</script>

{@render children(toast)}

<script lang="ts">
  import * as toast from '@zag-js/toast';
  import type {Snippet} from 'svelte';
  import {toastContext} from './context.svelte.js';
  import {createToast, type CreateToastReturn} from './create-toast.svelte.js';

  interface Props {
    actor: toast.Service;
    children$: Snippet<[api: CreateToastReturn]>;
  }

  let {actor, children$}: Props = $props();

  let context = createToast(actor);

  toastContext.set(context);
</script>

{@render children$(context)}

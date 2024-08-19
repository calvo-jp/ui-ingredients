<script lang="ts">
  import * as toast from '@zag-js/toast';
  import type {Snippet} from 'svelte';
  import {
    createToastContext,
    setToastContext,
    type CreateToastContextReturn,
  } from './context.svelte.js';

  interface Props {
    actor: toast.Service;
    children$: Snippet<[CreateToastContextReturn]>;
  }

  let {actor, children$}: Props = $props();

  let context = createToastContext(actor);

  setToastContext(context);
</script>

{@render children$(context)}

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
    children_: Snippet<[CreateToastContextReturn]>;
  }

  let {actor, children_}: Props = $props();

  let context = createToastContext(actor);

  setToastContext(context);
</script>

{@render children_(context)}

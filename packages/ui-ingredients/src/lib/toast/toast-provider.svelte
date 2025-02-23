<script lang="ts">
  import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
  import * as toast from '@zag-js/toast';
  import type {Snippet} from 'svelte';
  import {setToastContext} from './toast-context.svelte.js';

  interface Props extends toast.Options {
    index: number;
    parent: toast.GroupService;
    children?: Snippet<[toast: toast.Api]>;
  }

  let {index, parent, children, ...props}: Props = $props();

  const service = useMachine(toast.machine, props);
  const api = reflect(() => toast.connect(service, normalizeProps));

  setToastContext(api);
</script>

{@render children?.(api)}

<script lang="ts">
  import {normalizeProps, reflect, useMachine} from '@zag-js/svelte';
  import * as toast from '@zag-js/toast';
  import type {Snippet} from 'svelte';
  import {setToastContext} from './toast-context.svelte.js';

  interface Props {
    index: number;
    toast: toast.Options;
    parent: toast.GroupService;
    children: Snippet<[toast: toast.Api]>;
  }

  let props: Props = $props();

  let service = useMachine(toast.machine, () => ({
    ...props.toast,
    index: props.index,
    parent: props.parent,
  }));

  let api = reflect(() => toast.connect(service, normalizeProps));

  setToastContext(api);
</script>

{@render props.children?.(api)}

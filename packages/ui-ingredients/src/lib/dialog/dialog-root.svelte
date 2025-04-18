<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Optional} from '../types.js';
  import type {
    CreateDialogProps,
    CreateDialogReturn,
  } from './create-dialog.svelte.js';

  export interface DialogProps
    extends Optional<CreateDialogProps, 'id'>,
      PresenceStrategyProps {
    children?: Snippet<[CreateDialogReturn]>;
  }
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {
    setPresenceContext,
    setPresenceStrategyPropsContext,
  } from '../presence/presence-context.svelte.js';
  import {createDialog} from './create-dialog.svelte.js';
  import {setDialogContext} from './dialog-context.svelte.js';

  let {id, children, ...props}: DialogProps = $props();

  let uid = $props.id();

  let [presenceStrategyProps, createDialogProps] = $derived(
    createSplitProps<PresenceStrategyProps>([
      'lazyMount',
      'keepMounted',
      'animateOnMount',
    ])(props),
  );

  let dialog = createDialog(
    reflect(() => ({...createDialogProps, id: id ?? uid})),
  );

  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: dialog.open,
    })),
  );

  setDialogContext(dialog);
  setPresenceContext(presence);
  setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{@render children?.(dialog)}

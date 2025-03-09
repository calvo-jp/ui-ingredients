<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Optional} from '../types.js';
  import type {
    CreateAlertDialogProps,
    CreateAlertDialogReturn,
  } from './create-alert-dialog.svelte.js';

  export interface AlertDialogProps
    extends Optional<CreateAlertDialogProps, 'id'>,
      PresenceStrategyProps {
    children?: Snippet<[CreateAlertDialogReturn]>;
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
  import {setAlertDialogContext} from './alert-dialog-context.svelte.js';
  import {createAlertDialog} from './create-alert-dialog.svelte.js';

  let {id, children, ...props}: AlertDialogProps = $props();

  let uid = $props.id();

  let [presenceStrategyProps, createDialogProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let alertDialog = createAlertDialog(
    reflect(() => ({...createDialogProps, id: id ?? uid})),
  );

  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: alertDialog.open,
    })),
  );

  setAlertDialogContext(alertDialog);
  setPresenceContext(presence);
  setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{@render children?.(alertDialog)}

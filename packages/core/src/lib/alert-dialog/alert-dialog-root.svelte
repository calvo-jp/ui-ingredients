<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateAlertDialogProps,
    CreateAlertDialogReturn,
  } from './create-alert-dialog.svelte.js';

  export interface AlertDialogProps
    extends CreateAlertDialogProps,
      PresenceStrategyProps {
    children?: Snippet<[CreateAlertDialogReturn]>;
  }
</script>

<script lang="ts">
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {
    setPresenceContext,
    setPresenceStrategyPropsContext,
  } from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setAlertDialogContext} from './alert-dialog-context.svelte.js';
  import {createAlertDialog} from './create-alert-dialog.svelte.js';

  let {children, ...props}: AlertDialogProps = $props();

  let [presenceStrategyProps, createDialogProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let alertDialog = createAlertDialog(reflect(() => createDialogProps));
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

<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateDialogProps,
    CreateDialogReturn,
  } from './create-dialog.svelte.js';

  export interface DialogProps
    extends CreateDialogProps,
      PresenceStrategyProps {
    children?: Snippet<[CreateDialogReturn]>;
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
  import {createDialog} from './create-dialog.svelte.js';
  import {setDialogContext} from './dialog-context.svelte.js';

  let {children, ...props}: DialogProps = $props();

  let [presenceStrategyProps, dialogProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let dialog = createDialog(reflect(() => dialogProps));
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

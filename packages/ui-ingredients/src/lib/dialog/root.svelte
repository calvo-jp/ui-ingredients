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
  import {
    setPresenceContext,
    setPresenceStrategyPropsContext,
  } from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setDialogContext} from './context.svelte.js';
  import {createDialog} from './create-dialog.svelte.js';

  let {children, ...props}: DialogProps = $props();

  let [presenceStrategyProps, dialogProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let dialog = createDialog(reflect(() => dialogProps));

  let presence = createPresence({
    get present() {
      return dialog.open;
    },
    get lazyMount() {
      return presenceStrategyProps.lazyMount;
    },
    get keepMounted() {
      return presenceStrategyProps.keepMounted;
    },
  });

  setDialogContext(dialog);
  setPresenceContext(presence);
  setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{@render children?.(dialog)}

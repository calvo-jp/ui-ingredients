<script lang="ts">
  import {CheckIcon} from '@untitled-theme/icons-svelte';
  import CheckboxControl from './checkbox-control.svelte';
  import CheckboxHiddenInput from './checkbox-hidden-input.svelte';
  import CheckboxIndicator from './checkbox-indicator.svelte';
  import CheckboxLabel from './checkbox-label.svelte';
  import CheckboxRoot from './checkbox-root.svelte';
</script>

<CheckboxRoot>
  <CheckboxControl>
    <CheckboxIndicator>
      <CheckIcon />
    </CheckboxIndicator>
  </CheckboxControl>
  <CheckboxLabel>I accept the terms and conditions</CheckboxLabel>
  <CheckboxHiddenInput />
</CheckboxRoot>

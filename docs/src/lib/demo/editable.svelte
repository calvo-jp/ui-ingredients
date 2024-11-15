<script lang="ts">
  import {Label} from '$lib/ui';
  import {Editable} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <Editable.Root value="Double click to edit">
    <Editable.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs}>Label</Label>
      {/snippet}
    </Editable.Label>

    <Editable.Area>
      <Editable.Input />
      <Editable.Preview class="text-neutral-400" />
    </Editable.Area>

    <Editable.Control
      class="mt-1.5 flex items-center gap-2 text-sm font-semibold"
    >
      <Editable.EditTrigger>Edit</Editable.EditTrigger>
      <Editable.SubmitTrigger>Save</Editable.SubmitTrigger>
      <Editable.CancelTrigger>Cancel</Editable.CancelTrigger>
    </Editable.Control>
  </Editable.Root>
</Container>

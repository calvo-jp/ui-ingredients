<script lang="ts">
  import {Editable} from '$lib/index.js';

  let value = $state('Double click to edit');

  $inspect({value});
</script>

<Editable.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  <Editable.Label>Label</Editable.Label>

  <Editable.Area>
    <Editable.Input />
    <Editable.Preview />
  </Editable.Area>

  <Editable.Control>
    <Editable.EditTrigger>Edit</Editable.EditTrigger>
    <Editable.SubmitTrigger>Save</Editable.SubmitTrigger>
    <Editable.CancelTrigger>Cancel</Editable.CancelTrigger>
  </Editable.Control>
</Editable.Root>

<style>
  :global([data-scope='editable'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
  }

  :global([data-scope='editable'][data-part='edit-trigger']),
  :global([data-scope='editable'][data-part='submit-trigger']),
  :global([data-scope='editable'][data-part='cancel-trigger']) {
    border: 1px solid var(--border-default);
    padding: 0px 12px;
    height: 32px;
    font-size: 14px;
    margin-top: 6px;
  }
</style>

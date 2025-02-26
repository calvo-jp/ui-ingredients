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

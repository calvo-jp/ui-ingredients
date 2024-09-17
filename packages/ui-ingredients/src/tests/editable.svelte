<script lang="ts">
  import {Editable} from '$lib/index.js';
</script>

<Editable.Root>
  <Editable.Label>Label</Editable.Label>
  <Editable.Area>
    <Editable.Input />
    <Editable.Preview />
  </Editable.Area>
  <Editable.Control>
    <Editable.EditTrigger>Edit</Editable.EditTrigger>
    <Editable.CancelTrigger>Cancel</Editable.CancelTrigger>
    <Editable.SubmitTrigger>Submit</Editable.SubmitTrigger>
  </Editable.Control>
</Editable.Root>

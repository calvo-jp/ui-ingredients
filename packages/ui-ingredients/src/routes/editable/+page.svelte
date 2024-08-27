<script lang="ts">
  import {Editable} from '$lib/index.js';

  let value = $state('Double click to edit');
</script>

<Editable.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  <Editable.Label class="text-muted mb-1 inline-block font-medium">Framework</Editable.Label>
  <Editable.Area>
    <Editable.Input />
    <Editable.Preview class="text-neutral-400" />
  </Editable.Area>

  <div class="mt-1.5 flex items-center gap-2 text-sm font-semibold text-neutral-300">
    <Editable.EditTrigger>Edit</Editable.EditTrigger>
    <Editable.SubmitTrigger>Save</Editable.SubmitTrigger>
    <Editable.CancelTrigger>Cancel</Editable.CancelTrigger>
  </div>
</Editable.Root>

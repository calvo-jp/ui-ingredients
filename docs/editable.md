# Editable

## Usage

```svelte
<script>
  import {Editable} from 'ui-ingredients';

  let value = $state('Hello world!');
</script>

<Editable.Root
  {value}
  onValueChange={function (detail) {
    value = detail.value;
  }}
>
  <Editable.Label>Label</Editable.Label>

  <Editable.Area>
    <Editable.Input />
    <Editable.Preview />
  </Editable.Area>

  <div>
    <Editable.EditTrigger>Edit</Editable.EditTrigger>
    <Editable.SubmitTrigger>Save</Editable.SubmitTrigger>
    <Editable.CancelTrigger>Cancel</Editable.CancelTrigger>
  </div>
</Editable.Root>
```

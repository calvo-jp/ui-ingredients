<script lang="ts">
  import {Field} from '$lib/index.js';
</script>

<Field.Root>
  <Field.Label>Label</Field.Label>
  <Field.Input />
  <Field.ErrorText>This is an error text</Field.ErrorText>
  <Field.HelperText>This is a helper text</Field.HelperText>
</Field.Root>

<Field.Root>
  <Field.Label>Label</Field.Label>
  <Field.Select />
  <Field.ErrorText>This is an error text</Field.ErrorText>
  <Field.HelperText>This is a helper text</Field.HelperText>
</Field.Root>

<Field.Root>
  <Field.Label>Label</Field.Label>
  <Field.Textarea />
  <Field.ErrorText>This is an error text</Field.ErrorText>
  <Field.HelperText>This is a helper text</Field.HelperText>
</Field.Root>

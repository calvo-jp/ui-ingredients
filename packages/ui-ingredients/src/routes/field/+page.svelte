<script lang="ts">
  import {Field} from '$lib/index.js';
  import {tick} from 'svelte';

  let data = $state({
    title: '',
    description: '',
  });

  let touched = $state({
    title: false,
    description: false,
  });

  let errors = $derived({
    title: touched.title && data.title.trim().length < 3,
    description: touched.description && data.description.trim().length < 3,
  });
</script>

<form
  onsubmit={async (e) => {
    e.preventDefault();

    touched = {
      title: true,
      description: true,
    };

    await tick();

    if (errors.title || errors.description) return;

    window.alert(JSON.stringify(data, null, 2));

    data = {
      title: '',
      description: '',
    };

    touched = {
      title: false,
      description: false,
    };
  }}
  novalidate
>
  <Field.Root invalid={!!errors.title} required>
    <Field.Label>
      Title
      <Field.RequiredIndicator />
    </Field.Label>
    <Field.ErrorText>Invalid title</Field.ErrorText>
    <Field.Input />
    <Field.HelperText>This is a helper text</Field.HelperText>
  </Field.Root>

  <Field.Root invalid={errors.description} required>
    <Field.Label>
      Description
      <Field.RequiredIndicator />
    </Field.Label>
    <Field.ErrorText>Invalid description</Field.ErrorText>
    <Field.Textarea autoResize />
    <Field.HelperText>This is a helper text</Field.HelperText>
  </Field.Root>

  <button type="submit">Submit</button>
</form>

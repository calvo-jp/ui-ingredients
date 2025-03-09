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
  style="max-width:375px;display:flex;flex-direction:column;gap:20px;"
>
  <Field.Root invalid={!!errors.title} required>
    <Field.Label>
      Title
      <Field.RequiredIndicator />
    </Field.Label>
    <Field.Input />
    <Field.HelperText>This is a helper text</Field.HelperText>
    <Field.ErrorText>Invalid title</Field.ErrorText>
  </Field.Root>

  <Field.Root invalid={errors.description} required>
    <Field.Label>
      Description
      <Field.RequiredIndicator />
    </Field.Label>
    <Field.Textarea autoResize />
    <Field.HelperText>This is a helper text</Field.HelperText>
    <Field.ErrorText>Invalid description</Field.ErrorText>
  </Field.Root>

  <button
    type="submit"
    style="height:40px;display:flex;align-items:center;justify-content:center;background:oklch(0.269 0 0);color:white;font-weight:500;"
  >
    Submit
  </button>
</form>

<style>
  :global([data-scope='field'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
  }

  :global(
    [data-scope='field'][data-part='input'],
    [data-scope='field'][data-part='select'],
    [data-scope='field'][data-part='textarea']
  ) {
    padding-left: 14px;
    padding-right: 14px;
    height: 40px;
    width: 100%;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='field'][data-part='textarea']) {
    resize: none;
    padding: 12px 14px;
    height: auto !important;
  }

  :global([data-scope='field'][data-part='required-indicator']) {
    color: var(--color-error);
  }

  :global([data-scope='field'][data-part='helper-text']) {
    font-size: 14px;
    display: inline-block;
    margin-top: 4px;
    color: var(--color-muted);
  }

  :global([data-scope='field'][data-part='error-text']) {
    font-size: 14px;
    display: inline-block;
    margin-top: 4px;
    margin-left: 4px;
    color: var(--color-error);
  }
</style>

<script lang="ts">
  import {Field} from '$lib/index.js';
  import {tick} from 'svelte';
  import {Button, Input, Label} from '../shared/index.js';
  import {textareaRecipe} from '../shared/textarea.recipe.js';

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
  class="w-full lg:max-w-[24rem]"
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
    <div class="mb-1 flex">
      <Field.Label class="!mb-0 grow">
        {#snippet asChild(attrs)}
          <Label {...attrs}>
            Title
            <Field.RequiredIndicator class="text-danger" />
          </Label>
        {/snippet}
      </Field.Label>
      <Field.ErrorText
        class="text-danger flex items-center gap-1 text-sm data-invalid:animate-fade-in"
      >
        Invalid title
      </Field.ErrorText>
    </div>
    <Field.Input>
      {#snippet asChild(attrs)}
        <Input
          value={data.title}
          oninput={(e) => {
            data.title = e.currentTarget.value;
            touched.title = true;
          }}
          {...attrs}
        />
      {/snippet}
    </Field.Input>
    <Field.HelperText class="text-muted mt-1.5 text-sm">
      This is a helper text
    </Field.HelperText>
  </Field.Root>

  <Field.Root class="mt-4" invalid={errors.description} required>
    <div class="mb-1 flex">
      <Field.Label class="!mb-0 grow">
        {#snippet asChild(attrs)}
          <Label {...attrs}>
            Description
            <Field.RequiredIndicator class="text-danger" />
          </Label>
        {/snippet}
      </Field.Label>
      <Field.ErrorText
        class="text-danger flex items-center gap-1 text-sm data-invalid:animate-fade-in"
      >
        Invalid description
      </Field.ErrorText>
    </div>

    <Field.Textarea autoResize>
      {#snippet asChild(action, attrs)}
        <textarea
          use:action
          value={data.description}
          oninput={(e) => {
            data.description = e.currentTarget.value;
            touched.description = true;
          }}
          class={textareaRecipe()}
          {...attrs}
        ></textarea>
      {/snippet}
    </Field.Textarea>
    <Field.HelperText class="text-muted mt-1.5 text-sm">
      This is a helper text
    </Field.HelperText>
  </Field.Root>

  <Button type="submit" variant="solid" fullWidth class="mt-5">Submit</Button>
</form>

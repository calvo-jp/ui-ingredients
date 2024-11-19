<script lang="ts">
  import {Input, Label} from '$lib/ui';
  import {Field} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <Field.Root required invalid class="mx-auto max-w-[20rem]">
    <Field.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs}>
          Label
          <Field.RequiredIndicator class="text-red-600 dark:text-red-400" />
        </Label>
      {/snippet}
    </Field.Label>
    <Field.Input>
      {#snippet asChild(attrs)}
        <Input {...attrs} />
      {/snippet}
    </Field.Input>
    <Field.HelperText
      class="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-400"
    >
      This is a helper text
    </Field.HelperText>
  </Field.Root>
</Container>

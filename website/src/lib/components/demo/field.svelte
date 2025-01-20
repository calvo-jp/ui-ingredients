<script lang="ts">
  import Input from '$lib/components/ui/input.svelte';
  import Label from '$lib/components/ui/label.svelte';
  import {Field} from 'ui-ingredients';
</script>

<Field.Root required class="mx-auto max-w-[20rem]">
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

<script lang="ts">
  import {Field} from '$lib/index.js';
  import {Input, Label} from '../shared/index.js';

  let checked = $state(false);

  $inspect(checked);
</script>

<Field.Root invalid class="w-full lg:max-w-[24rem]">
  <div class="mb-1 flex">
    <Field.Label class="!mb-0 grow">
      {#snippet asChild(attrs)}
        <Label {...attrs}>Label</Label>
      {/snippet}
    </Field.Label>
    <Field.ErrorText class="text-danger flex items-center gap-1 text-sm">
      This is an error text
    </Field.ErrorText>
  </div>
  <Field.Input>
    {#snippet asChild(attrs)}
      <Input {...attrs} />
    {/snippet}
  </Field.Input>
  <Field.HelperText class="text-muted mt-1.5 text-sm">
    This is a helper text
  </Field.HelperText>
</Field.Root>

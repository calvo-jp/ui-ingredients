<script lang="ts">
  import {Input, Label} from '$lib/ui';
  import {PinInput} from 'ui-ingredients';
</script>

<PinInput.Root placeholder="0" class="mx-auto w-fit">
  <PinInput.Label>
    {#snippet asChild(attrs)}
      <Label {...attrs}>Label</Label>
    {/snippet}
  </PinInput.Label>

  <PinInput.HiddenInput />

  <PinInput.Control class="flex gap-2">
    {#each Array.from({length: 4}) as _, i}
      <PinInput.Input index={i} class="size-12">
        {#snippet asChild(attrs)}
          <Input {...attrs} />
        {/snippet}
      </PinInput.Input>
    {/each}
  </PinInput.Control>
</PinInput.Root>

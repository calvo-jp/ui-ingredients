<script lang="ts">
  import {Input, Label} from '$lib/ui';
  import {PinInput} from 'ui-ingredients';
</script>

<PinInput.Root placeholder="" class="mx-auto max-w-[20rem]">
  <PinInput.Label>
    {#snippet asChild(attrs)}
      <Label {...attrs}>Label</Label>
    {/snippet}
  </PinInput.Label>

  <PinInput.HiddenInput />

  <PinInput.Control class="grid grid-cols-6 gap-2">
    {#each Array.from({length: 6}) as _, i}
      <PinInput.Input
        index={i}
        class="aspect-square h-auto w-full text-center text-lg font-bold"
      >
        {#snippet asChild(attrs)}
          <Input {...attrs} />
        {/snippet}
      </PinInput.Input>
    {/each}
  </PinInput.Control>
</PinInput.Root>

<script lang="ts">
  import Input from '$lib/components/ui/input.svelte';
  import Label from '$lib/components/ui/label.svelte';
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
      <PinInput.Input index={i} class="aspect-square w-12 text-center">
        {#snippet asChild(attrs)}
          <Input {...attrs} />
        {/snippet}
      </PinInput.Input>
    {/each}
  </PinInput.Control>
</PinInput.Root>

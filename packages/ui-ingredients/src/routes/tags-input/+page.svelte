<script lang="ts">
  import {TagsInput} from '$lib/index.js';

  let value: string[] = $state([]);

  $inspect(value);
</script>

<TagsInput.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  class="max-w-[24rem]"
>
  {#snippet children(context)}
    <TagsInput.Label class="mb-1 inline-block text-neutral-400">Frameworks</TagsInput.Label>

    <div class="flex min-h-11 flex-wrap gap-2 border p-2">
      <TagsInput.Control class="flex flex-wrap gap-2">
        {#each context.value as value, index}
          <TagsInput.Item {index} {value} class="h-7">
            <TagsInput.ItemPreview
              class="flex h-full shrink-0 items-center gap-1 border bg-neutral-800/50 px-1.5 text-sm leading-[0.875rem]"
            >
              <TagsInput.ItemText>{value}</TagsInput.ItemText>
              <TagsInput.ItemDeleteTrigger class="flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-4"
                >
                  <path d="M18 6L6 18M6 6L18 18"></path>
                </svg>
              </TagsInput.ItemDeleteTrigger>
            </TagsInput.ItemPreview>
            <TagsInput.ItemInput class="outline-none" />
          </TagsInput.Item>
        {/each}
      </TagsInput.Control>
      <TagsInput.Input
        class="w-32 shrink-0 bg-transparent outline-none placeholder:text-neutral-500"
        placeholder="Framework"
      />
    </div>

    <TagsInput.ClearTrigger class="mt-4 block h-11 w-full border bg-neutral-800/50"
      >Clear</TagsInput.ClearTrigger
    >

    <TagsInput.HiddenInput />
  {/snippet}
</TagsInput.Root>

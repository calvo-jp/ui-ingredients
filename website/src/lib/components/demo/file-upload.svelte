<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import {XCloseIcon} from '@untitled-theme/icons-svelte';
  import {FileUpload} from 'ui-ingredients';
</script>

<FileUpload.Root maxFiles={3} class="mx-auto max-w-[24rem]">
  {#snippet children(context)}
    <FileUpload.Dropzone
      class="flex flex-col items-center justify-center gap-4 rounded border-2 border-dashed border-neutral-200 px-8 py-12 dark:border-neutral-800"
    >
      <span class="text-lg font-medium">Drag your file(s) here</span>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger>
        {#snippet asChild(attrs)}
          <Button {...attrs}>Browse Files</Button>
        {/snippet}
      </FileUpload.Trigger>
    </FileUpload.Dropzone>

    <FileUpload.ItemGroup class="mt-4 flex gap-3">
      {#each context.acceptedFiles as file}
        <FileUpload.Item {file} class="w-fit">
          <div class="relative">
            <FileUpload.ItemPreview>
              <FileUpload.ItemPreviewImage class="h-16 w-auto rounded" />
            </FileUpload.ItemPreview>
            <FileUpload.ItemDeleteTrigger
              class="absolute -right-2 -top-2 rounded-full bg-black/15 p-0.5 dark:bg-white/15"
            >
              <XCloseIcon class="size-4" />
            </FileUpload.ItemDeleteTrigger>
          </div>

          <FileUpload.ItemName class="mt-2 w-32 text-sm leading-none" />
          <FileUpload.ItemSizeText
            class="block text-xs leading-none text-neutral-600 dark:text-neutral-400"
          />
        </FileUpload.Item>
      {/each}
    </FileUpload.ItemGroup>
  {/snippet}
</FileUpload.Root>

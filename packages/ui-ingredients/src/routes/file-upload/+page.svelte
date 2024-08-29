<script lang="ts">
  import {FileUpload} from '$lib/index.js';
  import {XCloseIcon} from '@untitled-theme/icons-svelte';
  import {Button} from '../shared/index.js';
</script>

<FileUpload.Root maxFiles={3}>
  {#snippet children(context)}
    <FileUpload.Dropzone
      class="flex w-full flex-col items-center justify-center gap-4 rounded border-2 border-dashed px-8 py-12 lg:max-w-[26rem]"
    >
      <span class="text-lg font-medium">Drag your file(s) here</span>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger>
        {#snippet asChild(mergedProps)}
          <Button {...mergedProps}>Browse Files</Button>
        {/snippet}
      </FileUpload.Trigger>
    </FileUpload.Dropzone>

    <FileUpload.ItemGroup class="mt-4 flex gap-3">
      {#each context.acceptedFiles as file}
        <FileUpload.Item {file} class="w-fit">
          <div class="relative">
            <FileUpload.ItemPreview>
              <FileUpload.ItemPreviewImage class="h-16 w-auto" />
            </FileUpload.ItemPreview>
            <FileUpload.ItemDeleteTrigger
              class="absolute -right-2 -top-2 rounded-full bg-white/15 p-0.5"
            >
              <XCloseIcon class="size-4" />
            </FileUpload.ItemDeleteTrigger>
          </div>

          <FileUpload.ItemName class="mt-1 line-clamp-1 w-16 text-sm" />
          <FileUpload.ItemSizeText class="text-muted text-xs" />
        </FileUpload.Item>
      {/each}
    </FileUpload.ItemGroup>
  {/snippet}
</FileUpload.Root>

<script lang="ts">
  import {FileUpload} from '$lib/index.js';
</script>

<FileUpload.Root maxFiles={3}>
  {#snippet children(context)}
    <FileUpload.Dropzone
      class="flex max-w-[26rem] flex-col items-center justify-center gap-4 border-2 border-dashed px-8 py-12"
    >
      <span>Drag your file(s) here</span>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger class="h-11 border px-5">Browse Files</FileUpload.Trigger>
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
            </FileUpload.ItemDeleteTrigger>
          </div>

          <FileUpload.ItemName class="mt-1 line-clamp-1 w-16 text-sm" />
          <FileUpload.ItemSizeText class="text-xs text-neutral-500" />
        </FileUpload.Item>
      {/each}
    </FileUpload.ItemGroup>
  {/snippet}
</FileUpload.Root>

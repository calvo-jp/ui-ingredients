<script lang="ts">
  import {FileUpload} from '$lib/index.js';
</script>

<FileUpload.Root>
  {#snippet children(context)}
    <FileUpload.Label>Label</FileUpload.Label>

    <FileUpload.Trigger>Trigger</FileUpload.Trigger>
    <FileUpload.Dropzone />
    <FileUpload.HiddenInput />

    <FileUpload.ItemGroup>
      {#each context.acceptedFiles as file}
        <FileUpload.Item {file}>
          <FileUpload.ItemPreview>
            <FileUpload.ItemPreviewImage />
          </FileUpload.ItemPreview>
          <FileUpload.ItemDeleteTrigger>Delete</FileUpload.ItemDeleteTrigger>
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
        </FileUpload.Item>
      {:else}
        <FileUpload.Item
          file={new File([''], 'test.jpeg', {type: 'image/jpeg'})}
        >
          <FileUpload.ItemPreview>
            <FileUpload.ItemPreviewImage />
          </FileUpload.ItemPreview>
          <FileUpload.ItemDeleteTrigger>Delete</FileUpload.ItemDeleteTrigger>
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
        </FileUpload.Item>
      {/each}
    </FileUpload.ItemGroup>
    <FileUpload.ClearTrigger>Clear</FileUpload.ClearTrigger>
  {/snippet}
</FileUpload.Root>

<script lang="ts">
  import {FileUpload} from '$lib/index.js';
</script>

<FileUpload.Root maxFiles={3}>
  {#snippet children(context)}
    <FileUpload.Dropzone>
      Drag your file(s) here

      <FileUpload.HiddenInput />
      <FileUpload.Trigger>Browse Files</FileUpload.Trigger>
    </FileUpload.Dropzone>

    <FileUpload.ItemGroup>
      {#each context.acceptedFiles as file}
        <FileUpload.Item {file}>
          <FileUpload.ItemPreview>
            <FileUpload.ItemPreviewImage />
          </FileUpload.ItemPreview>
          <FileUpload.ItemDeleteTrigger>Remove</FileUpload.ItemDeleteTrigger>
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
        </FileUpload.Item>
      {/each}
    </FileUpload.ItemGroup>
  {/snippet}
</FileUpload.Root>

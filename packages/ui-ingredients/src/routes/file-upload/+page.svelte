<script lang="ts">
  import {FileUpload} from '$lib/index.js';
  import XIcon from '../x-icon.svelte';
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
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
          <FileUpload.ItemDeleteTrigger>
            <XIcon style="width:14px;height:14px;" />
          </FileUpload.ItemDeleteTrigger>
        </FileUpload.Item>
      {/each}
    </FileUpload.ItemGroup>
  {/snippet}
</FileUpload.Root>

<style>
  :global([data-scope='file-upload'][data-part='root']) {
    max-width: 450px;
  }

  :global([data-scope='file-upload'][data-part='dropzone']) {
    border: 1px solid var(--border-default);
    padding: 16px;
    text-align: center;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  :global([data-scope='file-upload'][data-part='dropzone'][data-dragging]) {
    border-style: dashed;
  }

  :global([data-scope='file-upload'][data-part='trigger']) {
    margin-top: 12px;
    border: 1px solid var(--border-default);
    height: 40px;
    padding: 0px 14px;
  }

  :global([data-scope='file-upload'][data-part='item-group']) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 100px;
    gap: 8px;
    margin-top: 8px;
  }

  :global([data-scope='file-upload'][data-part='item']) {
    width: 100%;
    position: relative;
  }

  :global([data-scope='file-upload'][data-part='item-delete-trigger']) {
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 100%;
  }

  :global([data-scope='file-upload'][data-part='item-name']) {
    display: block;
    width: 60px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 1;
  }

  :global([data-scope='file-upload'][data-part='item-size-text']) {
    font-size: 12px;
    line-height: 1;
    color: var(--color-muted);
  }

  :global([data-scope='file-upload'][data-part='item-preview-image']) {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
</style>

# FileUpload

A component for selecting and uploading files from the user's device.

## Usage

```svelte
<script lang="ts">
  import {FileUpload} from 'ui-ingredients';
  import {XCloseIcon} from '$lib/icons';
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
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
          <FileUpload.ItemPreview>
            <FileUpload.ItemPreviewImage />
          </FileUpload.ItemPreview>
          <FileUpload.ItemDeleteTrigger>
            <XCloseIcon />
          </FileUpload.ItemDeleteTrigger>
        </FileUpload.Item>
      {/each}
    </FileUpload.ItemGroup>
  {/snippet}
</FileUpload.Root>
```

### Using the `Field` component

```svelte
<script lang="ts">
  import {FileUpload, Field} from 'ui-ingredients';
  import {XCloseIcon} from '$lib/icons';
</script>

<Field.Root>
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
            <FileUpload.ItemName />
            <FileUpload.ItemSizeText />
            <FileUpload.ItemPreview>
              <FileUpload.ItemPreviewImage />
            </FileUpload.ItemPreview>
            <FileUpload.ItemDeleteTrigger>
              <XCloseIcon />
            </FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        {/each}
      </FileUpload.ItemGroup>
    {/snippet}
  </FileUpload.Root>

  <Field.HelperText>This is a helper text</Field.HelperText>
  <Field.ErrorText>This is an error text</Field.ErrorText>
</Field.Root>
```

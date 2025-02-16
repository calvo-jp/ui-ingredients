<script lang="ts">
  import Button from '$lib/components/ui/button.svelte';
  import {XCloseIcon} from '@untitled-theme/icons-svelte';
  import {Drawer, Portal} from 'ui-ingredients';
</script>

<Drawer.Root lazyMount>
  <Drawer.Trigger class="mx-auto w-auto">
    {#snippet asChild(attrs)}
      <Button variant="outline" {...attrs}>Open drawer</Button>
    {/snippet}
  </Drawer.Trigger>

  <Portal>
    <Drawer.Backdrop
      class="ui-open:animate-fade-in ui-closed:animate-fade-out fixed inset-0 bg-white/50 backdrop-blur dark:bg-black/50"
    />

    <Drawer.Positioner>
      <Drawer.Content
        class="ui-open:animate-slide-in-right ui-closed:animate-slide-out-right fixed right-0 top-0 flex h-dvh w-full flex-col border-l border-neutral-200 bg-white lg:w-[24rem] dark:border-neutral-800 dark:bg-neutral-900"
      >
        <Drawer.Header
          class="flex items-start border-b border-neutral-200 p-4 dark:border-neutral-800"
        >
          <div class="grow">
            <Drawer.Title class="text-lg font-semibold leading-normal">
              Title
            </Drawer.Title>
            <Drawer.Description
              class="leading-none text-neutral-600 dark:text-neutral-400"
            >
              Description
            </Drawer.Description>
          </div>

          <Drawer.CloseTrigger>
            <XCloseIcon />
          </Drawer.CloseTrigger>
        </Drawer.Header>
        <Drawer.Body class="grow space-y-3 p-4 leading-tight">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            delectus, excepturi est inventore magnam at id tempora doloremque
            perferendis odit tenetur recusandae cumque nihil!
          </div>
        </Drawer.Body>
        <Drawer.Footer
          class="flex gap-3 border-t border-neutral-200 p-4 dark:border-neutral-800"
        >
          <Drawer.CloseTrigger>
            {#snippet asChild(attrs)}
              <Button variant="outline" fullWidth {...attrs}>Close</Button>
            {/snippet}
          </Drawer.CloseTrigger>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Positioner>
  </Portal>
</Drawer.Root>

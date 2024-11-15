<script lang="ts">
  import {Button} from '$lib/ui';
  import {XCloseIcon} from '@untitled-theme/icons-svelte';
  import {twMerge} from 'tailwind-merge';
  import {Drawer, Portal} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <Drawer.Root lazyMount>
    <Drawer.Trigger class="mx-auto w-auto">
      {#snippet asChild(attrs)}
        <Button {...attrs}>Open drawer</Button>
      {/snippet}
    </Drawer.Trigger>

    <Portal>
      <Drawer.Backdrop
        class={twMerge(
          'z-overlay',
          'fixed',
          'inset-0',
          'bg-black/75',
          'backdrop-blur-sm',
          'data-open:animate-fade-in',
          'data-closed:animate-fade-out',
        )}
      />

      <Drawer.Positioner>
        <Drawer.Content
          class={twMerge(
            'z-modal',
            'fixed',
            'flex',
            'flex-col',
            'h-dvh',
            'w-full',
            'top-0',
            'right-0',
            'bg-neutral-900',
            'border-l',
            'border-neutral-800',
            'lg:w-[24rem]',
            'data-open:animate-slide-in-right',
            'data-closed:animate-slide-out-right',
          )}
        >
          <Drawer.Header
            class="flex items-start border-b border-neutral-800 p-4"
          >
            <div class="grow">
              <Drawer.Title class="text-lg font-semibold leading-normal">
                Title
              </Drawer.Title>
              <Drawer.Description class="leading-none text-neutral-400">
                Description
              </Drawer.Description>
            </div>

            <Drawer.CloseTrigger>
              <XCloseIcon />
            </Drawer.CloseTrigger>
          </Drawer.Header>
          <Drawer.Body class="grow space-y-3 p-4 leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            delectus, excepturi est inventore magnam at id tempora doloremque
            perferendis odit tenetur recusandae cumque nihil!
          </Drawer.Body>
          <Drawer.Footer class="flex gap-3 border-t border-neutral-800 p-4">
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
</Container>

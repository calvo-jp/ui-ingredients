<script lang="ts">
  import '../app.css';

  import {page} from '$app/stores';
  import {
    Dialog,
    EnvironmentProvider,
    LocaleProvider,
    Portal,
    Toast,
    Toaster,
  } from '$lib/index.js';
  import {ChevronLeftIcon, Menu05Icon} from '@untitled-theme/icons-svelte';
  import {cx, useToaster} from './shared/index.js';

  let {children} = $props();

  let toaster = useToaster();

  interface Item {
    path: string;
    label: string;
  }

  let items: Item[] = [
    {
      label: 'Accordion',
      path: '/accordion',
    },
    {
      label: 'Avatar',
      path: '/avatar',
    },
    {
      label: 'Checkbox',
      path: '/checkbox',
    },
    {
      label: 'Dialog',
      path: '/dialog',
    },
    {
      label: 'Collapsible',
      path: '/collapsible',
    },
    {
      label: 'Combobox',
      path: '/combobox',
    },
    {
      label: 'Switch',
      path: '/switch',
    },
    {
      label: 'Tooltip',
      path: '/tooltip',
    },
    {
      label: 'Pin Input',
      path: '/pin-input',
    },
    {
      label: 'Number Input',
      path: '/number-input',
    },
    {
      label: 'Carousel',
      path: '/carousel',
    },
    {
      label: 'Clipboard',
      path: '/clipboard',
    },
    {
      label: 'Toggle Group',
      path: '/toggle-group',
    },
    {
      label: 'Tabs',
      path: '/tabs',
    },
    {
      label: 'Popover',
      path: '/popover',
    },
    {
      label: 'Pagination',
      path: '/pagination',
    },
    {
      label: 'Hover Card',
      path: '/hover-card',
    },
    {
      label: 'Progress',
      path: '/progress',
    },
    {
      label: 'Slider',
      path: '/slider',
    },
    {
      label: 'Toast',
      path: '/toast',
    },
    {
      label: 'Select',
      path: '/select',
    },
    {
      label: 'Radio Group',
      path: '/radio-group',
    },
    {
      label: 'Steps',
      path: '/steps',
    },
    {
      label: 'Timer',
      path: '/timer',
    },
    {
      label: 'Tags Input',
      path: '/tags-input',
    },
    {
      label: 'Editable',
      path: '/editable',
    },
    {
      label: 'Rating Group',
      path: '/rating-group',
    },
    {
      label: 'Segment Group',
      path: '/segment-group',
    },
    {
      label: 'Menu',
      path: '/menu',
    },
    {
      label: 'Context Menu',
      path: '/menu/context',
    },
    {
      label: 'Nested Menu',
      path: '/menu/nested',
    },
    {
      label: 'Date Picker',
      path: '/date-picker',
    },
    {
      label: 'File Upload',
      path: '/file-upload',
    },
    {
      label: 'Signature Pad',
      path: '/signature-pad',
    },
    {
      label: 'Tree View',
      path: '/tree-view',
    },
    {
      label: 'QR Code',
      path: '/qr-code',
    },
    {
      label: 'Time Picker',
      path: '/time-picker',
    },
    {
      label: 'Splitter',
      path: '/splitter',
    },
    {
      label: 'Range Date Picker',
      path: '/date-picker/range',
    },
    {
      label: 'Field',
      path: '/field',
    },
  ].toSorted((i, j) => i.label.localeCompare(j.label));

  let currentItem = $derived(
    items.find((item) => item.path === $page.url.pathname),
  );
</script>

<svelte:head>
  <title>{currentItem?.label}</title>
</svelte:head>

<EnvironmentProvider>
  <LocaleProvider locale="en-US">
    <div class="lg:flex lg:items-start">
      <nav
        class={cx(
          'hidden',
          'lg:block',
          'sticky',
          'top-0',
          'h-dvh',
          'w-[20rem]',
          'p-12',
          'shrink-0',
          'border-r',
          'overflow-y-auto',
        )}
      >
        <ul class="space-y-0.5">
          {#each items as item}
            <li class="block w-full">
              <a
                href={item.path}
                class="aria-page:text-accent aria-page:font-semibold group flex items-center font-medium text-neutral-400/90 transition-colors duration-200"
                aria-current={item.path === currentItem?.path
                  ? 'page'
                  : undefined}
              >
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>

      <header
        class="bg sticky top-0 flex h-16 items-center border-b px-4 lg:hidden"
      >
        <Dialog.Root>
          <div class="flex items-center gap-3">
            <Dialog.Trigger
              class="flex size-10 items-center justify-center rounded border"
            >
              <Menu05Icon />
            </Dialog.Trigger>
            <span class="font-mono text-lg font-semibold">
              {currentItem?.label}
            </span>
          </div>

          <Portal>
            <Dialog.Positioner>
              <Dialog.Backdrop
                class="data-open:animate-fade-in data-closed:animate-fade-out fixed inset-0 top-0 bg-black/25 backdrop-blur-sm"
              />
              <Dialog.Content
                class="data-open:animate-slide-in-left data-closed:animate-slide-out-left bg fixed bottom-0 left-0 top-0 w-64 border-r"
              >
                <div class="flex h-16 items-center justify-end border-b px-4">
                  <Dialog.CloseTrigger
                    class="flex size-10 items-center justify-center rounded border"
                  >
                    <ChevronLeftIcon />
                  </Dialog.CloseTrigger>
                </div>

                <nav
                  class="h-[calc(100vh-theme(spacing.16))] overflow-y-auto p-4"
                >
                  <ul class="space-y-0.5">
                    {#each items as item}
                      <li class="block w-full">
                        <a
                          href={item.path}
                          class="aria-page:text-accent aria-page:font-bold group flex items-center font-medium text-neutral-400/90 transition-colors duration-200"
                          aria-current={item.path === currentItem?.path
                            ? 'page'
                            : undefined}
                        >
                          {item.label}
                        </a>
                      </li>
                    {/each}
                  </ul>
                </nav>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </header>

      <main class="grow p-4 lg:p-12">
        {@render children()}
      </main>
    </div>

    <Toaster {toaster}>
      {#snippet children()}
        <Toast.Root
          class={cx(
            'p-4',
            'border',
            'rounded',
            'bg-light',
            'duration-300',
            'transition-all',
            'min-w-[90vw]',
            'lg:min-w-[20rem]',
            'h-[var(--height)]',
            'z-[var(--z-index)]',
            '[translate:var(--x)_var(--y)_0]',
            'opacity-[var(--opacity)]',
            'scale-[var(--scale)]',
          )}
        >
          <Toast.Title class="font-medium" />
          <Toast.Description class="text-muted text-sm" />
          <Toast.CloseTrigger
            class="border-lighter mt-3 block h-12 w-full rounded border"
          >
            Close
          </Toast.CloseTrigger>
        </Toast.Root>
      {/snippet}
    </Toaster>
  </LocaleProvider>
</EnvironmentProvider>

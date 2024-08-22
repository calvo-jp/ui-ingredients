<script lang="ts">
  import {page} from '$app/stores';
  import {
    Dialog,
    EnvironmentProvider,
    LocaleProvider,
    Portal,
  } from '$lib/index.js';
  import '../app.css';
  import {cx} from './shared/utils.js';

  let {children} = $props();

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
      label: 'PinInput',
      path: '/pin-input',
    },
    {
      label: 'NumberInput',
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
      label: 'ToggleGroup',
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
      label: 'HoverCard',
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
      label: 'Toaster',
      path: '/toaster',
    },
    {
      label: 'Select',
      path: '/select',
    },
    {
      label: 'RadioGroup',
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
      label: 'TagsInput',
      path: '/tags-input',
    },
    {
      label: 'Editable',
      path: '/editable',
    },
    {
      label: 'RatingGroup',
      path: '/rating-group',
    },
    {
      label: 'SegmentGroup',
      path: '/segment-group',
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
          'border-neutral-800',
        )}
      >
        <ul>
          {#each items as item}
            <li class="block w-full">
              <a
                href={item.path}
                class="aria-page:text-indigo-400 aria-page:font-medium group flex items-center transition-colors duration-200"
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
        class="sticky top-0 flex h-16 items-center border-b border-neutral-800 bg-neutral-900 px-4 lg:hidden"
      >
        <Dialog.Root>
          <div class="flex items-center gap-3">
            <Dialog.Trigger
              class="flex size-9 items-center justify-center border border-neutral-800"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 8.5H21M3 15.5H21"></path>
              </svg>
            </Dialog.Trigger>
            <span class="block bg-neutral-800/50 px-2.5 py-0.5 font-mono">
              {currentItem?.label}
            </span>
          </div>

          <Portal>
            <Dialog.Positioner>
              <Dialog.Backdrop
                class="data-open:animate-fade-in data-closed:animate-fade-out fixed inset-0 top-0 bg-black/25 backdrop-blur-sm"
              />
              <Dialog.Content
                class="data-open:animate-slide-in-left data-closed:animate-slide-out-left fixed bottom-0 left-0 top-0 w-64 border-r bg-neutral-800"
              >
                <div class="flex h-16 items-center justify-end border-b px-4">
                  <Dialog.CloseTrigger
                    class="flex size-9 items-center justify-center border border-neutral-700"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M15 18L9 12L15 6"></path>
                    </svg>
                  </Dialog.CloseTrigger>
                </div>

                <nav
                  class="h-[calc(100vh-theme(spacing.16))] overflow-y-auto p-4"
                >
                  <ul>
                    {#each items as item}
                      <li class="block w-full">
                        <a
                          href={item.path}
                          class="aria-page:text-indigo-400 aria-page:font-medium group flex items-center transition-colors duration-200"
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
  </LocaleProvider>
</EnvironmentProvider>

<script lang="ts">
  import '../app.css';
  import {page} from './shared/stores.js';

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
  ].toSorted((i, j) => i.label.localeCompare(j.label));

  let currentItem = $derived(items.find((item) => item.path === page.current.url.pathname));
</script>

<svelte:head>
  <title>{currentItem?.label}</title>
</svelte:head>

<div class="flex items-start">
  <nav class="p-12 shrink-0 sticky top-0 h-dvh w-[20rem] border-r border-neutral-800">
    <ul>
      {#each items as item}
        <li class="block w-full">
          <a
            href={item.path}
            class="group flex items-center transition-colors duration-200 aria-page:text-indigo-400 aria-page:font-medium"
            aria-current={item.path === currentItem?.path ? 'page' : undefined}
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <div class="p-12 grow">
    {@render children()}
  </div>
</div>

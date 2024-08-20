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
  ].toSorted((i, j) => i.label.localeCompare(j.label));

  let currentItem = $derived(
    items.find((item) => item.path === page.current.url.pathname),
  );
</script>

<svelte:head>
  <title>{currentItem?.label}</title>
</svelte:head>

<div class="flex items-start">
  <nav
    class="sticky top-0 h-dvh w-[20rem] shrink-0 border-r border-neutral-800 p-12"
  >
    <ul>
      {#each items as item}
        <li class="block w-full">
          <a
            href={item.path}
            class="aria-page:text-indigo-400 aria-page:font-medium group flex items-center transition-colors duration-200"
            aria-current={item.path === currentItem?.path ? 'page' : undefined}
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <div class="grow p-12">
    {@render children()}
  </div>
</div>

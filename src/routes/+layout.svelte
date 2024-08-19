<script lang="ts">
  import '../app.css';
  import {page} from './shared/stores.js';

  let {children} = $props();

  interface Item {
    label: string;
    path: string;
    new?: boolean;
    beta?: boolean;
    comingSoon?: boolean;
  }

  let items: Item[] = [
    {label: 'Accordion', path: '/accordion'},
    {label: 'Avatar', path: '/avatar'},
    {label: 'Checkbox', path: '/checkbox'},
    {label: 'Dialog', path: '/dialog'},
    {label: 'Collapsible', path: '/collapsible'},
    {label: 'Combobox', path: '/combobox'},
    {label: 'Switch', path: '/switch'},
    {label: 'Tooltip', path: '/tooltip'},
    {label: 'PinInput', path: '/pin-input'},
    {label: 'NumberInput', path: '/number-input'},
    {label: 'Carousel', path: '/carousel', beta: true},
    {label: 'Clipboard', path: '/clipboard'},
    {label: 'ToggleGroup', path: '/toggle-group'},
    {label: 'Tabs', path: '/tabs'},
    {label: 'Popover', path: '/popover'},
    {label: 'Pagination', path: '/pagination'},
    {label: 'HoverCard', path: '/hover-card'},
    {label: 'Progress', path: '/progress'},
    {label: 'Slider', path: '/slider'},
    {label: 'Toaster', path: '/toaster'},
    {label: 'Select', path: '/select'},
    {label: 'RadioGroup', path: '/radio-group'},
    {label: 'DatePicker', path: '/date-picker', comingSoon: true},
    {label: 'ColorPicker', path: '/color-picker', comingSoon: true},
    {label: 'FileUpload', path: '/file-upload', comingSoon: true},
    {label: 'Editable', path: '/editable', comingSoon: true},
    {label: 'Menu', path: '/menu', comingSoon: true},
    {label: 'QRCode', path: '/qr-code', comingSoon: true, beta: true},
    {label: 'RatingGroup', path: '/rating-group', comingSoon: true},
    {label: 'SignaturePad', path: '/signature-pad', comingSoon: true},
    {label: 'Splitter', path: '/splitter', comingSoon: true},
    {label: 'Steps', path: '/steps', comingSoon: true},
    {label: 'TagsInput', path: '/tags-input', comingSoon: true},
    {label: 'Timer', path: '/timer', comingSoon: true, beta: true},
  ]
    .toSorted((i, j) => i.label.localeCompare(j.label))
    .filter((i) => !i.comingSoon);

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
            class="group flex items-center transition-colors duration-200"
            aria-current={item.path === currentItem?.path ? 'page' : undefined}
          >
            <span class="grow group-aria-page:text-indigo-400 group-aria-page:font-medium">
              {item.label}
            </span>

            {#if item.beta}
              <span
                class="block px-1 py-0.5 border border-rose-700 bg-rose-800/50 text-rose-300 text-xs rounded-sm uppercase font-mono font-semibold"
              >
                Beta
              </span>
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <div class="p-12 grow">
    {@render children()}
  </div>
</div>

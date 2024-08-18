<script>
  import {page} from '$app/stores';
  import '../app.css';

  let {children} = $props();

  let items = [
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
    {label: 'Carousel', path: '/carousel'},
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
  ].sort((i, j) => i.label.localeCompare(j.label));
</script>

<div class="flex items-start">
  <nav class="p-12 shrink-0 sticky top-0 h-dvh w-[16rem] border-r">
    <ul>
      {#each items as item}
        <li class="block w-full">
          <a
            href={item.path}
            class="aria-page:text-sky-700 block transition-colors duration-200"
            aria-current={item.path === $page.url.pathname ? 'page' : undefined}
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

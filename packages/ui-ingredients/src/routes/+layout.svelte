<script lang="ts">
  import {
    EnvironmentProvider,
    LocaleProvider,
    Toast,
    Toaster,
  } from '$lib/index.js';
  import {toaster} from './toaster.js';

  let {children} = $props();

  let links: {
    path: string;
    label: string;
  }[] = [
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
    {
      label: 'Time Picker',
      path: '/time-picker',
    },
    {
      label: 'Color Picker',
      path: '/color-picker',
    },
    {
      label: 'Color Picker',
      path: '/color-picker',
    },
    {
      label: 'Presence',
      path: '/presence',
    },
    {
      label: 'Highlight',
      path: '/highlight',
    },
    {
      label: 'Time Picker',
      path: '/time-picker',
    },
    {
      label: 'Tour',
      path: '/tour',
    },
    {
      label: 'Toggle',
      path: '/toggle',
    },
    {
      label: 'Alert Dialog',
      path: '/alert-dialog',
    },
    {
      label: 'Breadcrumbs',
      path: '/breadcrumbs',
    },
    {
      label: 'Drawer',
      path: '/drawer',
    },
    {
      label: 'Alert',
      path: '/alert',
    },
    {
      label: 'Angle Slider',
      path: '/angle-slider',
    },
  ]
    .filter((o, i, arr) => arr.findIndex((t) => t.label === o.label) === i)
    .toSorted((i, j) => i.label.localeCompare(j.label));
</script>

<EnvironmentProvider>
  <LocaleProvider locale="en-US">
    <div style="display:flex;gap:1.5rem;padding:2rem;">
      <header style="width:200px;flex-shrink:0;">
        <nav>
          <ul>
            {#each links as link}
              <li>
                <a href={link.path}>
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </nav>
      </header>

      <main>
        {@render children()}
      </main>
    </div>

    <Toaster {toaster}>
      <Toast.Root>
        <Toast.Title />
        <Toast.Description />
        <Toast.CloseTrigger>Close</Toast.CloseTrigger>
      </Toast.Root>
    </Toaster>
  </LocaleProvider>
</EnvironmentProvider>

<style>
  :global(*),
  :global(*::before),
  :global(*::after) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(ul),
  :global(ol) {
    list-style: none;
  }

  :global(a) {
    text-decoration: none;
    color: inherit;
  }

  :global(html) {
    font-size: 16px;
    line-height: 1.25;
  }

  :global(body) {
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
    color: black;
    background: white;
  }

  :global(button) {
    cursor: pointer;
  }

  :global(input),
  :global(select),
  :global(textarea),
  :global(button) {
    font: inherit;
    color: inherit;
    background: transparent;
    border: 1px solid;
    padding: 0.5rem 0.75rem;
  }

  :global([hidden]) {
    display: none !important;
  }

  @media (prefers-color-scheme: dark) {
    :global(body) {
      background: black;
      color: white;
    }
  }
</style>

<script lang="ts">
  import {page} from '$app/state';
  import {
    EnvironmentProvider,
    LocaleProvider,
    Toast,
    Toaster,
  } from '$lib/index.js';
  import '../app.css';
  import {toaster} from './toaster.svelte.js';

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
      label: 'Checkbox Menu',
      path: '/menu/checkbox',
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

  function sx(...styles: (string | null | boolean | undefined)[]) {
    return styles
      .filter(Boolean)
      .join(';')
      .replace(/\;{2,}/g, ';');
  }
</script>

<EnvironmentProvider>
  <LocaleProvider locale="en-US">
    <div style="min-height:100dvh;display:flex;align-items:start;">
      <div style="width:250px;flex-shrink:0;"></div>
      <header
        style="height:100dvh;width:250px;padding:2rem;overflow-y:auto;position:fixed;top:0;left:0;"
      >
        <nav>
          <ul>
            {#each links as link}
              {@const current = page.url.pathname === link.path}

              <li>
                <a
                  href={link.path}
                  style={sx(
                    'display:block;width:100%;transition:color 250ms;',
                    current && 'color:var(--color-accent);',
                  )}
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </nav>
      </header>

      <main style="padding:2rem;flex-grow:1;">
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

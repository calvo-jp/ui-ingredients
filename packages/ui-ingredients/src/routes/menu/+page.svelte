<script lang="ts">
  import {Menu} from '$lib/index.js';
  import {CheckIcon, ChevronDownIcon} from '@untitled-theme/icons-svelte';
  import {Button} from '../shared/index.js';

  let items = [
    /**/
    'React',
    'Svelte',
    'Solid',
    'Vue',
    'Angular',
  ];

  let selected: string[] = $state([]);
</script>

<div class="flex gap-2">
  <Menu.Root>
    <Menu.Trigger>
      {#snippet asChild(mergedProps)}
        <Button {...mergedProps}>
          <span>Basic</span>
          <Menu.Indicator class="data-open:rotate-180 transition-transform duration-200">
            <ChevronDownIcon />
          </Menu.Indicator>
        </Button>
      {/snippet}
    </Menu.Trigger>

    <Menu.Positioner>
      <Menu.Content
        class="data-open:animate-fade-in data-closed:animate-fade-out bg-light rounded border p-2"
      >
        {#each items as item}
          <Menu.Item
            class="data-disabled:cursor-not-allowed data-disabled:opacity-75 data-highlighted:bg-lighter/50 flex w-32 cursor-default items-center rounded px-2.5 py-1"
            value={item}
            disabled={item === 'Angular'}
          >
            {item}
          </Menu.Item>
        {/each}
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>

  <Menu.Root>
    <Menu.Trigger>
      {#snippet asChild(mergedProps)}
        <Button {...mergedProps}>
          <span>Checkbox</span>
          <Menu.Indicator class="data-open:rotate-180 transition-transform duration-200">
            <ChevronDownIcon />
          </Menu.Indicator>
        </Button>
      {/snippet}
    </Menu.Trigger>

    <Menu.Positioner>
      <Menu.Content
        class="data-open:animate-fade-in data-closed:animate-fade-out bg-light rounded border p-2"
      >
        {#each items as item}
          <Menu.OptionItem
            class="data-disabled:cursor-not-allowed data-disabled:opacity-75 data-highlighted:bg-lighter/50 group flex w-32 cursor-default items-center gap-2 rounded px-2.5 py-1"
            type="checkbox"
            value={item}
            valueText={item}
            closeOnSelect={false}
            checked={selected.includes(item)}
            onCheckedChange={(checked) => {
              selected = checked ? [...selected, item] : selected.filter((i) => i !== item);
            }}
          >
            <div
              class="group-data-checked:border-accent group-data-checked:bg-accent border-lighter flex size-4 items-center justify-center rounded border-2"
            >
              <Menu.OptionItemIndicator>
                <CheckIcon class="size-3 text-white" />
              </Menu.OptionItemIndicator>
            </div>
            <Menu.OptionItemText />
          </Menu.OptionItem>
        {/each}
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
</div>

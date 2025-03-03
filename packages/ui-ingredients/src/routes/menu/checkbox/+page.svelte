<script lang="ts">
  import {Menu} from '$lib/index.js';
  import CheckIcon from '../../check-icon.svelte';
  import ChevronDownIcon from '../../chevron-down-icon.svelte';

  let items = [
    {value: 'Item 1'},
    {value: 'Item 2'},
    {value: 'Item 3'},
    {value: 'Item 4'},
    {value: 'Item 5', disabled: true},
  ];

  let selected: string[] = $state([]);

  $inspect({selected});
</script>

<Menu.Root lazyMount>
  <Menu.Trigger>
    Open
    <Menu.Indicator>
      <ChevronDownIcon style="width:20px;height:20px;" />
    </Menu.Indicator>
  </Menu.Trigger>

  <Menu.Positioner>
    <Menu.Content>
      {#each items as item (item.value)}
        <Menu.OptionItem
          type="checkbox"
          value={item.value}
          valueText={item.value}
          disabled={item.disabled}
          closeOnSelect={false}
          checked={selected.includes(item.value)}
          onCheckedChange={(checked) => {
            selected = checked
              ? [...selected, item.value]
              : [...selected].filter((value) => value !== item.value);
          }}
        >
          <div
            style="display:flex;align-items:center;justify-content:center;width:18px;height:18px;border:1px solid var(--border-default);"
          >
            <Menu.OptionItemIndicator>
              <CheckIcon
                style="width:16px;height:16px;color:var(--color-success);"
              />
            </Menu.OptionItemIndicator>
          </div>
          <Menu.OptionItemText />
        </Menu.OptionItem>
      {/each}
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>

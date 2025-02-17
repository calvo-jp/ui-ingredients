<script lang="ts">
  import {Menu} from '$lib/index.js';
</script>

<Menu.Root>
  <Menu.Trigger>Click me</Menu.Trigger>
  <Menu.Positioner>
    <Menu.Content>
      <Menu.Item value="1">One</Menu.Item>
      <Menu.Item value="2">Two</Menu.Item>
      <Menu.Root
        positioning={{
          placement: 'right',
        }}
      >
        <Menu.TriggerItem>Three</Menu.TriggerItem>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="4">Four</Menu.Item>
            <Menu.Item value="5">Five</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>

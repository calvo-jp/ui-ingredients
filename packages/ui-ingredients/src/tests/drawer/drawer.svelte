<script lang="ts">
  import {Drawer} from '$lib/index.js';
</script>

<Drawer.Root>
  <Drawer.Trigger>Trigger</Drawer.Trigger>
  <Drawer.Backdrop />
  <Drawer.Positioner>
    <Drawer.Content>
      <Drawer.Header>
        <Drawer.Title>Title</Drawer.Title>
        <Drawer.Description>Description</Drawer.Description>
      </Drawer.Header>
      <Drawer.Body></Drawer.Body>
      <Drawer.Footer>
        <Drawer.CloseTrigger>Close</Drawer.CloseTrigger>
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer.Positioner>
</Drawer.Root>

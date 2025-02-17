<script lang="ts">
  import {Drawer} from '$lib/index.js';

  let open = $state(false);
</script>

<Drawer.Root
  {open}
  onOpenChange={(detail) => {
    open = detail.open;
  }}
  lazyMount
>
  <Drawer.Trigger>Open</Drawer.Trigger>
  <Drawer.Backdrop />
  <Drawer.Positioner>
    <Drawer.Content>
      <Drawer.Header>
        <Drawer.Title>Title</Drawer.Title>
        <Drawer.Description>Description</Drawer.Description>
      </Drawer.Header>
      <Drawer.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        delectus, excepturi est inventore magnam at id tempora doloremque
        perferendis odit tenetur recusandae cumque nihil!
      </Drawer.Body>
      <Drawer.Footer>
        <Drawer.CloseTrigger>Close</Drawer.CloseTrigger>
      </Drawer.Footer>
    </Drawer.Content>
  </Drawer.Positioner>
</Drawer.Root>

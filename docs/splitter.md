# Splitter

## Usage

```svelte
<script>
  import {Splitter} from 'ui-ingredients';
</script>

<Splitter.Root
  size={[
    {id: 'a', size: 50, minSize: 25},
    {id: 'b', size: 50, minSize: 25},
  ]}
>
  <Splitter.Panel id="a">A</Splitter.Panel>
  <Splitter.ResizeTrigger id="a:b" />
  <Splitter.Panel id="b">B</Splitter.Panel>
</Splitter.Root>
```
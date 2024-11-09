<script lang="ts">
  import {TreeView} from '$lib/index.js';

  let collection = TreeView.collection({
    nodeToValue: (node) => node.value,
    nodeToString: (node) => node.label,
    rootNode: {
      value: 'ROOT',
      label: '',
      children: [
        {
          value: 'node_modules',
          label: 'node_modules',
          children: [
            {
              value: 'node_modules/zag-js',
              label: 'zag-js',
            },
            {
              value: 'node_modules/pandacss',
              label: 'panda',
            },
            {
              value: 'node_modules/@types',
              label: '@types',
              children: [
                {
                  value: 'node_modules/@types/react',
                  label: 'react',
                },
                {
                  value: 'node_modules/@types/react-dom',
                  label: 'react-dom',
                },
              ],
            },
          ],
        },
        {
          value: 'src',
          label: 'src',
          children: [
            {
              value: 'src/app.tsx',
              label: 'app.tsx',
            },
            {
              value: 'src/index.ts',
              label: 'index.ts',
            },
          ],
        },
        {
          value: 'panda.config',
          label: 'panda.config.ts',
        },
        {
          value: 'package.json',
          label: 'package.json',
        },
        {
          value: 'renovate.json',
          label: 'renovate.json',
        },
        {
          value: 'readme.md',
          label: 'README.md',
        },
      ],
    },
  });
</script>

<TreeView.Root {collection}>
  <TreeView.Label class="mb-2 block text-neutral-600">Explorer</TreeView.Label>
</TreeView.Root>

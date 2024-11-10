<script lang="ts">
  import {type NodeProps, TreeView} from '$lib/index.js';
  import {
    CheckSquareIcon,
    ChevronRightIcon,
    File02Icon,
    FolderIcon,
  } from '@untitled-theme/icons-svelte';

  interface Node {
    value: string;
    label: string;
    children?: Node[];
  }

  let collection = TreeView.collection<Node>({
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

<TreeView.Root {collection} class="max-w-[16rem]">
  <TreeView.Label class="mb-2 block text-neutral-600">Explorer</TreeView.Label>
  <TreeView.Tree class="space-y-1">
    {#each collection.rootNode.children ?? [] as node, index}
      {@render TreeNode({node, indexPath: [index]})}
    {/each}
  </TreeView.Tree>
</TreeView.Root>

{#snippet TreeNode(props: NodeProps<Node>)}
  {#if props.node.children}
    <TreeView.Branch node={props.node} indexPath={props.indexPath}>
      <TreeView.BranchControl class="flex items-center gap-1">
        <TreeView.BranchText class="flex grow items-center gap-1">
          <FolderIcon class="size-5" />
          <span>{props.node.label}</span>
        </TreeView.BranchText>
        <TreeView.BranchIndicator
          class="data-open:rotate-90 transition-transform duration-150"
        >
          <ChevronRightIcon class="size-4" />
        </TreeView.BranchIndicator>
      </TreeView.BranchControl>
      <TreeView.BranchContent class="flex p-1">
        <TreeView.BranchIndentGuide class="w-3 border-l" />

        <div class="grow space-y-1">
          {#each props.node.children as node, index}
            {@render TreeNode({node, indexPath: [...props.indexPath, index]})}
          {/each}
        </div>
      </TreeView.BranchContent>
    </TreeView.Branch>
  {:else}
    <TreeView.Item
      node={props.node}
      indexPath={props.indexPath}
      class="flex items-center gap-1"
    >
      <TreeView.ItemIndicator>
        <CheckSquareIcon class="size-5" />
      </TreeView.ItemIndicator>
      <TreeView.ItemText class="flex items-center gap-1">
        <File02Icon class="size-5" />
        <span>{props.node.label}</span>
      </TreeView.ItemText>
    </TreeView.Item>
  {/if}
{/snippet}

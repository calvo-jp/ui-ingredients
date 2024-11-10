<script lang="ts">
  import {type NodeProps, TreeView} from '$lib/index.js';
  import {
    CheckSquareIcon,
    ChevronRightIcon,
    File01Icon,
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

<TreeView.Root {collection}>
  <TreeView.Label class="mb-2 block text-neutral-600">Explorer</TreeView.Label>
  <TreeView.Tree>
    {#each collection.rootNode.children ?? [] as node, index}
      {@render TreeNode({node, indexPath: [index]})}
    {/each}
  </TreeView.Tree>
</TreeView.Root>

{#snippet TreeNode(props: NodeProps<Node>)}
  {#if props.node.children}
    <TreeView.Branch node={props.node} indexPath={props.indexPath}>
      <TreeView.BranchControl>
        <TreeView.BranchText>
          <FolderIcon />
          <span>{props.node.label}</span>
        </TreeView.BranchText>
        <TreeView.BranchIndicator>
          <ChevronRightIcon />
        </TreeView.BranchIndicator>
      </TreeView.BranchControl>
      <TreeView.BranchContent>
        <TreeView.BranchIndentGuide />

        {#each props.node.children as node, index}
          {@render TreeNode({node, indexPath: [...props.indexPath, index]})}
        {/each}
      </TreeView.BranchContent>
    </TreeView.Branch>
  {:else}
    <TreeView.Item node={props.node} indexPath={props.indexPath}>
      <TreeView.ItemIndicator>
        <CheckSquareIcon />
      </TreeView.ItemIndicator>
      <TreeView.ItemText>
        <File01Icon />
        <span>{props.node.label}</span>
      </TreeView.ItemText>
    </TreeView.Item>
  {/if}
{/snippet}

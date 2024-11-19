<script lang="ts">
  import {
    CheckSquareIcon,
    ChevronRightIcon,
    File02Icon,
    FolderIcon,
  } from '@untitled-theme/icons-svelte';
  import {type NodeProps, TreeView} from 'ui-ingredients';
  import Container from './container.svelte';

  interface Node {
    value: string;
    label: string;
    children?: Node[];
  }

  let collection = TreeView.collection<Node>({
    nodeToValue: (node) => node.value,
    nodeToString: (node) => node.label,
    rootNode: {
      value: 'root',
      label: '',
      children: [
        {
          value: 'node_modules',
          label: 'node_modules',
          children: [
            {
              value: 'node_modules/svelte',
              label: 'svelte',
            },
            {
              value: 'node_modules/ui-ingredients',
              label: 'ui-ingredients',
            },
          ],
        },
        {
          value: 'src',
          label: 'src',
          children: [
            {
              value: 'src/(home)',
              label: '(home)',
              children: [
                {
                  value: 'src/(home)/+page.svelte',
                  label: '+page.svelte',
                },
                {
                  value: 'src/(home)/hero.svelte',
                  label: 'hero.svelte',
                },
              ],
            },
            {
              value: 'src/+layout.svelte',
              label: '+layout.svelte',
            },
          ],
        },
        {
          value: 'vite.config.ts',
          label: 'vite.config.ts',
        },
        {
          value: 'svelte.config.js',
          label: 'svelte.config.js',
        },
        {
          value: 'package.json',
          label: 'package.json',
        },
      ],
    },
  });
</script>

<Container>
  <TreeView.Root {collection} class="max-w-[16rem]">
    <TreeView.Label
      class="mb-2 block font-mono text-sm font-semibold uppercase text-neutral-400 dark:text-neutral-500"
    >
      Explorer
    </TreeView.Label>
    <TreeView.Tree class="space-y-1">
      {#each collection.rootNode.children ?? [] as node, index}
        {@render TreeNode({node, indexPath: [index]})}
      {/each}
    </TreeView.Tree>
  </TreeView.Root>
</Container>

{#snippet TreeNode(props: NodeProps<Node>)}
  {#if props.node.children}
    <TreeView.Branch node={props.node} indexPath={props.indexPath}>
      <TreeView.BranchControl class="flex items-center gap-1">
        <TreeView.BranchText class="flex grow select-none items-center gap-1">
          <FolderIcon class="size-5" />
          <span>{props.node.label}</span>
        </TreeView.BranchText>
        <TreeView.BranchIndicator
          class="transition-transform duration-150 data-open:rotate-90"
        >
          <ChevronRightIcon class="size-4 text-neutral-500" />
        </TreeView.BranchIndicator>
      </TreeView.BranchControl>
      <TreeView.BranchContent class="flex p-1">
        <TreeView.BranchIndentGuide
          class="w-3 border-l border-neutral-200 dark:border-neutral-800"
        />

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
      <TreeView.ItemText class="flex select-none items-center gap-1">
        <File02Icon class="size-5" />
        <span>{props.node.label}</span>
      </TreeView.ItemText>
    </TreeView.Item>
  {/if}
{/snippet}

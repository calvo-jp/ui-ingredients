<script lang="ts">
  import JavascriptIcon from '$lib/icons/javascript-icon.svelte';
  import NodeJsIcon from '$lib/icons/nodejs-icon.svelte';
  import SvelteIcon from '$lib/icons/svelte-icon.svelte';
  import TsconfigIcon from '$lib/icons/tsconfig-icon.svelte';
  import ViteIcon from '$lib/icons/vite-icon.svelte';
  import {ChevronRightIcon, FolderIcon} from '@untitled-theme/icons-svelte';
  import type {Component} from 'svelte';
  import {type NodeProps, TreeView} from 'ui-ingredients';

  interface Node {
    icon: Component;
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
      icon: FolderIcon,
      children: [
        {
          icon: FolderIcon,
          value: 'node_modules',
          label: 'node_modules',
          children: [
            {
              icon: FolderIcon,
              value: 'node_modules/svelte',
              label: 'svelte',
              children: [
                {
                  icon: FolderIcon,
                  value: 'node_modules/svelte/dist',
                  label: 'dist',
                  children: [
                    {
                      icon: JavascriptIcon,
                      value: 'node_modules/svelte/dist/index.js',
                      label: 'index.js',
                    },
                  ],
                },
                {
                  icon: NodeJsIcon,
                  value: 'node_modules/svelte/package.json',
                  label: 'package.json',
                },
              ],
            },
          ],
        },
        {
          icon: FolderIcon,
          value: 'src',
          label: 'src',
          children: [
            {
              icon: FolderIcon,
              value: 'src/(home)',
              label: '(home)',
              children: [
                {
                  icon: SvelteIcon,
                  value: 'src/(home)/+page.svelte',
                  label: '+page.svelte',
                },
                {
                  icon: SvelteIcon,
                  value: 'src/(home)/hero.svelte',
                  label: 'hero.svelte',
                },
              ],
            },
            {
              icon: SvelteIcon,
              value: 'src/+layout.svelte',
              label: '+layout.svelte',
            },
          ],
        },
        {
          icon: ViteIcon,
          value: 'vite.config.ts',
          label: 'vite.config.ts',
        },
        {
          icon: SvelteIcon,
          value: 'svelte.config.js',
          label: 'svelte.config.js',
        },
        {
          icon: TsconfigIcon,
          value: 'tsconfig.json',
          label: 'tsconfig.json',
        },
        {
          icon: NodeJsIcon,
          value: 'package.json',
          label: 'package.json',
        },
      ],
    },
  });
</script>

<TreeView.Root {collection} class="max-w-[16rem] font-mono">
  <TreeView.Label
    class="mb-2 block text-sm font-semibold uppercase text-neutral-400 dark:text-neutral-500"
  >
    Explorer
  </TreeView.Label>
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
        <TreeView.BranchText class="flex grow select-none items-center gap-1">
          <props.node.icon class="size-5" />
          <span>{props.node.label}</span>
        </TreeView.BranchText>
        <TreeView.BranchIndicator
          class="transition-transform duration-150 ui-open:rotate-90"
        >
          <ChevronRightIcon class="size-4 text-neutral-500" />
        </TreeView.BranchIndicator>
      </TreeView.BranchControl>
      <TreeView.BranchContent
        class="flex overflow-hidden p-1 pr-0 ui-open:animate-collapse-in ui-closed:animate-collapse-out"
      >
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
      <TreeView.ItemText class="flex select-none items-center gap-1">
        <props.node.icon class="size-5" />
        <span>{props.node.label}</span>
      </TreeView.ItemText>
    </TreeView.Item>
  {/if}
{/snippet}

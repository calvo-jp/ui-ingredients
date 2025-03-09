<script lang="ts">
  import {type NodeProps, TreeView} from '$lib/index.js';
  import type {Component} from 'svelte';
  import ChevronRightIcon from '../chevron-right-icon.svelte';
  import FileIcon from '../file-icon.svelte';
  import FolderIcon from '../folder-icon.svelte';

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
      icon: FileIcon,
      value: 'ROOT',
      label: '',
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
            },
            {
              icon: FolderIcon,
              value: 'node_modules/ui-ingredients',
              label: 'ui-ingredients',
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
                  icon: FileIcon,
                  value: 'src/(home)/+page.svelte',
                  label: '+page.svelte',
                },
                {
                  icon: FileIcon,
                  value: 'src/(home)/hero.svelte',
                  label: 'hero.svelte',
                },
              ],
            },
            {
              icon: FileIcon,
              value: 'src/+layout.svelte',
              label: '+layout.svelte',
            },
          ],
        },
        {
          icon: FileIcon,
          value: 'vite.config.ts',
          label: 'vite.config.ts',
        },
        {
          icon: FileIcon,
          value: 'svelte.config.js',
          label: 'svelte.config.js',
        },
        {
          icon: FileIcon,
          value: 'package.json',
          label: 'package.json',
        },
      ],
    },
  });
</script>

<TreeView.Root {collection}>
  <TreeView.Label>Explorer</TreeView.Label>
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
          <props.node.icon style="width:16px;height:16px;" />
          <span>{props.node.label}</span>
        </TreeView.BranchText>
        <TreeView.BranchIndicator>
          <ChevronRightIcon style="width:16px;height:16px;" />
        </TreeView.BranchIndicator>
      </TreeView.BranchControl>
      <TreeView.BranchContent>
        <TreeView.BranchIndentGuide />

        <div style="display:flex;flex-direction:column;flex-grow:1;">
          {#each props.node.children as node, index}
            {@render TreeNode({node, indexPath: [...props.indexPath, index]})}
          {/each}
        </div>
      </TreeView.BranchContent>
    </TreeView.Branch>
  {:else}
    <TreeView.Item node={props.node} indexPath={props.indexPath}>
      <TreeView.ItemText>
        <props.node.icon style="width:16px;height:16px;" />
        <span>{props.node.label}</span>
      </TreeView.ItemText>
    </TreeView.Item>
  {/if}
{/snippet}

<style>
  :global([data-scope='tree-view'][data-part='root']) {
    font-family: 'Fira Code', monospace;
    max-width: 400px;
  }

  :global([data-scope='tree-view'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--color-muted);
  }

  :global([data-scope='tree-view'][data-part='branch-control']) {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    user-select: none;
  }

  :global([data-scope='tree-view'][data-part='branch-text']) {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-grow: 1;
  }

  :global([data-scope='tree-view'][data-part='branch-indicator']) {
    display: flex;
    align-items: center;
    transition: all 250ms;
  }

  :global(
    [data-scope='tree-view'][data-part='branch-indicator'][data-state='open']
  ) {
    transform: rotate(90deg);
  }

  :global([data-scope='tree-view'][data-part='branch-content']) {
    display: flex;
    padding: 4px;
    padding-right: 0px;
    overflow: hidden;
  }

  :global(
    [data-scope='tree-view'][data-part='branch-content'][data-state='open']
  ) {
    animation: slide-down 250ms;
  }

  :global(
    [data-scope='tree-view'][data-part='branch-content'][data-state='closed']
  ) {
    animation: slide-up 250ms;
  }

  :global([data-scope='tree-view'][data-part='branch-indent-guide']) {
    width: 12px;
    border-left: 1px solid var(--border-default);
  }

  :global([data-scope='tree-view'][data-part='item']) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  :global([data-scope='tree-view'][data-part='item-text']) {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  @keyframes slide-down {
    from {
      height: 0;
    }
    to {
      height: var(--height);
    }
  }

  @keyframes slide-up {
    from {
      height: var(--height);
    }
    to {
      height: 0;
    }
  }
</style>

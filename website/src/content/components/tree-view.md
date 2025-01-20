---
id: tree-view
title: Tree View
description: A component for displaying hierarchical data in a tree structure, allowing users to expand and collapse branches.
---

## Anatomy

## Usage

```svelte
<script lang="ts">
  import {type NodeProps, TreeView} from 'ui-ingredients';
  import {
    CheckSquareIcon,
    ChevronRightIcon,
    File01Icon,
    FolderIcon,
  } from '$lib/icons';

  interface Node {
    value: string;
    label: string;
    children?: Node[];
  }

  let collection = TreeView.collection<Node>({
    nodeToValue(node) {
      return node.value;
    },
    nodeToString(node) {
      return node.label;
    },
    rootNode: {
      value: '',
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

<TreeView.Root {collection}>
  <TreeView.Label>Explorer</TreeView.Label>
  <TreeView.Tree>
    {#each collection.rootNode.children ?? [] as node, index}
      {@render TreeNode({
        node,
        indexPath: [index],
      })}
    {/each}
  </TreeView.Tree>
</TreeView.Root>

{#snippet TreeNode(props: NodeProps<Node>)}
  {#if props.node.children}
    <TreeView.Branch node={props.node} indexPath={props.indexPath}>
      <TreeView.BranchControl>
        <TreeView.BranchText>
          <FolderIcon />
          {props.node.label}
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
        {props.node.label}
      </TreeView.ItemText>
    </TreeView.Item>
  {/if}
{/snippet}
```

## API Reference

## Accessibility

### Keyboard Support

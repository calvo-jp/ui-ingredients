export * as Accordion from './accordion.js';

export type {AccordionItemContentProps} from './accordion-item-content.svelte';
export type {AccordionIndicatorProps} from './accordion-item-indicator.svelte';
export type {AccordionItemTriggerProps} from './accordion-item-trigger.svelte';
export type {AccordionItemProps} from './accordion-item.svelte';
export type {AccordionProps} from './accordion-root.svelte';

export {anatomy as accordionAnatomy} from './accordion-anatomy.js';
export {
  getAccordionContext,
  setAccordionContext,
} from './accordion-context.svelte.js';
export {
  createAccordion,
  type CreateAccordionProps,
  type CreateAccordionReturn,
} from './create-accordion.svelte.js';

import postcss from 'postcss';
import tailwind, {type Config} from 'tailwindcss';
import uiIngredients from './index.js';

const WHITESPACE_REGEX = /[\t\n\r\s]+/g;
const WHITESPACE = ' ';

async function generateCss(content: string, prefix?: string) {
  const config: Config = {
    content: [{raw: content}],
    plugins: [prefix ? uiIngredients({prefix}) : uiIngredients],
  };

  const plugin = tailwind(config);
  const processor = postcss([plugin]);
  const result = await processor.process('@tailwind utilities', {from: ''});
  return result.css;
}

describe('plugin is working', () => {
  it('generates css', async () => {
    const css = await generateCss('<div class="ui-open:block"></div>');
    expect(css.replace(WHITESPACE_REGEX, WHITESPACE)).toBe(
      '.ui-open\\:block[data-state="open"] { display: block }',
    );
  });

  it('generates "not" css', async () => {
    const css = await generateCss('<div class="ui-not-open:block"></div>');
    expect(css.replace(WHITESPACE_REGEX, WHITESPACE)).toBe(
      '.ui-not-open\\:block:not([data-state="open"]) { display: block }',
    );
  });

  it('generates "group" css', async () => {
    const css = await generateCss('<div class="ui-group-open:block"></div>');
    expect(css.replace(WHITESPACE_REGEX, WHITESPACE)).toBe(
      '.group[data-state="open"] .ui-group-open\\:block { display: block }',
    );
  });

  it('generates "peer" css', async () => {
    const css = await generateCss('<div class="ui-peer-open:block"></div>');
    expect(css.replace(WHITESPACE_REGEX, WHITESPACE)).toBe(
      '.peer[data-state="open"] ~ .ui-peer-open\\:block { display: block }',
    );
  });

  test('custom prefix', async () => {
    const css = await generateCss('<div class="x-open:block"></div>', 'x');

    expect(css.replace(WHITESPACE_REGEX, WHITESPACE)).toBe(
      '.x-open\\:block[data-state="open"] { display: block }',
    );
  });
});

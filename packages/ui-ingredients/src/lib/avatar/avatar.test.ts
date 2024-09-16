import {faker} from '@faker-js/faker';
import {render} from '@testing-library/svelte';
import Avatar from './avatar.test.svelte';
import {avatarAnatomy} from './index.js';

const parts = Object.values(avatarAnatomy.build()).reduce<string[]>((l, o) => {
  return [
    ...l,
    `[data-scope='${o.attrs['data-scope']}'][data-part='${o.attrs['data-part']}']`,
  ];
}, []);

const src = faker.image.avatar();
const name = faker.person.fullName();

describe('Avatar', () => {
  it.each(parts)('should render %s', (selector) => {
    render(Avatar, {src, name});
    expect(document.querySelector(selector)).toBeInTheDocument();
  });
});

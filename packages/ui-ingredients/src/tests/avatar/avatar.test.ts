import {avatarAnatomy} from '$lib/index.js';
import {faker} from '@faker-js/faker';
import {render} from '@testing-library/svelte/svelte5';
import {axe} from 'vitest-axe';
import {getAnatomySelector} from '../utils.js';
import Avatar from './avatar.svelte';

const src = faker.image.avatar();
const name = faker.person.fullName();

describe('Avatar', () => {
  it.each(getAnatomySelector(avatarAnatomy))('should render %s', (selector) => {
    render(Avatar, {props: {src, name}});
    expect(document.querySelector(selector)).toBeInTheDocument();
  });

  it('should have no a11y violations', async () => {
    const {container} = render(Avatar, {props: {src, name}});
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

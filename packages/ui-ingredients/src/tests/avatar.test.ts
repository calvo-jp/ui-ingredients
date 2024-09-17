import {avatarAnatomy} from '$lib/index.js';
import {faker} from '@faker-js/faker';
import {render} from '@testing-library/svelte';
import Avatar from './avatar.svelte';
import {getAnatomySelector} from './utils.js';

const src = faker.image.avatar();
const name = faker.person.fullName();

describe('Avatar', () => {
  it.each(getAnatomySelector(avatarAnatomy))('should render %s', (selector) => {
    render(Avatar, {src, name});
    expect(document.querySelector(selector)).toBeInTheDocument();
  });
});

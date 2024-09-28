import {faker} from '@faker-js/faker';
import {createContext} from './create-context.svelte.js';

let MOCK_CONTEXT_STORAGE: Record<string, unknown> = {};

const mockedHasContext = vi.hoisted(() =>
  vi.fn((key: string) => {
    if (MOCK_CONTEXT_STORAGE[key]) {
      return true;
    } else {
      return false;
    }
  }),
);

const mockedGetContext = vi.hoisted(() =>
  vi.fn((key: string) => {
    if (MOCK_CONTEXT_STORAGE[key]) {
      return MOCK_CONTEXT_STORAGE[key];
    }
  }),
);

const mockedSetContext = vi.hoisted(() =>
  vi.fn((key: string, value: unknown) => {
    MOCK_CONTEXT_STORAGE = {
      ...MOCK_CONTEXT_STORAGE,
      [key]: value,
    };

    return value;
  }),
);

vi.mock('svelte', () => {
  return {
    ...vi.importActual('svelte'),
    getContext: mockedGetContext,
    setContext: mockedSetContext,
    hasContext: mockedHasContext,
  };
});

interface TContext {
  x: number;
  y: number;
  z: number;
}

describe("'createContext' util is working as expected", () => {
  test("can set context using the 'setContext' return", async () => {
    const k = faker.string.uuid();

    const [, setContext] = createContext<TContext>(k);

    const v: TContext = {
      x: faker.number.int(),
      y: faker.number.int(),
      z: faker.number.int(),
    };

    setContext(v);
    expect(mockedSetContext).toHaveBeenCalledWith(k, v);
  });

  test("can get context using the 'getContext' return", async () => {
    const k = faker.string.uuid();

    const [getContext, setContext] = createContext<TContext>(k);

    const v: TContext = {
      x: faker.number.int(),
      y: faker.number.int(),
      z: faker.number.int(),
    };

    setContext(v);
    expect(mockedSetContext).toHaveBeenCalledWith(k, v);
    expect(getContext()).toBe(v);
    expect(mockedGetContext).toHaveBeenCalledWith(k);
  });

  test("can check if context exists using the 'hasContext' return", () => {
    const k = faker.string.uuid();

    const [, setContext, hasContext] = createContext<TContext>(k);

    const v: TContext = {
      x: faker.number.int(),
      y: faker.number.int(),
      z: faker.number.int(),
    };

    expect(hasContext()).toBe(false);
    setContext(v);
    expect(mockedSetContext).toHaveBeenCalledWith(k, v);
    expect(hasContext()).toEqual(true);
  });

  test("'getContext' throws an error if context is not set and strict is true", () => {
    const k = faker.string.uuid();
    const [getContext] = createContext<TContext>(k, true);
    expect(() => getContext()).toThrow();
  });

  test("'getContext' does not throw an error if context is not set and strict is false", () => {
    const k = faker.string.uuid();
    const [getContext] = createContext<TContext>(k, false);

    expect(() => getContext()).not.toThrow();
    expect(getContext()).toBeUndefined();
  });
});

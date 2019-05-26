import { appState } from './appState';

beforeEach(() => {
  appState.reset();
});

test('Store a list of items', () => {
  expect(appState.items).toEqual([]);
});

test('Maintaining a *current* string as it gets typed', () => {
  expect(appState.currentItem).toEqual('');

  appState.changeCurrentItem('1');
  expect(appState.currentItem).toEqual('1');

  appState.changeCurrentItem('12');
  expect(appState.currentItem).toEqual('12');
});

test('Add this *current* string to the list of items', () => {
  appState.changeCurrentItem('21');
  appState.addCurrentItem();

  expect(appState.items).toEqual(['21']);
});

test('Reset the items and the current string', () => {
  appState.changeCurrentItem('2');
  appState.addCurrentItem();
  appState.reset();

  expect(appState.currentItem).toEqual('');
  expect(appState.items).toEqual([]);
});

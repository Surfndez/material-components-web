/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

export enum Direction {
  RIGHT,
  LEFT,
}

export enum EventSource {
  PRIMARY,
  TRAILING,
  NONE,
}

export const numbers = {
  BACKSPACE_KEYCODE: 8,
  ENTER_KEYCODE: 13,
  SPACEBAR_KEYCODE: 32,
  END_KEYCODE: 35,
  HOME_KEYCODE: 36,
  ARROW_LEFT_KEYCODE: 37,
  ARROW_UP_KEYCODE: 38,
  ARROW_RIGHT_KEYCODE: 39,
  ARROW_DOWN_KEYCODE: 40,
  DELETE_KEYCODE: 46,
};

export const strings = {
  ADDED_ANNOUNCEMENT_ATTRIBUTE: 'data-mdc-chip-added-announcement',
  ARIA_CHECKED: 'aria-checked',
  ARROW_DOWN_KEY: 'ArrowDown',
  ARROW_LEFT_KEY: 'ArrowLeft',
  ARROW_RIGHT_KEY: 'ArrowRight',
  ARROW_UP_KEY: 'ArrowUp',
  BACKSPACE_KEY: 'Backspace',
  CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
  DELETE_KEY: 'Delete',
  END_KEY: 'End',
  ENTER_KEY: 'Enter',
  ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
  HOME_KEY: 'Home',
  IE_ARROW_DOWN_KEY: 'Down',
  IE_ARROW_LEFT_KEY: 'Left',
  IE_ARROW_RIGHT_KEY: 'Right',
  IE_ARROW_UP_KEY: 'Up',
  IE_DELETE_KEY: 'Del',
  INTERACTION_EVENT: 'MDCChip:interaction',
  LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
  NAVIGATION_EVENT: 'MDCChip:navigation',
  PRIMARY_ACTION_SELECTOR: '.mdc-chip__primary-action',
  REMOVED_ANNOUNCEMENT_ATTRIBUTE: 'data-mdc-chip-removed-announcement',
  REMOVAL_EVENT: 'MDCChip:removal',
  SELECTION_EVENT: 'MDCChip:selection',
  SPACEBAR_KEY: ' ',
  TAB_INDEX: 'tabindex',
  TRAILING_ACTION_SELECTOR: '.mdc-chip__trailing-action',
  TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
  TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing',
  UNKNOWN_KEY: 'UNKNOWN_KEY',
};

export const cssClasses = {
  CHECKMARK: 'mdc-chip__checkmark',
  CHIP_EXIT: 'mdc-chip--exit',
  DELETABLE: 'mdc-chip--deletable',
  HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
  LEADING_ICON: 'mdc-chip__icon--leading',
  PRIMARY_ACTION: 'mdc-chip__primary-action',
  PRIMARY_ACTION_FOCUSED: 'mdc-chip--primary-action-focused',
  SELECTED: 'mdc-chip--selected',
  TEXT: 'mdc-chip__text',
  TRAILING_ACTION: 'mdc-chip__trailing-action',
  TRAILING_ICON: 'mdc-chip__icon--trailing',
};

/**
 * Actionable keys represents all the possible keys that are used by the
 * foundation
 */
export const actionableKeys = new Set<string>();
// IE11 has no support for new Set with iterable so we need to initialize this
// by hand
actionableKeys.add(strings.ARROW_LEFT_KEY);
actionableKeys.add(strings.ARROW_RIGHT_KEY);
actionableKeys.add(strings.ARROW_DOWN_KEY);
actionableKeys.add(strings.ARROW_UP_KEY);
actionableKeys.add(strings.END_KEY);
actionableKeys.add(strings.HOME_KEY);
actionableKeys.add(strings.BACKSPACE_KEY);
actionableKeys.add(strings.DELETE_KEY);
actionableKeys.add(strings.ENTER_KEY);
actionableKeys.add(strings.SPACEBAR_KEY);

/**
 * Key code map represents the association of the KeyboardEvent's deprecated
 * "keyCode" property to the newer "key" property
 *
 * @see https://www.w3.org/TR/2014/WD-DOM-Level-3-Events-20140925/#widl-KeyboardEvent-keyCode
 */
export const keyCodeMap = new Map<number, string>();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand
keyCodeMap.set(numbers.ARROW_LEFT_KEYCODE, strings.ARROW_LEFT_KEY);
keyCodeMap.set(numbers.ARROW_RIGHT_KEYCODE, strings.ARROW_RIGHT_KEY);
keyCodeMap.set(numbers.ARROW_UP_KEYCODE, strings.ARROW_UP_KEY);
keyCodeMap.set(numbers.ARROW_DOWN_KEYCODE, strings.ARROW_DOWN_KEY);
keyCodeMap.set(numbers.HOME_KEYCODE, strings.HOME_KEY);
keyCodeMap.set(numbers.END_KEYCODE, strings.END_KEY);
keyCodeMap.set(numbers.ENTER_KEYCODE, strings.ENTER_KEY);
keyCodeMap.set(numbers.SPACEBAR_KEYCODE, strings.SPACEBAR_KEY);
keyCodeMap.set(numbers.BACKSPACE_KEYCODE, strings.BACKSPACE_KEY);
keyCodeMap.set(numbers.DELETE_KEYCODE, strings.DELETE_KEY);

export const navigationKeys = new Set<string>();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
navigationKeys.add(strings.ARROW_LEFT_KEY);
navigationKeys.add(strings.ARROW_RIGHT_KEY);
navigationKeys.add(strings.ARROW_DOWN_KEY);
navigationKeys.add(strings.ARROW_UP_KEY);
navigationKeys.add(strings.END_KEY);
navigationKeys.add(strings.HOME_KEY);
navigationKeys.add(strings.IE_ARROW_LEFT_KEY);
navigationKeys.add(strings.IE_ARROW_RIGHT_KEY);
navigationKeys.add(strings.IE_ARROW_DOWN_KEY);
navigationKeys.add(strings.IE_ARROW_UP_KEY);

export const jumpChipKeys = new Set<string>();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
jumpChipKeys.add(strings.ARROW_UP_KEY);
jumpChipKeys.add(strings.ARROW_DOWN_KEY);
jumpChipKeys.add(strings.HOME_KEY);
jumpChipKeys.add(strings.END_KEY);
jumpChipKeys.add(strings.IE_ARROW_UP_KEY);
jumpChipKeys.add(strings.IE_ARROW_DOWN_KEY);

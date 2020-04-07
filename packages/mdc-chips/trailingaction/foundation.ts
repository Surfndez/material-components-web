/**
 * @license
 * Copyright 2020 Google Inc.
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

import {MDCFoundation} from '@material/base/foundation';

import {actionableKeys, keyCodeMap, navigationKeys, strings as chipStrings} from '../chip/constants';

import {MDCChipTrailingActionAdapter} from './adapter';
import {InteractionTrigger, strings} from './constants';

export class MDCChipTrailingActionFoundation extends
    MDCFoundation<MDCChipTrailingActionAdapter> {
  static get strings() {
    return strings;
  }

  static get defaultAdapter(): MDCChipTrailingActionAdapter {
    return {
      focus: () => undefined,
      getAttribute: () => null,
      setAttribute: () => undefined,
      notifyInteraction: () => undefined,
      notifyNavigation: () => undefined,
    };
  }

  constructor(adapter?: Partial<MDCChipTrailingActionAdapter>) {
    super({...MDCChipTrailingActionFoundation.defaultAdapter, ...adapter});
  }

  handleClick(evt: MouseEvent) {
    evt.stopPropagation();
    this.adapter_.notifyInteraction(InteractionTrigger.CLICK);
  }

  handleKeydown(evt: KeyboardEvent) {
    evt.stopPropagation();
    if (this.shouldNotifyInteraction_(evt)) {
      this.adapter_.notifyInteraction(this.getTriggerFromKeyboard_(evt));
      return;
    }

    if (this.shouldNotifyNavigation_(evt)) {
      this.adapter_.notifyNavigation(this.getKeyFromEvent_(evt));
      return;
    }
  }

  removeFocus() {
    this.adapter_.setAttribute(strings.TAB_INDEX, '-1');
  }

  focus() {
    this.adapter_.setAttribute(strings.TAB_INDEX, '0');
    this.adapter_.focus();
  }

  isNavigable() {
    return this.adapter_.getAttribute(strings.ARIA_HIDDEN) !== 'true';
  }

  private getKeyFromEvent_(evt: KeyboardEvent): string {
    if (actionableKeys.has(evt.key)) {
      return evt.key;
    }

    const mappedKey = keyCodeMap.get(evt.keyCode);
    if (mappedKey) {
      return mappedKey;
    }

    // Default case, should never be returned
    return chipStrings.UNKNOWN_KEY;
  }

  private shouldNotifyInteraction_(evt: KeyboardEvent): boolean {
    const key = this.getKeyFromEvent_(evt);
    const isFromActionKey =
        key === chipStrings.ENTER_KEY || key === chipStrings.SPACEBAR_KEY;
    const isFromDeleteKey =
        key === chipStrings.BACKSPACE_KEY || key === chipStrings.DELETE_KEY;

    return isFromActionKey || isFromDeleteKey;
  }

  private shouldNotifyNavigation_(evt: KeyboardEvent): boolean {
    const key = this.getKeyFromEvent_(evt)
    return navigationKeys.has(key);
  }

  private getTriggerFromKeyboard_(evt: KeyboardEvent): InteractionTrigger {
    const key = this.getKeyFromEvent_(evt)
    if (key === chipStrings.SPACEBAR_KEY) {
      return InteractionTrigger.SPACEBAR_KEY;
    }

    if (key === chipStrings.ENTER_KEY) {
      return InteractionTrigger.ENTER_KEY;
    }

    if (key === chipStrings.DELETE_KEY) {
      return InteractionTrigger.DELETE_KEY;
    }

    if (key === chipStrings.BACKSPACE_KEY) {
      return InteractionTrigger.BACKSPACE_KEY;
    }

    // Default case, should never be returned
    return InteractionTrigger.UNSPECIFIED;
  }
}

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
export default MDCChipTrailingActionFoundation;

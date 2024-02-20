/*
 * SPDX-FileCopyrightText: 2013 Pieroxy <pieroxy@pieroxy.net>
 *
 * SPDX-License-Identifier: MIT
 */

export type Dictionary = Map<string, number>;
export type DictionaryCollection = Map<string, Dictionary>;

const baseReverseDic: DictionaryCollection = new Map();

export function getBaseValue(alphabet: string, character: string): number {
    if (!baseReverseDic.has(alphabet)) {
        baseReverseDic.set(alphabet, new Map());
        for (let i = 0; i < alphabet.length; i++) {
            baseReverseDic.get(alphabet)?.set(alphabet.charAt(i), i);
        }
    }
    return baseReverseDic.get(alphabet)?.get(character);
}

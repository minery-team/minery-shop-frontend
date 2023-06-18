"use strict";
exports.id = 983;
exports.ids = [983];
exports.modules = {

/***/ 6983:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.J = void 0;
/**
 * Recoil module to persist state to storage
 *
 * @param config Optional configuration object
 * @param config.key Used as key in local storage, defaults to `recoil-persist`
 * @param config.storage Local storage to use, defaults to `localStorage`
 */
const recoilPersist = (config = {}) => {
    if (typeof window === 'undefined') {
        return {
            persistAtom: () => { },
        };
    }
    const { key = 'recoil-persist', storage = localStorage } = config;
    const persistAtom = ({ onSet, node, trigger, setSelf }) => {
        if (trigger === 'get') {
            const state = getState();
            if (typeof state.then === 'function') {
                state.then((s) => {
                    if (s.hasOwnProperty(node.key)) {
                        setSelf(s[node.key]);
                    }
                });
            }
            if (state.hasOwnProperty(node.key)) {
                setSelf(state[node.key]);
            }
        }
        onSet(async (newValue, _, isReset) => {
            const state = getState();
            if (typeof state.then === 'function') {
                state.then((s) => updateState(newValue, s, node.key, isReset));
            }
            else {
                updateState(newValue, state, node.key, isReset);
            }
        });
    };
    const updateState = (newValue, state, key, isReset) => {
        if (isReset) {
            delete state[key];
        }
        else {
            state[key] = newValue;
        }
        setState(state);
    };
    const getState = () => {
        const toParse = storage.getItem(key);
        if (toParse === null || toParse === undefined) {
            return {};
        }
        if (typeof toParse === 'string') {
            return parseState(toParse);
        }
        if (typeof toParse.then === 'function') {
            return toParse.then(parseState);
        }
        return {};
    };
    const parseState = (state) => {
        if (state === undefined) {
            return {};
        }
        try {
            return JSON.parse(state);
        }
        catch (e) {
            console.error(e);
            return {};
        }
    };
    const setState = (state) => {
        try {
            if (typeof storage.mergeItem === 'function') {
                storage.mergeItem(key, JSON.stringify(state));
            }
            else {
                storage.setItem(key, JSON.stringify(state));
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    return { persistAtom };
};
exports.J = recoilPersist;


/***/ })

};
;
import { useEventListener } from "./event-listener";

/**
 * composable theo dõi sự kiện các phím tắt
 * @param {Keyboard} key - phím tắt
 * @param {Callback Funciton} onKeyPressed call back khi nhấn phím tắt
 * @param {options} opts - ràng buộc thêm khi nhấn ctrl hoặc shift
 * @author HVDUNG
 */
export function useHotkey(key, onKeyPressed, opts) {
    const target = opts?.target || window;

    useEventListener(target, 'keydown', e => {
        const options = opts || {};

        if (e.key === key && matchesKeyScheme(options, e)) {
            e.preventDefault();
            onKeyPressed();
        }
    });
}

/**
 * Kiểm tra ràng buộc ctrl hoặc shift
 * @param {Object} opts - ràng buộc thêm khi nhấn ctrl hoặc shift
 * @param {Event Listener} evt - sự kiện khi nhấn phím tắt
 * @author HVDUNG
 */
function matchesKeyScheme(opts, evt) {
    const ctrlKey = opts.ctrlKey ?? false;
    const shiftKey = opts.shiftKey ?? false;

    if (opts.exact) {
        return ctrlKey === evt.ctrlKey && shiftKey === evt.shiftKey;
    }

    const satisfiedKey = [];
    satisfiedKey.push(ctrlKey === evt.ctrlKey);
    satisfiedKey.push(shiftKey === evt.shiftKey);

    return satisfiedKey.every(key => key);
}
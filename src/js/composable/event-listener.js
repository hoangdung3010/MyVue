import { isRef, watch, onBeforeUnmount, unref } from "vue";

/**
 * Hàm tạo composable lắng nghe sự kiện
 * @param {Element} target - Phần tử tác động
 * @param {Event} event - Sự kiện 
 * @param {Function} handler - Hàm thực thi
 * @author HVDUNG 
 */
export function useEventListener(target, event, handler) {
    if (isRef(target)) {
        watch(target, (value, oldValue) => {
            oldValue?.removeEventListener(event, handler);
            value?.addEventListener(event, handler);
        });
    } else {
        // Thên EventListener
        target.addEventListener(event, handler);
    }

    // Loại bỏ EventListener trước khi unmount
    onBeforeUnmount(() => {
        unref(target)?.removeEventListener(event, handler);
    });
}
  
import { useEventListener } from './event-listener';

/**
 * Composable theo dõi sự kiện click ra ngoài phần tử
 * @param {Element} rootEl - Phần tử gốc
 * @param {Function} callback - Hàm thực thi
 * @author HVDUNG
 */
export function useOnClickOutside(rootEl, callback) {
    useEventListener(window, 'mouseup', (e) => {
        const clickedEl = e.target;
        
        // Bỏ qua nếu phần tử gốc chứa phần tử được click
        if (rootEl.contains(clickedEl)) {
            return;
        }

        // Thực thi hành động
        callback();
    });
}

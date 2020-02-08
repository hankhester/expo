import { forwardRef } from 'react';
import { createElement, StyleSheet } from 'react-native';
export const P = forwardRef(({ style, ...props }, ref) => {
    return createElement('p', { ...props, style: [styles.reset, style], ref });
});
export const B = forwardRef(({ style, ...props }, ref) => {
    return createElement('b', { ...props, style: [styles.reset, style], ref });
});
export const S = forwardRef(({ style, ...props }, ref) => {
    return createElement('s', { ...props, style: [styles.reset, style], ref });
});
export const Del = forwardRef(({ style, ...props }, ref) => {
    return createElement('del', { ...props, style: [styles.reset, style], ref });
});
export const Strong = forwardRef(({ style, ...props }, ref) => {
    return createElement('strong', { ...props, style: [styles.reset, style], ref });
});
export const I = forwardRef(({ style, ...props }, ref) => {
    return createElement('i', { ...props, style: [styles.reset, style], ref });
});
export const Em = forwardRef(({ style, ...props }, ref) => {
    return createElement('em', { ...props, style: [styles.reset, style], ref });
});
export const Br = forwardRef((props, ref) => {
    return createElement('br', { ...props, ref });
});
export const Small = forwardRef(({ style, ...props }, ref) => {
    return createElement('small', { ...props, style: [styles.reset, style], ref });
});
export const Mark = forwardRef(({ style, ...props }, ref) => {
    return createElement('mark', { ...props, style: [styles.reset, style], ref });
});
export const Code = forwardRef((props, ref) => {
    return createElement('code', { ...props, ref });
});
const styles = StyleSheet.create({
    reset: {
        fontFamily: 'System',
    },
});
//# sourceMappingURL=Text.web.js.map
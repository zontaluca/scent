// ============================================================
// SCENT Design System — componenti core (React)
// Estratti 1:1 dal bundle del design system (SCENTDesignSystem_06975e).
// Usano i token CSS definiti in app/globals.css.
// ============================================================
import React from 'react';

export function Alert({ children, variant = 'info', title, onDismiss, icon }) {
  const variantStyles = {
    success: { bg: 'var(--status-success-bg)', border: 'var(--status-success-border)', text: 'var(--status-success-text)', iconDefault: '✓' },
    warning: { bg: 'var(--status-warning-bg)', border: 'var(--status-warning-border)', text: 'var(--status-warning-text)', iconDefault: '!' },
    error:   { bg: 'var(--status-error-bg)', border: 'var(--status-error-border)', text: 'var(--status-error-text)', iconDefault: '✕' },
    info:    { bg: 'var(--status-info-bg)', border: 'var(--status-info-border)', text: 'var(--status-info-text)', iconDefault: 'i' },
    brand:   { bg: 'var(--color-sage-50)', border: 'var(--color-sage-200)', text: 'var(--color-sage-700)', iconDefault: '★' },
  };
  const v = variantStyles[variant];
  return React.createElement('div', {
    role: 'alert',
    style: { display: 'flex', gap: 'var(--space-3)', background: v.bg, borderRadius: 'var(--radius-lg)', border: `1px solid ${v.border}`, padding: 'var(--space-4) var(--space-5)' },
  }, React.createElement('div', {
    style: { width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0, background: v.border, color: v.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, marginTop: '1px' },
  }, icon || v.iconDefault), React.createElement('div', {
    style: { flex: 1 },
  }, title && React.createElement('div', {
    style: { fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)', color: v.text, marginBottom: 'var(--space-1)' },
  }, title), React.createElement('div', {
    style: { fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: v.text, lineHeight: 'var(--leading-normal)', maxWidth: 'none' },
  }, children)), onDismiss && React.createElement('button', {
    onClick: onDismiss,
    style: { background: 'none', border: 'none', cursor: 'pointer', color: v.text, padding: '0 var(--space-1)', fontSize: '16px', lineHeight: 1, opacity: 0.6, flexShrink: 0 },
  }, '×'));
}

export function Badge({ children, variant = 'default', size = 'md', dot = false }) {
  const variantStyles = {
    default: { background: 'var(--color-neutral-100)', color: 'var(--color-neutral-600)', border: '1px solid var(--color-neutral-200)' },
    primary: { background: 'var(--color-sage-50)', color: 'var(--color-sage-700)', border: '1px solid var(--color-sage-200)' },
    success: { background: 'var(--status-success-bg)', color: 'var(--status-success-text)', border: '1px solid var(--status-success-border)' },
    warning: { background: 'var(--status-warning-bg)', color: 'var(--status-warning-text)', border: '1px solid var(--status-warning-border)' },
    error:   { background: 'var(--status-error-bg)', color: 'var(--status-error-text)', border: '1px solid var(--status-error-border)' },
    info:    { background: 'var(--status-info-bg)', color: 'var(--status-info-text)', border: '1px solid var(--status-info-border)' },
    brand:   { background: 'var(--color-magenta-50)', color: 'var(--color-magenta-600)', border: '1px solid var(--color-magenta-200)' },
    lime:    { background: 'var(--color-lime-50)', color: 'var(--color-lime-700)', border: '1px solid var(--color-lime-200)' },
  };
  const sizeStyles = {
    sm: { fontSize: '11px', padding: '2px 8px', gap: '4px' },
    md: { fontSize: '12px', padding: '3px 10px', gap: '5px' },
    lg: { fontSize: '13px', padding: '4px 12px', gap: '6px' },
  };
  const dotColor = {
    default: 'var(--color-neutral-400)', primary: 'var(--color-sage-500)', success: 'var(--status-success-text)', warning: 'var(--status-warning-text)',
    error: 'var(--status-error-text)', info: 'var(--status-info-text)', brand: 'var(--color-magenta-500)', lime: 'var(--color-lime-600)',
  };
  return React.createElement('span', {
    style: { display: 'inline-flex', alignItems: 'center', borderRadius: 'var(--radius-full)', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-wide)', lineHeight: 1, whiteSpace: 'nowrap', ...variantStyles[variant], ...sizeStyles[size] },
  }, dot && React.createElement('span', {
    style: { width: '6px', height: '6px', borderRadius: '50%', background: dotColor[variant], flexShrink: 0 },
  }), children);
}

export function Button({ children, variant = 'primary', size = 'md', disabled = false, loading = false, icon, iconPosition = 'left', fullWidth = false, onClick, type = 'button', ...props }) {
  const baseStyle = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
    fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-wide)',
    borderRadius: 'var(--radius-lg)', border: '1.5px solid transparent',
    cursor: disabled || loading ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
    transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
    textDecoration: 'none', whiteSpace: 'nowrap', width: fullWidth ? '100%' : undefined, outline: 'none', position: 'relative', userSelect: 'none',
  };
  const sizeStyles = {
    sm: { fontSize: 'var(--text-sm)', padding: '6px 14px', minHeight: '32px' },
    md: { fontSize: 'var(--text-sm)', padding: '9px 20px', minHeight: '40px' },
    lg: { fontSize: 'var(--text-base)', padding: '12px 28px', minHeight: '48px' },
    xl: { fontSize: 'var(--text-lg)', padding: '14px 36px', minHeight: '56px' },
  };
  const variantStyles = {
    primary:   { background: 'var(--color-sage-500)', borderColor: 'var(--color-sage-500)', color: '#fff' },
    secondary: { background: 'var(--color-eucalyptus-500)', borderColor: 'var(--color-eucalyptus-500)', color: '#fff' },
    outline:   { background: 'transparent', borderColor: 'var(--color-sage-400)', color: 'var(--color-sage-600)' },
    ghost:     { background: 'transparent', borderColor: 'transparent', color: 'var(--color-sage-600)' },
    danger:    { background: 'var(--status-error-text)', borderColor: 'var(--status-error-text)', color: '#fff' },
    brand:     { background: 'var(--color-magenta-500)', borderColor: 'var(--color-magenta-500)', color: '#fff' },
  };
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const hoverOverlay = {
    primary:   { background: 'var(--color-sage-600)', borderColor: 'var(--color-sage-600)' },
    secondary: { background: 'var(--color-eucalyptus-600)', borderColor: 'var(--color-eucalyptus-600)' },
    outline:   { background: 'var(--color-sage-50)', borderColor: 'var(--color-sage-500)' },
    ghost:     { background: 'var(--color-sage-50)' },
    danger:    { background: '#6B1A10' },
    brand:     { background: 'var(--color-magenta-600)', borderColor: 'var(--color-magenta-600)' },
  };
  const style = {
    ...baseStyle, ...sizeStyles[size], ...variantStyles[variant],
    ...(hovered && !disabled && !loading ? hoverOverlay[variant] : {}),
    ...(pressed ? { transform: 'scale(0.97)' } : {}),
  };
  return React.createElement('button', {
    type, style, disabled: disabled || loading, onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => { setHovered(false); setPressed(false); },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    ...props,
  }, icon && iconPosition === 'left' ? React.createElement('span', {
    style: { display: 'flex', alignItems: 'center' },
  }, icon) : null, loading ? React.createElement('span', {
    style: { display: 'flex', alignItems: 'center', gap: '6px' },
  }, React.createElement('svg', {
    width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, style: { animation: 'spin 0.8s linear infinite' },
  }, React.createElement('path', {
    d: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83',
  })), children) : children, icon && iconPosition === 'right' ? React.createElement('span', {
    style: { display: 'flex', alignItems: 'center' },
  }, icon) : null, React.createElement('style', null, '@keyframes spin { to { transform: rotate(360deg); } }'));
}

export function Card({ children, variant = 'default', padding = 'md', hover = false, onClick, style: externalStyle }) {
  const [hovered, setHovered] = React.useState(false);
  const variantStyles = {
    default: { background: 'var(--surface-base)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' },
    raised:  { background: 'var(--surface-base)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)' },
    sunken:  { background: 'var(--surface-sunken)', border: '1px solid var(--border-default)', boxShadow: 'none' },
    brand:   { background: 'var(--color-sage-50)', border: '1px solid var(--color-sage-200)', boxShadow: 'var(--shadow-sm)' },
    dark:    { background: 'var(--color-neutral-900)', border: '1px solid var(--color-neutral-800)', boxShadow: 'var(--shadow-md)' },
    outline: { background: 'transparent', border: '1.5px solid var(--border-default)', boxShadow: 'none' },
  };
  const paddingStyles = {
    none: { padding: '0' },
    sm: { padding: 'var(--space-4)' },
    md: { padding: 'var(--space-6)' },
    lg: { padding: 'var(--space-8)' },
    xl: { padding: 'var(--space-12)' },
  };
  return React.createElement('div', {
    onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      borderRadius: 'var(--radius-xl)',
      transition: 'box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)',
      cursor: onClick ? 'pointer' : undefined,
      ...variantStyles[variant], ...paddingStyles[padding],
      ...(hover && hovered ? { boxShadow: 'var(--shadow-lg)', transform: 'translateY(-2px)' } : {}),
      ...externalStyle,
    },
  }, children);
}

export function Input({ label, hint, error, id, type = 'text', placeholder, value, onChange, disabled = false, required = false, prefix, suffix, size = 'md', ...props }) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || `input-${React.useId()}`;
  const sizeStyles = {
    sm: { fontSize: 'var(--text-sm)', padding: '6px 12px', minHeight: '32px' },
    md: { fontSize: 'var(--text-base)', padding: '9px 14px', minHeight: '40px' },
    lg: { fontSize: 'var(--text-lg)', padding: '12px 16px', minHeight: '48px' },
  };
  const inputStyle = {
    width: '100%', fontFamily: 'var(--font-sans)',
    color: disabled ? 'var(--text-tertiary)' : 'var(--text-primary)',
    background: disabled ? 'var(--surface-sunken)' : 'var(--surface-base)',
    border: `1.5px solid ${error ? 'var(--status-error-border)' : focused ? 'var(--border-focus)' : 'var(--border-default)'}`,
    borderRadius: 'var(--radius-lg)', outline: 'none',
    transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
    boxShadow: focused ? (error ? '0 0 0 3px rgba(139,32,21,0.15)' : 'var(--shadow-focus)') : 'none',
    ...sizeStyles[size],
    paddingLeft: prefix ? 'var(--space-10)' : sizeStyles[size].padding.split(' ')[1],
    paddingRight: suffix ? 'var(--space-10)' : sizeStyles[size].padding.split(' ')[1],
  };
  return React.createElement('div', {
    style: { display: 'flex', flexDirection: 'column', gap: 'var(--space-1-5)', width: '100%' },
  }, label && React.createElement('label', {
    htmlFor: inputId,
    style: { fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: error ? 'var(--status-error-text)' : 'var(--text-primary)', display: 'flex', gap: 'var(--space-1)' },
  }, label, required && React.createElement('span', { style: { color: 'var(--status-error-text)' } }, '*')),
  React.createElement('div', {
    style: { position: 'relative', display: 'flex', alignItems: 'center' },
  }, prefix && React.createElement('span', {
    style: { position: 'absolute', left: 'var(--space-3)', color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', pointerEvents: 'none' },
  }, prefix), React.createElement('input', {
    id: inputId, type, placeholder, value, onChange, disabled, required, style: inputStyle,
    onFocus: () => setFocused(true), onBlur: () => setFocused(false), ...props,
  }), suffix && React.createElement('span', {
    style: { position: 'absolute', right: 'var(--space-3)', color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', pointerEvents: 'none' },
  }, suffix)), (error || hint) && React.createElement('p', {
    style: { fontSize: 'var(--text-xs)', color: error ? 'var(--status-error-text)' : 'var(--text-tertiary)', margin: 0, maxWidth: 'none' },
  }, error || hint));
}

export function StatCard({ value, label, sublabel, variant = 'default', size = 'md', trend }) {
  const variantStyles = {
    default:    { bg: 'var(--surface-base)', border: '1px solid var(--border-subtle)', valueColor: 'var(--text-primary)' },
    brand:      { bg: 'var(--color-sage-500)', border: 'none', valueColor: '#fff' },
    subtle:     { bg: 'var(--color-sage-50)', border: '1px solid var(--color-sage-200)', valueColor: 'var(--color-sage-700)' },
    eucalyptus: { bg: 'var(--color-eucalyptus-500)', border: 'none', valueColor: '#fff' },
    dark:       { bg: 'var(--color-neutral-900)', border: 'none', valueColor: '#fff' },
  };
  const v = variantStyles[variant];
  const isLight = variant === 'brand' || variant === 'eucalyptus' || variant === 'dark';
  const sizeStyles = {
    sm: { valueFontSize: 'var(--text-3xl)', labelFontSize: 'var(--text-xs)', padding: 'var(--space-4) var(--space-5)' },
    md: { valueFontSize: 'var(--text-5xl)', labelFontSize: 'var(--text-sm)', padding: 'var(--space-6)' },
    lg: { valueFontSize: 'var(--text-7xl)', labelFontSize: 'var(--text-base)', padding: 'var(--space-8)' },
  };
  const s = sizeStyles[size];
  return React.createElement('div', {
    style: { borderRadius: 'var(--radius-xl)', background: v.bg, border: v.border, padding: s.padding, boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' },
  }, React.createElement('div', {
    style: { fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-bold)', fontSize: s.valueFontSize, letterSpacing: 'var(--tracking-tighter)', lineHeight: 1, color: v.valueColor, display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)' },
  }, value, trend && React.createElement('span', {
    style: { fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: isLight ? 'rgba(255,255,255,0.75)' : 'var(--color-sage-500)' },
  }, trend)), React.createElement('div', {
    style: { fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)', fontSize: s.labelFontSize, color: isLight ? 'rgba(255,255,255,0.85)' : 'var(--text-secondary)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', lineHeight: 1.3 },
  }, label), sublabel && React.createElement('div', {
    style: { fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: isLight ? 'rgba(255,255,255,0.6)' : 'var(--text-tertiary)', lineHeight: 1.4 },
  }, sublabel));
}

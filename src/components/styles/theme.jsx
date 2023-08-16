export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
    accent: '#003eb3',
    mainBackground: '#f0f5ff',
  },

  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  spacing: value => `${4 * value}px`,
  fontSize: {
    s: '14px',
    m: '16px',
    l: '24px',
    xl: '36px',
  },

  lineHeight: {
    body: '1.5',
    heading: '1.125',
  },
  border: {
    none: 'none',
  },
  borderRadius: {
    none: '0',
  },
  boxShadow: {
    textShadow: '0 1px 1px rgba(236, 230, 230, 0.05)',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
};

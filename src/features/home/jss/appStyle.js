import { container } from 'assets/jss/material-kit-pro-react.js';

const appStyle = theme => ({
  page: {
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    position: 'relative',
  },
  container: {
    ...container,
    zIndex: 1,
  },
  children: {
    minHeight: '77vh',
  },
});

export default appStyle;

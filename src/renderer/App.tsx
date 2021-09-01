import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/index';

const Hello = () => {
  return <div>aaa</div>;
};

export default function App() {
  return (
    <>
      <Helmet
        titleTemplate="%s | Operator Maintenance Tool"
        defaultTitle="Operator Maintenance Tool"
      />
      <ThemeProvider theme={theme[0]}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/" component={Hello} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

import React from "react";
import injectSheet, { createTheming } from "react-jss";
import cn from "classnames";
import { cloneDeep } from "lodash-es";

const theming = createTheming("__MY-THEMING__");
const { ThemeProvider, withTheme } = theming;
const withStyles = (styles: any) => (component: any) => {
  const styled = injectSheet(styles, { theming })(component);
  styled.displayName = "WithStyles";
  return styled;
};

const theme = {
  global: {
    font: "400 12pt/1.25 sans-serif"
  },
  context: {
    color: "#000"
  },
  alert: {
    danger: {
      bg: "linear-gradient(to bottom, #ff6669, #e53e41)",
      color: "#fff"
    },
    warning: {
      bg: "linear-gradient(to bottom, #ffe780, #ffda69)",
      color: "#000"
    }
  },
  viewbox: {
    padding: [10, 15],
    margin: [0, 0, 10, 0]
  }
};

class StyleContextProvider extends React.PureComponent<any> {
  render() {
    const patchedTheme = cloneDeep(this.props.theme);

    if (this.props.light && !this.props.dark) {
      patchedTheme.context.color = "#fff";
    }

    return (
      <ThemeProvider theme={patchedTheme}>{this.props.children}</ThemeProvider>
    );
  }
}
const ContextProvider = withTheme(StyleContextProvider);

// ViewBox component
const ViewBoxView = ({ classes, children, className }: any) => (
  <div className={classes.viewBox + " " + className}>{children}</div>
);
const ViewBoxstyles = (theme: any) => ({
  viewBox: {
    padding: theme.viewbox.padding,
    font: theme.global.font,
    margin: theme.viewbox.margin,
    textAlign: "left"
  }
});
const ViewBox = withStyles(ViewBoxstyles)(ViewBoxView);

// Panel component
const PanelView = ({ classes, children, className }: any) => (
  <ViewBox className={classes.panel + " " + className}>{children}</ViewBox>
);
const PanelStyles = (theme: any) => ({
  panel: {
    background: "#eee",
    borderRadius: 5,
    color: theme.context.color
  }
});
const Panel = withStyles(PanelStyles)(PanelView);

// Alert component
const AlertView = ({ classes, children, danger = false }: any) => (
  <Panel
    className={cn({
      [classes.danger]: danger,
      [classes.warning]: !danger
    })}
  >
    {children}
  </Panel>
);
const AlertStyles = (theme: any) => ({
  danger: {
    background: theme.alert.danger.bg
  },
  warning: {
    background: theme.alert.warning.bg
  }
});
const Alert = withStyles(AlertStyles)(AlertView);
const AlertWithThemeProvider = (props: any) => (
  <ContextProvider light={props.danger} dark={!props.danger}>
    <Alert {...props} />
  </ContextProvider>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <AlertWithThemeProvider>Hello world!</AlertWithThemeProvider>
        </div>
        <div>
          <AlertWithThemeProvider danger>
            Hello danger world!
          </AlertWithThemeProvider>
        </div>
        <div>
          <AlertWithThemeProvider>Hello world!</AlertWithThemeProvider>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

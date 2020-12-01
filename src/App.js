import React from 'react'
import { render } from 'react-dom'
import { createUseStyles } from 'react-jss'

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
  myButton: {
    color: 'green',
    margin: {
      // jss-expand gives more readable syntax
      top: 5, // jss-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: '1rem'
    },
    '& span': {
      // jss-nested applies this to a child span
      fontWeight: 'bold' // jss-camel-case turns this into 'font-weight'
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
})

const Button = ({ children }) => {
  const classes = useStyles()
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  )
}

const App = () => <Button>Submit</Button>

// import React from "react";
// import { render } from "react-dom";
// import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

// const useStyles = createUseStyles({
//   wrapper: {
//     padding: 40,
//     background: ({ theme }) => theme.background,
//     textAlign: "left"
//   },
//   title: {
//     font: {
//       size: 40,
//       weight: 900
//     },
//     color: ({ theme }) => theme.color
//   },
//   link: {
//     color: ({ theme }) => theme.color,
//     "&:hover": {
//       opacity: 0.5
//     }
//   }
// });

// const Comp = () => {
//   const theme = useTheme();
//   const classes = useStyles({ theme });
//   return (
//     <div className={classes.wrapper}>
//       <h1 className={classes.title}>Hello React-JSS!</h1>
//       <a
//         className={classes.link}
//         href="http://cssinjs.org/react-jss"
//         traget="_blank"
//       >
//         See docs
//       </a>
//     </div>
//   );
// };

// const theme = {
//   background: "#f7df1e",
//   color: "#24292e"
// };

// const App = () => (
//   <ThemeProvider theme={theme}>
//     <Comp />
//   </ThemeProvider>
// );

// render(<App />, document.getElementById("root"));





// import logo from './logo.svg';

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

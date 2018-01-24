import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'
//import './semantic-ui-less/semantic.less'
//import './sq-web-components-core-theme/css/sq-web-components-core-theme.min.css'

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
} else {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('./sw.js').then(registration => {
            console.log('SW registered: ', registration);
          }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
        });
      }
}
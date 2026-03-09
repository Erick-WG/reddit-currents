import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// redux store imports.
import { store } from './app/store.js';
import { Provider } from 'react-redux';

// loaders
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <SkeletonTheme baseColor="#4a5565" highlightColor="#f3f4f1">
        <App />
      </SkeletonTheme>
    </Provider>
  </StrictMode>,
)

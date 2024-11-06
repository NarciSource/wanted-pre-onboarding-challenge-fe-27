import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.tsx'
import router from "./app/router/authRouter.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App router={router} />
  </StrictMode>,
)

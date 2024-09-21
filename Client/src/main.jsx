import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import {ClerkProvider} from '@clerk/clerk-react'
import SocketProvider from './context/socket.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/login" signInFallbackRedirectUrl={"/"} signUpFallbackRedirectUrl={"/entrance"}>
    <SocketProvider>
      <App />
    </SocketProvider>
    </ClerkProvider>
  </StrictMode>,
)

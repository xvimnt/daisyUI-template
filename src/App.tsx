import { BrowserRouter } from 'react-router-dom'
import RoutesList from './components/Routes'
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    identityPoolId: import.meta.env.VITE_IDENTITY_POOL_ID,
    region: import.meta.env.VITE_REGION,
    userPoolId: import.meta.env.VITE_USER_POOL_ID, 
    userPoolWebClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID, 
  },
});

function App() {
  return (
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
  )
}

export default App

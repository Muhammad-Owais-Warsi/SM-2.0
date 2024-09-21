import { LiveKitProvider, useRoom } from '@livekit/react-core';

const LiveKitClient = ({ token, url, children }) => (
  <LiveKitProvider
    serverUrl={url}
    token={token}
  >
    {children}
  </LiveKitProvider>
  
);

import React from 'react';

interface AppProps {
  message: String;
}

const App = ({ message }: AppProps) => {
  return <div>{ message }</div>;
};

export default App;

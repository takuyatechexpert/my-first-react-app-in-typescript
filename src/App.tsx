import React from 'react';

interface AppProps {
  message: String
}

// Reactが提供する関数に型制約をかける方法
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return <div>{ message }</div>;
};

// あたいがない時のデフォルト値を設定できる
App.defaultProps = {
  message: 'Hello, defaultProps!',
}

export default App;

import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Gif from './LoadGif';
Amplify.configure(awsconfig);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <Gif />
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App, true);

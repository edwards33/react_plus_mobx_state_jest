import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { observer } from 'mobx-react';
import { appState } from './appState';

@observer
class App extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          appState.addCurrentItem();
        }}>
          <input
            value={appState.currentItem}
            onChange={e => appState.changeCurrentItem(e.target.value)} />
          <button type="submit">
            Add
          </button>
          <button type="button" onClick={() => appState.reset()}>
            Reset
          </button>
          <ul>
            {appState.items.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              );
            })}
          </ul>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

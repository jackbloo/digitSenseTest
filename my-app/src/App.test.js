import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {Router} from 'react-router-dom'
import App from './App';
import {createMemoryHistory} from 'history'

test('Should be in the document', () => {
  const history = createMemoryHistory()
  render(
    <Provider store={store}>
      <Router navigator={history} location={history.location}>
      <App />
      </Router>
    </Provider>
  );
    const app = screen.getByTestId('App')
  expect(app).toBeInTheDocument();
});

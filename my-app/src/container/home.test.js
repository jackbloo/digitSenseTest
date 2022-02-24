import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Home from './home'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'


describe('Unit Test for Home', () => {
    const history=createMemoryHistory()
    test('Should be in the document', () => {
      render(
          <Provider store={store} >
              <Router navigator={history} location={history.location}>
            <Home />
            </Router>
          </Provider>
        );
      const card = screen.getByTestId('home-container')
      expect(card).toBeInTheDocument();
      });

      test('Should match the snapshot',  () => {
         render(
             <Provider store={store} >
              <Router navigator={history} location={history.location}>
            <Home />
            </Router>
             </Provider>
           );
         const card = screen.getByTestId('home-container')
         expect(card).toMatchSnapshot()
         });
})


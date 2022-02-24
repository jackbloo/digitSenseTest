import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Detail from './detail'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'


describe('Unit Test for Deatil', () => {
    const history=createMemoryHistory()
    test('Should be in the document', () => {
      render(
          <Provider store={store} >
              <Router navigator={history} location={history.location}>
            <Detail />
            </Router>
          </Provider>
        );
      const card = screen.getByTestId('detail-container')
      expect(card).toBeInTheDocument();
      });

      test('Should match the snapshot',  () => {
         render(
             <Provider store={store} >
              <Router navigator={history} location={history.location}>
            <Detail />
            </Router>
             </Provider>
           );
         const card = screen.getByTestId('detail-container')
         expect(card).toMatchSnapshot()
         });
})


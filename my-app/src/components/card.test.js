import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Card from './card'


describe('Unit Test for Card', () => {
    const data = {
        image: 'test.jpeg',
        title: 'test',
        content: 'test',
        id:2
    }
    test('Should be in the document', () => {
     render(
          <Provider store={store} >
            <Card data={data} changeNavigation={jest.fn()}/>
          </Provider>
        );
      const card = screen.getByTestId('card-container')
      expect(card).toBeInTheDocument();
      });

      test('Should match the snapshot', () => {
        render(
             <Provider store={store} >
               <Card data={data} changeNavigation={jest.fn()}/>
             </Provider>
           );
         const card = screen.getByTestId('card-container')
         expect(card).toMatchSnapshot()
         });
})


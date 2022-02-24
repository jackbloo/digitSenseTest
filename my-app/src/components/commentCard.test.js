import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
import { store } from '../app/store';
import CommentCard from './CommentCard'


describe('Unit Test for CommentCard', () => {
    const data = {
        comment: 'test-12'
    }
    test('Should be in the document', () => {
     render(
          <Provider store={store} >
            <CommentCard data={data}/>
          </Provider>
        );
      const card = screen.getByTestId('comment-card-container')
      expect(card).toBeInTheDocument();
      });

      test('Should match the snapshot', () => {
        render(
             <Provider store={store} >
               <CommentCard data={data}/>
             </Provider>
           );
         const card = screen.getByTestId('comment-card-container')
         expect(card).toMatchSnapshot()
         });
})


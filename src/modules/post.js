import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';

import axios from 'axios';


function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

const GET_POST = 'GET_POST';

export const getPost = createAction(GET_POST, getPostAPI);

const initialState = {
    data: {
        title: '',
        body: ''
    }
}

export default handleActions({
  ...pender({
    type: GET_POST,
    onSuccess: (state, action) => {
      const { title, body } = action.payload.data;
      return {
        data: {
          title, body
        }
      };
    }
  })
}, initialState);
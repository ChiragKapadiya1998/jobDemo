import {createAction} from 'redux-actions';
export const dataActionsCreator = {
  dataRequest: createAction('DATA_REQUEST'),
  dataSuccess: createAction('DATA_SUCCESS'),
  dataError: createAction('DATA_ERROR'),
};

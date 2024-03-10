import { AppTodo } from '@src/components/organisms/AppTodos';

type RootStackPramsList = {
  INITIAL: undefined;
  HOME: undefined;
  DETAIL: { state?: AppTodo.State; isEditable?: boolean };
  SIGN_IN: undefined;
  SIGN_UP: undefined;
  USER_INFO: undefined;
  STATISTICS: undefined;
  LOADING: undefined;
  LOGIN: undefined;
  INPUT: undefined;
};

export default RootStackPramsList;

import { createContext } from 'react';
import {
  RouteGroupContext as IRouteGroupContext,
  RouterContext as IRouterContext,
} from './types';

export const RouteGroupContext = createContext<IRouteGroupContext>({
  baseUrl: '',
  register: () => () => {},
});

export const RouterContext = createContext<IRouterContext>({
  history: null as any,
});

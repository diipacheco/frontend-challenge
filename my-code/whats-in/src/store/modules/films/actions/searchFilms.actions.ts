/* eslint-disable no-unused-vars */
import { action } from 'typesafe-actions';

import { Film, FilmsTypes, Error } from '../types';

export const handleLoadSearchRequest = (filmTitle: string) => action(FilmsTypes.LOAD_SEARCH_REQUEST, { filmTitle });

export const handleLoadSearchSuccess = (film: Film) => action(FilmsTypes.LOAD_SEARCH_SUCCESS, { film });

export const handleLoadSearchFailure = (error: Error) => action(FilmsTypes.LOAD_SEARCH_FAILURE, { error });

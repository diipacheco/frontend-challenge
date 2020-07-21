/* eslint-disable no-unused-vars */
export enum FilmsTypes {
  /**
   * Search Countries
   */
  LOAD_SEARCH_REQUEST = '@wi/LOAD_SEARCH_REQUEST',
  LOAD_SEARCH_SUCCESS = '@wi/LOAD_SEARCH_SUCCESS',
  LOAD_SEARCH_FAILURE = '@wi/LOAD_SEARCH_FAILURE',

}

interface Rating {
  Source: string
  Value: string
}

export interface Error {
  Response: string
  Error: string
}

export interface Film {
  imdbID: string
  Title: string,
  Rated: string
  Runtime: string
  Year: string
  Genre: string
  Director: string
  Actors: string
  Plot: String
  Poster: string
  Ratings: Rating[]
  Favorite?: false

}

export interface FilmState {
  data: Film[]
  loading: boolean
  error: Error | null
}

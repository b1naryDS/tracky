import {initialSeriesState, SeriesState} from "./state";
import { SeriesAction, LOAD_SERIES, LOAD_SERIES_SUCCESS, LOAD_SERIES_FAIL } from './actions';
import { Serie } from 'src/app/models/serie.model';
import { SeriesEffects } from './effects';

/* export function reducer(state = initialSeriesState,  action: SeriesAction
): SeriesState {
  switch (action.type) {
    case LOAD_SERIES: {
      return {
        ...state,
        loading: true,
      };
    }

    case LOAD_SERIES_SUCCESS: {
      const series = action.payload;

      const entities = series.reduce(
        (entities: { [id: number]: Serie }, serie: Serie) => {
          return {
            ...entities,
            [serie.id]: serie,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case LOAD_SERIES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromPizzas.UPDATE_PIZZA_SUCCESS:
    case fromPizzas.CREATE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      const entities = {
        ...state.entities,
        [pizza.id]: pizza,
      };

      return {
        ...state,
        entities,
      };
    }

    case fromPizzas.REMOVE_PIZZA_SUCCESS: {
      const pizza = action.payload;
      const { [pizza.id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities,
      };
    }
  }

  return state;
} */
export function reducer(
    state = initialSeriesState,
    action: SeriesAction
  ): SeriesState {
    switch (action.type) {
      case LOAD_SERIES: {
        console.log("jel ovo opce pozove");
        return {
          ...state,
          loading: true,
        };
      }
  
      case LOAD_SERIES_SUCCESS: {
        const series = action.payload;
        console.log(series);
        return {
          ...state,
          loading: false,
          series,
        };
      }
  
      case LOAD_SERIES_FAIL: {
        return {
          ...state,
          loading: false,
        };
      }
    }
  
    return state;
  }
  

import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Action, combineReducers, configureStore, EnhancedStore, Reducer} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware, {SagaMiddleware} from "redux-saga";

import {favoritesSlice, moviesSlice} from "./slices";
import {rootSaga} from "./sagas";
import Header from "./Header";
import Home from "./Home";
import Movie from "./Movie";
import {PersistConfig, Persistor} from "redux-persist/es/types";

const persistConfig: PersistConfig<any> = {
    key: "root",
    storage,
};

const persistedReducer: Reducer<any, Action> = persistReducer(
    persistConfig,
    combineReducers({
        favorites: favoritesSlice.reducer,
        movies: moviesSlice.reducer,
    })
);
const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();

const store: EnhancedStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
        sagaMiddleware,
    ],
});

sagaMiddleware.run(rootSaga);

const persistor: Persistor = persistStore(store);

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <BrowserRouter>
                    <Header/>
                    <main>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/movies/:id" element={<Movie/>}/>
                        </Routes>
                    </main>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;

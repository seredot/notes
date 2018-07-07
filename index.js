import React from "react";
import { AppRegistry } from "react-native";
import { createStackNavigator } from "react-navigation";
import NoteListContainer from "./app/components/noteListContainer";
import NoteEditorContainer from "./app/components/noteEditorContainer";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./app/reducers";
import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
	key: "root",
	storage
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, applyMiddleware(logger));
let persistor = persistStore(store);

const AppNavigator = createStackNavigator(
	{
		NoteListContainer: { screen: NoteListContainer },
		NoteEditorContainer: { screen: NoteEditorContainer }
	},
	{
		initialRouteName: "NoteListContainer"
	}
);

class App extends React.Component {
	render = () => {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AppNavigator />
				</PersistGate>
			</Provider>
		);
	};
}

AppRegistry.registerComponent("notes", () => App);

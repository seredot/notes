import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AlertIOS
} from "react-native";
import NoteList from "./noteList";
import {
  addNote,
  deleteNote,
  toggleFavoriteNote,
  editingNoteId,
  setFilter
} from "../actions";
import { connect } from "react-redux";
import { Filters } from "../actions";

type Props = {};
class NoteListContainer extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    let leftButtonTitle = navigation.getParam("filterButtonTitle");
    if (leftButtonTitle === undefined)
      leftButtonTitle = "Default";
    return {
      headerTitle: "Notes",
      headerLeft: (
        <Button
          onPress={() => {
            navigation.getParam("toggleFavoriteFilter")();
          }}
          title={leftButtonTitle}
          color="#333"
        />
      ),
      headerRight: (
        <Button
          onPress={() => {
            navigation.getParam("addButtonPressed")();
          }}
          title="➕"
          color="#333"
        />
      )
    };
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      addButtonPressed: this.addButtonPressed,
      toggleFavoriteFilter: this.toggleFavoriteFilter,
      filterButtonTitle: "Favorites",
    });
  }

  addButtonPressed = () => {
    this.props.editingNoteId(null);
    this.props.navigation.navigate("NoteEditorContainer", {
      title: "Add Note"
    });
  };

  toggleFavoriteFilter = () => {
    if (this.props.filter === Filters.ALL) {
      this.props.setFilter(Filters.FAVORITES);
      this.props.navigation.setParams({
        filterButtonTitle: "Show All"
      });
    } else {
      this.props.setFilter(Filters.ALL);
      this.props.navigation.setParams({
        filterButtonTitle: "Favorites"
      });
    }
  };

  onPressItem = itemId => {
    this.props.editingNoteId(itemId);
    this.props.navigation.navigate("NoteEditorContainer", {
      title: "Edit Note"
    });
  };

  onFavoriteButtonPressed = itemId => {
    this.props.toggleFavoriteNote(itemId);
  };

  onDeleteButtonPressed = itemId => {
    this.props.deleteNote(itemId);
  };

  render() {
    return (
      <NoteList
        notes={this.props.filteredNotes}
        onPressItem={this.onPressItem}
        onFavoriteButtonPressed={this.onFavoriteButtonPressed}
        onDeleteButtonPressed={this.onDeleteButtonPressed}
      />
    );
  }
}

getFilteredNotes = (notes, filter) => {
  if (filter === Filters.ALL) return notes;
  else return notes.filter(note => note.favorite === true);
};

const mapStateToProps = state => ({
  notes: state.notes,
  filteredNotes: getFilteredNotes(state.notes, state.filter),
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  addNote: () => dispatch(addNote()),
  deleteNote: noteId => dispatch(deleteNote(noteId)),
  toggleFavoriteNote: noteId => dispatch(toggleFavoriteNote(noteId)),
  editingNoteId: noteId => dispatch(editingNoteId(noteId)),
  setFilter: filterName => dispatch(setFilter(filterName))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteListContainer);

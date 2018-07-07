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
import { addNote, deleteNote, toggleFavoriteNote, editingNoteId } from "../actions";
import { connect } from "react-redux";

type Props = {};
class NoteListContainer extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Notes",
      headerLeft: (
        <Button
          onPress={() => {
            navigation.getParam("addButtonPressed")();
          }}
          title="Favorites"
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
      addButtonPressed: this.addButtonPressed
    });
  }

  addButtonPressed = () => {
    this.props.editingNoteId(null);
    this.props.navigation.navigate("NoteEditor", { title: "Add Note" });
  };

  onPressItem = itemId => {
    this.props.editingNoteId(itemId);
    this.props.navigation.navigate("NoteEditor", { title: "Edit Note" });
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
        notes={this.props.notes}
        onPressItem={this.onPressItem}
        onFavoriteButtonPressed={this.onFavoriteButtonPressed}
        onDeleteButtonPressed={this.onDeleteButtonPressed}
      />
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});

const mapDispatchToProps = dispatch => ({
  addNote: () => dispatch(addNote()),
  deleteNote: noteId => dispatch(deleteNote(noteId)),
  toggleFavoriteNote: noteId => dispatch(toggleFavoriteNote(noteId)),
  editingNoteId: noteId => dispatch(editingNoteId(noteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteListContainer);

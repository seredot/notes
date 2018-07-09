import React from "react";
import NoteEditor from "./noteEditor";

import { addNote, updateNote } from "../actions";
import { connect } from "react-redux";
import uuid from '../utils/uuid';

class NoteEditorContainer extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.editingNoteText ? this.props.editingNoteText : ""
    };
  }

  componentWillUnmount() {
    if (this.props.editingNoteId === null) {
      if (this.state.text.trim().length > 0)
        this.props.addNote(uuid(), this.state.text);
    } else {
      this.props.updateNote(this.props.editingNoteId, this.state.text);
    }
  }

  onChangeText = text => this.setState({ text: text });

  render() {
    return (
      <NoteEditor
        initialText={this.state.text}
        onChangeText={this.onChangeText}
      />
    );
  }
}

const findTextForNoteId = (state, editingNoteId) => {
  if (editingNoteId === undefined) return "";
  let editingNote = state.notes.find(note => note.id === editingNoteId);
  return editingNote !== undefined ? editingNote.text : null;
};

const mapStateToProps = state => ({
  editingNoteId: state.editingNoteId,
  editingNoteText: findTextForNoteId(state, state.editingNoteId)
});

const mapDispatchToProps = dispatch => ({
  addNote: (id, text) => dispatch(addNote(id, text)),
  updateNote: (id, text) => dispatch(updateNote(id, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  NoteEditorContainer
);

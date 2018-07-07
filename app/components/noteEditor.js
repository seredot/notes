import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import styles from "./noteEditorStyles";

export default class NoteEditor extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={this.props.onChangeText}
          multiline={true}
          value={this.props.initialText}
        />
      </View>
    );
  }
}

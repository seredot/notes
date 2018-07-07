import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import styles from "./noteItemStyles";
import Swipeout from "react-native-swipeout";

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.leftButtons = [
      {
        text: "🖤",
        backgroundColor: "#F2EB61",
        onPress: this.onFavoriteButtonPressed
      }
    ];

    this.rightButtons = [
      {
        text: "🗑",
        backgroundColor: "#F2EB61",
        onPress: this.deleteButtonPressed
      }
    ];
  }

  onFavoriteButtonPressed = () => {
    this.props.onFavoriteButtonPressed(this.props.id);
  };

  deleteButtonPressed = () => {
    this.props.onDeleteButtonPressed(this.props.id);
  };

  updateLeftButton = () => {
    let favorite = this.props.favorite ? "💙" : "🖤";
    this.leftButtons[0].text = favorite;
  };

  render() {
    this.updateLeftButton();

    return (
      <Swipeout
        style={styles.swipeOut}
        left={this.leftButtons}
        right={this.rightButtons}
        backgroundColor={"#F2EB61"}
      >
        <TouchableHighlight onPress={() => this.props.onPressItem(this.props.id)}>
          <View style={styles.item}>
            <Text style={styles.text}>{this.props.text}</Text>
          </View>
        </TouchableHighlight>
      </Swipeout>
    );
  }
}

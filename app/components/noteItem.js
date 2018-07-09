import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import styles from "./noteItemStyles";
import Swipeout from "react-native-swipeout";
import Icon from 'react-native-vector-icons/FontAwesome';

const EMPTY_HEART = <View style={styles.swipeButton}><Icon name={"heart"} size={30} color={"#00000066"} /></View>
const FULL_HEART = <View style={styles.swipeButton}><Icon name="heart" size={30} color={"#333"} /></View>
const TRASH = <View style={styles.swipeButton}><Icon name="trash" size={30} color={"#333"} /></View>

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.leftButtons = [
      {
        component: EMPTY_HEART,
        backgroundColor: "#F2EB61",
        onPress: this.onFavoriteButtonPressed
      }
    ];

    this.rightButtons = [
      {
        component: TRASH,
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
    let favorite = this.props.favorite ? FULL_HEART : EMPTY_HEART;
    this.leftButtons[0].component = favorite;
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

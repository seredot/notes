import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import styles from "./noteListStyles";
import NoteItem from "./noteItem";

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({ item }) => {
    return (
      <NoteItem
        {...item}
        onPressItem={this.onPressItem}
        onFavoriteButtonPressed={this.props.onFavoriteButtonPressed}
        onDeleteButtonPressed={this.props.onDeleteButtonPressed}
      />
    );
  };

  onPressItem = itemId => {
    this.props.onPressItem(itemId);
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.props.notes}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item ? item.id : 0}
        />
      </View>
    );
  }
}

import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ActivityIndicator, useTheme, Appbar, Button, TextInput, Avatar, Text, Card } from "react-native-paper";
import { readHistoryData, clearHistory } from "../../redux/actions/homeActions";
import { connect } from "react-redux";
import Toast from "react-native-toast-message";
import {
  Color,
  Const,
  Images,
  Responsive,
} from "../../utils";
import Loader from '../../components/Loader';
import moment from 'moment';
import Clipboard from '@react-native-clipboard/clipboard';

const HistoryScreen = ({ navigation, ...props }) => {
  const insets = useSafeAreaInsets();
  // const { Color } = useTheme();

  const [response, setResponse] = useState([]);

  React.useEffect(() => {
    getHistoryData();
  }, []);

  const getHistoryData = () => {
    props.readHistoryData().then((value) => {
      // console.log(value);
      if (value != null) {
        let data = JSON.parse(value);
        setResponse(data)
      }
    }, (error) => {
      console.log("ERROR => ", error);
      Toast.show({
        type: "error",
        text1: "Something went wrong please try again.",
      });
    });
  };

  const clearHistoryClick = () => Alert.alert('Clear History', 'Are you sure you wants to Clear all the History??', [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    { text: 'OK', onPress: () => clearHistory() },
  ]);

  const clearHistory = () => {
    props.clearHistory().then((value) => {
      Toast.show({
        type: "success",
        text1: "Your History is Cleared.",
      });
      getHistoryData()
    }, (error) => {
      console.log("ERROR => ", error);
      Toast.show({
        type: "error",
        text1: "Something went wrong please try again.",
      });
    });
  }

  const HistoryItem = ({ item, index }) => {
    return (
      <Card style={{ backgroundColor: Color.white, marginHorizontal: 8, marginVertical: 4, borderRadius: 16 }}>
        <Card.Content>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View>
              <Avatar.Image size={80} source={{
                uri: item?.image ? item.image : 'https://reactnative.dev/img/tiny_logo.png',
              }} />
            </View>
            <View style={{ flexDirection: 'column', padding: 8 }}>
              <Text variant="titleMedium">{item?.name}</Text>
              <Text variant="titleMedium">{item?.email}</Text>
              <Text variant="titleMedium">{item?.phone}</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => { navigation.goBack() }} />
          <Appbar.Content title={Const.lang.t("lbl_history")} />
          {
            response.length > 0 && <Appbar.Action icon={Images.ic_delete} onPress={clearHistoryClick} color={Color.colorDelete} />
          }
        </Appbar.Header>
        <StatusBar
          barStyle={"dark-content"}
        />
        {
          response.length > 0 ?
            <View style={{ flex: 1 }}>
              <FlatList
                data={response}
                renderItem={HistoryItem}
                keyExtractor={(item, index) => 'id' + index}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            :
            <View style={[styles.centerItem, { justifyContent: 'center', alignContent: 'center', flex: 1 }]}>
              <Text variant="titleMedium">No Data Avilabe!</Text>
            </View>
        }
      </View >
      <Loader loading={props.isLoading} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white
  },
  containerView: {
    padding: Responsive.heightPx(4)
  },
  centerItem: {
    alignItems: 'center'
  },
  inputTextMargin: {
    marginVertical: Responsive.heightPx(1)
  },
  buttonStyle: {
    marginVertical: Responsive.heightPx(3),
    width: "50%"
  }
});

const mapStateToProps = (state) => ({
  isLoading: state.appLoader?.loading,
  theme: state.home?.theme,
});

const mapDispatchToProps = (dispatch) => ({
  readHistoryData: () =>
    new Promise((resolve, reject) => {
      dispatch(readHistoryData(resolve, reject));
    }),
  clearHistory: () =>
    new Promise((resolve, reject) => {
      dispatch(clearHistory(resolve, reject));
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
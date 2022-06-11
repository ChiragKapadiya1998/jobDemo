//import liraries
import React, {Component, useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {getAllUsersRequest} from '../slice/dataSlice/slice';

// create a component
const HomeScreen = () => {
  const dispatch = useDispatch();
  const {userData} = useSelector(state => state?.Home);
  const [pageData, setPageData] = useState();
  const [count, setCount] = useState(6);
  useEffect(() => {
    dispatch(getAllUsersRequest());

    const data = userData?.slice(0, count);
    setPageData(data);
    // setCount(count + 6);
  }, [count]);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    // setRefreshing(true);
    dispatch(getAllUsersRequest());
    const data = userData?.slice(0, count);
    setPageData(data);
    setRefreshing(false);
  }, []);

  const onEnd = () => {
    setCount(count + 6);
  };

  const renderView = item => {
    return (
      <View>
        <TouchableOpacity
          style={{
            flex: 1,
            borderWidth: 1,
            height: 110,
            marginHorizontal: 20,
            borderRadius: 10,
            justifyContent: 'center',
            marginBottom: 10,
            padding: 10,
          }}>
          <Text style={{color: 'black'}}>
            <Text>Name: </Text>
            {item?.item?.name}
          </Text>
          <Text style={{color: 'black'}}>
            <Text>UserName: </Text>
            {item?.item?.username}
          </Text>
          <Text style={{color: 'black'}}>
            <Text>Phone Number: </Text>
            {item?.item?.phone}
          </Text>
          <Text style={{color: 'black'}}>
            <Text>Website: </Text>
            {item?.item?.website}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView
      nestedScrollEnabled
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <FlatList
          data={userData}
          renderItem={renderView}
          onEndReached={onEnd}
        />
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
  },
});

//make this component available to the app
export default HomeScreen;

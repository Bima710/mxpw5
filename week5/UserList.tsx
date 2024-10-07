import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import userData from './data.json';
import styles from './styles';

const UserList =({ navigation}) =>{
    return (
        <ScrollView>
          {userData.map((users) => {
            return (
              <view style={styles.userList} key={users.name}>
              <TouchableOpacity 
              style={styles.card}
              onPress={() =>
                navigation.navigate("Profile", { userName: useres.name })
              }
              >
              <Image
              source ={{
                uri: users.photo_url,
              }}
              style={styles.avatar}
              />
              <view>
                <text style={styles.boldText}>{users.name}</text>
                <text>{users.email}</text>
              </view>
            </TouchableOpacity>
          </view>
        );
      })}
    </ScrollView>
    );
  };
export default UserList;
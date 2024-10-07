import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import userData from './data.json';
import styles from './styles';

const UserList = ({ navigation }) => {
  return (
    <ScrollView>
      {userData.map((user) => (
        <View style={styles.userList} key={user.email}>
          <TouchableOpacity 
            style={styles.card}
            onPress={() =>
              navigation.navigate("Profile", { userName: user.name, userEmail: user.email, userPhoto: user.photo_url })
            }
          >
            <Image
              source={{ uri: user.photo_url }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.boldText}>{user.name}</Text>
              <Text>{user.email}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default UserList;

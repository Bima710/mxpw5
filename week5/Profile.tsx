import { Button, Text, View, Image } from 'react-native';

const Profile = ({ navigation, route }) => {
  const { userName, userEmail, userPhoto } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{ uri: userPhoto }} style={{ width: 100, height: 100, borderRadius: 50 }} />
      <Text>{userName}'s Profile</Text>
      <Text>Email: {userEmail}</Text>
      <Button title="Go Back" onPress={() => navigation.navigate("UserList")} />
    </View>
  );
};

export default Profile;

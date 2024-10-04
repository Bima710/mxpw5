import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import userData from './data.json';
import styles from './styles';

const UserList =() =>{
    return (
        <ScrollView style={styles.scrollView}>
      {userData.map((user) => (
        <Card style={styles.card} key={user.name}>
          <Card.Title
            title={user.name}
            subtitle={user.email}
            left={(props) => <Avatar.Image {...props} source={{ uri: user.photo_url }} />}
          />
          <Card.Content>
            <Title>{user.name}</Title>
            <Paragraph>{user.email}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
    )
}
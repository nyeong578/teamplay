import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PinkButton from '../components/PinkButton';
import axios from 'axios';
import auth from '@react-native-firebase/auth';
import PushNotification from 'react-native-push-notification';

const SendNotice = () => {

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'team-channel',
      channelName: 'Team Channel',
    })
  }

  useEffect(() => {
    createChannel();
  }, [])

  const [title, setTitle] = useState('');
  const [noticeType, setNoticeType] = useState('');
  const [notificationText, setNotificationText] = useState('');

  const handleButtonPress = async () => {
    PushNotification.getChannels(function(channel_ids) {
      console.log(channel_ids);
    })

    PushNotification.localNotification({
      channelId: 'team-channel',
      title: title,
      message: notificationText 
    })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>알림 보내기</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputLine}>
          <Text style={styles.text}>알림 제목</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.inputLine}>
          <Text style={styles.text}>알림 내용</Text>
          <TextInput
            style={styles.commentInput}
            multiline
            numberOfLines={4}
            value={notificationText}
            onChangeText={setNotificationText}
          />
        </View>
      </View>
      <PinkButton
        style={styles.input}
        text="알림 보내기"
        light={true}
        onPress={handleButtonPress}
      />
    </View>
  );
};

export default SendNotice;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 30,
  },
  inputLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    margin: 10,
  },
  text: {
    fontSize: 14,
    color: 'black',
    fontWeight: '100',
    marginRight: 15,
  },
  input: {
    borderRadius: 10,
    borderColor: '#6C6C6C',
    borderWidth: 1,
    width: '60%',
    height: 30,
    fontSize: 14,
    padding: 5,
  },
  pickerLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    margin: 10,
  },
  typePicker: {
    borderRadius: 10,
    borderColor: '#6C6C6C',
    borderWidth: 1,
    width: '55%',
    height: 30,
    fontSize: 12,
  },
  peoplePicker: {
    borderRadius: 10,
    borderColor: '#6C6C6C',
    borderWidth: 1,
    width: '55%',
    height: 30,
    fontSize: 12,
  },
  commentInput: {
    borderRadius: 10,
    borderColor: '#6C6C6C',
    borderWidth: 1,
    width: '60%',
    height: 150,
    fontSize: 14,
    padding: 5,
  },
});
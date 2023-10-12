import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import Ionic from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';

const MyUpload = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.todo}>오픈소스 사례 정리하기</Text>
        <Text style={styles.time}>8/20 20:00</Text>
      </View>
      <View style={styles.line}></View>
      <ScrollView style={styles.upload}>
        <View style={styles.uploadContainer}>
          <Text style={styles.title}>제출 상황</Text>
          <LinearGradient
            style={styles.uploadBox}
            colors={['#B9E3FC', '#FFFFFF']}>
            <ScrollView style={styles.fileList}>
              <View style={styles.file}>
                <Text style={styles.fileName}>오픈소스 사례-챗봇.hwp</Text>
                <Text style={styles.time}>8/12 17:34</Text>
              </View>
              <View style={styles.line}></View>
              <View style={styles.file}>
                <Text style={styles.fileName}>오픈소스 사례-챗봇.hwp</Text>
                <Text style={styles.time}>8/12 17:34</Text>
              </View>
              <View style={styles.line}></View>
            </ScrollView>
          </LinearGradient>
          <Button
            style={styles.uploadButton}
            text="파일 업로드하기"
            light={true}
          />
          <View style={styles.comment}>
            <Text style={styles.title}>코멘트</Text>
            <View style={styles.bubbles}>
              <View style={styles.commentLine}>
                <Image style={styles.image} />
                <LinearGradient
                  style={styles.chatbox}
                  colors={['#E9E9EB', '#FFFFFF']}>
                  <Text style={styles.chatboxText}>
                    챗지피티 이외의 다양한 챗봇의 사례가 더 있었으면 좋겠어
                  </Text>
                </LinearGradient>
              </View>
              <View style={styles.commentLine}>
                <Image style={styles.image} />
                <LinearGradient
                  style={styles.chatbox}
                  colors={['#E9E9EB', '#FFFFFF']}>
                  <Text style={styles.chatboxText}>
                    챗지피티 이외의 다양한 챗봇의 사례가 더 있었으면 좋겠어
                  </Text>
                </LinearGradient>
              </View>
              <View style={styles.commentLine}>
                <Image style={styles.image} />
                <LinearGradient
                  style={styles.chatbox}
                  colors={['#E9E9EB', '#FFFFFF']}>
                  <Text style={styles.chatboxText}>
                    챗지피티 이외의 다양한 챗봇의 사례가 더 있었으면 좋겠어
                  </Text>
                </LinearGradient>
              </View>
              <View style={styles.commentLine}>
                <Image style={styles.image} />
                <LinearGradient
                  style={styles.chatbox}
                  colors={['#E9E9EB', '#FFFFFF']}>
                  <Text style={styles.chatboxText}>
                    챗지피티 이외의 다양한 챗봇의 사례가 더 있었으면 좋겠어
                  </Text>
                </LinearGradient>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyUpload;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  top: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    margin: 10,
  },
  todo: {
    fontSize: 20,
    color: 'black',
    fontWeight: '900',
  },
  time: {
    fontSize: 12,
    color: 'black',
  },
  line: {
    width: '95%',
    height: 1,
    backgroundColor: 'black',
  },
  uploadContainer: {
    alignItems: 'center',
  },
  upload: {},
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: '900',
    marginTop: 20,
    marginBottom: 15,
  },
  uploadBox: {
    width: 330,
    height: 180,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
  },
  file: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  fileName: {
    fontSize: 12,
    color: 'black',
  },
  comment: {
    alignItems: 'center',
    height: '45%',
    marginTop: 40,
  },
  bubbles: {},
  commentLine: {
    flexDirection: 'row',
    width: 330,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'skyblue',
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    color: '#D9D9D9',
  },
  chatbox: {
    borderRadius: 20,
    padding: 10,
    width: '80%',
    height: 80,
  },
  chatboxText: {
    fontSize: 16,
    color: 'black',
  },
  message: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    width: 290,
    height: 30,
    backgroundColor: '#F1F1F1',
    flexDirection: 'row',
    borderRadius: 10,
    margin: 5,
    paddingLeft: 10,
    paddingVertical: 0,
    color: '#545454',
  },
  sendIcon: {
    fontSize: 30,
    color: '#749DF6',
  },
});

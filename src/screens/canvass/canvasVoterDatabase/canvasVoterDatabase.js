import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Button from '../../../components/button';
import Line from '../../../components/line';
import theme from '../../../constants/theme';
import {Icon} from '@rneui/themed';
import Styles from './styles';

const tabData = [
  {
    title: 'Bilbo Baggins',
    description1: 'M',
    description2: '102',
    description3: 'Independent',
    color: '#5271FB',
  },
  {
    title: 'Bilbo Baggins',
    description1: 'M',
    description2: '32',
    description3: 'Republican',
    color: '#FD914D',
  },
  {
    title: 'Frodo Gardner',
    description1: 'M',
    description2: '45',
    description3: 'Republican',
    color: '#FDBD59',
  },
  {
    title: 'Samwise Gamgee',
    description1: 'M',
    description2: '43',
    description3: 'Republican',
    color: '#1EBBC3',
  },
];

const CanvassVoterDatabase = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.mainCont}>
      <View style={Styles.header}>
        <Icon
          onPress={() => {
            navigation.goBack();
          }}
          name="left"
          type="ant-design"
          color={theme.colors.red}
        />
        <Text style={Styles.headerText}>
          1 Bag End, The Shire, Middle Earth:
        </Text>
        <Icon name="left" type="ant-design" color={'transparent'} />
      </View>
      <Line />
      <ScrollView>
        <View>
          <Text style={Styles.introText}>
            "Hi, my name is ______ and I am here on behalf of Hannah Jacobs for
            Congress. Are you available for a brief conversation?"
          </Text>
          <Line />
        </View>
        {tabData.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('VoterDetail');
              }}
              style={{borderRightWidth: 10, borderColor: item.color}}>
              <View style={Styles.tab}>
                <Text style={Styles.tabTitle}>{item.title}</Text>
                <View style={Styles.desciptionCont}>
                  <Text style={Styles.description}>{item.description1}</Text>
                  <Text style={Styles.description}>|</Text>
                  <Text style={Styles.description}>{item.description2}</Text>
                  <Text style={Styles.description}>|</Text>
                  <Text style={Styles.description}>{item.description3}</Text>
                </View>
              </View>
              <Line elevation={0} />
            </TouchableOpacity>
          );
        })}
        <View style={Styles.options}>
          <Button
            wid="48%"
            color={'#D9D9D9'}
            title={'Refused'}
            titleColor="#545454"
          />
          <Button
            wid="48%"
            color={'#D9D9D9'}
            title={'Restricted Acess'}
            titleColor="#545454"
          />
        </View>
        <View style={Styles.options}>
          <Button
            wid="49%"
            color={'#D9D9D9'}
            title={'No One Home'}
            titleColor="#545454"
          />
          <Button
            wid="48%"
            color={'#D9D9D9'}
            title={'Litterature Drop'}
            titleColor={'#545454'}
            onPress={() => {}}
          />
        </View>
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          wid="90%"
          color={theme.colors.red}
          title="Finish"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default CanvassVoterDatabase;

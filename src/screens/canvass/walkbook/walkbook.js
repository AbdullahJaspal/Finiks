import {Icon} from '@rneui/themed';
import React from 'react';
import {SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';
import Line from '../../../components/line';
import theme from '../../../constants/theme';
import Styles from './styles';

const Walkbook = ({navigation}) => {
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
        <Text style={Styles.headerTitle}>District 1 Canvassing 55+</Text>
        <Icon name="left" type="ant-design" color={'transparent'} />
      </View>
      <Line />
      <View>
        <View style={{height: 25}}></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CanvassListView');
          }}
          style={Styles.tab}>
          <Text style={Styles.tabText}>District 1 Canvassing 55+ - 001</Text>
          <Image source={require('../../../images/arrow.png')} />
          <Text style={Styles.tabNumber}>0/4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CanvassListView');
          }}
          style={Styles.tab}>
          <Text style={Styles.tabText}>District 1 Canvassing 55+ - 002</Text>
          <Image source={require('../../../images/arrow.png')} />
          <Text style={Styles.tabNumber}>0/50</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CanvassListView');
          }}
          style={Styles.tab}>
          <Text style={Styles.tabText}>District 1 Canvassing 55+ - 003</Text>
          <Image source={require('../../../images/arrow.png')} />
          <Text style={Styles.tabNumber}>0/50</Text>
        </TouchableOpacity>
      </View>
      <Image
        resizeMode="contain"
        style={Styles.logo}
        source={require('../../../images/logoBlack.png')}
      />
    </SafeAreaView>
  );
};

export default Walkbook;

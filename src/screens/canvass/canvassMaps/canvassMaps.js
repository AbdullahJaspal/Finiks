import React from 'react';
import MapView from 'react-native-maps';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import Styles from './styles';
import theme from '../../../constants/theme';

const CanvassMaps = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Styles.header}>
        <Icon
          onPress={() => {
            navigation.goBack();
          }}
          name={'left'}
          type="ant-design"
          color={theme.colors.red}
        />
      </View>
      <View style={Styles.tabCont}>
        <Icon name={'location-pin'} type="entypo" color={theme.colors.red} />
        <View style={Styles.tabButtonCont}>
          <TouchableOpacity
          onPress={()=>{

          }}
          style={[Styles.button]}>
            <Text>List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[Styles.button, {backgroundColor: '#D1D1D1'}]}>
            <Text>Maps</Text>
          </TouchableOpacity>
        </View>
        <Icon
          onPress={() => {
            navigation.navigate('MapSetting');
          }}
          name={'info-with-circle'}
          type="entypo"
          color={theme.colors.red}
        />
      </View>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
};

export default CanvassMaps;

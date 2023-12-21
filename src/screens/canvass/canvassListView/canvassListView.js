import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import theme from '../../../constants/theme';
import Styles from './styles';
import {Icon} from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Line from '../../../components/line';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const data = [
  {
    text: '1 Bag End, Hobbiton, Westfarthing, The Shire',
    color: '#FD914D',
    icon: 'home-floor-1',
  },
  {
    text: '1 Wending Way, Hobbiton, Westfarthing, The Shire',
    color: '#5271FB',
    icon: 'home-floor-2',
  },
  {
    text: '2 Harrow Road, Hobbiton, Westfarthing, The Shire',
    color: '#FDBD59',
    icon: 'home-floor-3',
  },
  {
    text: '1 Pleasant Street, Hobbiton, Westfarthing, The Shire',
    color: '#20C2CB',
    icon: 'home-floor-3',
  },
];

const CanvassListView = ({navigation}) => {
  const [maps, setMaps] = useState(false);
  return (
    <SafeAreaView style={Styles.mainCont}>
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
            onPress={() => {
              setMaps(false);
            }}
            style={[
              Styles.button,
              {backgroundColor: maps ? 'white' : '#D1D1D1'},
            ]}>
            <Text>List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMaps(true);
            }}
            style={[
              Styles.button,
              {backgroundColor: maps ? '#D1D1D1' : 'white'},
            ]}>
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
      <Line />
      {maps ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            height: 400,
            width: 400,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      ) : (
        <ScrollView>
          {data.map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CanvassVoterDatabase');
                }}>
                <View style={Styles.tabs}>
                  <Text style={Styles.tabText}>{item.text}</Text>
                  <MaterialCommunityIcons
                    name={item.icon}
                    color={item.color}
                    size={45}
                  />
                </View>
                <Line elevation={0} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default CanvassListView;

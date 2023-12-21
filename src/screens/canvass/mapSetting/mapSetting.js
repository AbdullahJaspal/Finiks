import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Line from '../../../components/line';
import {Icon} from 'react-native-elements';
import theme from '../../../constants/theme';
import Styles from './styles';

const MapSetting = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.mainCont}>
      <View style={Styles.header}>
        <Text
          onPress={() => {
            navigation.goBack();
          }}
          style={Styles.close}>
          Close
        </Text>
        <Text style={Styles.headerTitle}>Map Setting</Text>
        <Text
          onPress={() => {
            navigation.goBack();
          }}
          style={Styles.close}>
          Update
        </Text>
      </View>
      <Line />
      <View style={[Styles.tab, {marginTop: 10}]}>
        <Text>Standard</Text>
        <BouncyCheckbox
          size={18}
          fillColor="#49C661"
          unfillColor="#FFFFFF"
          iconStyle={{borderColor: '#D9D9D9'}}
          onPress={() => {}}
        />
      </View>
      <View style={Styles.tab}>
        <Text>Satellite</Text>
        <BouncyCheckbox
          size={18}
          fillColor="#49C661"
          unfillColor="#FFFFFF"
          iconStyle={{borderColor: '#D9D9D9'}}
          onPress={() => {}}
        />
      </View>
      <View style={Styles.tab}>
        <Text>Hybrid</Text>
        <BouncyCheckbox
          size={18}
          fillColor="#49C661"
          unfillColor="#FFFFFF"
          iconStyle={{borderColor: '#D9D9D9'}}
          onPress={() => {}}
        />
      </View>
      <View style={Styles.lowerTab}>
        <Icon name="home" type="entypo" />
        <Text style={{marginLeft: 10}}> Completed</Text>
      </View>
      <View style={Styles.lowerTab}>
        <Icon name="home" type="entypo" color={theme.colors.red} />
        <Text style={{marginLeft: 10}}> In Progress</Text>
      </View>
    </SafeAreaView>
  );
};

export default MapSetting;

import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import theme from '../../../constants/theme';
import Styles from './styles';

const CanvassHome = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.mainCont}>
      <View style={Styles.header}>
        <Icon
          onPress={() => {
            navigation.navigate('AddNewVoter');
          }}
          name="add-user"
          type="entypo"
          color={theme.colors.red}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Accounts');
          }}
          style={Styles.nameCont}>
          <Icon color="#D12E2F" name="chevron-small-down" type="entypo" />
          <Text style={{fontWeight: 'bold', color: '#545454'}}>
            HJ For Congress
          </Text>
          <Icon
            type="material-community"
            name="card-multiple"
            color="#D12E2F"
            size={18}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.lowerCont}>
        <Text style={Styles.searchText}>Search</Text>
        <View style={Styles.byVoterCont}>
          <Text style={Styles.byVoterText}>By Voter:</Text>
          <View style={Styles.inputCont}>
            <TextInput style={Styles.input} placeholder="Name"></TextInput>
          </View>
          <View style={{height: 20}}></View>
          <View style={Styles.inputCont}>
            <TextInput
              style={Styles.input}
              placeholder="Location or Address"></TextInput>
          </View>
        </View>
        <Text style={Styles.orText}>OR</Text>
        <View style={Styles.byVoterCont}>
          <Text style={Styles.byVoterText}>By List:</Text>
          <View style={Styles.inputCont}>
            <TextInput
              style={Styles.input}
              placeholder="Location or Address"></TextInput>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CanvassAccount');
          }}
          style={Styles.searchButton}>
          <Icon name="search" type="font-awesome" color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default CanvassHome;

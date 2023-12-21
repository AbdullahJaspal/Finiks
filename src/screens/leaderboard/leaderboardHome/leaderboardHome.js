import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Icon} from '@rneui/themed';
import Styles from './styles';
import theme from '../../../constants/theme';
import Line from '../../../components/line';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {moderateScale} from '../../../constants/ScalingUnit';

const LeaderboardHome = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.mainCont}>
      <View style={Styles.header}>
        <Icon
          onPress={() => {
            navigation.navigate('AddToTeam');
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
      <Line />
      <ScrollView>
        <View style={Styles.textCont}>
          <View style={Styles.boxCont}>
            <View style={Styles.box}>
              <Text style={{color: theme.colors.red}}>You</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 25,
                  color: theme.colors.red,
                }}>
                214
              </Text>
            </View>

            <View style={[Styles.box, {backgroundColor: theme.colors.red}]}>
              <Text style={{color: theme.colors.white}}>Campaign Total</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 25,
                  color: theme.colors.white,
                }}>
                4,010
              </Text>
            </View>
          </View>
        </View>
        <View style={Styles.titleCont}>
          <Text style={Styles.title}>Leaderboard</Text>
          <Text style={Styles.description}>
            Influence 25 more voters to make it onto the top 50 Leaderboard
          </Text>
        </View>

        <View style={Styles.tab}>
          <View style={Styles.icon}>
            <Icon name="leaderboard" color={theme.colors.white} />
          </View>
          <Text> Voters Influenced</Text>
          <BouncyCheckbox
            size={18}
            fillColor="#49C661"
            unfillColor="#FFFFFF"
            iconStyle={{borderColor: '#D9D9D9'}}
            onPress={() => {
              navigation.navigate('Criteria');
            }}
          />
        </View>

        <TouchableOpacity style={Styles.tab}>
          <View
            style={[
              Styles.icon,
              {
                backgroundColor: 'white',
                borderBottomColor: theme.colors.red,
                borderWidth: 1.5,
              },
            ]}>
            <Icon name="medical-services" color={theme.colors.red} />
          </View>
          <Text> Voters Influenced</Text>
          <BouncyCheckbox
            size={18}
            fillColor="#49C661"
            unfillColor="#FFFFFF"
            iconStyle={{borderColor: '#D9D9D9'}}
            onPress={() => {
              navigation.navigate('Timeline');
            }}
          />
        </TouchableOpacity>
        <View style={Styles.leaderboardTop}>
          <View style={Styles.leaderboardTitleCont}>
            <Icon name="medal" type="font-awesome-5" color="#FD914D" />
            <Text style={Styles.leaderboardTitle}>Top 50 Leaderboard</Text>
          </View>
          <View style={[Styles.tab, {width: '90%'}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../../images/first.png')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginLeft: moderateScale(20),
                }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 100,
                    marginRight: 10,
                  }}
                  source={require('../../../images/profile.jpeg')}
                />
                <Text style={{fontWeight: '600', fontSize: 16}}>
                  Gandalph The White
                </Text>
              </View>
            </View>
            <Text style={{fontWeight: '600', fontSize: 16}}>420</Text>
          </View>

          <View style={[Styles.tab, {width: '90%'}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../../images/second.png')}
              />
              <View style={Styles.profileNameCont}>
                <Image
                  style={Styles.profile}
                  source={require('../../../images/profile2.jpeg')}
                />
                <Text style={{fontWeight: '600', fontSize: 16}}>
                  Legolas Son of Thranduil
                </Text>
              </View>
            </View>
            <Text style={{fontWeight: '400', fontSize: 16}}>345</Text>
          </View>
          <View style={[Styles.tab, {width: '90%'}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../../images/third.png')}
              />
              <View style={Styles.profileNameCont}>
                <Image
                  style={Styles.profile}
                  source={require('../../../images/profile3.jpeg')}
                />
                <Text style={{fontWeight: '600', fontSize: 16}}>
                  Gimli son of Glóin
                </Text>
              </View>
            </View>
            <Text style={{fontWeight: '400', fontSize: 16}}>420</Text>
          </View>
          <View style={[Styles.tab, {width: '90%'}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={Styles.position}>4</Text>
              <View style={Styles.profileNameCont}>
                <Image
                  style={Styles.profile}
                  source={require('../../../images/accountImgL.png')}
                />
                <Text style={{fontWeight: '600', fontSize: 16}}>
                  Boromir son of Denethor II
                </Text>
              </View>
            </View>
            <Text style={{fontWeight: '400', fontSize: 16}}>370</Text>
          </View>
          <View style={[Styles.tab, {width: '90%'}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={Styles.position}>5</Text>
              <View style={Styles.profileNameCont}>
                <Image
                  style={Styles.profile}
                  source={require('../../../images/accountImgL.png')}
                />
                <Text style={{fontWeight: '600', fontSize: 16}}>
                  Faramir son of Denethor II
                </Text>
              </View>
            </View>
            <Text style={{fontWeight: '400', fontSize: 16}}>320</Text>
          </View>
          <View style={{height: 30}}></View>
        </View>
        <View style={{height: 50}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LeaderboardHome;

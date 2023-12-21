import React, {useState} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Button from '../../../components/button';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Styles from './styles';

const {width, height} = Dimensions.get('screen');

let surveydata = [
  {
    key: 1,
    text: 'Do you plan to vote in this next election?',
    color: '#FD914D',
  },
  {
    key: 2,
    text: 'Are You Registered To Vote By Mail?',
    color: '#FDBD59',
  },
  {
    key: 3,
    text: 'Do You Support Hannah For Congress?',
    color: '#5271FB',
  },
  {
    key: 4,
    text: 'What are the most important issues to you?',
    color: '#20C2CB',
  },
  {
    key: 5,
    text: 'What are the most important issues to you?',
    color: '#8C52FB',
  },
  {
    key: 6,
    text: 'What are the most important issues to you?',
    color: '#FC5757',
  },
];

let tags = [
  {
    name: 'Vector',
  },
  {
    name: 'VBM Reg',
  },
  {
    name: 'VBM Unegistered',
  },
  {
    name: 'Doner',
  },
  {
    name: 'Volunteer',
  },
  {
    name: 'Pro-Gun',
  },
  {
    name: 'Pro-Control',
  },
  {
    name: 'Bernie Sander',
  },
  {
    name: 'Trump Supporter',
  },
];

const PhoneHome = ({navigation}) => {
  const [surveyEnabled, setSurveyEnabled] = useState(false);
  const [modalEnabled, setModalEnabled] = useState(false);
  const [customEnabled, setCustomEnabled] = useState(true);
  const [campaignEnabled, setCampaignEnabled] = useState(!customEnabled);
  const [tagData, setTagData] = useState(tags);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: width / 2.5,
          height: width / 2.3,
          backgroundColor: item.color,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: moderateScale(15),
          marginTop: 10,
        }}>
        <Text style={{color: 'white', fontSize: moderateScale(16)}}>
          {item.text}
        </Text>
      </View>
    );
  };
  const tagSearch = val => {
    const search = tags.filter(item => {
      if (item.name.includes(val)) return item;
    });
    setTagData(search);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Styles.headerCont}>
        <View style={Styles.header}>
          <View style={Styles.iconCont}>
            <Text
              style={{color: theme.colors.red, fontSize: moderateScale(14)}}>
              Done
            </Text>
          </View>
          <Text
            style={{
              color: '#545454',
              fontWeight: '700',
              fontSize: moderateScale(19),
            }}>
            Frodo Baggins
          </Text>
          <Icon
            name="home"
            type="feather"
            color="#D12E2F"
            size={moderateScale(20)}
            onPress={() => {
              navigation.navigate('CanvassStack');
            }}
          />
        </View>
      </View>
      <View style={Styles.lowerHeaderCont}>
        <TouchableOpacity
          style={Styles.iconC}
          onPress={() => {
            navigation.navigate('SelectMessage');
          }}>
          <Icon name="message" type="entypo" color="#D12E2F" size={25} />
          <Text style={{fontSize: 12, color: theme.colors.red}}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`tel:${'0123456789'}`);
          }}
          style={Styles.iconC}>
          <Icon name="phone" type="entypo" color="#D12E2F" size={25} />
          <Text style={{fontSize: 12, color: theme.colors.red}}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddToTeam');
          }}
          style={Styles.iconC}>
          <Icon name="add-user" type="entypo" color="#D12E2F" size={25} />
          <Text style={{fontSize: 12, color: theme.colors.red}}>
            Add to Team
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SelectEmail');
          }}
          style={Styles.iconC}>
          <Icon name="mail" type="entypo" color="#D12E2F" size={25} />
          <Text style={{fontSize: 12, color: theme.colors.red}}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UpdateVoterInfo');
          }}
          style={Styles.iconC}>
          <Icon
            name="dots-three-horizontal"
            type="entypo"
            color="#D12E2F"
            size={25}
          />
          <Text style={{fontSize: 12, color: theme.colors.red}}>Update</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: moderateScale(15),
            marginVertical: 10,
            marginLeft: 20,
          }}>
          Last Contacted 3/21/2021 - 3PM
        </Text>
        <ScrollView contentContainerStyle={Styles.tabsCont}>
          <View style={Styles.tab}>
            <Text style={{fontSize: 15, color: 'white'}}>Voter</Text>
          </View>
          <View style={Styles.tab}>
            <Text style={{fontSize: 15, color: 'white'}}>Pro-Gun</Text>
          </View>
          <View style={Styles.tab}>
            <Text style={{fontSize: 15, color: 'white'}}>VBM Reg</Text>
          </View>
          <TouchableOpacity
            style={Styles.add}
            onPress={() => {
              setModalEnabled(true);
            }}>
            <Icon
              onPress={() => {
                setModalEnabled(true);
              }}
              name="plus"
              type={'font-awesome'}
              size={16}
              color="white"
            />
          </TouchableOpacity>
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalEnabled}
          style={{flex: 1, justifyContent: 'center', backgroundColor: 'green'}}>
          <View style={Styles.modalContainer}>
            <View style={Styles.modal}>
              <View style={Styles.modalHead}>
                <Text
                  onPress={() => {
                    setModalEnabled(false);
                  }}
                  style={Styles.cancel}>
                  Cancel
                </Text>
                <Text style={Styles.modalTitle}>Tags</Text>
                <Text
                  onPress={() => {
                    setModalEnabled(false);
                  }}
                  style={Styles.cancel}>
                  Save
                </Text>
              </View>
              <View style={Styles.modalTabs}>
                <TouchableOpacity
                  onPress={() => {
                    setCustomEnabled(true);
                    setCampaignEnabled(false);
                  }}
                  style={[
                    Styles.tabs,
                    {
                      borderBottomWidth: 0.5,
                      borderBottomColor: customEnabled
                        ? theme.colors.red
                        : '#707070',
                    },
                  ]}>
                  <Text
                    style={{
                      color: customEnabled ? theme.colors.red : '#707070',
                    }}>
                    Custom Tags
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setCampaignEnabled(true);
                    setCustomEnabled(false);
                  }}
                  style={[
                    Styles.tabs,
                    {
                      borderBottomWidth: 0.5,
                      borderBottomColor: campaignEnabled
                        ? theme.colors.red
                        : '#707070',
                    },
                  ]}>
                  <Text
                    style={{
                      color: campaignEnabled ? theme.colors.red : '#707070',
                    }}>
                    Campaign Tags
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={Styles.searchCont}>
                <View style={Styles.search}>
                  <Icon
                    size={15}
                    color="#A6A6A6"
                    name="search1"
                    type="ant-design"
                  />
                  <TextInput
                    style={{
                      width: '90%',
                      padding: 2,
                    }}
                    placeholder="Search"
                    onChangeText={val => {
                      tagSearch(val);
                    }}></TextInput>
                </View>
                <Icon
                  size={18}
                  color={theme.colors.red}
                  name="pencil"
                  type="entypo"
                />
              </View>
              <ScrollView>
                {tagData?.map(item => {
                  return (
                    <View
                      style={{
                        width: '100%',
                        borderBottomWidth: 0.5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: moderateScale(10),
                        paddingVertical: moderateScale(10),
                      }}>
                      <Text>{item.name}</Text>
                      <BouncyCheckbox
                        size={18}
                        fillColor="#49C661"
                        unfillColor="#FFFFFF"
                        iconStyle={{borderColor: '#D9D9D9'}}
                        onPress={() => {
                          navigation.navigate('PhoneHome');
                        }}
                      />
                    </View>
                  );
                })}
                <View style={{height: 20}}></View>
              </ScrollView>
            </View>
          </View>
        </Modal>
        {surveyEnabled ? (
          <FlatList
            style={{
              width: '90%',
              alignSelf: 'center',
              height: width,
            }}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={renderItem}
            data={surveydata}
            keyExtractor={index => index}
            horizontal={false}
            numColumns={2}
            nestedScrollEnabled
          />
        ) : (
          <View>
            <View style={Styles.profileInfoCont}>
              <View style={{width: '75%'}}>
                <Text style={Styles.title}>Name</Text>
                <Text
                  style={{
                    color: '#545454',
                    marginLeft: moderateScale(20),
                    fontSize: moderateScale(12),
                  }}>
                  Frodo Baggins
                </Text>
                <Text style={Styles.title}>Address</Text>
                <Text
                  style={{
                    color: '#545454',
                    marginLeft: moderateScale(20),
                    fontSize: moderateScale(12),
                  }}>
                  1 Bag End, The Shire, Middle Earth 10323
                </Text>
                <Text style={Styles.title}>Demographics</Text>
                <Text
                  style={{
                    color: '#545454',
                    marginLeft: moderateScale(20),
                    fontSize: moderateScale(12),
                    marginBottom: 5,
                  }}>
                  Male {'  '}|{'  '}45 Years Old{'  '}|{'  '}Republican
                </Text>
              </View>
              <View style={{width: '25%'}}>
                <Image
                  resizeMode="contain"
                  style={{width: moderateScale(70), height: moderateScale(70)}}
                  source={require('../../../images/accountImgL.png')}
                />
              </View>
            </View>

            <View
              style={{
                width: width,
                marginTop: moderateScale(10),
                paddingHorizontal: moderateScale(20),
                paddingVertical: moderateScale(10),
                backgroundColor: '#E4E4E4',
              }}>
              <Text>
                Hello, is Frodo available?{'\n'}
                {'\n'}Hi, my name’s John and I’m with the Hannah Jacobs for
                Congress campaign.{'\n'}
                {'\n'}I am just calling to let you know about the election
                coming up on July 18th.{'\n'}
                {'\n'}It's going to be extremely important that we all get out
                and vote.{'\n'}
                {'\n'}Do you have a few minutes for me to ask you a couple
                questions?
              </Text>
            </View>
          </View>
        )}
        <View style={Styles.options}>
          <Button
            wid="48%"
            color={'#D9D9D9'}
            title={'Wrong Number'}
            titleColor="#545454"
          />
          <Button
            wid="48%"
            color={'#D9D9D9'}
            title={'Do Not Call'}
            titleColor="#545454"
          />
        </View>
        <View style={Styles.options}>
          <Button
            wid="49%"
            color={'#D9D9D9'}
            title={'Contact Later'}
            titleColor="#545454"
          />
          <Button
            wid="48%"
            color={surveyEnabled ? '#FD914D' : '#D9D9D9'}
            title={'Survey'}
            titleColor={surveyEnabled ? 'white' : '#545454'}
            onPress={() => {
              setSurveyEnabled(!surveyEnabled);
            }}
          />
        </View>
        <Button wid="90%" color="#FD914D" title="Next Voter" />
        <View style={{height: 25}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default PhoneHome;

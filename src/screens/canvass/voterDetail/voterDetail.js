import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Line from '../../../components/line';
import {moderateScale} from '../../../constants/ScalingUnit';
import theme from '../../../constants/theme';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Styles from './styles';
import Button from '../../../components/button';

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

const VoterDetail = ({navigation}) => {
  const [modalEnabled, setModalEnabled] = useState(false);
  const [customEnabled, setCustomEnabled] = useState(true);
  const [campaignEnabled, setCampaignEnabled] = useState(false);
  const [tagData, setTagData] = useState(tags);

  const tagSearch = val => {
    const search = tags.filter(item => {
      if (item.name.includes(val)) return item;
    });
    setTagData(search);
  };

  return (
    <SafeAreaView style={Styles.mainCont}>
      <View style={Styles.headerCont}>
        <View style={Styles.header}>
          <View style={Styles.iconCont}>
            <Text
              onPress={() => {
                navigation.goBack();
              }}
              style={{color: theme.colors.red, fontSize: moderateScale(14)}}>
              Done
            </Text>
          </View>
          <Text
            style={{
              color: '#545454',
              fontWeight: '700',
              fontSize: moderateScale(16),
            }}>
            Frodo Baggins
          </Text>
          <Icon
            name="home"
            type="feather"
            color="#D12E2F"
            size={moderateScale(20)}
            onPress={() => {
              navigation.goBack();
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
      <Line elevation={5} />
      <ScrollView>
        <View style={Styles.topTab}>
          <Text style={Styles.topTabTitle}>
            Last Influenced 3/21/2021 - 3PM
          </Text>
          <Text style={Styles.description}>
            1 Bag End, The Shire, Middle Earth 10323
          </Text>
          <View style={Styles.descriptionDetail}>
            <Text>Male</Text>
            <Text>|</Text>
            <Text>45 Years Old</Text>
            <Text>|</Text>
            <Text>Republican</Text>
          </View>
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
              onPress={() => {
                setModalEnabled(true);
              }}
              style={Styles.add}>
              <Icon name="plus" type={'font-awesome'} size={16} color="white" />
            </TouchableOpacity>
          </ScrollView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalEnabled}
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'green',
            }}>
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
                  {tagData?.map((item, index) => {
                    return (
                      <View
                        key={index}
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
                          onPress={() => {}}
                        />
                      </View>
                    );
                  })}
                  <View style={{height: 20}}></View>
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
        <Line elevation={0} />
        <View style={Styles.lowerTab}>
          <Text style={Styles.lowertabTitle}> Contact Info</Text>
          <Icon name="down" type="ant-design" color={theme.colors.red} />
        </View>
        <Line elevation={0} />
        <View style={Styles.lowerTab}>
          <Text style={Styles.lowertabTitle}> Voter Info</Text>
          <Icon name="down" type="ant-design" color={theme.colors.red} />
        </View>
        <Line elevation={0} />
        <View style={Styles.lowerTab}>
          <Text style={Styles.lowertabTitle}> Survey</Text>
          <Icon name="down" type="ant-design" color={theme.colors.red} />
        </View>
        <Line elevation={0} />
        <View style={{marginTop: 40}}></View>
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          wid="90%"
          title="Done"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default VoterDetail;

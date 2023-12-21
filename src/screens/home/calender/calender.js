import {Icon} from '@rneui/base';
import moment from 'moment';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import theme from '../../../constants/theme';
import Styles from './styles';
import {TriangleColorPicker} from 'react-native-color-picker';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const {width, height} = Dimensions.get('screen');

const eventData = [
  {
    color: '#FF914D',
    eventName: 'Alachua Cty Forum',
    eventdate: 'July 10, 2017',
    eventTime: '7:00 AM',
  },
  {
    color: '#583689',
    eventName: 'Early Voting Begins',
    eventdate: 'July 12, 2017',
    eventTime: '8:00 AM',
  },
];

const Calender = ({navigation}) => {
  const [modal, setModal] = useState(false);
  const [color, setColor] = useState(theme.colors.orange);
  const [createNew, setCreateNew] = useState(false);
  const [date, setDate] = useState({});
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [pickerMode, setpickerMode] = useState('date');
  const [dateType, setdateType] = useState('date');
  const [startDate, setStartDate] = useState('Select Date');
  const [startTime, setStartTime] = useState('Select Time');
  const [endDate, setEndDate] = useState('Select Date');
  const [endTime, setEndTime] = useState('Select Time');
  const [eventName, setEventName] = useState('');
  const [location, setLocation] = useState('');
  const [des, setDes] = useState('');
  const [fullTeam, setFullTeam] = useState('');
  const [events, setEvents] = useState([]);

  const colorPicker = () => {
    return (
      <Modal isVisible={modal} style={{alignItems: 'center'}}>
        <View
          style={{
            height: height / 1.85,
            width: width / 1.1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <TriangleColorPicker
            onColorSelected={color => {
              setColor(color);
              setModal(false);
            }}
            style={{height: height / 2, width: width / 1.1}}
          />
          <Text style={{color: 'black'}}>
            Click the above button to select the color
          </Text>
        </View>
      </Modal>
    );
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    if (dateType === 'startDate') {
      setStartDate(moment(date).format('MMM Do YY'));
    } else if (dateType === 'startTime') {
      setStartTime(moment(date).format('LT'));
    } else if (dateType === 'endDate') {
      setEndDate(moment(date).format('MMM Do YY'));
    } else if (dateType === 'endTime') {
      setEndTime(moment(date).format('LT'));
    }

    hideDatePicker();
  };

  const eventSave = () => {
    setEvents([]);
    console.log(events);
    const eventsData = [
      ...events,
      {
        eventName: eventName,
        startDate: startDate,
        startTime: startTime,
        endDate: endDate,
        endTime: endTime,
        location: location,
        description: des,
        fullTeam: fullTeam,
        color: color,
      },
    ];
    setEvents(eventsData);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {colorPicker()}
      {!createNew ? (
        <Animatable.View style={{flex: 1}} animation={'fadeInUp'}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                width: width / 1.1,
                alignSelf: 'center',
                justifyContent: 'space-between',
                height: 50,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text>
                  {moment('2017-02-01T00:00:00.000Z').format('MMM-YYYY')}
                </Text>
                <Icon
                  onPress={() => {
                    setCreateNew(true);
                  }}
                  name="pluscircle"
                  type="ant-design"
                  size={18}
                  style={{marginLeft: 10}}
                  color={theme.colors.orange}
                />
              </View>
              <Text
                style={{color: theme.colors.orange}}
                onPress={() => {
                  navigation.goBack();
                }}>
                Done
              </Text>
            </View>
            <CalendarList
              style={{
                height: 350,
              }}
              theme={{
                todayTextColor: theme.colors.darkRed,
                //   dayTextColor: theme.colors.darkRed,
              }}
              // Specify theme properties to override specific styles for calendar parts. Default = {}
              // minDate="2019-02-01"
              onDayPress={day => {
                //   if (!(day.dateString in date)) {
                //     setDate({
                //       ...date,
                //       [day.dateString]: {
                //         selected: true,
                //         selectedColor: theme.colors.orange,
                //       },
                //     });
                //   } else {
                //     delete date[day.dateString];
                //     setDate({
                //       ...date,
                //     });
                //   }
                setDate({
                  [day.dateString]: {
                    selected: true,
                    selectedColor: theme.colors.orange,
                  },
                });
              }}
              markedDates={date}
              hideArrows={false}
              horizontal={true}
              pagingEnabled={true}
            />
            <Text
              style={{
                color: theme.colors.gray,
                marginTop: 10,
                width: width / 1.1,
                alignSelf: 'center',
              }}>
              Upcoming
            </Text>
            <View style={{width: width / 1.1, alignSelf: 'center'}}>
              {events.length === 0 ? (
                <Text
                  style={{color: 'black', alignSelf: 'center', marginTop: 20}}>
                  No upcoming events
                </Text>
              ) : (
                events?.map(item => {
                  return (
                    <View style={Styles.eventTab}>
                      <Icon
                        name="dot-single"
                        type="entypo"
                        color={item.color}
                      />
                      <View style={{}}>
                        <Text style={{fontWeight: 'bold'}}>
                          {item.eventName}
                        </Text>
                        <Text style={{marginTop: 5, color: theme.colors.gray}}>
                          {item.startDate}
                        </Text>
                      </View>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View
                          style={[
                            Styles.timeCont,
                            {backgroundColor: item.color},
                          ]}>
                          <Text
                            style={{
                              color: 'white',
                            }}>
                            {item.startTime}
                          </Text>
                        </View>
                        <Icon
                          name="chevron-down"
                          type={'entypo'}
                          size={29}
                          color={item.color}
                        />
                      </View>
                    </View>
                  );
                })
              )}
            </View>
            <View style={{height: 50}} />
          </ScrollView>
        </Animatable.View>
      ) : (
        ///// create new event screen
        <Animatable.View animation="fadeInDown">
          <ScrollView style={{width: width / 1.1, alignSelf: 'center'}}>
            <Text style={{fontWeight: 'bold', color: 'black', marginTop: 10}}>
              Create New Event
            </Text>
            <View style={Styles.createEventHead}>
              <Text
                onPress={() => {
                  setCreateNew(false);
                }}
                style={{color: theme.colors.red}}>
                Cancel
              </Text>
              <Text
                style={{color: theme.colors.red}}
                onPress={() => {
                  eventSave();
                  setCreateNew(false);
                }}>
                Save
              </Text>
            </View>
            <View style={Styles.eventName}>
              <View style={Styles.eventNameInner}>
                <Image
                  resizeMode="contain"
                  style={{width: 30, height: 30, marginRight: 10}}
                  source={require('../../../images/accountImg.png')}
                />
                <TextInput
                  placeholderTextColor="black"
                  placeholder="Event Name:"
                  style={{width: '60%'}}
                  onChangeText={val => {
                    setEventName(val);
                  }}
                />
              </View>
              <TouchableOpacity
                style={[Styles.colorButton, {backgroundColor: color}]}
                onPress={() => {
                  setModal(true);
                }}>
                <Text style={{color: 'white'}}>Color</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View
                style={[
                  Styles.eventName,
                  {width: '48%', marginTop: 10, paddingHorizontal: 10},
                ]}>
                <Text>{startDate}</Text>
                <Icon
                  name={'calendar'}
                  type="foundation"
                  color={theme.colors.orange}
                  onPress={() => {
                    showDatePicker();
                    setpickerMode('date');
                    setdateType('startDate');
                  }}
                />
              </View>
              <View
                style={[
                  Styles.eventName,
                  {width: '48%', marginTop: 10, paddingHorizontal: 10},
                ]}>
                <Text>{startTime}</Text>
                <Icon
                  name={'clockcircle'}
                  type="ant-design"
                  color={theme.colors.orange}
                  onPress={() => {
                    showDatePicker();
                    setpickerMode('time');
                    setdateType('startTime');
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View
                style={[
                  Styles.eventName,
                  {width: '48%', marginTop: 10, paddingHorizontal: 10},
                ]}>
                <Text>{endDate}</Text>
                <Icon
                  name={'calendar'}
                  type="foundation"
                  color={theme.colors.orange}
                  onPress={() => {
                    showDatePicker();
                    setpickerMode('date');
                    setdateType('endDate');
                  }}
                />
              </View>
              <View
                style={[
                  Styles.eventName,
                  {width: '48%', marginTop: 10, paddingHorizontal: 10},
                ]}>
                <Text>{endTime}</Text>
                <Icon
                  name={'clockcircle'}
                  type="ant-design"
                  color={theme.colors.orange}
                  onPress={() => {
                    showDatePicker();
                    setpickerMode('time');
                    setdateType('endTime');
                  }}
                />
              </View>
            </View>
            <View style={[Styles.eventName, {marginVertical: 10}]}>
              <TextInput
                style={{width: '50%'}}
                placeholderTextColor="black"
                placeholder="Location:"
                onChangeText={val => {
                  setLocation(val);
                }}
              />
            </View>
            <View style={[Styles.eventName, {marginVertical: 10, height: 200}]}>
              <TextInput
                style={{width: '90%', textAlignVertical: 'top', height: 190}}
                multiline={true}
                placeholderTextColor="black"
                placeholder="Event Description:"
                onChangeText={val => {
                  setDes(val);
                }}
              />
            </View>
            <View style={[Styles.eventName, {marginVertical: 10}]}>
              <TextInput
                style={{width: '50%'}}
                placeholderTextColor="black"
                placeholder="Full Team"
                onChangeText={val => {
                  setFullTeam(val);
                }}
              />
            </View>
            <View
              style={{
                marginVertical: 10,
                height: 55,
                backgroundColor: 'white',
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <View style={Styles.eventNameInner}>
                <Icon name="dot-single" type="entypo" />
                <Text>July 12, 2017</Text>
              </View>
              <TouchableOpacity
                style={[Styles.colorButton, {backgroundColor: color}]}
                onPress={() => {
                  setModal(true);
                }}>
                <Text style={{color: 'white'}}>8:00 PM</Text>
              </TouchableOpacity>
            </View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode={pickerMode}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </ScrollView>
        </Animatable.View>
      )}
    </SafeAreaView>
  );
};
export default Calender;

import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {getHistory} from '../../Redux/Actions/History';
import AsyncStorage from '@react-native-community/async-storage';

const mapStateToProps = history => {
  return {
    history,
  };
};

class HistoryScreen extends Component {
  state = {
    history: [],
  };

  getHistoryUpdated = async () => {
    await AsyncStorage.getItem('userID').then(
      async userID => {
        await console.log('id', userID); //Display key value
        await this.props.dispatch(getHistory(userID));
        await this.setState({
          history: this.props.history.history.historyData.result,
        });
        await console.log('History ', this.state.history);
      },
      error => {
        console.log(error); //Display error
      },
    );
  };
  componentDidMount = async () => {
    this.getHistoryUpdated();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.header}>
            <Icon
              onPress={() => this.props.navigation.navigate('Home')}
              name="arrow-left"
              color="white"
              size={22}
              style={{paddingLeft: 20}}
            />
            <Text style={{color: '#ffff', fontSize: 22, paddingLeft: 35}}>
              History
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {this.state.history.map(item => (
            <View style={{borderBottomWidth: 0.5}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  paddingHorizontal: '2%',
                  paddingVertical: '1%',
                  fontSize: 17,
                  color: '#9A97A9',
                  backgroundColor: '#b2b2b2',
                }}>
                {item.transactionDate}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('DetailHistory', {
                    historyID: item.historyID,
                  })
                }>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 17,
                    paddingLeft: '3%',
                    marginTop: '1%',
                  }}>
                  OWO
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 14,
                      paddingLeft: '3%',
                      marginTop: '1%',
                    }}>
                    {item.transactionMessage}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'green',
                      paddingRight: '3%',
                      marginTop: '1%',
                    }}>
                    Rp {item.transactionAmount}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default connect(mapStateToProps)(HistoryScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#53338C',
    paddingBottom: 35,
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    top: 15,
  },
});

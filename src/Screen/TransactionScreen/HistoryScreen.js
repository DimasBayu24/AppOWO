import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HistoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
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
          <View style={styles.mainContainer}>
            <View>
              <View style={styles.mainText}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    paddingLeft: 13,
                    top: 6,
                    fontSize: 12,
                    color: '#9A97A9',
                  }}>
                  30 MAR 2020
                </Text>
              </View>

              <TouchableOpacity style={styles.cardContainer}>
                <View style={styles.textTitle}>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>Grab</Text>
                </View>
                <View style={styles.textDetail}>
                  <Text style={{color: '#9A97A9', fontSize: 10}}>
                    Pembayaran
                  </Text>
                  <Text style={{fontSize: 10, color: 'green'}}>-Rp2.000</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cardContainer2}>
                <View style={styles.textTitle}>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>Grab</Text>
                </View>
                <View style={styles.textDetail}>
                  <Text style={{color: '#9A97A9', fontSize: 10}}>
                    Pembayaran
                  </Text>
                  <Text style={{fontSize: 10, color: 'green'}}>-Rp2.000</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cardContainer3}>
                <View style={styles.textTitle}>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>Grab</Text>
                </View>
                <View style={styles.textDetail}>
                  <Text style={{color: '#9A97A9', fontSize: 10}}>
                    Pembayaran
                  </Text>
                  <Text style={{fontSize: 10, color: 'green'}}>-Rp2.000</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cardContainer4}>
                <View style={styles.textTitle}>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>Grab</Text>
                </View>
                <View style={styles.textDetail}>
                  <Text style={{color: '#9A97A9', fontSize: 10}}>
                    Pembayaran
                  </Text>
                  <Text style={{fontSize: 10, color: 'green'}}>-Rp2.000</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{top: 40}}>
              <View style={styles.mainText}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    paddingLeft: 13,
                    top: 6,
                    fontSize: 12,
                    color: '#9A97A9',
                  }}>
                  30 MAR 2020
                </Text>
              </View>
              <TouchableOpacity style={styles.cardContainer}>
                <View style={styles.textTitle}>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>Grab</Text>
                </View>
                <View style={styles.textDetail}>
                  <Text style={{color: '#9A97A9', fontSize: 10}}>
                    Pembayaran
                  </Text>
                  <Text style={{fontSize: 10, color: 'green'}}>-Rp2.000</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cardContainer2}>
                <View style={styles.textTitle}>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>Grab</Text>
                </View>
                <View style={styles.textDetail}>
                  <Text style={{color: '#9A97A9', fontSize: 10}}>
                    Pembayaran
                  </Text>
                  <Text style={{fontSize: 10, color: 'green'}}>-Rp2.000</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cardContainer3}>
                <View style={styles.textTitle}>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>Grab</Text>
                </View>
                <View style={styles.textDetail}>
                  <Text style={{color: '#9A97A9', fontSize: 10}}>
                    Pembayaran
                  </Text>
                  <Text style={{fontSize: 10, color: 'green'}}>-Rp2.000</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cardContainer4}>
                <View style={styles.textTitle}>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>Grab</Text>
                </View>
                <View style={styles.textDetail}>
                  <Text style={{color: '#9A97A9', fontSize: 10}}>
                    Pembayaran
                  </Text>
                  <Text style={{fontSize: 10, color: 'green'}}>-Rp2.000</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

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
  mainContainer: {
    backgroundColor: 'white',
    paddingBottom: '100%',
  },
  mainText: {
    backgroundColor: '#D5D9DF',
    paddingBottom: 15,
  },
  cardContainer: {
    //   marginHorizontal: 15
    marginHorizontal: 15,
    backgroundColor: 'white',
    top: 10,
  },
  cardContainer2: {
    //   marginHorizontal: 15
    marginHorizontal: 15,
    top: 20,
    backgroundColor: 'white',
  },
  cardContainer3: {
    //   marginHorizontal: 15
    marginHorizontal: 15,
    top: 30,
    backgroundColor: 'white',
  },
  cardContainer4: {
    //   marginHorizontal: 15
    marginHorizontal: 15,
    top: 45,
    backgroundColor: 'white',
  },

  textTitle: {
    // backgroundColor: 'magenta',
    paddingBottom: 7,
    // marginHorizontal: 15
    // paddingLeft: 15
  },
  textDetail: {
    // backgroundColor: 'aqua',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    // paddingLeft: 15,
    // paddingRight: 15,
    paddingBottom: 10,
    borderBottomColor: '#9A97A9',
    borderBottomWidth: 1,
    // marginHorizontal: 15
  },
});

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TransferScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#53338C"
          translucent={true}
        />
        <View style={styles.cardContainer}>
          <View>
            <TouchableOpacity style={styles.cardTop}>
              <Icon
                name="paper-plane"
                color="#11AFB8"
                size={30}
                style={styles.logoLeft}
              />
              <Text>Ke Sesama OVO</Text>
              <Icon
                name="angle-right"
                size={30}
                color="#9A97A9"
                style={styles.logoRight}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.containerCardBottom}>
            <TouchableOpacity style={styles.cardTop}>
              <Icon
                name="university"
                color="#11AFB8"
                size={30}
                style={styles.logoLeft}
              />
              <Text>Ke Rekening Bank</Text>
              <Icon
                name="angle-right"
                size={30}
                color="#9A97A9"
                style={styles.logoRight}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textHistory}>Transaksi Terakhir</Text>
        </View>
        <View style={styles.historyContainer}>
          <View style={styles.historyCard}>
            <Icon
              name="user-circle"
              color="#9A97A9"
              size={44}
              style={styles.Photo}
            />
            <TouchableOpacity style={styles.cardNameHistory}>
              <Text>ARIEFSETIAWAN909</Text>
              <Text style={styles.textNameHistory}>BANK MANDIRI - xxxxxx</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFF',
  },
  cardContainer: {
    width: '100%',
    height: '55%',
  },
  textContainer: {
    paddingBottom: 25,
  },
  cardTop: {
    backgroundColor: '#ffff',
    borderRadius: 13,
    elevation: 5,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 100,
  },
  logoLeft: {
    width: '13%',
    height: 30,
    textAlign: 'right',
  },
  logoRight: {
    width: '13%',
    height: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textHistory: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  historyContainer: {
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: '#9A97A9',
  },
  historyCard: {
    flexDirection: 'row',
  },
  Photo: {
    width: '18%',
    height: 45,
    textAlign: 'right',
  },
  cardNameHistory: {
    paddingLeft: 12,
  },
  textNameHistory: {
    color: '#9A97A9',
    fontSize: 15,
  },
  containerCardBottom: {
    paddingTop: 15,
  },
});

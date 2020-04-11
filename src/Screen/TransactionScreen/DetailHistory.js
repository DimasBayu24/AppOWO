import React, {Component} from "react"
import { 
    View, 
    Image, 
    Text, 
    StyleSheet,  
    TouchableOpacity ,
    StatusBar
} from "react-native"
import logo from '../../../assets/logoViolet.png'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DetailHistory extends Component {
    HandleBack = () => {
        this.props.navigation.push('History');
      };
    render(){
        return(
            
           <View style={styles.container}>
                <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#53338C" translucent = {true}/>
              <View style={styles.topNabvarContainer}>
                    <TouchableOpacity 
                    onPress={this.HandleBack}
                    style={styles.topNavbar}>
                        <Icon
                        name="arrow-left" 
                        color="#9A97A9"
                        size={30}
                        style={styles.iconBack} 
                        />
                        <Image
                        source={logo}
                         style={styles.logo} 
                         />
                    </TouchableOpacity>
                    <View style={styles.containerIcon}> 
                        <Icon
                        name="check-circle"
                        size={30}
                        color="#4BB543"
                         style={styles.iconCheck} 
                         />
                        <Text style={styles.iconText}>Berhasil</Text>
                    </View>
                    <View style={styles.containerDate}>
                        <Text style={styles.textdate}>8 Apr 2020, 11.30</Text>
                    </View>
                   
             </View> 
            <View style={styles.containerMain}>
            <View style={styles.containerButtonOthers}>
                        <TouchableOpacity style={styles.buttonOthers}>
                            <Icon
                              name='question'
                              size={25}
                              color='#D5D9DF'
                              style={styles.iconQuiz}
                              />
                            <Text style={styles.TextOthers}>Others</Text>
                            <Icon
                             name='angle-down'
                             size={25}
                             color="#D5D9DF"
                             style={styles.iconDrop}
                              />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerBio}>
                <View style={styles.containerTextFrom}>
                    <Text style={styles.textFrom}>
                        Dari
                    </Text>
                </View>
                <View style={styles.containerUser}>
                    <Icon 
                    name="user-circle"
                    color="#D5D9DF"
                    size={45}
                    style={styles.iconUser}
                     />
                    <Text style={styles.userName}>
                        ARIEF GANTENG
                    </Text>
                </View>
                <View style={styles.topFormUpper}>
                <View style={styles.containerTextMessage}>
                    <Text style={styles.textMessage}>Pesan</Text>
                </View>
                <View style={styles.containerTextValue}>
                    <Text style={styles.textValue}>
                        Arkademy Jogja Camp
                    </Text>
                </View>
                </View>


                <View style={styles.topFormCenter}>
                <View style={styles.containerTextMessage}>
                    <Text style={styles.textMessage}>No. referensi </Text>
                </View>
                <View style={styles.containerTextValue}>
                    <Text style={styles.textValue}>
                        y4289yrfh2wgf82gf97q8ihfd98q3gfq3fg
                    </Text>
                </View>
                </View>

                <View style={styles.topFormGround}>
                <View style={styles.containerTextMessage}>
                    <Text style={styles.textMessage}>Ke</Text>
                </View>
                <View style={styles.containerTextValue2}>
                    <Text style={styles.textValue2}>
                        OWO Cash
                    </Text>
                    <Text style={styles.textValue2}>
                        Rp200.000
                    </Text>
                </View>
                </View>

                </View>
            </View>

            <View style={styles.containerFooter}>
                <TouchableOpacity style={styles.footer}>
                <Icon
                name="comment"
                size={25}
                color='#11AFB8'
                style={styles.footerIconChat}
                 />
                <Text style={styles.textFooter}>Butuh Bantuan?</Text>
                <Icon
                name="angle-right"
                size={25}
                color='#9A97A9'
                />
                </TouchableOpacity>
            </View>
           </View> 
       
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edeae1'
    },
    topNabvarContainer: {
        width: '100%',
        height: '50%',
    },
    topNavbar: {
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        top: '5%'
    },
    iconBack: {
        top: '5%',
        width: '30%',
        height: '30%',
        left: '20%'
        
    },
    logo: {
        top: '5%',
        width: '25%',
        height: '25%',
        left: '19%',   
    },
    containerIcon: {
        top: '-13%',
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent:'center',
    },
    iconCheck: {
        width: '17%',
        height: '100%',
    },
    iconText: {
        fontWeight: 'bold',
        color: '#4BB543',
        fontSize: 20,
        right: '80%'
    },
    containerDate: {
        top: '-10%',
        width: '100%',
        height: '15%',

    },
    textdate: {
        textAlign: 'center',
        fontSize: 13,
    },
    containerButtonOthers: {
        top: '-20%',
        width: '100%',
        height: '34%',
        
    },
    buttonOthers : {
        borderColor: '#D5D9DF',
        borderWidth: 1.5,
        borderRadius: 20,
        padding: '4%',
        backgroundColor: '#ffffff',
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: '3%'
    },
    iconQuiz: {
        width: '20%',
        height: '175%',
        top: '3%',
        left: '70%',
        alignContent: 'center'
    },
    iconDrop: {
        width: '20%',
        right: '-80%',
        bottom: '-4%',
        height: '175%'
    },
    TextOthers: {
        color: '#D5D9DF'
    },
    containerMain: {
        top: '-20%',
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '55%',
        padding: '7%'
    },
    containerBio: {
        marginTop: '-28%',
    },
    containerTextFrom: {
    },
    textFrom: {
        color: '#D5D9DF'
    },
    iconUser: {
        width: '20%',
        height: '80%'
    },
    userName: {
        top: '-6%',
        fontWeight: 'bold',
        fontSize: 15

    },
    containerUser: {
        flexDirection: 'row',
        width: '100%',
        height: '30%',
        alignItems: 'center',
        
    },
    topFormUpper: {
        top: -40
    },
    topFormCenter: {
        top: -35
    },
    topFormGround: {
        top: -30
    },
    containerTextMessage: {
        marginTop: '5%'
    },
    textMessage: {
        color: '#D5D9DF',
        marginTop: '-5%'
    },
    containerTextValue2: {
       flexDirection: 'row',
       justifyContent: 'space-between',
    },
    textValue: {
        paddingTop: '5%',
        paddingBottom: '5%',
        borderBottomColor: '#D5D9DF',
        borderBottomWidth: 1,
        color: 'black',
        width: '100%',
        fontSize: 10,
    },
    textValue2: {
        paddingTop: '5%',
        paddingBottom: '5%',
        color: 'black',
        width: '85%',
        fontSize: 10
    },
    
    containerFooter: {
        backgroundColor: '#FFFFFF',
        width: "100%",
        height: '15%',
        top: -110,
       
    },
    footer: {
        top: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#b9b9b9',
        marginHorizontal: '5%',
        borderRadius: 20,
        padding: '3%',
        backgroundColor: '#FFFFFF',
    },
    textFooter: {
        left: '-250%'
    }
})
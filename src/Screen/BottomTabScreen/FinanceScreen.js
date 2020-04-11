import React, {Component} from "react"
import { 
    View,  
    Text, 
    StyleSheet,  
    StatusBar,
    ScrollView,
} from "react-native"

import Icon from 'react-native-vector-icons/FontAwesome';

export default class FinanceScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                <StatusBar 
                    barStyle = 'light-content' 
                    hidden = {false} 
                    backgroundColor = "#53338C" 
                    translucent = {true}
                    />
                <View style={styles.containerTopNavbar}>
                    <View style={styles.topNavbar}>
                    <Text style={styles.textTopNavbar}>
                        Finance
                    </Text>
                    <Icon 
                        name='bell'
                        size={22}
                        color='white'
                        style={styles.iconTopNavbar}
                    />
                    </View>
                </View>
                <View style={styles.containerCard}>
                    <View style={styles.card}>
                    <View style={styles.cardMain}>
                        <Icon 
                            name="dollar"  
                            color="#53338C" 
                            size={25} 
                            style={styles.cardIcon}
                        />
                        <Text style={styles.cardTextIcon}>BUDGET</Text>
                    </View>
                    <View style={styles.containerCardContent}>
                        
                            <Text style={styles.textTitleCard}>
                                Atur Budget Anda Sekarang!
                            </Text>
                
                        <View style={styles.cardContent}>
                        <Text style={styles.textContentCard}>
                        {`Kelola & monitor pengeluaran Anda\nmenggunakan OWO`}
                            </Text>
                        <Icon 
                            name="sitemap"
                            color="#11AFB8"
                            size={50}
                        />
                        </View>
                    </View>
                    </View>
                </View>
                </ScrollView>
            </View>
           
           
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D5D9DF'
    },
    containerTopNavbar: {
        backgroundColor: "#53338C",
         paddingBottom: '4%',
        padding: '10%'
    },
    topNavbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textTopNavbar: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,  
    },
    containerCard: {
        padding: '5%'
    },
    card: {
        padding: '8%',
        backgroundColor: 'white',
        borderRadius: 7,
        elevation: 5
    },
    cardMain: {
        flexDirection: 'row'
    },
    cardTextIcon: {
        color: "#53338C",
        fontWeight: 'bold',
        marginLeft: '5%'
    },
    containerCardContent: {
        marginTop: '8%'
     },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textContentCard: {
        color: '#9A97A9',
        fontSize: 12,
        marginBottom: "15%"
    },
    textTitleCard: {
        color: "#11AFB8",
        fontSize: 12
    }

})
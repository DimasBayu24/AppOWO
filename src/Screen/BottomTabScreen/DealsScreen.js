import React, {Component} from "react"
import { 
    View,  
    Text, 
    StyleSheet,  
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image
} from "react-native"
import Slider from '../../../assets/slider4.png'
import Icons from 'react-native-vector-icons/FontAwesome'; 

export default class dealScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle = 'light-content' 
                    hidden = {false} 
                    backgroundColor = "#53338C" 
                    translucent = {true}
                    />
            <View style={styles.containerTopNavbar}>
                    <View style={styles.topNavbar}>
                    <Text style={styles.textTopNavbar}>
                        Deals
                    </Text>
                    <Icons 
                        name='bell'
                        size={22}
                        color='white'
                        style={styles.iconTopNavbar}
                        />
                    </View>
                </View>
                       <ScrollView>
                <View>
                    <View style={styles.containerMain}>
                        <View style={styles.containerFind}>
                            <TouchableOpacity style={styles.boxFind}>
                                <Text style={styles.textBoxFind}>Cari Merchants</Text>
                            </TouchableOpacity>
                            <Icons
                                name="ticket"
                                color="#11AFB8"
                                size={45}
                                style={styles.iconBoxFind}
                                />
                        </View>
                    </View>
                    
                    <View style={styles.containerTopImage}>
                        <Image 
                            source={Slider}
                            style={styles.topImage}
                        />
                    </View>
                    <View>
                    <View style={styles.containerCard}>
                        <View style={styles.card}>
                            <Text style={styles.textHeaderCard1}>Cashback Lagi dan Lagi</Text>
                            <Text style={styles.textAll}>Lihat Semua</Text>
                        </View>
                        <View style={styles.containerPromo}>
                            <Text style={styles.textPromo}>Serbu Berbagai promo terbaru OWO</Text>
                        </View>
                        <ScrollView 
                        horizontal={true}
                        style={styles.scrollStyle}
                        >
                            <Image 
                            style={styles.slider1}
                              resizeMode="stretch"
                                source={Slider}
                                
                            />
                            <Image 
                            style={styles.sliderAll}
                              resizeMode="stretch"
                                source={Slider}
                            />
                              <Image 
                            style={styles.sliderAll}
                              resizeMode="stretch"
                                source={Slider}
                            />
                              <Image 
                            style={styles.sliderAll}
                              resizeMode="stretch"
                                source={Slider}
                            />
                        </ScrollView>
                    </View>



                    <View style={styles.containerCard2}>
                        <View style={styles.card}>
                            <Text style={styles.textHeaderCard2}>Kolom Kebahagiaan</Text>
                            <Text style={styles.textAll}>Lihat Semua</Text>
                        </View>
                        
                        <ScrollView 
                        horizontal={true}
                        style={styles.scrollStyle}
                        >
                            <View style={styles.containerCardImage}>
                            <Image 
                            style={styles.slider2}
                              resizeMode="stretch"
                                source={Slider}
                            />
                            <View style={styles.containerTextTitleCard}>
                                <Text style={styles.textTitleCardTop}>Semua Menu Diskon 25%</Text>
                                <Text style={styles.textTitleCardMiddle}>McDonald</Text>
                                <Text style={styles.textTitleCardCenter}>Tersedia 7447 vouchera</Text>
                                <Text style={styles.textTitleCardBottom}>Rp75.000</Text>
                            </View>
                            </View>
                           
                            <View style={styles.containerCardImage}>
                            <Image 
                            style={styles.sliderAll2}
                              resizeMode="stretch"
                                source={Slider}
                            />
                            <View style={styles.containerTextTitleCard2}>
                                <Text style={styles.textTitleCardTop}>Semua Menu Diskon 25%</Text>
                                <Text style={styles.textTitleCardMiddle}>McDonald</Text>
                                <Text style={styles.textTitleCardCenter}>Tersedia 7447 vouchera</Text>
                                <Text style={styles.textTitleCardBottom}>Rp75.000</Text>
                            </View>
                            </View>

                            <View style={styles.containerCardImage}>
                            <Image 
                            style={styles.sliderAll2}
                              resizeMode="stretch"
                                source={Slider}
                            />
                            <View style={styles.containerTextTitleCard2}>
                                <Text style={styles.textTitleCardTop}>Semua Menu Diskon 25%</Text>
                                <Text style={styles.textTitleCardMiddle}>McDonald</Text>
                                <Text style={styles.textTitleCardCenter}>Tersedia 7447 vouchera</Text>
                                <Text style={styles.textTitleCardBottom}></Text>
                            </View>
                            </View>

                            
                        </ScrollView>

                        
                    </View>

                    <View style={styles.containerCard2}>
                        <View style={styles.card}>
                            <Text style={styles.textHeaderCard2}>Yang Favorit dan Irit</Text>
                            <Text style={styles.textAll}>Lihat Semua</Text>
                        </View>
                        
                        <ScrollView 
                        horizontal={true}
                        style={styles.scrollStyle}
                        >
                            <View style={styles.containerCardImage}>
                            <Image 
                            style={styles.slider2}
                              resizeMode="stretch"
                                source={Slider}
                            />
                            <View style={styles.containerTextTitleCard}>
                                <Text style={styles.textTitleCardTop}>Semua Menu Diskon 25%</Text>
                                <Text style={styles.textTitleCardMiddle}>McDonald</Text>
                                <Text style={styles.textTitleCardCenter}>Tersedia 7447 vouchera</Text>
                                <Text style={styles.textTitleCardBottom}>Rp75.000</Text>
                            </View>
                            </View>
                           
                            <View style={styles.containerCardImage}>
                            <Image 
                            style={styles.sliderAll2}
                              resizeMode="stretch"
                                source={Slider}
                            />
                            <View style={styles.containerTextTitleCard2}>
                                <Text style={styles.textTitleCardTop}>Semua Menu Diskon 25%</Text>
                                <Text style={styles.textTitleCardMiddle}>McDonald</Text>
                                <Text style={styles.textTitleCardCenter}>Tersedia 7447 vouchera</Text>
                                <Text style={styles.textTitleCardBottom}>Rp75.000</Text>
                            </View>
                            </View>

                            <View style={styles.containerCardImage}>
                            <Image 
                            style={styles.sliderAll2}
                              resizeMode="stretch"
                                source={Slider}
                            />
                            <View style={styles.containerTextTitleCard2}>
                                <Text style={styles.textTitleCardTop}>Semua Menu Diskon 25%</Text>
                                <Text style={styles.textTitleCardMiddle}>McDonald</Text>
                                <Text style={styles.textTitleCardCenter}>Tersedia 7447 vouchera</Text>
                                <Text style={styles.textTitleCardBottom}></Text>
                            </View>
                            </View>

                            
                        </ScrollView>

                        
                    </View>
                    <View style={styles.containerFooter}>
                        <View style={styles.containerTextHeaderFooter}>
                            <Text style={styles.textTopFooter}>
                                Nikmat Dunia Lainnya
                            </Text>
                            <Text style={styles.textMiddleFooter}>
                                Silahkan dilihat-lihat Kakak
                            </Text>
                        </View>
                        <View style={styles.containerFooterIcon}>
                            <View style={styles.footerIcon}>
                                <Icons
                                     name='spoon'
                                     size={30}
                                     color="orange"
                                />
                                <Icons 
                                    name='shopping-cart'
                                    size={30}
                                    color="red"
                                />
                                 <Icons 
                                    name='bus'
                                    size={30}
                                    color="blue"
                                />
                                <Icons 
                                    name='graduation-cap' 
                                    size={30}   
                                    color="green"
                                />
                            </View>
                            <View style={styles.containerTextFooter}>
                                <Text style={styles.textFooter}>Food</Text>
                                <Text style={styles.textFooter}>Shopping</Text>
                                <Text style={styles.textFooter}>Transport</Text>
                                <Text style={styles.textFooter}>Education</Text>
                            </View>
                        </View>

                        <View style={styles.containerFooterIcon}>
                            <View style={styles.footerIcon}>
                                <Icons
                                     name='gift'
                                     size={30}
                                     color="red"
                                />
                                <Icons 
                                    name='suitcase'
                                    size={30}
                                    color="yellow"
                                />
                                 <Icons 
                                    name='user-plus'
                                    size={30}
                                    color="blue"
                                />
                                <Icons 
                                    name='bullseye' 
                                    size={30}   
                                    color="violet"
                                />
                            </View>
                            <View style={styles.containerTextFooter}>
                                <Text style={styles.textFooter}>Gift</Text>
                                <Text style={styles.textFooter}>Travel</Text>
                                <Text style={styles.textFooter}>Personal</Text>
                                <Text style={styles.textFooter}>Sport</Text>
                            </View>
                        </View>
                        <View style={styles.containerFooterIcon}>
                            <View style={styles.footerIcon}>
                                <Icons
                                     name="shirtsinbulk"
                                     size={30}
                                     color="red"
                                />
                                <Icons 
                                    name='heartbeat'
                                    size={30}
                                    color="blue"
                                />
                                 <Icons 
                                    name='eye'
                                    size={30}
                                    color="red"
                                />
                                <Icons 
                                    name='cogs' 
                                    size={30}   
                                    color="blue"
                                />
                            </View>
                            <View style={styles.containerTextFooter}>
                                <Text style={styles.textFooter}>Fashion</Text>
                                <Text style={styles.textFooterE}>health</Text>
                                <Text style={styles.textFooterE}>Entertainment</Text>
                                <Text style={styles.textFooter}>Automotive</Text>
                            </View>
                        </View>
                    </View>
                    </View>
                </View>
                </ScrollView>
            </View>  
        )
    }
}

const styles= StyleSheet.create({
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
    containerMain: {

    },
    containerFind: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '3%'
    },
    boxFind: {
        borderRadius: 10,
        padding: '4%',
        backgroundColor: '#D5D9DF',
        width: '75%'
       
    },
    textBoxFind: {
        textAlign: 'center',
        color: '#9A97A9'
    },
    containerTopImage: {
        padding: '6%'
    },
    topImage: {
        width: 318,
        height: 120,
        borderRadius: 10,
    },
    containerCard: {
        padding: '5%',
        backgroundColor: 'white',
    },
    containerCard2: {
        marginTop: '1%',
        padding: '5%',
        backgroundColor: 'white',
       
    },
    card: {
       flexDirection: 'row',
       justifyContent: 'space-between' 
    },
    textHeaderCard1: {
        fontSize: 14,
        
        
    },
    textHeaderCard2: {
        fontSize: 14,
        marginBottom: '5%'
        
    },
    textAll: {
        color: '#11AFB8',
        fontSize: 12
    },
    containerPromo: {
        marginTop: '2%'
    },
    textPromo: {
        color: '#9A97A9',
        fontSize: 12,
    },
    scrollStyle: {
        width: '100%', 
        marginTop: '4%'
    },
    slider1: {
        width: 280,
        height: 150,
        borderRadius: 15,
    },
    slider2: {
        width: 245,
        height: 150,
        borderRadius: 15,
    },
    sliderAll: {
        width: 280,
        height: 150,
        borderRadius: 15,
        marginLeft: 15,
    },
    sliderAll2: {
        width: 245,
        height: 150,
        borderRadius: 15,
        marginLeft: 15,
    },
    containerCardImage: {
        backgroundColor: 'white'
    },
    containerTextTitleCard: {
        paddingTop: '5%',
        top: '-10%',
        backgroundColor: 'white'
    },
    containerTextTitleCard2: {
        paddingTop: '5%',
        top: '-10%',
        left: '5%',
        backgroundColor: 'white'
    },
    textTitleCardTop: {
        fontSize: 14
    },
    textTitleCardMiddle: {
        fontSize: 13
    },
    textTitleCardCenter: {
        fontSize: 11, 
        color: '#9A97A9', 
        marginTop: 10
    },
    textTitleCardBottom: {
        fontSize: 14, 
        color: '#53338C', 
        marginTop: 10
    },
    containerFooter: {
        backgroundColor: 'white',
        marginTop: '1%'
    },
    containerTextHeaderFooter: {
        padding: '5%'
    },
    textTopFooter: {
        fontSize: 14
    },
    textMiddleFooter: {
        color: '#9A97A9',
        fontSize: 12,
    },
    containerFooterIcon: {
        padding: '5%'
    },
    footerIcon: {
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
    containerTextFooter: {
        flexDirection: 'row',
        padding: '3%',
        justifyContent: 'space-around',
        marginTop: '2%',
    },
    textFooter: {
        fontSize: 10
    },
    textFooterE: {
        fontSize: 10,
        left: 15
    }
})




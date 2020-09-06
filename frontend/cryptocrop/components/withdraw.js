import React from 'react';
import { StyleSheet, Text, View, Image, Button, ToastAndroid} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import { LineChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import Footer from '../components/footer';
import Potato from '../assets/potato.jpg';
import Tomato from '../assets/tomato.png';

let customFonts  = {
  'Avenir': require('../assets/fonts/Avenir.ttf'),
};

export default class Withdraw extends React.Component  {
  state = {
    fontsLoaded: false,
    potato: false,
    tomato: false,
    balance: 2500,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
    
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  _withdraw(){
     this.setState({balance:2000});
     ToastAndroid.show("Withdraw successful!", ToastAndroid.SHORT);
      
  }

  getDataLoan() {
    return  [
    {
      
    name:"Votes 3/4",
    amount:'100',
    
  },
  {
    
    name:"Approved Loan",
    amount:'75',
    
  },
  ]
  }

  getData() {
    return  [
    {
      
    name:"John Doe Sr",
    amount:'100',
    
  },
  {
    
    name:"John Doe",
    amount:'50',
    
  },
  ]
  }

  render(){
    var data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
    if (this.state.fontsLoaded) {
    return (
        
    <View style={styles.container}>
         <View style={{height:200, width:'100%',backgroundColor:'#E5E5E5', position:'absolute', top:'0%'}}><Text>h</Text></View>
         <View style={{width:'90%', position:'absolute', elevation:1,backgroundColor:'white', borderRadius:30, alignSelf:'center', top:'10%', paddingBottom:'10%' }}>
         <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'10%'}}>Withdraw </Text>
         <Text style={{position:'relative',fontSize:15,margin:'auto', textAlign:'center', color:'#A8A8A8', fontFamily:'Avenir', marginTop:'2%'}}>Convert crypto commodities to money</Text>
         <View style={{flexDirection:'row', alignSelf:'center', marginTop:'5%'}}><Text>Amount:</Text> 
         <TextInput style={{backgroundColor:'#E5E5E5', width:'30%', borderRadius:5, marginLeft:'2%'}}></TextInput></View>
        <View style={{flexDirection:'row', alignSelf:'center', marginTop:'5%'}}><Text>Date:</Text> 
        <TextInput style={{backgroundColor:'#E5E5E5', width:'15%', borderRadius:5, marginLeft:'2%', textAlign:'center'}} placeholder={'MM'}></TextInput>
        <TextInput style={{backgroundColor:'#E5E5E5', width:'15%', borderRadius:5, marginLeft:'2%', textAlign:'center'}} placeholder={'DD'}></TextInput>
        <TextInput style={{backgroundColor:'#E5E5E5', width:'15%', borderRadius:5, marginLeft:'2%', textAlign:'center'}} placeholder={'YYYY'}></TextInput></View>
        
        

        
         <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'10%'}}>Ethereum Balance</Text>
         <Text style={{position:'relative',fontSize:40,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'5%'}}>₹ {this.state.balance}</Text>
         <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'6%'}}>Total Invested</Text>
         <Text style={{position:'relative',fontSize:40,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'5%'}}>₹ 45000</Text>
  



        <Text style={{backgroundColor:'#1A2C70', width:'50%', alignSelf:'center', borderRadius:10, padding:'5%', textAlign:'center', color:'#FFF', fontFamily:'Avenir', marginTop:'10%'}} onPress={()=>this._withdraw()}>Withdraw</Text>


         </View>
      
     
     
   
      
     
       <View style={{marginTop:'175%', paddingTop:'5%', backgroundColor:'#1A2C70', height:90}}><Footer ></Footer></View>
    </View>
    );
    }
    else {
    return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    
  },
  header:{
    height:'30%',
    width:'70%',
    marginTop:'20%',
    resizeMode:'contain',
    alignSelf:'center'
  },
  
});
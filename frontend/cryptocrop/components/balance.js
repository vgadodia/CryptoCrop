import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';

import Footer from '../components/footer';


let customFonts  = {
  'Avenir': require('../assets/fonts/Avenir.ttf'),
};

export default class Balance extends React.Component  {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
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
    if (this.state.fontsLoaded) {
    return (
        
    <View style={styles.container}>
         <View style={{height:200, width:'100%',backgroundColor:'#1A2C70', position:'absolute', top:'0%'}}><Text>h</Text></View>
         <View style={{width:'90%', height:'40%', position:'absolute', elevation:1,backgroundColor:'white', borderRadius:30, alignSelf:'center', top:'10%' }}>
         <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'10%'}}>Ethereum Balance</Text>
         <Text style={{position:'relative',fontSize:40,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'5%'}}>₹ 2500</Text>
         <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'6%'}}>Total Invested</Text>
         <Text style={{position:'relative',fontSize:40,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'5%'}}>₹ 45000</Text>
  
         </View>
      
         <View style={{width:'90%', height:'8%', position:'absolute', elevation:1,backgroundColor:'white', borderRadius:20, alignSelf:'center', top:'55%' }}>
         <Text onPress={()=>this.props.navigation.navigate('Buy')} style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'5%', textAlignVertical:'center'}}>Buy Stocks</Text>
         </View>
         <View style={{width:'90%', height:'8%', position:'absolute', elevation:1,backgroundColor:'white', borderRadius:20, alignSelf:'center', top:'65%' }}>
         <Text onPress={()=>this.props.navigation.navigate('Sell')} style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'5%'}}>Sell Stocks</Text>
         </View>
         <View style={{width:'90%', height:'8%', position:'absolute', elevation:1,backgroundColor:'white', borderRadius:20, alignSelf:'center', top:'75%' }}>
         <Text  onPress={()=>this.props.navigation.navigate('Withdraw')} style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'5%'}}>🗘Convert Stocks</Text>
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
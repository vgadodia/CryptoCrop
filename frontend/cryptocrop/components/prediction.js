import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import { LineChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import Footer from '../components/footer';


let customFonts  = {
  'Avenir': require('../assets/fonts/Avenir.ttf'),
};

export default class Prediction extends React.Component  {
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
    var data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
    if (this.state.fontsLoaded) {
    return (
        
    <View style={styles.container}>
         <View style={{height:200, width:'100%',backgroundColor:'#1A2C70', position:'absolute', top:'0%'}}><Text>h</Text></View>
         <View style={{width:'90%', position:'absolute', elevation:1,backgroundColor:'white', borderRadius:30, alignSelf:'center', top:'10%', paddingBottom:'10%' }}>
         <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'10%'}}>Prediction</Text>
         <View style={{flexDirection:'row', alignSelf:'center', marginTop:'5%'}}><Text>Crop:</Text> 
         <DropDownPicker
          items={[
              {label: 'Potato', value: 'potato', icon: () => <Text> </Text>},
              {label: 'Tomato', value: 'tomato', icon: () =><Text> </Text> },
          ]}
          defaultValue={this.state.crop}
          containerStyle={{height: 30, width:'40%', marginLeft:'5%'}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={item => this.setState({
              crop: item.value
          })}
        /></View>
        <View style={{flexDirection:'row', alignSelf:'center', marginTop:'5%'}}><Text>Region:</Text> 
         <DropDownPicker
          items={[
              {label: 'New Delhi', value: 'delhi', icon: () => <Text> </Text>},
              {label: 'Pune', value: 'pune', icon: () =><Text> </Text> },
              {label: 'Bangalore', value: 'bangalore', icon: () =><Text> </Text> },
              {label: 'Kolkata', value: 'kolkata', icon: () =><Text> </Text> },
              {label: 'Mumbai', value: 'mumbai', icon: () =><Text> </Text> },

          ]}
          defaultValue={this.state.region}
          containerStyle={{height: 30, width:'40%', marginLeft:'2%'}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={item => this.setState({
              region: item.value
          })}
        /></View>
        <Text style={{backgroundColor:'#1A2C70', width:'50%', alignSelf:'center', borderRadius:10, padding:'5%', textAlign:'center', color:'#FFF', fontFamily:'Avenir', marginTop:'10%'}}>GENERATE</Text>
        {this.state.region &&
        <LineChart
                style={{ height: 150, width:'70%', alignSelf:'center' }}
                data={data}
                contentInset={{ top: 30, bottom: 30 }}
                svg={{ stroke: 'rgba(26, 44, 112, 1)' }}
            >
                <Grid />
            </LineChart>}

        <View style={{flexDirection:'row', alignSelf:'center', marginTop:'5%'}}><Text>Month:</Text> 
         <DropDownPicker
          items={[
              {label: 'January', value: 'jan', icon: () => <Text> </Text>},
              {label: 'February', value: 'feb', icon: () =><Text> </Text> },
              {label: 'March', value: 'march', icon: () =><Text> </Text> },   
              {label: 'April', value: 'april', icon: () =><Text> </Text> },
              {label: 'May', value: 'may', icon: () =><Text> </Text> },
          ]}
          defaultValue={this.state.month}
          containerStyle={{height: 30, width:'40%', marginLeft:'5%'}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={item => this.setState({
              month: item.value
          })}
        /></View>
        <View style={{flexDirection:'row', alignSelf:'center', marginTop:'5%'}}><Text>Day:</Text> 
         <DropDownPicker
          items={[
              {label: '1', value: '1', icon: () => <Text> </Text>},
              {label: '2', value: '2', icon: () =><Text> </Text> },
              {label: '3', value: '1', icon: () => <Text> </Text>},
              {label: '4', value: '2', icon: () =><Text> </Text> },
              {label: '5', value: '1', icon: () => <Text> </Text>},
              {label: '6', value: '2', icon: () =><Text> </Text> },
          ]}
          defaultValue={this.state.date}
          containerStyle={{height: 30, width:'40%', marginLeft:'8%'}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={item => this.setState({
              date: item.value
          })}
        /></View>

{this.state.date &&
         <Text style={{position:'relative',fontSize:40,margin:'auto', textAlign:'center', color:'#2D3748', fontFamily:'Avenir', marginTop:'5%'}}>₹ 2500<Text style={{color:'grey', fontSize:15}}>  /quintal</Text> <Text style={{position:'relative',fontSize:10,margin:'auto', textAlign:'center', color:'green', fontFamily:'Avenir', marginTop:'2.5%'}}>(+12%)</Text></Text>}
         
    

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
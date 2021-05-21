
import React from "react"
import { 
  Text, 
  View, 
  StyleSheet,
  Dimensions,
  FlatList,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

const Dev_Height = Dimensions.get("window").height
const Dev_Width = Dimensions.get("window").width

import Icon  from "react-native-vector-icons/AntDesign"

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      search  : ""
    }
  }


  render(){
    return(
      <SafeAreaView style={styles.container}>
        <ImageBackground 
        source={{uri:"https://cdn.dribbble.com/users/648922/screenshots/11206395/media/5998f56329eda70b71fecd050032bc21.png"}}
        style={styles.Image_Background_style}
        >

        <View style={styles.Search_Box_View}>
          <TextInput placeholder="City Name" placeholderTextColor="#FFF" style={styles.Search_Box} 
          value = {this.state.search} onChangeText={(test)=>this.setState({ search : test })}/>
          <TouchableOpacity style={styles.button_touch}>
            <Icon name="search1" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.Weather_Main_Box}>
          <View style={styles.Weather_Icon_View}>
            <Image style={styles.Weather_Image} resizeMode="contain" source={require("./assets/snack-icon.png")} />
          </View>

          <View style={styles.Weather_Text_View}>
            <Text style={styles.temprature_text}>31 C </Text>
            <Text style={styles.city_text}> Chennai </Text>
          </View>
        </View>

        <View style={styles.Info_Box_View}>
          <View style={styles.Info_Holder_View}>
              <Text>Humidity </Text>
              <Text>Visibilty </Text>
              <Text>Pressure </Text>
          </View>
        </View>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height : Dev_Height,
    width:Dev_Width,
  },
  Image_Background_style:{
    height:"100%",
    width:"100%",
    alignItems:"center"
  },
  Search_Box_View:{
    height:"20%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
  },
  Search_Box:{
    height:"35%",
    width:"80%",
    borderColor:"#FFF",
    borderWidth:1,
    borderRadius:15,
    color:"#FFF",
    paddingHorizontal:15
  },
  button_touch:{
    marginLeft:"5%",
    height:"35%",
    width:"8%",
    justifyContent:"center",
    alignItems:"center",
  },
  Weather_Main_Box:{
    height:"25%",
    width:"90%",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"rgba(255,255,255,0.3)",
    borderRadius:15
  },
  Weather_Icon_View:{
    height:"80%",
    width:"50%",
  },
  Weather_Image:{
    height:"100%",
    width:"100%"
  },
  temprature_text:{
    fontSize:30,
    color:"#FFF",
    marginLeft:"5%",
    marginTop:"3%"
  },
  city_text:{
    fontSize:20,
    color:"#FFF",
    marginLeft:"5%",
    marginTop:"3%"
  },
  Info_Box_View:{
    height:"45%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  Info_Holder_View:{
    height:"90%",
    width:"90%",
    backgroundColor:'rgba(255,255,255,0.9)',
    borderRadius:15,
    marginTop:"5%"
  }
})

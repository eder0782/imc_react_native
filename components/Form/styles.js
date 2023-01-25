import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    form: {
      marginTop:50, 
      paddingTop:20,   
      alignItems: 'center',
      // justifyContent: 'center',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      backgroundColor:"#e32551",
      height:"100%",      
    },
    placeholder:{
      color:"blue",
    },
    labels:{
      color:'#fffaeb',
      fontSize:20,
      marginTop:20

    },
    inputs:{
      backgroundColor:"#fffaeb",
      // height:50,
      width:"80%",
      padding:15,
      paddingLeft:45,
      paddingRight:45,
      borderRadius:30,
      color:"#e32551",
      marginTop:20,
      fontSize:20,
      // marginBottom:15,
    },

    buttonContainer:{
    marginTop:35,
    width:"80%",
    padding:15,
    borderRadius:30,
    alignItems:"center",    
     backgroundColor:"#af162a"
    },
    buttnText:{
      fontSize:20,
      color:"#fffaeb",
      fontWeight:"bold"
    }
   
  });

export default styles
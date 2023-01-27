import { View, Text } from "react-native";
import Titulo from "./Titulo";
import Form from "../Form";


export default function Main(){

    return(
        <View style={{paddingTop:80, backgroundColor:"#fffaeb"}}>

            <Titulo/>
            <Form/>
        </View>
    );
}
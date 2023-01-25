import { View,Text } from "react-native";
import styles from "./styles"


export default function Title(){

    return(
        <View style={styles.titleBox}>
        <Text style={styles.titleText} >
            IMC CALC
        </Text>
        </View>
    );
}
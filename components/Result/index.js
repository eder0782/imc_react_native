import { View,Text } from "react-native";
import styles from './styles'

export default function Result(props){

    return(
        <View style={styles.form}>
            <Text style={styles.labels}>{props.valorIMC==null?
                    "Forneça os Dados para Calcular o IMC"
                :
                "O Seu IMC é:"
                }</Text>
            <Text  style={styles.valrImc}>{props.valorIMC}</Text>
        </View>
    )
}
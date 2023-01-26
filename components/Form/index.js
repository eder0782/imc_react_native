import { Keyboard,Pressable,TextInput,Text, TouchableOpacity,Alert } from "react-native";
import styles from './styles'
import Result from "../Result";
import { useState } from "react";




export default function Form(){
    const[result,setResult]=useState(null);
    const[altura,setAltura]=useState(null);
    const[peso,setPeso]=useState(10);
    const[calc,setCalc]= useState(0);
    const editavel = ()=>{
        if (calc ==1){
            return false;
        }
        else
            return true;
    }
    function calcular(){
        setResult((peso/(altura*altura)).toFixed(2));
        setCalc(1);
        Keyboard.dismiss();
        // console.log(altura)
        // console.log(peso)
        // console.log('resultado')
        // console.log(result)
        return
    }
    function validation(){

        if(calc==1){
            setAltura(null);
            setPeso(null);
            setResult(null);
            setCalc(0);
            return;
        }
        if(altura!=null && peso!=null){
            calcular();
        }
        else{
            Alert.alert("Campo não preenchido:","Preencha todos os campos para poder realizar o Cálculo!!");
            // console.log(altura)
        }
        // console.log(altura)
        // console.log(peso)
        return
    }
    return(
        <Pressable style={styles.form} onPress={Keyboard.dismiss}>
            <Text style={styles.labels}>Digite a sua Altura:</Text>
            <TextInput
                // style={styles.input}
                editable={editavel()}
                selectTextOnFocus={editavel()}
                style={styles.inputs}
                onChangeText={setAltura}
                placeholderTextColor="#f0c0a8"
                value={altura}
                placeholder="Ex.: 1.75"
                keyboardType="numeric"
            />
            <Text style={styles.labels}>Digite o Seu Peso:</Text>
            <TextInput
                // style={styles.input}
                editable={editavel()}
                selectTextOnFocus={editavel()}
                onChangeText={setPeso}
                value={peso}
                placeholder="Ex.: 80"
                placeholderTextColor="#f0c0a8"
                
                keyboardType="numeric"
                style={styles.inputs}
               />
            {/* <TextInput placeholder="Ex.: 80" keyboardType="numeric" value={peso} onChange={setPeso}/> */}
            <TouchableOpacity style={styles.buttonContainer} onPress={validation}>
                <Text style={styles.buttnText}>{
                    calc==0?
                    "Calcular IMC":
                    "Zerar Valores"
                }</Text>
            </TouchableOpacity>
            <Result valorIMC={result}/>

        </Pressable>
    )
    
}
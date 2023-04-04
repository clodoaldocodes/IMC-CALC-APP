import React, {useState} from "react"
import {TextInput, View, Text, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList} from "react-native"
import ResultImc from "../ResultImc";
import styles from "./style";

export default function Form(){
    
const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o peso e altura!")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")
const [errorMenssage, setErrorMenssage] = useState(null)
const [imcList, setImcList] = useState([])

function imcCalculator() {
let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }]);
setImc(totalImc);
}

function verificationImc(){
    if(imc == null){
        Vibration.vibrate()
        setErrorMenssage('Campo obrigatório*')
    }
}

function validationImc(){
    console.log
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular novamente")
        setErrorMenssage(null)
        return
    }
    verificationImc()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preenchar o peso e altura")
}

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.FormContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMenssage}>{errorMenssage}</Text>
                <TextInput style={styles.input} 
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75 m"
                keyboardType="numeric"/>

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMenssage}>{errorMenssage}</Text>
                <TextInput style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.36 kg"
                keyboardType="numeric"/>

                <TouchableOpacity 
                onPress={() => validationImc()}
                style={styles.ButonCalculator}>
                <Text style={styles.textButonCalculator}>{textButton}</Text>
                </TouchableOpacity>

            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>

        </Pressable>
    );
}
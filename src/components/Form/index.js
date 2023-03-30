import React, {useState} from "react"
import {TextInput, View, Text, Button} from "react-native"
import ResultImc from "../ResultImc";

export default function Form(){
    
const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o pesso e altura!")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular novamente")
    }
}

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                placeholder="Ex. 1.75 m"
                keyboardType="numeric"/>

                <Text>Peso</Text>
                <TextInput
                placeholder="Ex. 75.36 kg"
                keyboardType="numeric"/>

                <Button title="Calcular IMC"/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}
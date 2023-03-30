import React from "react"
import {TextInput, View, Text, Button} from "react-native"

export default function Form(){
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
        </View>
    );
}
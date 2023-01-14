import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";

import Texto from "../../../componentes/Texto";
import logo from '../../../../assets/logo.png'

const width = Dimensions.get('screen').width;


export default function Detalhes () {
    return <>

        <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.viewFazenda}>
            <Image source={logo} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>
            Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.
        </Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
    </>
    
}

const estilos = StyleSheet.create({
    
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color:"#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    viewFazenda:{
        paddingVertical: 12,
        flexDirection: "row"
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
    },
    imagemFazenda:{
        width: 32,
        height: 32,
        marginRight: 12
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});
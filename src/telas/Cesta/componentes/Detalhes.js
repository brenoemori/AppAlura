import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import Texto from "../../../componentes/Texto";

export default function Detalhes ({ nome, nomeFazenda, logoFazenda, descricao, preco, botao }) {
    return <>

        <Texto style={ estilos.nome }>{ nome }</Texto>
        <View style={ estilos.viewFazenda }>
            <Image source={ logoFazenda } style={ estilos.imagemFazenda } />
            <Texto style={ estilos.nomeFazenda }>{ nomeFazenda }</Texto>
        </View>
        <Texto style={ estilos.descricao }> { descricao } </Texto>
        <Texto style={ estilos.preco }> { preco } </Texto>

        <TouchableOpacity style = { estilos.botao } >
            <Texto style={ estilos.textoBotao }>{ botao }</Texto>

        </TouchableOpacity>
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
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    },
});
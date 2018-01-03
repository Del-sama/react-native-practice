import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';


const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headerStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 40,
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
});

export default Header;

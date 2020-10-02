import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class SearchScreen extends React.Component {
    render () {
        return (
            
                <Text style = {styles.searchStyle}> this is the search screen! </Text>
           
        )
    }
}

const styles = StyleSheet.create({
    searchStyle: {
        flex:1,
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginTop: 200,
        marginBottom: 200,
        color: 'blue',
        
    }
})
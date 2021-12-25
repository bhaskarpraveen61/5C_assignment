import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

export default function Input({ navigation}) {
    const [value, setvalue] = useState("");
    const [git, setgit] = useState([]);
    var url_data = ""; 
    const fetch_url = async () => {
        try {
            const data = await fetch(`https://api.github.com/users/${value.toLocaleLowerCase()}/repos`)
            url_data = await data.json();
            setgit(url_data);
            console.log('json response',url_data[0].name);
        }
        catch (error) {
            console.log('error in try block', error)
        }finally{
            console.log('entered finally', git.length);
            setvalue("");
            navigation.navigate(
                'Repositories', {
                otherParam: url_data
            }
            )
        }
        // try {
        //     fetch(`https://api.github.com/users/${value.toLocaleLowerCase()}/repos`)
        //         .then(response => response.json())
        //         .then(responseJson => setgit(responseJson))
        //         .catch(e => console.log('error', e))
        // } finally {
        //     console.log('entered finally', git.length);
        //     navigation.navigate(
        //         'Repositories', {
        //         otherParam: git
        //     }
        //     )
        // }
    }
    return (
        <View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    placeholder="Username"
                    value={value}
                    onChangeText={(text) => setvalue(text)}
                    style={{ width: '80%', margin: 10, borderWidth: 1, height: '30%', backgroundColor: 'white' }}
                />
                <View style={{ borderWidth: 2, backgroundColor: '#03cffc' }}>
                    <TouchableOpacity
                        style={{ margin: 10 }}
                        onPress={() => fetch_url(value)}
                    >
                        <Text>Click here</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

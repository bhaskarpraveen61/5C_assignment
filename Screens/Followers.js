import React from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import { Avatar, Card } from 'react-native-paper';
var url_data="";
export default function Followers({navigation,route}) {
    const fetch_follwer = async (value) => {
        console.log('fetch_follower',value)
        try {
            const data = await fetch(`${value}`)
            url_data = await data.json();
            console.log('json response',url_data[0].name);
        }
        catch (error) {
            console.log('error in try block', error)
        }finally{
            navigation.navigate(
                'Repositories', {
                otherParam: url_data
            }
            )
        }
    }
    const hadlerender = (render) => {
        return (
            <TouchableOpacity
                onPress={() => fetch_follwer(render.item.repos_url)}
                style={{ margin: '1%',flex:1 }}
            >
                <Card mode='elevated'>
                    <View style={{marginTop:'2%',flexDirection:'row'}}>
                        <Avatar.Image size={130} source={{ uri: render.item.avatar_url}} />
                        <Card.Content>
                            <Text style={{fontSize:20}}>{render.item.login}</Text>
                        </Card.Content>
                    </View>
                </Card>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={route.params.otherParam}
                    renderItem={hadlerender}
                    keyExtractor={item => item.id}
                    style={{ marginTop: '2%' }}
                >
                </FlatList>
            </View>
        </SafeAreaView>
    )
}

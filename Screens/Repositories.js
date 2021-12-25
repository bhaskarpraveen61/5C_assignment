import React from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import { Avatar, Card } from 'react-native-paper';

export default function Repositories({ navigation, route }) {
    const fetch_followers = async () => {
        console.log(`${route.params.otherParam[0].owner.followers_url}`);
        try {
            const data = await fetch(`${route.params.otherParam[0].owner.followers_url}`)
            url_data = await data.json();
            console.log('json response',url_data[0]);
        }
        catch (error) {
            console.log('error in try block', error)
        }finally{
            navigation.navigate(
                'Followers', {
                otherParam: url_data
            }
            )
        }
    }
    const hadlerender = (render) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('DetailedRepository',{otherParam:render.item})}
                style={{ margin: '1%',flex:1 }}
            >
                <Card mode='elevated'>
                    <View style={{ flexDirection:'row',alignItems: 'center', marginTop: '2%'}}>
                        <Avatar.Image size={85} source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Content>
                            <Text style={{ fontSize: 15 }}>Name:{render.item.name}</Text>
                            <Text style={{ marginRight:'1%',fontSize: 10 }}>{render.item.description}</Text>
                        </Card.Content>
                    </View>
                </Card>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView>
            <View>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, marginLeft: '10%' }}>Welcome {route.params.otherParam[0].owner.login} </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: route.params.otherParam[0].owner.avatar_url }} style={{ height: 80, width: 80, borderRadius: 100, marginLeft: '5%' }} />
                        <Text style={{ marginLeft: '2%', marginTop: '2%', color: '#053afa' }}>Total: {route.params.otherParam.length}(git pushes) </Text>
                    </View>
                    <TouchableOpacity
                        onPress={fetch_followers}
                    >
                        <Text style={{ color: '#0c81f5', marginTop: '2%', marginLeft: '8%' }}>Follower(s)</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={route.params.otherParam}
                        renderItem={hadlerender}
                        keyExtractor={item => item.id}
                        style={{ marginTop: '2%' }}
                    >
                    </FlatList>
                </View>
            </View>
        </SafeAreaView>
    )
}

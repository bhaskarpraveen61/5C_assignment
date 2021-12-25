import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

export default function DetailedRepository({navigation,route}) {
    console.log('route in detailed repo',route.params.otherParam.full_name);
    return (
        <SafeAreaView>
            <View style={{flexDirection:'column'}}>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontWeight:'bold',fontSize:30}}>
                        {route.params.otherParam.name.toUpperCase()}
                    </Text>
                    <Text style={{marginTop:'2%'}}>Created:{route.params.otherParam.created_at.substring(0,10)}</Text>
                    <View style={{flexDirection:'row',marginTop:'2%'}}>
                        <Text style={{marginRight:'20%'}}>Updated:{route.params.otherParam.updated_at.substring(0,10)}</Text>
                        <Text>Pushed:{route.params.otherParam.pushed_at.substring(0,10)}</Text>
                    </View>
                    <Text style={{marginTop:'5%',fontSize:20,fontFamily:'Arial-BoldItalicMT',color:'#0c2ff5'}}>Abstract:{route.params.otherParam.description}</Text>
                    <Text style={{marginTop:'5%',fontSize:15,fontFamily:'Avenir-Roman',color:'#a70cf5'}}>Size:{route.params.otherParam.size}kb</Text>
                    <Text style={{marginTop:'5%',fontSize:15,fontFamily:'Avenir-Roman',color:'#f50c0c'}}>Language:{route.params.otherParam.language}</Text>
                    
                </View>
                <View style={{marginTop:'120%',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontFamily:'Avenir-Roman',color:'#f54a0c'}}>License Name:{route.params.otherParam.license != null ? route.params.otherParam.license.name:'No license' }</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

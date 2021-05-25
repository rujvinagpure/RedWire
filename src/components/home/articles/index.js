import React from 'react';
import { 
    View, Text, 
    Button, ScrollView,
    TouchableOpacity,StyleSheet 
} from 'react-native';
import { Card } from 'react-native-elements'

const HomeScreen = ({navigation}) => {

    const renderCard = () => (
        <TouchableOpacity
            onLongPress={()=> navigation.navigate('Article_screen',{
                id: 'vdhjbd',
                postData: {title:'sjsjs',content:''}
            })}
        >
            <Card>
                <Card.Title style={styles.cardTitle}>
                    <Text>Poll violence: 3 people arrested for killing of 2 BJP workers, WB tells SC </Text>
                </Card.Title>
                <Card.Divider/>
                <Text style={styles.cardText}>
                The West Bengal government informed the Supreme Court that three
                 people have been arrested in connection with the alleged killing of two BJP 
                 workers in poll-related violence on May 2 in the state and FIRs have been registered in
                  these cases. The state government told a vacation bench of Justices Vineet Saran and B R 
                  Gavai that investigation is going on.

                </Text>
            </Card>
        </TouchableOpacity>
    )


    return(
        <ScrollView>
            {renderCard()}
            {renderCard()}
            {renderCard()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardTitle:{
        fontSize:20,
        textAlign:'left'
    },
    cardText:{
        marginBottom:10,
        marginTop:10
    }
})

export default HomeScreen;
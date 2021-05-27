import React ,{useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TextInput,  Button, Title }from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { PrivateValueStore } from '@react-navigation/core';
const UserData =()=>{


    const handleSubmit =(values)=>{
        alert('blaaaaaa submit')
    }
    return(
        <Formik
        enableReinitialize={true}
        initialValues= {{
            name: '',
            lastname: '',
            age:''

        }}
        validationSchema ={Yup.object({
            name: Yup.string().required('The name is requirws'),
            lastname:  Yup.string().required('The lastname is requirws'),
            age: Yup.number().required('The age is required'),

        })
        
        }
        onSubmit={values => handleSubmit(values)}

        >
            {({ handleChange , handleBlur ,handleSubmit, values, touched, errors })=>(
                <View style={{padding:20}}>
                <TextInput
                    label="name"
                    mode="flat"
                    error={ errors.name && touched.name ? true : false}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                />
                <TextInput
                    label="lastname"
                    mode="flat"
                    error={ errors.lastname && touched.lastname ? true : false}
                    onChangeText={handleChange('lastname')}
                    onBlur={handleBlur('lastname')}
                    value={values.lastname}
                />
                 <TextInput
                    label="age"
                    mode="flat"
                    error={ errors.age && touched.age ? true : false}
                    onChangeText={handleChange('age')}
                    onBlur={handleBlur('age')}
                    value={values.age}
                />
                 <Button
                    mode="contained"
                    onPress={handleSubmit}
                >
                    Update
                </Button>
            </View>
        )}  
        
        </Formik>

    )

}
export default UserData;
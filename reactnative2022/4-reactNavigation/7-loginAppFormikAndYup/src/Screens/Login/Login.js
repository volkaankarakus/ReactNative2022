import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, StyleSheet,Image,TextInput, TouchableOpacity, ScrollView} from 'react-native';
import React,{useState} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import * as Yup from 'yup';




const loginValidationSchema = Yup.object().shape({
    username : Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Username is required'),
    password : Yup.string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    email : Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Email is required')
    .email()
  });
    


export default function Login() {

    const [showPassword,setShowPassword] = useState(false);

  return (

    <Formik
     initialValues={{ username : '', password : '',email : '' }}
     validateOnMount={true}
     onSubmit={values => alert(JSON.stringify(values))}
     validationSchema = {loginValidationSchema}  
    >
     {({ handleChange, handleBlur, handleSubmit, values,touched,errors,isValid }) => (
        <SafeAreaView style={style.body}>
        <ScrollView>
            <View style={style.header}>
                <Text style={style.title}>Sign In</Text>
            </View>

            <View style={style.logoArea}> 
                <Image source={require('../../../assets/images/home.png')}></Image> 
            </View>

            <View style={style.board}>
                <View style={style.item}>
                    <TextInput
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                        placeholder='Username' 
                        autoCapitalize='none'
                        style={style.input}/>
                    <View style={style.check}>
                        <Icon name={!errors.username ? 'check' : null } size={23} style={{color : '#20C3AF'}}/>
                    </View>
                     
                </View>
                {( errors.username && touched.username ) && <Text style={style.error}>{errors.username}</Text> }

                <View style={style.item}>
                    <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder='Password'
                        secureTextEntry= {!showPassword}
                        style={style.input} 
                    />
                    <View style={[style.check]}>
                        <Icon name={!errors.password ? 'check' : null} size={23} style={{color : '#20C3AF'}}/>
                    </View>
                    <TouchableOpacity style={errors.password ? style.eyeSlash : style.eyeSlashError } onPress={ () => setShowPassword(!showPassword)}>
                        <Icon name={showPassword ? 'eye-slash' : 'eye'} size={23} color={'#525464'}></Icon>
                    </TouchableOpacity>
                </View>
                {( errors.password && touched.password ) && <Text style={style.error}>{errors.password}</Text> }


                <View style={style.item}>
                    <TextInput 
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder='Email' 
                        style={style.input}
                        keyboardType='email-address'/> 
                    <View style={style.check}>
                        <Icon name={!errors.email ? 'check' : null} size={23} style={{color : '#20C3AF'}}/>
                    </View>
                </View>
                {( errors.email && touched.email ) && <Text style={style.error}>{errors.email}</Text>  }


                <View style={style.forgotPassword}>
                    <Text style = {style.forgotPasswordText}>Forgot your password ?</Text>
                </View>

                <View style={style.item}>
                    <TouchableOpacity onPress={handleSubmit} style={[style.button,style.shadowButton,{shadowColor : 'black', backgroundColor : isValid ? '#20C3AF' : '#CACFD2'}]} disabled={!isValid}>
                        <Text style={style.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.or}>
                    <Text style = {style.orText}>or</Text>
                </View>

                <View style={style.social}>
                    <TouchableOpacity style={style.socialItem}>
                        <Icon name='facebook' size={15} color={'#3b5999'}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.socialItem}>
                        <Icon name='twitter' size={15} color={'#55acee'}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.socialItem}>
                        <Icon name='linkedin' size={15} color={'#0077B5'}></Icon>
                    </TouchableOpacity>
                </View>

                <View style={style.haventAccount}>
                    <Text style = {style.haventAccountText}>
                        Don't have an account? 
                    </Text>
                    <TouchableOpacity >
                        <Text style = {style.haventAccountSignUp}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
        </SafeAreaView>
    )}
    </Formik>
  )
}

const style = StyleSheet.create({
    body : {
        flex:1,
        backgroundColor: 'white'
    },
    header : {
        padding : 40,
        justifyContent : 'center',
        alignItems : 'center',
    },
    title : {
        fontWeight : '700',
        fontSize : 20,
        color : '#525464'
    },
    logoArea : {
        alignItems:'center',
        marginTop:40,
    },
    board : {
        marginTop : 30,
        paddingHorizontal : 30,
    },
    item : {
        marginBottom : 20,
    },
    input : {
        backgroundColor : '#F2F2F2',
        paddingVertical : 10,
        paddingHorizontal : 20,
        height : 50,
        borderWidth : 1,
        borderColor : '#C0C0C0',
        borderRadius : 8,
    },
    check : {
        position : 'absolute',
        right :25,
        top : 12,
    },
    eyeSlash : {
        position : 'absolute',
        right :25,
        top : 12,
    },
    eyeSlashError : {
        position : 'absolute',
        right :65,
        top : 12,
    },
    forgotPassword : {
        marginBottom : 20,
        flexDirection : 'row',
        justifyContent : 'flex-end',
    },
    forgotPasswordText : {
        color : '#525464',
        fontSize : 15,
    },
    button : {
        height : 40,
        borderRadius :8,
        justifyContent :'center',
        alignItems :'center'
    },
    buttonText : {
        color : 'white',
        fontSize : 20,
        fontWeight : '700',
    },
    or : {
        marginBottom : 20,
        justifyContent : 'center',
        alignItems : 'center',
    },
    orText : {
        color : '#525464',
        fontSize : 15,
        fontWeight : '700'
    },
    social : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginBottom : 20,
    },
    socialItem : {
        width : 60,
        height : 40,
        borderWidth :2,
        borderColor : '#C0C0C0',
        backgroundColor : 'white',
        justifyContent :'center',
        alignItems :'center',
        borderRadius : 8,
    },
    haventAccount : {
        flexDirection : 'row',
        justifyContent :'center',
        alignItems :'center'
    },
    haventAccountText : {
        marginRight : 25,
        color : '#525464',
        fontSize : 14,
        fontWeight : '500'
    },
    haventAccountSignUp : {
        color : '#FFDBAC',
        fontSize : 14,
        fontWeight :'700'
    },
    error : {
        fontSize : 14,
        color : 'red',
        fontWeight :'bold',
        marginTop : -18, // due to item => marginTop : 20
    },
    shadowButton : {
        shadowOffset : {width : 100, height :500},
        shadowOpacity : 0.3,
        shadowRadius : 3,
        elevation :15
    }

});
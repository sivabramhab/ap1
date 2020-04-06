import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import FooterImage from '../../assets/icons/login_screen_footer_logo.png';
import Logo from '../../assets/icons/header_logo.png'
class Login extends Component {
    state = {
        username: '',
        password: '',
        remember_me: false, 
        usererrorMessage: '',
        passworderrorMessage: ''
    }
    handleRemember(value) {
        this.setState({ remember_me: !value })

    }
    handleLogin() {
        console.log(this.state.password.length)
       /*  if (this.state.username.length === 0) {
            return this.setState({ usererrorMessage: 'Please Enter User Name' });
        } else if (this.state.username.length > 0) {
            return;
        } else {

            if (this.state.password.length === 0) {
                return this.setState({ passworderrorMessage: 'Please Enter Password' });
            } else if (this.state.password.length > 0) {
                return;
            } else {}
           
        } */
        var request = {
            username: this.state.username,
            password: this.state.password
        }
        console.log("var",request)
        this.props.navigation.navigate('Home')

    }
    render() {
        return (
            <>
                <KeyboardAvoidingView style={{ flex: 1 }}>
                    <View style={styles.topContainer}>
                       <Image source={Logo} style={styles.logoView}/>
                       <Text style={{fontFamily:'Gotham-Medium',fontSize:12}}>Farm Mangaement Transformed</Text>
                    </View>
                    <View style={styles.bottomContiner}>
                        <Text style={styles.header}>LOGIN</Text>
                        <View style={[styles.loginView, { marginTop: 30 }]}>
                            <TextInput
                                placeholder='User Name'
                                style={styles.textInputView}
                                onChangeText={value => this.setState({ username: value.trim() })}
                                underlineColorAndroid='transparent'
                            />
                            <Text style={styles.errorMessage}>{this.state.usererrorMessage}</Text>

                        </View>
                        <View style={styles.loginView}>
                            <TextInput
                                placeholder='Password'
                                secureTextEntry={true}
                                style={styles.textInputView}
                                onChangeText={value => this.setState({ password: value.trim() })}
                                underlineColorAndroid='transparent'
                            />
                            <Text style={styles.errorMessage}>{this.state.passworderrorMessage}</Text>

                        </View>
                        <View style={{ flexDirection: "row", marginHorizontal: 70 }}>
                            <TouchableOpacity onPress={() => this.handleRemember(this.state.remember_me)} activeOpacity={0.8}>
                                <View style={[styles.squareView, this.state.remember_me ? { backgroundColor: 'brown' } : null]}>
                                    {
                                        (this.state.remember_me)
                                            ?
                                            (<Icon name="check" color="#FFFFFF" size={18} />
                                            )
                                            :
                                            null
                                    }
                                </View>


                            </TouchableOpacity>
                            <Text style={styles.rememberView}>Remember Me</Text>


                        </View>
                        <TouchableOpacity style={styles.loginButtonView} onPress={() => this.handleLogin()}>
                            <Text style={{ color: '#FFFFFF', textAlign: 'center', fontFamily: 'Gotham-Book', marginVertical: 10 }}>Login</Text>

                        </TouchableOpacity>

                    </View>
                    <View style={styles.footerContainer}>
                        <Text style={styles.footerTitle} >Powered By</Text>
                        <Image source={FooterImage} style={styles.imageView} />
                    </View>


                </KeyboardAvoidingView>

            </>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3'
    },
    topContainer: {
        height: "40%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoView:{
        width:200,
        height:200
    },
    bottomContiner: {
        height: "60%",

    },
    header: {
        textAlign: 'center',
        fontFamily: 'Gotham-Medium'
    },
    loginView: {
        borderWidth: 1,
        width: "70%",
        marginBottom: 20,
        borderColor: 'gray',
        height: 40,
        marginHorizontal: 70,


    },
    textInputView: {
        fontFamily: 'Gotham-Medium',
        color: 'gray',
        fontSize: 12,
        marginHorizontal: 5
    },
    footerContainer: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row'
    },
    imageView: {
        width: 40,
        height: 15,
        marginHorizontal: 5
    },
    footerTitle: {
        fontFamily: 'Gotham-Medium',
        fontSize: 8
    },
    rememberView: {
        fontSize: 12,
        fontFamily: 'Gotham-Medium',
        marginHorizontal: 5
    },
    loginButtonView: {
        marginHorizontal: 70,
        marginTop: 40,
        backgroundColor: 'brown',
        width: "70%",
        height: 40
    },
    squareView: {
        borderWidth: 1,
        width: 20,
        height: 20
    },
    errorMessage: {
        color: 'red',
        fontSize: 12,
        marginVertical: 2,
        fontFamily: 'Gotham-Book',

    }

})
export default Login
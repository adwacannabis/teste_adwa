import React from "react";
import { ImageBackground, View, Image } from "react-native";

const LoadingScreen = () => {
    
        return (
            <View style={{ flex: 1, justifyContent:"space-around"}}>
                <ImageBackground
                    style={{
                        resizeMode: "stretch",
                        flex: 1,
                        width: null,
                        height: 120,
                        bottom: 0,
                        borderRadius: 15}}
                    source={require("../../assets/bg.png")}
                >   
                    <View style={{flex:1}} />
                        <View style={{justifyContent: "center", alignContent:"center", flexDirection:"row"}}>
                        <Image source={require("../../assets/icon.png")} style={{ height: 120, resizeMode: "contain", alignSelf: "center" }} />
                        </View>
                    <View style={{flex:1}} />
                </ImageBackground>
            </View>
        );
}

export default LoadingScreen;

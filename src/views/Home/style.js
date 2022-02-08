import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    grid: {
        flex: 1,
        margin: '1%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 5.5,
        borderBottomWidth: 0
    },
    gridButton: {
        backgroundColor: 'transparent', 
        width: '100%'
    },
    fonte: {  
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginHorizontal: '7%',
        marginBottom: '10%'
    },
    presentationFont: {
        color: 'white', 
        fontSize: 22, 
        fontWeight: 'bold'
    },
    imagemSearch: {
        backgroundColor: 'transparent',
        height: 20,
        width: 20
    },
    header: {
        height: 70, 
        width: '100%', 
        backgroundColor: '#dd1b18', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    containerHeader: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    search: {
        color: 'white', 
        fontSize: 17, 
        fontWeight: 'bold', 
        marginLeft: '2%'
    },
    input: {
        height: 80, 
        color: 'white', 
        fontSize: 17
    },
    searchfield: {           
        height: 40,    
        borderWidth: 1,    
        borderColor: '#000',    
        textAlign: 'center',    
        width: 250,    
        borderRadius: 50,  
    },
});
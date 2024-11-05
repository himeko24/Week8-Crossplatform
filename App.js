import { StyleSheet, Text, View } from 'react-native';
import { getUsers } from './services/axios';
import { useEffect } from 'react';

export default function App() {
    const getAllUsers = () => {
        getUsers().then((res) => {
            if (res.status === 200) {
                console.log(res.data);
            }
        });
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    const data = {
        title: "Title",
        body: "Body",
        userId: 1,
    };

    const handlePostData = () => {
        postData(data).then((res) => {
            console.log(res);
        });
    };

    return (
        <View style={styles.container}>
            <Text>Stefanus Andrian Leoandi - 00000055662</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

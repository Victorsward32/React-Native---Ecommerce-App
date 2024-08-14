import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import axios from 'axios';

const CollectionShoes = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API
        axios.get('https://dummyjson.com/products/category/mens-shoes')
            .then(response => {
                setProducts(response.data.products);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    const renderItem = ({ item }) => (
        <View style={styles.itemCart}>
            <FlatList
                horizontal
                data={item.images}
                keyExtractor={(imageUrl, index) => `${item.id}-${index}`}
                renderItem={({ item: imageUrl }) => (
                    <Image style={styles.productImg} source={{ uri: imageUrl }} />
                )}
                showsHorizontalScrollIndicator={false}
                style={styles.imageCarousel}
            />
            
            <View style={styles.rightSide}>
                <Text style={styles.itemHeading}>{item.title}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.buyButton}>
                        <Text style={styles.buyText}>Add To Cart</Text>
                        <AntDesign name='shoppingcart' size={20} color={'#fff'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton}>
                        <AntDesign name='delete' size={24} color={'#555'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
        />
    );
}

export default CollectionShoes;

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
    },
    itemCart: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        marginVertical: 10,
        padding: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    imageCarousel: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    productImg: {
        height: 150,
        width: 150,
        borderRadius: 10,
        marginRight: 10,
    },
    rightSide: {
        flex: 1,
        justifyContent: 'space-around',
    },
    itemHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    itemPrice: {
        fontSize: 18,
        color: '#007BFF',
        marginVertical: 5,
    },
    itemDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
        lineHeight: 20,
    },
    actionButtons: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },
    buyButton: {
        flexDirection: 'row',
        backgroundColor: '#FF9900',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginRight: 10,
        elevation: 1,
    },
    buyText: {
        color: '#fff',
        fontSize: 16,
        marginRight: 5,
    },
    deleteButton: {
        backgroundColor: '#ddd',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
    },
});

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, FlatList, ActivityIndicator, Modal, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const CollectionShoes = () => {
    let navigation=useNavigation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

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

    const handleAddToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemCart}>
            <FlatList
                horizontal
                data={item.images}
                keyExtractor={(imageUrl, index) => `${item.id}-${index}`}
                renderItem={({ item: imageUrl }) => (
                    <TouchableOpacity onPress={() => {
                        setSelectedImage(imageUrl);
                        setModalVisible(true);
                    }}>
                        <Image style={styles.productImg} source={{ uri: imageUrl }} />
                    </TouchableOpacity>
                )}
                showsHorizontalScrollIndicator={false}
                style={styles.imageCarousel}
            />
            
            <View style={styles.rightSide}>
                <Text style={styles.itemHeading}>{item.title}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.buyButton} onPress={() => handleAddToCart(item)}>
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

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
            
            {cart.length > 0 && (
                <View style={styles.cartFooter}>
                    <Text style={styles.totalPrice}>Total: ${getTotalPrice().toFixed(2)}</Text>
                    <TouchableOpacity style={styles.viewCartButton} onPress={()=>{navigation.navigate('AddedCart')}}>
                        <Text style={styles.viewCartText} >View Cart</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Modal for displaying the selected image */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <Image style={styles.modalImage} source={{ uri: selectedImage }} />
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
}

export default CollectionShoes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
    cartFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    viewCartButton: {
        backgroundColor: '#007BFF',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    viewCartText: {
        color: '#fff',
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalImage: {
        width: '80%',
        height: '60%',
        borderRadius: 10,
    },
});

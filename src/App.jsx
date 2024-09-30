import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, selectCart } from './Configuration/Redux/cardSlice';

const App = ()=> {
  const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const styles = {
        productList: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            padding: '20px',
            justifyContent: 'center', // Center the items
        },
        card: {
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '16px',
            textAlign: 'center',
            width: '100%', // Full width on small screens
            maxWidth: '300px', // Max width for larger screens
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s', // Smooth scale effect
        },
        cardHover: {
            transform: 'scale(1.05)', // Scale effect on hover
        },
        cardImage: {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '5px', // Rounded corners for images
        },
        heading: {
            textAlign: 'center',
        },
        cartQuantity: {
            textAlign: 'center',
        },
    };

    return (
        <div>
            <h1 style={styles.heading}>Products</h1>
            <div style={styles.productList}>
                {products.map((product) => (
                    <div 
                        key={product.id} 
                        style={styles.card}
                        onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform} 
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            style={styles.cardImage} 
                        />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <h2 style={styles.cartQuantity}>Cart Quantity: {cart.length}</h2>
        </div>
    );
}


export default App
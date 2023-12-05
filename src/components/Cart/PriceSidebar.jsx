import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const PriceSidebar = ({ cartItems }) => {
    return (
        <Col xs={3}>

            {/* <!-- nav tiles --> */}
            <Container className="priceSidebar">
                <h1 className="titleHeading">PRICE DETAILS</h1>
                <Col xs={4}>
               
                    <p className="price-content">Price ({cartItems.length} item) <span>₹{cartItems.reduce((sum, item) => sum + (item.cuttedPrice * item.quantity), 0).toLocaleString()}</span></p>
                    <p className="price-content">Discount <span className="text-primary-green">- ₹{cartItems.reduce((sum, item) => sum + ((item.cuttedPrice * item.quantity) - (item.price * item.quantity)), 0).toLocaleString()}</span></p>
                    <p className="price-content">Delivery Charges <span className="text-primary-green">FREE</span></p>

                    <div className="border border-dashed"></div>
                    <p className="price-content text-lg font-medium">Total Amount <span>₹{cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}</span></p>
                    <div className="border border-dashed"></div>

                    <p className="font-medium text-primary-green">You will save ₹{cartItems.reduce((sum, item) => sum + ((item.cuttedPrice * item.quantity) - (item.price * item.quantity)), 0).toLocaleString()} on this order</p>

                    </Col>

            </Container>
            {/* <!-- nav tiles --> */}

        </Col>
    );
};

export default PriceSidebar;

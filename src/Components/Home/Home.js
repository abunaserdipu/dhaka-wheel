import React from 'react';
import background from '../../images/background.jpg';
import Header from '../../Components/Header/Header';
import Transport from '../Transport/Transport';
import './home.css';

const Home = () => {
    const transports = [
        {
            name: 'BIKE',
            photo: 'https://www.searchpng.com/wp-content/uploads/2019/01/Suzuki-Bike-PNG-Images.png',
            transportId: 1,
        },
        {
            name: 'CAR',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZrrYbzQl221JIgTLgAwJumubZQnn97pwiA&usqp=CAU',
            transportId: 2,
        },
        {
            name: 'BUS',
            photo: 'https://png.pngitem.com/pimgs/s/123-1232426_volvo-bus-png-clipart-volvo-bus-png-transparent.png',
            transportId: 3,
        },
        {
            name: 'TRAIN',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpVTCoKxrOqIDOmJ00QQC6hsLNc8Vrln73w&usqp=CAU',
            transportId: 4,
        },
    ]
    return (
        <div style={{backgroundImage: `url(${background})`}} className="background">
            <Header/>
            <div className="container">
            <div className="row">
                {
                    transports.map(transport => <Transport key={transport.transportId} transport={transport}></Transport>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;
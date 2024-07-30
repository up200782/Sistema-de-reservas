import React from 'react';
import CardSlider from '../CardSlider';
//import './App.css';

const slidesData = [
    { 
        image: 'https://alamedagrand.com/wp-content/uploads/2023/03/restaurante-5-mejores-restaurantes-en-aguascalientes.jpg', 
        title: 'Title 1', 
        description: 'Description 1', 
        clickEvent: () => console.log('Clicked Image 1') 
    },
    { 
        image: 'https://alamedagrand.com/wp-content/uploads/2023/03/mochomos-aguascalientes-1024x683.jpg', 
        title: 'Title 2', 
        description: 'Description 2', 
        clickEvent: () => console.log('Clicked Image 2') 
    },
    { 
        image: 'https://static.wixstatic.com/media/5cecee_78de0f63516c41f99bd9fe3b71dd2b13~mv2.jpg/v1/fill/w_560,h_572,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg', 
        title: 'Title 3', 
        description: 'Description 3', 
        clickEvent: () => console.log('Clicked Image 3') 
    },
    { 
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/bb/80/c1/foto-simon-bosch.jpg?w=600&h=-1&s=1', 
        title: 'Title 4', 
        description: 'Description 4', 
        clickEvent: () => console.log('Clicked Image 4') 
    },
    { 
        image: 'https://www.liderempresarial.com/wp-content/uploads/2022/04/277293415_466527968557802_3217541657891736443_n-1024x683.jpg', 
        title: 'Title 5', 
        description: 'Description 5', 
        clickEvent: () => console.log('Clicked Image 5') 
    },
    { 
        image: 'https://hotelfriendlyfun.com/wp-content/uploads/2022/09/Villalinda-1024x861.jpg', 
        title: 'Title 6', 
        description: 'Description 6', 
        clickEvent: () => console.log('Clicked Image 6') 
    },
];

const AppCardSlider = () => {
    return (
        <div className="App">
            <CardSlider slides={slidesData} />
        </div>
    );
}

export default AppCardSlider;

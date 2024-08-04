import React, { useState, useEffect } from 'react';
import { fetchImagesByRoomType } from '../ImageServiceervices/imageService';

const RoomImages = ({ roomTypeId }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            try {
                const imagesData = await fetchImagesByRoomType(roomTypeId);
                setImages(imagesData);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        getImages();
    }, [roomTypeId]);

    return (
        <div>
            {images.map((image) => (
                <img key={image.imageId} src={image.imageUrl} alt={`Room ${roomTypeId}`} style={{ width: '100%', height: 'auto' }} />
            ))}
        </div>
    );
};

export default RoomImages;

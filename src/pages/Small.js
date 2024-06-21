import React from 'react';
import { Stack } from 'react-bootstrap';
import Shine from '../assets/shining.png';
import Return from '../assets/return.png';
import Smile from '../assets/smile.png';
import Arrow from '../assets/right-arrow.png'; // Assuming this is the correct import for the right arrow image

export default function Small() {
    return (
        <div className='small'>
            <Stack direction="horizontal" gap={7}>
                <div className="p-2 icon-text">
                    <img src={Shine} className='small-icons' alt="No Cost EMI" />
                    <span>No Cost EMI</span>
                    <img src={Arrow} className='small-icons' alt="Right Arrow" />
                    |
                </div>
                <div className="icon-text">
                    <img src={Return} className='small-icons' alt="Easy Returns" />
                    <span>Easy Returns</span>
                    <img src={Arrow} className='small-icons' alt="Right Arrow" />
                    |
                </div>
                <div>
                    <img src={Smile} className='small-icons' alt="1M+ Happy customers" />
                    <span>1M+ Happy customers</span>
                    <img src={Arrow} className='small-icons' alt="Right Arrow" />
                </div>
            </Stack>
        </div>
    );
}

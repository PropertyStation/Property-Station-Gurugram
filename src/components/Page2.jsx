import React from 'react';
import image2 from '../assets/image2.jpg';

const Page2 = () => {
    return (

        <>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
            <div className='main3' style={{ backgroundImage: `url(${image2})` }}>
                <div className='box3'>
                    <h2 style={{
                        fontFamily: 'Cormorant, serif',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        color: 'rgb(28, 56, 99)',
                        fontSize: '28px',
                        lineHeight: '49px'
                    }}>
                        M3M Altitude
                    </h2>

                    <p style={{
                        textAlign: 'left',
                        fontFamily: 'Poppins, sans-serif, Arial, Helvetica',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        color: 'rgb(119, 119, 119)',
                        fontSize: '16px',
                        lineHeight: '29px'
                    }}>
                        <span>M3M Altitude</span> encapsulates the essence of luxury, elegance, and aspiration. Through this name, we aim to convey the unparalleled living experiences and prestige that define this exclusive enclave.
                        <br /><br />
                        <span>M3M ALTITUDE</span> is not merely a name it's a symbol of aspiration and distinction. As we embark on the journey of creating a super luxury real estate project, the choice of name plays a pivotal role in conveying the essence and promise of the development.<span> M3M Altitude</span> embodies the ethos of unparalleled luxury, elevated living experiences, and the pinnacle of sophistication.
                    </p>

                </div>
            </div>
        </>
    );
}

export default Page2;

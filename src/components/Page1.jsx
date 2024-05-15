import image1 from '../assets/imag1.jpg';

const Page1 = () => {
    return (
        <>
            <br /><br /><br /><br /><br /><br />

            <div className='main'>
                <div className="content" style={{ textAlign: 'left' }}>
                    <h1 id='core'>CORE THOUGHT BEHIND NAME OF THE PROJECT</h1>
                    <p>
                        <span> M3M Altitude </span>encapsulates the essence of luxury, elegance, and aspiration. Through this name, we aim to convey the unparalleled living experiences and prestige that define this exclusive enclave.
                        <br /><br />
                        <span>M3M Altitude is not just a name; it's a promise of elevated living at its finest!</span>
                        <br /><br />
                        <span>M3M ALTITUDE </span>is not merely a name; it's a symbol of aspiration and distinction. As we embark on the journey of creating a super luxury real estate project, the choice of name plays a pivotal role in conveying the essence and promise of the development.<span > M3M Altitude</span> embodies the ethos of unparalleled luxury, elevated living experiences, and the pinnacle of sophistication.
                    </p>
                    <br /><br />
                    <button className="details-button-page1">Get Details</button>
                </div>

                <div className="image-page">
                    <img src={image1} alt="image1" />
                </div>
            </div>
        </>
    );
}

export default Page1;

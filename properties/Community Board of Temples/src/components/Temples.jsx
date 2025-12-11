import Event from './Event';
import templeImg1 from '../assets/BAPSswamiNarayanTemple.jpeg';
import templeImg2 from '../assets/ISKON.jpg';
import templeImg3 from '../assets/malibu.jpg';
import templeImg4 from '../assets/karyasidhihanuman.png';
import templeImg5 from '../assets/chichago.webp';
import templeImg6 from '../assets/Meenakshi.avif';
import templeImg7 from '../assets/Baba.webp';
import templeImg8 from '../assets/washington.webp';
import templeImg9 from '../assets/Hindusociety.jpg';

const Temples = () => {
    return (
        <div>
        <div className="TemplesContainer">
            <Event img={templeImg1} templeName="BAPS Swaminarayan Akshardham" location="📍 112 N Main St, Robbinsville Twp, NJ 08561" />
            <Event img={templeImg2} templeName="ISKCON Los Angeles" location="📍 3764 Watseka Ave, Los Angeles, CA 90034" />
            <Event img={templeImg3} templeName="Vaishnava Temple Malibu" location="📍 Malibu, Los Angeles, CA" />
        </div>
        <div className="TemplesContainer">
            <Event img={templeImg4} templeName="Karya Siddhi Hanuman Temple" location="📍 12030 Independence Pkwy building b, Frisco, TX 75035" />
            <Event img={templeImg5} templeName="Hindu Temple of Greater Chicago" location="📍 8915 W 159th St, Orland Hills, IL 60467" />
            <Event img={templeImg6} templeName="Sri Meenakshi Temple" location="📍 23553 Palomar St, Hayward, CA 94544" />
        </div>
        <div className="TemplesContainer">
            <Event img={templeImg7} templeName="Shri Shirdi Sai Baba Sansthan" location="📍 144 S 4th St Montebello, CA 90640" />
            <Event img={templeImg8} templeName="Sri Siva Vishnu Temple" location="📍 6905 Cipriano Rd, Lanham, MD 20706" />
            <Event img={templeImg9} templeName="Hindu Temple Society" location="📍 45-57 Bowne St, Flushing, NY 11355" />
        </div>
        </div>
    );
};

export default Temples;
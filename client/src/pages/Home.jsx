import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div style={{ backgroundColor: '#1a1a1a' }} className='relative'>
      {/* Background image overlay */}
      <div
        style={{
          background: 'url(pic4.jpg) center center no-repeat',
          backgroundSize: 'cover',
          opacity: 0.5,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      ></div>

      {/* Top Section */}
      <div className='flex flex-col gap-6 py-20 px-4 max-w-6xl mx-auto'>
        <h1 className='text-white font-bold text-5xl lg:text-7xl'>
          Welcome to <span className='text-blue-400'>OneStop</span>
        </h1>
        <div className='text-white text-xl'>
          Your go-to destination for all things shopping.
          <br />
          Discover the best deals and a wide selection of products.
        </div>
        <Link
          to={'/search'}
          className='text-lg text-blue-400 font-bold hover:underline'
        >
          View Products on Sale
        </Link>
      </div>

      {/* Listing Results for Offer, Sale, and Rent */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-3xl font-semibold text-white'>Recent Offers</h2>
              <Link className='text-md text-blue-400 hover:underline' to={'/search?offer=true'}>
                Explore more offers
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-3xl font-semibold text-white'>Rental Listings</h2>
              <Link className='text-md text-blue-400 hover:underline' to={'/search?type=rent'}>
                Discover more rentals
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-3xl font-semibold text-white'>Items for Sale</h2>
              <Link className='text-md text-blue-400 hover:underline' to={'/search?type=sale'}>
                View more Items
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

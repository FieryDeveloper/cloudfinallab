import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListingItem from '../components/ListingItem';

export default function Search() {
    const navigate = useNavigate();
    const [listings, setListings] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sidebardata, setsidebardata] = useState({
        searchTerm: '',
        type: 'all',
        parking: false,
        furnished: false,
        offer: false,
        sort: 'created_at',
        order: 'desc',
    });

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        const typeFromUrl = urlParams.get('type');
        const parkingFromUrl = urlParams.get('parking');
        const furnishedFromUrl = urlParams.get('furnished');
        const offerFromUrl = urlParams.get('offer');
        const sortFromUrl = urlParams.get('sort');
        const orderFromUrl = urlParams.get('order');

        setsidebardata({
            searchTerm: searchTermFromUrl || '',
            type: typeFromUrl || 'all',
            parking: parkingFromUrl === 'true',
            furnished: furnishedFromUrl === 'true',
            offer: offerFromUrl === 'true',
            sort: sortFromUrl || 'created_at',
            order: orderFromUrl || 'desc',
        });

        const fetchListings = async () => {
            setLoading(true);
            setShowMore(false);
            const searchQuery = urlParams.toString();
            const res = await fetch(`/api/listing/get?${searchQuery}`);
            const data = await res.json();
            if (data.length > 8) {
                setShowMore(true);
            } else {
                setShowMore(false);
            }
            setListings(data);
            setLoading(false);
        };

        fetchListings();
    }, [location.search]);

    const handleChange = (e) => {
        if (['all', 'rent', 'sale'].includes(e.target.id)) {
            setsidebardata({ ...sidebardata, type: e.target.id });
        } else if (e.target.id === 'searchTerm') {
            setsidebardata({ ...sidebardata, searchTerm: e.target.value });
        } else if (['parking', 'furnished', 'offer'].includes(e.target.id)) {
            setsidebardata({ ...sidebardata, [e.target.id]: e.target.checked });
        } else if (e.target.id === 'sort_order') {
            const [sort, order] = e.target.value.split('_');
            setsidebardata({ ...sidebardata, sort, order });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams();
        urlParams.set('searchTerm', sidebardata.searchTerm);
        urlParams.set('type', sidebardata.type);
        urlParams.set('parking', sidebardata.parking);
        urlParams.set('furnished', sidebardata.furnished);
        urlParams.set('offer', sidebardata.offer);
        urlParams.set('sort', sidebardata.sort);
        urlParams.set('order', sidebardata.order);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    return (
        <div className='flex flex-col md:flex-row' style={{ backgroundColor: '#1a1a1a' }}>
            <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen" style={{ backgroundColor: '#333' }}>
                <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                    <div className="flex items-center gap-2">
                        <label className='whitespace-nowrap font-semibold text-white'>Search Term:</label>
                        <input type="text" id='searchTerm' placeholder='Search...' className='border rounded-lg p-3 w-full' value={sidebardata.searchTerm} onChange={handleChange} style={{ backgroundColor: '#444', color: 'white' }} />
                    </div>
                    <div className="flex gap-2 flex-wrap items-center">
                        <label className='font-semibold text-white'>Type:</label>
                        <div className="flex gap-2">
                            <input type="checkbox" id="all" className='w-5' onChange={handleChange} checked={sidebardata.type === 'all'} />
                            <span className='text-white'>Rent & Sale</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="rent" className='w-5' onChange={handleChange} checked={sidebardata.type === 'rent'} />
                            <span className='text-white'>Limited Time</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="sale" className='w-5' onChange={handleChange} checked={sidebardata.type === 'sale'} />
                            <span className='text-white'>Out of Stock</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="offer" className='w-5' onChange={handleChange} checked={sidebardata.offer} />
                            <span className='text-white'>Offer</span>
                        </div>
                    </div>
                    {/* <div className="flex gap-2 flex-wrap items-center">
                        <label className='font-semibold text-white'>Amenities:</label>
                        <div className="flex gap-2">
                            <input type="checkbox" id="parking" className='w-5' onChange={handleChange} checked={sidebardata.parking} />
                            <span className='text-white'>Parking</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="furnished" className='w-5' onChange={handleChange} checked={sidebardata.furnished} />
                            <span className='text-white'>Furnished</span>
                        </div>
                    </div> */}
                    <div className="flex items-center gap-2">
                        <label className='font-semibold text-white'>Sort:</label>
                        <select onChange={handleChange} defaultValue={'created_at_desc'} id="sort_order" className='border rounded-lg p-3' style={{ backgroundColor: '#444', color: 'white' }}>
                            <option value='regularPrice_desc'>Price high to Low</option>
                            <option value='regularPrice_asc'>Price low to high</option>
                            <option value='createdAt_desc'>Latest</option>
                            <option value='createdAt_asc'>Oldest</option>
                        </select>
                    </div>
                    <button className='bg-blue-600 text-white p-3 rounded-lg uppercase hover:opacity-95'>Search</button>
                </form>
            </div>
            <div className="flex-1 p-7" style={{ backgroundColor: '#1a1a1a' }}>
                <h1 className='text-4xl font-bold border-b p-3 text-white'>Items on Sale:</h1>
                <div className='flex flex-wrap gap-4'>
                    {!loading && listings.length === 0 && (
                        <p className='text-xl text-white'>No Items found!!</p>
                    )}
                    {loading && (
                        <p className='text-xl text-white text-center w-full'>Loading...</p>
                    )}
                    {!loading && listings && listings.map((listing) => <ListingItem key={listing._id} listing={listing} />)}
                </div>
                {showMore && (
                    <div className='text-center mt-6'>
                        <button className='bg-blue-600 text-white p-3 rounded-lg hover:opacity-95'>
                            Load more Items
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

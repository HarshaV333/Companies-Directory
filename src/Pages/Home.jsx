import React, { useEffect, useMemo, useState } from 'react'
import companiesData from '../CompaniesData'
import Spinner from '../Components/Spinner';
import Card from '../Components/Card';

const Home = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [filter, setFilter] = useState(false);
    const [location, setLocation] = useState('All');
    const [industry, setIndustry] = useState('All');
    const [search, setSearch] = useState('');

    // get data from json file
    useEffect(() => {
        setLoading(true);
        setData(companiesData);
        setLoading(false);
    }, []);

    // adding filters functionality
    const filteredItems = useMemo(() => {
        let list = [...data];

        if(location !== 'All'){
            list = list.filter(i => i.location.split(',')[0] === location)
        }

        if(industry !== 'All'){
            list = list.filter(i => i.industry === industry)
        }

        if (search){
           list = list.filter(i => i.name.toLowerCase().includes(search.toLowerCase())); 
        }

        return list;

    }, [data, location, industry, search]);

  return (
    <div className=' max-w-[1100px] mx-auto'>
        {/* Filters */}
        <div className='flex justify-between mt-1 flex-col md:flex-row'>
            <button onClick={() => {setFilter(!filter)}} 
                className=' py-1 px-2 bg-yinmnBlue text-Platinum font-Montserrat font-normal text-lg rounded-md
                 hover:bg-silverLakeBlue transition-all duration-200 w-[80px] '>
                Filter
            </button>
            {
                filter ? 
                (
                    <div className=' my-auto flex flex-col md:flex-row'>
                        <div>
                            <label className='font-Montserrat font-normal text-lg text-RichBlack py-1 px-2 my-auto'>Industry </label>
                            <select
                                name='industry'
                                value={industry}
                                onChange={e => setIndustry(e.target.value)}
                                className='font-Montserrat font-normal text-lg text-RichBlack border py-1 px-2 my-auto'
                            >
                                <option selected>All</option>
                                <option >Information Technology</option>
                                <option >Healthcare</option>
                                <option >Finance</option>
                                <option >Education</option>
                                <option >Manufacturing</option>
                                <option >Real Estate</option>
                                <option >Automotive</option>
                                <option >Agriculture</option>
                                <option >Energy</option>
                                <option >Media</option>
                            </select>
                        </div>
                        <div>
                            <label className='font-Montserrat font-normal text-lg text-RichBlack py-1 px-2 my-auto'>Location</label>
                            <select
                                name='location'
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                                className='font-Montserrat font-normal text-lg text-RichBlack border py-1 px-2 my-auto'
                            >
                                <option selected>All</option>
                                <option>Hyderabad</option>
                                <option>Bangalore</option>
                                <option>Mumbai</option>
                                <option>Chennai</option>
                                <option>Pune</option>
                                <option>Delhi</option>
                                <option>Kolkata</option>
                                <option>Ahmedabad</option>
                                <option>Noida</option>
                                <option>Gurgaon</option>
                            </select>
                        </div>
                    </div>
                ):
                (
                    <span></span>
                )
            }
            <label
             className='font-Montserrat font-normal text-lg text-RichBlack py-1 px-2 my-auto'
            >Search:
                <input
                    name='search'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className='font-Montserrat font-normal text-lg text-RichBlack border py-1 px-2 my-auto'
                    placeholder='Search...'
                />
            </label>
        </div>
        {/* Cards */}
        <div className=''>
            {
                loading ?
                (
                    <div className='flex justify-center items-center mt-[250px]'>
                        <Spinner/>
                    </div>
                ):
                (
                    <div className="grid gridcols-1 md:grid-cols-2 lg:grid-cols-3 p-2 mx-auto gap-3">
                    {/* <div className='flex justify-center items-center flex-col sm:flex-row md:flex-row flex-wrap gap-3'> */}
                        {/* check length because filteredItems can get an empty List */}
                        {filteredItems.length !== 0 ? 
                        (
                            filteredItems.map((d) => (
                                <Card data={d}/>
                            ))
                        ) :
                        (
                            <p
                                className='font-Montserrat font-normal text-2xl text-RichBlack py-1 px-2'
                            >No Data Found</p>
                        )}
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Home
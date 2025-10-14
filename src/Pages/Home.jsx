import React, { useEffect, useMemo, useState } from 'react'
import companiesData from '../CompaniesData'
import Spinner from '../Components/Spinner';
import Card from '../Components/Card';

const Home = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

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

        location !== 'All' ? list = list.filter(i => i.location.split(',')[0] === location) : list = list

        industry !== 'All' ? list = list.filter(i => i.industry.split(',')[0] === industry) : list = list

        search ? list = list.filter(i => i.name.toLowerCase().includes(search.toLowerCase())) : list = list

        return list;

    }, [data, location, industry, search]);

  return (
    <div className='w-[1100px] mx-auto'>
        <div className='flex justify-between'>
            <button onClick={() => {setFilter(!filter)}}>
                Filter
            </button>
            {
                filter ? 
                (
                    <span>
                        <span>
                            <label>Industry </label>
                            <select
                                name='industry'
                                value={industry}
                                onChange={e => setIndustry(e.target.value)}
                            >
                                <option selected>All</option>
                                <option>Information Technology</option>
                                <option>Healthcare</option>
                                <option>Finance</option>
                                <option>Education</option>
                                <option>Manufacturing</option>
                                <option>Real Estate</option>
                                <option>Automotive</option>
                                <option>Agriculture</option>
                                <option>Energy</option>
                                <option>Media</option>
                            </select>
                        </span>
                        <span>
                            <label>Location</label>
                            <select
                                name='location'
                                value={location}
                                onChange={e => setLocation(e.target.value)}
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
                        </span>
                    </span>
                ):
                (
                    <button></button>
                )
            }
            <label>Search: 
                <input
                    name='search'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </label>
        </div>
        <div>
            {
                loading ?
                (
                    <Spinner/>
                ):
                (
                    <div className='flex flex-row flex-wrap justify-center items-center'>
                        {filteredItems ? 
                        (
                            filteredItems.map((d) => (
                                <Card data={d}/>
                            ))
                        ) :
                        (
                            <p>no data found</p>
                        )}
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Home
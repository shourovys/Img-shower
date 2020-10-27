import React, { useEffect, useState } from 'react';
import './Home.css'
import Card from '../Card/Card'
import SkeletonCard from '../Skeleton/SkeletonCard/SkeletonCard';


//vai ame cai na pote bar randers a fetch api call hok
const Home = () => {
    let apiKey = 'qYnjAZtToJtJAZfNwxBv6hBQrbP7xRdzqZp9nIGkdUM'
    const url = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${5}`
    const [postData, setPostData] = useState(null)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPostData(data))
    }, [])


    return (
        <div className='home'>
            <div className="cardContainer">
                {postData &&
                    postData.map(post => <Card post={post} key={post.id} />)
                }
                {
                    !postData &&
                    [1, 2, 3, 4, 5].map(num => <SkeletonCard key={num} />)
                }
            </div>
        </div>
    );
};

export default Home;
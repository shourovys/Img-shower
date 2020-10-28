import React, { useEffect, useState } from 'react';
import './Home.css'
import Card from '../Card/Card'
import SkeletonCard from '../Skeleton/SkeletonCard/SkeletonCard';
import InfiniteScroll from 'react-infinite-scroll-component';



//vai ame cai na pote bar randers a fetch api call hok
const Home = () => {
    const [fetchData, setFetchData] = useState(false)
    const [postData, setPostData] = useState([])

    let apiKey = 'qYnjAZtToJtJAZfNwxBv6hBQrbP7xRdzqZp9nIGkdUM'
    const url = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${5}`
    useEffect(() => {
        setFetchData(false)
        console.log(123);
        fetch(url)
            .then(res => res.json())
            .then(data => setPostData([...postData, ...data]))
    }, [fetchData])


    return (
        <div className='home'>
            <div className="cardContainer">
                {
                    postData.length > 0 &&

                    <InfiniteScroll
                        dataLength={postData.length}
                        next={() => setFetchData(true)}
                        hasMore={true}
                        loader={<div class="lds-ripple"><div></div><div></div></div>}
                    >
                        {
                            postData.map(post =>
                                <Card
                                    post={post}
                                    key={post.id}
                                />)
                        }
                    </InfiniteScroll>
                }

                {
                    !postData.length &&
                    [1, 2, 3, 4, 5].map(num =>
                        <SkeletonCard
                            key={num}
                        />)
                }
            </div>
        </div>
    );
};

export default Home;
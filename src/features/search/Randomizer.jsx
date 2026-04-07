import React from 'react';

//---
import { fetchPosts } from './SearchSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// icons
import { GiPerspectiveDiceSixFacesTwo } from "react-icons/gi";


const topics = [
    'AskReddit',
    'aww',
    'gaming',
    'worldnews',
    'pics',
    'science',
    'todayilearned',
    'movies',
    'news',
    'funny',
    'EarthPorn',
    'videos',
    'DIY',
    'HistoryMemes',
    'Showerthoughts',
    'FoodPorn',
    'OldSchoolCool',
    'UpliftingNews',
    'dataisbeautiful',
    'nottheonion',
    'books',
    'space',
    'mildlyinteresting',
    'LifeProTips',
    'GetMotivated',
    'memes',
    'programming',
    'technology',
    'explainlikeimfive',
    'InternetIsBeautiful',
    'mildlyinfuriating',
    'cats',
    'dogs',
    'Art',
    'documentaries',
    'History',
    'sports',
    'music',
    'funnyvideos',
    'photography',
    'gardening',
    'travel',
    'fitness',
    'personalfinance',
    'relationship_advice',
    'television',
    'worldbuilding',
    'automobiles',
    'luxury',
    'design',
    'cooking',
    'psychology',
    'Futurology',
    'conspiracy',
    'wallpapers',
    'sneakers',
    'gadgets',
    'PHOTOSHOPBATTLES',
    'Unexpected',
    'wholesomememes',
    'rarepuppers',
    'AskScience',
    'nostalgia',
    'AskHistorians',
    'homeimprovement',
    'financialindependence',
    'spaceflight',
    'oddlysatisfying',
    'nonononoyes',
    'cleanmemes',
    'moviesuggestions',
    'boardgames',
    'tabletop',
    'booksuggestions',
    'DadJokes'
]

const Randomizer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRandomTopic = () => {
        const topicIndex = Math.floor(Math.random() * topics.length);
        dispatch(fetchPosts(topics[topicIndex]));
        navigate(`/${topics[topicIndex]}`);
    }


    return (
        <div 
            className='flex flex-row items-center cursor-pointer gap-1 text-white bg-blue-500/90 hover:bg-blue-500/60 px-5 py-2 rounded-lg border border-gray-500/50'
            onClick={handleRandomTopic}>
            <div className='text-xl'>
                <GiPerspectiveDiceSixFacesTwo />
            </div>
            Randomize
        </div>
    )
}

export default Randomizer

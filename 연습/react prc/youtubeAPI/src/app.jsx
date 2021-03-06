import { useEffect, useState } from 'react';
import styles from 	'./app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
	const [videos, setVideos] = useState([])
	useEffect(()=>{
		const requestOptions = {
			method: 'GET',
			redirect: 'follow'
			};
			
			fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=20&regionCode=KR&chart=mostPopular&key=AIzaSyAmAA8pD07oj5RG0J3OURiqQvlz917W-Fk", requestOptions)
			.then(response => response.json())
			.then(result => setVideos(result.items))
			.catch(error => console.log('error', error));
	},[])
	return (
		<div className={styles.app}>
			<SearchHeader/>
			<VideoList videos={videos}/>
		</div>
	)
}



export default App;

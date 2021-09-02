import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Cards from './component/cards/cards.jsx';
import Detail from './detail/detail';
import Nav from './component/nav/nav.jsx';


const App = ({ youtube }) => { //필요한 dependency를 외부에서 받아와야한다
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); //선택된 비디오 기본 null


  const onSearch = query => {
   youtube
    .search(query)
    .then((videos) => setVideos(videos), setSelectedVideo(null)) //상태를 업데이트해서 다시 목록으로 돌아가기
  };

  useEffect(() => { //첫 마운트되었을때 정보를 받아오면 되니까 componentDidMount
   //여기서 youtube클래스 인스턴스로 생성하지 않기 여기서 생성하면 계속적으로 새로운 렌더링이 발생해서 네트웨크 통신을 하게되므로 성능악화
   //여기서는 인스턴스를 받아와서 실행만 해주기
   youtube
    .mostPopular()
    .then( videos => setVideos(videos))
  }, []);

 
  const onClickVideo = (video) => {
    setSelectedVideo(video)
  }
  
  return (
    <div className={styles.App}>
      <Nav onSearch={onSearch}/>
      <section className={styles.content}>
      { selectedVideo && 
      (<div className={styles.detail}>
           <Detail selectedVideo={selectedVideo}/>
      </div>)}
        <div className={styles.list}> 
        {/* 컴포넌트에는 className을 작성할 수 없음, 부모에서 자식으로 구조적인 스타일링을 하려면 한번 더 감싸서 부모에서 스타일링하면 자식에게 적용 */}
          <Cards onClickVideo={onClickVideo} search={onSearch} videos={videos} display={ selectedVideo ?  'list' : 'grid'}/>
        {/* display, 관련영상이 디테일에서는 한 줄로 보일 수 있도록 구분해주는 props*/}
        </div>
       
      </section>
      
    </div>
  );
}

export default App;

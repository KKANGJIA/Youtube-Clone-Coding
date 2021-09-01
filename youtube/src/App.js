import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './component/cards.jsx';
import Nav from './component/nav.jsx';

const App = ({ youtube }) => { //필요한 dependency를 외부에서 받아와야한다
  const [videos, setVideos] = useState([]);

  const onSearch = query => {
   youtube
    .search(query)
    .then((videos) => setVideos(videos))
  };

  useEffect(() => { //첫 마운트되었을때 정보를 받아오면 되니까 componentDidMount
   //여기서 youtube클래스 인스턴스로 생성하지 않기 여기서 생성하면 계속적으로 새로운 렌더링이 발생해서 네트웨크 통신을 하게되므로 성능악화
   //여기서는 인스턴스를 받아와서 실행만 해주기
   youtube
    .mostPopular()
    .then( videos => setVideos(videos))
  }, []);
  
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards search={onSearch} videos={videos}/>
    </div>
  );
}

export default App;

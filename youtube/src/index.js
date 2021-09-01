import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';
import Youtube from './component/service/data';

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY); // 딱 한번만 인스턴스를 만들고

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/> 
    {/* 필요한 곳에다가 인스턴스 전달해주기 */}
  </React.StrictMode>,
  document.getElementById('root')
);
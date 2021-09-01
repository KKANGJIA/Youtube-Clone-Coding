// 서버와 통신하는 코드들 모아두는 곳 
// 컴포넌트에 섞어쓰지말고 컴포넌트가 필요하면 가져다주도록 'dependency injection'을 한다

class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async search(query) {
    try {
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=REACT_APP_YOUTUBE_API_KEY`,
        this.requestOptions);
      const result = await response.json();
      return result.items;
    } catch (error) {
      return console.log('error', error);
    }
  }

  async mostPopular(){
   try {
      const response = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=REACT_APP_YOUTUBE_API_KEY",
        this.requestOptions);
      const result = await response.json();
      return result.items.map((item) => ({ ...item, id: item.id.videoId}));
    } catch (error) {
      return console.log('error', error);
    }
 } 

}

export default Youtube;


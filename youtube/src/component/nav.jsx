import React, { useRef } from 'react';

const Nav = ({ onSearch }) => {

  //input에 입력된 값을 알아오기 위해서 ref사용하기
  const inputRef = useRef();    

  const handleSearch = () => { //검색을 위한 콜백함수 만들기
    const value = inputRef.current.value; //ref에 저장된 사용자 입력 값을 value에 저장한다
    onSearch(value); //app에서 porps로 받아오는 onSeardh함수 실행
  }
  const onChange = (e) => { //or onKeyPress를 사용해도 된다
    if(e.key === 'Enter'){
      handleSearch();
    }
  }

  const onClick = () => {
    handleSearch();
  }

  return (
    <header>
      <div className="fixbar-wapper">
        <div className="logo" />
        <div className="fixbar-search">
          <input ref={inputRef} onChange={onChange} placeholder="검색어를 입력하세요" type="text"/ >
          <button onClick={onClick}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div> 
    </header>
  );
}

export default Nav;
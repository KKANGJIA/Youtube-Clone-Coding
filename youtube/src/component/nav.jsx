import React, { PureComponent } from 'react';

class Nav extends PureComponent {
  
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({
      value: 'e.target.value',
    })
  }
  
  render() {
    return (
      <header>
        <div className="fixbar-wapper">
          <div className="logo" />
          <div className="fixbar-search">
            <input onChange={this.onChange} placeholder="검색어를 입력하세요" type="text"/ >
            <button onClick={this.props.onSubmit}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div> 
      </header>
    );
  }
}

export default Nav;
import React, { Component } from 'react';

class Comp extends Component {
  // 원래에 Class형 컴포넌트에서 추가 될 부분
  // constructor(props) { 
  //   super(props) // 이 constructor 안에서 this를 쓸 수 있도록 해준다
  //   this.countUp = this.countUp.bind(this) // bind를 해줘야만 해당 메소드 안에서 this를 쓸 수 있다
  //   this.state = {
  //     num: 0 
  //   }
  // }

  state = {
    num: 0,
  } // const [ num, setNum ] = useState(0)

  countUp = () => { // 원래에 Class형 컴포넌트에서는 화살표 함수 사용이 안 된다
    this.setState({
      num: this.state.num + 1 // 위에 작성한 state 안의 num 값을 갖고 와서 +1 작업
    })
  }

  render() { // render() 를 붙여줘야만 렌더가 됨

    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={this.countUp}>카운트 업!</button>
      </div>
    );
  }
}

export default Comp;
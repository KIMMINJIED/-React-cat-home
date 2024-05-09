const Title = ({counter}) => {
    if(counter===null){   // counter는 숫자타입으로, '' 안먹고 null로 지정
      return(
        <h2>고양이 가라시대</h2>
      // <h2>{props.children}</h2> // .children : 아래 "<Title>1번째 고양이 가라사대<Title/>"에서 받아온 인자값을 props가 어떻게 받아오는지 console.log(props)로 확인 했을때, .children라는 형태로 값을 받아오는 것을 확인.  >>  하여, {props.children}로 작성
    ) 
    } else{
      return(<h2>{counter}번째 고양이 가라사대</h2>)
    }
  };
  export default Title;
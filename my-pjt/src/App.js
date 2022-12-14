import './App.css';

function App() {
  const test = [
    { id: 1, name: '구태모', phone: '2222' },
    { id: 2, name: '이대엽', phone: '3333' },
    { id: 3, name: '오승훈', phone: '4444' },
  ];

  const dto = {
    id: 2,
    name: '홍길동',
  };

  const a6 = test.map((c) => (c.id === dto.id ? { ...c, ...dto } : c));
  console.log(a6);

  // console.log('@@@@스프레드 연산자@@@@');
  // const a = [1, 2, 3, 4];
  // const b = [...a];
  // console.log('=====a=====', a);
  // console.log('=====b=====', b);
  // b.push(5);
  // console.log('=====a=====', a);
  // console.log('=====b=====', b);

  // console.log('@@@@concat @@@@');
  // // 깊은 복사 추가
  // const c = [1, 2, 3, 4];
  // const d = [0, ...c, 5];
  // console.log('=====c=====', c);
  // console.log('=====d=====', d);

  // const e = [1, 2, 3, 4];
  // // concat의 경우 스프레드 연산자처럼 앞에 값을 넣는것은 할 수 없다.
  // const f = e.concat(5);
  // console.log('=====e=====', e);
  // console.log('=====f=====', f);

  // // const _c = [{ 1: 1, 2: 2, 3: 3 }];
  // // const _d = [..._c];
  // // console.log('=====_c=====', _c);
  // // console.log('=====_d=====', _d);

  // console.log('@@@@걸러내기 filter@@@@');
  // const g = [1, 2, 3, 4];
  // // filter함수는 true만 걸러내준다.
  // const h = g.filter((n) => {
  //   return n !== 1;
  // });
  // console.log('=====g=====', g);
  // console.log('=====h=====', h);

  // console.log('@@@@잘라내기 slice@@@@');
  // const a2 = [1, 2, 3, 4];
  // // end로 설정된 값의 직전까지의 값이 설정된다.
  // const b2 = a2.slice(0, 2);
  // console.log('=====a2=====', a2);
  // console.log('=====b2=====', b2);

  // const b3 = [...a2.slice(0, 1), 2, ...a2.slice(2, 3)];
  // console.log('=====b3=====', b3);

  // console.log('@@@@반복하기@@@@');
  // const a3 = [1, 2, 3, 4];

  // const onSubmit = useCallback((e) => {
  //   e.preventDefault();
  //   console.log('test');
  // }, []);

  // const onKeyPress = useCallback(
  //   (e) => {
  //     if (e.key === 'Enter') {
  //       onSubmit(e);
  //     }
  //   },
  //   [onSubmit]
  // );

  return (
    <div className='App'>
      <div tabIndex='0'></div>
    </div>
  );
}

export default App;

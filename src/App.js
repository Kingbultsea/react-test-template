import './App.css';

// 现在迷点 不知道怎怎么设置scoped

function App() {
  const number = [null, NaN, 0, "", undefined];
  return (
    <div>
      {number.map((v, index) => {
        return (
          <div key={index}>
            {index}: {v && ""}
          </div>
        );
      })}
    </div>
  );
}

export default App;

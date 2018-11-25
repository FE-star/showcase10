function case1() {
  Promise.resolve(1).then(v => console.log(v));
  console.log(2);
}

function case2() {
  new Promise(resolve => {
    console.log(1);
    resolve(3);
  }).then(num => {
    console.log(num)
  });
  console.log(2);
}

function case3() {
  new Promise(resolve => {
    console.log(1);
    resolve(3);
    Promise.resolve().then(() => console.log(4))
  }).then(v => {
    console.log(v)
  });
  console.log(2)
}

({
  case1,
  case2,
  case3,
})[process.argv[2]]();
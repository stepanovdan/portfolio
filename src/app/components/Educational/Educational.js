import { unstable_renderSubtreeIntoContainer } from "react-dom";
// prettier-ignore
function Educational() {

 
  const d = {}
  d['a'] = 10
  const a = [];
  

  console.log(`D  ======  ${d}`)
  console.log(`A  ======  ${{...a}}`)
function run(s) {
    return `спид равно ${this.age * s}`
    }   

const dog = { 
    name: 'dude',
    age: 117,
    run
};

const dog2 = {
    name: 'dude2',
    age: 11,
    run
}

console.log(dog.run(2))

  function sum(...args) {
    return args.reduce((acc, i) => {
      return acc + i;
    }, 0);
  }

  function infCurry(n1) {
    let sum = 0;
    function next(n2) {
      if (n2 !== undefined) {
        sum += n2;
        return next;
      }
      return sum;
    }
    return next;
  }

  const sumPromise = (...args) =>
    new Promise((res, rej) => {
      res(args.reduce((acc, cur) => acc + (Number.isNaN(+cur) ? 0 : +cur), 0));
      rej('Error')
    });
  sumPromise(1, 2, 3).then(console.log).catch(console.log);
  //   console.log(sum(1, 2, 3, 4, 5, 6, 78));
  //   console.log(infCurry(1)(2)(3)(4)());

  return <div>JUST EDUCATIONAL</div>;
}

export default Educational;

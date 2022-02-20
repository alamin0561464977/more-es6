// 1. declare variable based on the name of an object property
const myObject = {
    x: 23,
    a: 7,
    c: 49,
    y: 50,
    r: 130,
}
const { x, a, r, y, c } = myObject;
// console.log(r, a, c);

// 2. destructuring array
const [t, w] = [7, 'alamin'];

const { p, u, l } = { p: 7, u: 49, l: 80 };
// console.log(p, u, l);

const myObject1 = {
    q: 50,
    o: 90,
    tt: {
        t1: 40,
        t2: 30,
        t3: {
            m: 70,
            m1: 10,
            m3: {
                n: 59,

            }
        }
    }
};
const { n } = myObject1.tt.t3?.m3;
console.log(n);
function foo() {
  console.log("foo");
}

foo();

const foo2 = function () {
  console.log("foo2");
};

foo2();

const foo3 = new Function("console.log('foo3')");

foo3();

const foo4 = () => {
  console.log("foo4");
};

foo4();

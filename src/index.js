const app = (appName) => {
	console.log(appName)
}
app('hello babel！')

class Person{
	constructor(){
		console.log('Hello Babel Person!!!')
	}
}
const person1 = new Person();

const asyncFun = async () => {
	console.log(1)
	const res = await Promise.resolve(2)
	console.log(res);
	console.log(3)
}
asyncFun()
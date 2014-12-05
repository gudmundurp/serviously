/*[{
	id:1,
	date:Date.now(),
	password:'test',
	name:'Ólafur Torfi Yngvason',
	thumbnail:'/images/Prófíll.jpg',
	parent:100
},
{
	id:2,
	date:Date.now(),
	password:'test',
	name:'Carl Sagan',
	thumbnail:'/images/carlsagan.jpeg',
	parent:100
}]*/
var list = [{
	id:100,
	date:Date.now(),
	category:'User',
	content:'Ólafur Torfi Yngvason',
	thumbnail:'/images/Prófíll.jpg',
	allowedChildren:['Password','Email'],
	children:[105,106],
	author:100,
	parent:101,
	value:1
},
{
	id:101,
	date:Date.now(),
	category:'People',
	content:'Everybody',
	thumbnail:'/images/Anonymous.svg',
	author:100,
	parent:102,
	value:1
},
{
	id:102,
	date:Date.now(),
	category:'Thing',
	content:'Cosmos',
	thumbnail:'/images/cosmos.jpg',
	author:100,
	parent:103,
	agree:[104], // sort of like "likes" or rank
 	value:2
},
{
	id:103,
	date:Date.now(),
	category:'Event',
	content:'The Big Bang',
	thumbnail:'/images/bigBang.png',
	author:100,
	value:3
},
{
	id:104,
	date:Date.now(),
	category:'User',
	content:'Carl Sagan',
	author:100,
	thumbnail:'/images/carlsagan.jpg',
	parent:101,
	value:8
},
{
	id:105,
	date:Date.now(),
	content:'1234',
	category:'Password',
	parent:100,
	author:100
},
{
	id:106,
	date:Date.now(),
	content:'olafurtorfi-at-gmail.com',
	category:'Email',
	parent:100,
	author:100
}];
module.exports.items = list;
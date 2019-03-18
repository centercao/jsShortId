/**
 * Created By Center on 2018/2/3
 **/
 let start1 = +new Date();
 console.log(start1.toString(16));
 
const shortId =require("../jsNodeId");
// console.log(shortId.gen(13));
let set = new Set();
// console.log(new Date().format("yyyy-MM-dd hh:mm:ss.S"));
let da = shortId.gen(15);
console.log(da);
// console.log(shortId.getDate(da,"yyyy-MM-dd hh:mm:ss"));
console.log(shortId.gen(15));
console.log(shortId.uuid());

let num = 5000000;
let start = +new Date();
console.log('开始时间:' + start);

for(let i =0 ;i< num;i++){
	let id =shortId.uuid();
	set.add(id);
	// console.log(id);
	// console.log(shortId.getDate(id,"yyyy-MM-dd hh:mm:ss"));
}
console.log('耗时:' + (+new Date()-start));
console.log('产生数量:' + num + '有效数量:' + set.size);




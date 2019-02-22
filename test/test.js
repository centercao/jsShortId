/**
 * Created By Center on 2018/2/3
 **/
const shortId =require("../jsShortId");
// console.log(shortId.gen(13));
let set = new Set();
// console.log(new Date().format("yyyy-MM-dd hh:mm:ss.S"));
let num = 1000000;
let da = shortId.gen(15);
console.log(da);
console.log(shortId.getDate(da,"yyyy-MM-dd hh:mm:ss"));
console.log(shortId.gen(15));
console.log(shortId.gen(15));
console.log(shortId.gen(15));
let start = +new Date();
for(let i =0 ;i< num;i++){
	let id =shortId.gen(15);
	set.add(id);
	//console.log(id);
	// console.log(shortId.getDate(id,"yyyy-MM-dd hh:mm:ss"));
}
console.log('耗时:' + (+new Date()-start));
console.log('产生数量:' + num + '有效数量:' + set.size);

/*let num = +new Date("2018-12-31 23:59:59");
console.log(num.toString(36));*/


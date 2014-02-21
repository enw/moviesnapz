var fs=require('fs');

function ext(fn) {
    return fn.substr(-3);
}
fs.readdir(".", function (err, dir) {
	var num=0;
	for (var i=0;i<dir.length;i++) {
	    var fn=dir[i],
		padded = new String("0000"+num).slice(-4);
	    if (ext(fn)==='jpg') {
		num++;
		fs.rename(dir[i], 'snapshot-'+padded+'.jpg');
		console.log('rename '+ext(fn),'to', padded);
	    } else {
		console.log('don\'t rename '+ext(fn));
	    }
	};
	//	console.log(err, dir);
    });
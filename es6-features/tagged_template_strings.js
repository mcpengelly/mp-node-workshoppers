console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

// nice using rest parameters es6
function html(pieces, ...args) {
	var result = pieces[0];
	for (var i = 0; i < args.length; ++i){
		result += escape(args[i]) + pieces[i + 1];
	}
	return result;
}

//function that escapes html characters
function escape(str){
	return str.replace(/&/g, '&amp;')
		.replace(/>/g, '&gt;')
		.replace(/</g, '&lt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;')
}

GetMarker(2.5);

function GetMarker (getal) {
	i = 0;
	while (i < 10) {

		voor = i;
		i = i + 0.5;
		na = i;

		var num=na;
		var str=num.toString();
		var numarray=str.split('.');
		var a=new Array();
		a=numarray;

		if (a[1] != 5) {
			a[1] = 0;
		};

		color = 1;
		if (getal <= na && getal > voor) {
			file = 'marker_color' + color + '_' + a[0] + '_' + a[1] + '.jpeg';
		};

	}

	console.log(file);

}



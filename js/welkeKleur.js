console.log(GetMarker(4.4));

function GetMarker (getal) {
	i = 0;
	file = '';
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

		color =0;
		if (getal <= 2.4 && getal > 0) {
			color = 1
		}
		else if (getal <= 4.4 && getal > 2.4) {
			color = 2
		}
		else if (getal <= 6.4 && getal > 4.4) {
			color = 3
		}
		else if (getal <= 8.4 && getal > 6.4) {
			color = 4
		}
		else if (getal <= 10 && getal > 8.4) {
			color = 5
		}

		if (color == 0) {
			file = 'marker_default.jpeg';
		} else {
			if (getal <= na && getal > voor) {
				file = 'marker_color' + color + '_' + a[0] + '_' + a[1] + '.jpeg';
			};
		}

	}
	return file;

}



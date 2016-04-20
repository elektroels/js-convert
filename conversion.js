function convert(start, end, decimalPoint) {
	// negative to negative not supported yet
	if (start < 0 && end < 0 ) return false;
	if (decimalPoint <= 0) return false;
	if (!start || !end || !decimalPoint) return false;

    var points = (end - start) / decimalPoint;
	points = points;
	// add base/zero
    points++;
	
	// dictionaries 
    var naturalToDecimal = {};
    var decimalToNatural = {};
    
    while(points) { 
        naturalToDecimal[points] = end;
        decimalToNatural[end] = points;

		// todo: make relative to amount of digits
		// multiply and divide with 10 to avoid floating point errors
        end = (end * 10 - decimalPoint * 10) / 10;
        points--;
    }
	
	return {
		decimalToNatural: decimalToNatural,
		naturalToDecimal: naturalToDecimal
	};

}	

console.log(convert(-2, 2, 0.5));


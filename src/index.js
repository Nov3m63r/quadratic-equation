module.exports = function solveEquation(equation) {

// extracting coefficients from the string
var eq = equation.replace(/\s/g, "");
var a_bc = eq.split('*x^2');
var a = a_bc[0];
var bc = a_bc[1];
var b_c = bc.split('*x');
var b = b_c[0];
var c = b_c[1];
//console.log('a, b, c:\n' + a + "\n" + b + "\n" + c);

// math
//nod
function gcd(a, b) {
    if (b == 0)
        return Math.abs(a);
    return gcd(b, a % b);
}
nod = gcd(gcd(a, b), c);

aa = a/nod;
bb = b/nod;
cc = c/nod;

D = bb*bb - 4*aa*cc;
dis = Math.sqrt(D);
var x1 = (-bb - dis)/2*aa;
var x2 = (-bb + dis)/2*aa;
//console.log(x1, x2);

// sorting
   var result = [];
   if (x1 < x2) {
       result[0] = x1;
       result[1] = x2;
   } else {
       result[1] = x1;
       result[0] = x2;
   }
   return result;
	//console.log(result);
}

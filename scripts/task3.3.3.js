
function calculator ( number1, number2, operator){

 var result = ' ';


    switch ( operator ) {
        case '+' :
            result = number1 +number2;
            console.log( number1 +  ' +' + number2 + ' = ' + result );

        break ;
        case '-' :
        
            console.log( number1 - number2);
    
        break ;

        default :
            console.log("Math is not right here");
            
            // error message


        break;
    }

}
//+ addition - subtraction / division *multiply modulus

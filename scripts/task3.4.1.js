for( let counter = 1; counter <= 12; counter++) {
   
    console.log( counter * 7 );
    
    document.write("<div>"); // open div tag
    document.write("<header>" + counter + "times table" + "</header>");

    document.write( counter * 7 + "<br> ");

    for ( let counter2 =1; counter2 <=12; counter2++) {
        //document.write(counter * counter2 + "=" + counter + "*" + counter2 + "<br>");
        
        document.write(`${counter}* ${counter2} = ${counter * counter2} <br>`);

        document.write("</div>")
    }
} 
const airconditioner = require('../model/airconditioner');
const http = require('http');

const airconditioner_Url = require('../url_Model/airconditioner_Url');


/*
*  5 degrees lower than
*  the outside temperature.
*  
*  if it is lower than 18C, set it to 18C
*  
* */

function control_airconditioner(temp_Outer){
    console.log('airconditioner');
        if(airconditioner.power == 0){
            airconditioner_Url.path += airconditioner.control.power + '&';
            airconditioner.power = 1;
        }


        //if (temp_Outer-5 < 18) {
		//code for airconditioner.temp to 18	
        //}
	//else {
		//code for airconditioner.temp to temp_Outer-5
	//}

        console.log(airconditioner_Url.path);
        console.log(JSON.stringify(airconditioner));

        if(airconditioner_Url.path != '?'){
            http.request(airconditioner_Url).end();
            airconditioner_Url.path = '?';
        }
}

module.exports = control_airconditioner;
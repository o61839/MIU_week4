/* 	
	Jenney Grover
	MIU 1307
	July 25th, 2013
*/

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
	
$('#formId').on('pageinit', function(){

    var myForm = $('#gatherbooks');
    myForm.validate({
    invalidHandler: function(form, validator) {
    },
    submitHandler: function() {
    var data = myForm.serializeArray();
    storeData(data);
    }
    });

//any other code needed for addItem page goes here

});
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
 
};

var getData = function(){

};

var storeData = function(data){

}; 

var	deleteItem = function (){
		
};
				
var clearLocal = function(){

	};



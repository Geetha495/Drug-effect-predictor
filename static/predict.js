let model;

(async function(){
	model = await tf.loadModel('model.json');
})();

let predictions=[];

$("#predict-button").click(async function(event){
	let x = [0];
	x[0] = (document.getElementById('age-input').value-13)/87;

	let tensor = tf.tensor(x);
	console.log(tensor);

	predictions = await model.predict(tensor).data();
	

	$("#affect-prediction").text(predictions[1]);
	$("#notaffect-prediction").text(predictions[0]);
		
});
	

// let base64Image;
// $("#image-selector").change(function()
// {
// 	let reader = new FileReader();
// 	reader.onload = function(e){
// 		let dataURL = reader.result;
// 		$("#selected-image").attr("src",dataURL);
// 		base64Image = dataURL.replace("data:image/jpeg;base64,","");
// 		// console.log(base64Image);
// 	}

// 	reader.readAsDataURL($("#image-selector")[0].files[0]);
// 	$("#dog-prediction").text("");
// 	$("#cat-prediction").text("");

// });
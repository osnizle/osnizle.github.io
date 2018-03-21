// /* Code made by Aiden Onstott/Osnott
// DO NOT COPY WITHOUT CREDIT PLEASE!!! */
var dragAndDropTarget;
var imgContainer;
var catImage;
var math;
var squeezeNet;
var image;
var logits;
var topClassesToProbs;
var className;
var inc = 0;
var loading = false;
var totalResults = "";
var percentage;
var images = ["Pen_1.jpg", "Pen_2.jpg", "Pen_3.jpg",
"Pen_4.jpg", "Ruler_1.jpg", "Ruler_2.jpg", "Ruler_3.jpg",
"Ruler_4.jpg", "Water_1.jpg", "Water_2.jpg", "Water_3.jpg",
"Water_4.jpg", "Comic-Books.jpg", "Dog_1.jpg", "Dog_2.jpg",
"Dog_3.jpg", "Dog_4.jpg", "Cat_1.jpg", "Cat_2.jpg",
"Cat_3.jpg", "Cat_4.jpg", "Glasses_1.jpg", "Penguin_1.jpg",
"Penguin_2.jpg", "Penguin_3.jpg", "Penguin_4.jpg"]
async function runcode() {
	loading = true;
	dragAndDropTarget = document.getElementById("target");
	imgContainer = document.getElementById("img");
	catImage = document.getElementById("cat");

	math = new dl.NDArrayMathGPU();
	// squeezenet is loaded from https://unpkg.com/deeplearn-squeezenet
	squeezeNet = new squeezenet.SqueezeNet(math);
	// Drag and drop handlers.
	/*window.dragoverit = (e) => {
	  e.preventDefault(); e.stopPropagation();
	  e.dataTransfer.dropEffect = "copy";
	}
	window.dropit = (e) => {
	  e.preventDefault(); e.stopPropagation();
	  imgContainer.innerHTML = e.dataTransfer.getData('text/html');
	  let imageEl = imgContainer.getElementsByTagName('img')[0];
	  if (imageEl == null) {
	    imageEl = document.createElement('img');
	    imageEl.src = window.URL.createObjectURL(e.dataTransfer.files[0]);
	    imgContainer.appendChild(imageEl);  }
	  imageEl.onload = () => infer(imageEl);
	} */
}

async function infer(imageEl) {
	loading = true;
	// var results = document.getElementById("Results");
	// results.innerHTML = "Loading...";
	await squeezeNet.load();
	// console.clear();
	imageEl.width = 227;
	imageEl.height = 227;
	// imageEl.style.width = '227px'; imageEl.style.height = '227px';
	image = dl.Array3D.fromPixels(imageEl);
	logits = squeezeNet.predict(image);

	topClassesToProbs = await squeezeNet.getTopKClasses(logits, 1);

	for (className in topClassesToProbs) {
		console.log(
				`${topClassesToProbs[className].toFixed(5)}: ${className}`);
		// results.innerHTML = "This AI is " +
		// Math.floor(topClassesToProbs[className].toFixed(2) * 100)
		//  + "% sure that this image is a(n) " + className + ".";
		 totalResults = "I am " +
 		Math.floor(topClassesToProbs[className].toFixed(2) * 100)
 		 + "% sure that this image is a(n) " + className + ".";
		 percentage = Math.floor(topClassesToProbs[className].toFixed(2) * 100);
	}
	loading = false;
}

async function onClick() {
	if (!loading) {
		runcode();
		if (inc == images.length) {
			inc = 0;
		}
		catImage.src = images[inc];
		inc++;
		// if (inc == 1) {
		// 	catImage.src = "Pen_1.jpg";
		// } else if (inc == 2) {
		// 	catImage.src = "Pen_2.jpg";
		// } else if (inc == 3) {
		// 	catImage.src = "Pen_3.jpg";
		// } else if (inc == 4) {
		// 	catImage.src = "Pen_4.jpg";
		// } else if (inc == 5) {
		// 	catImage.src = "Ruler_1.jpg";
		// } else if (inc == 6) {
		// 	catImage.src = "Ruler_2.jpg";
		// } else if (inc == 7) {
		// 	catImage.src = "Ruler_3.jpg";
		// } else if (inc == 8) {
		// 	catImage.src = "Ruler_4.jpg";
		// } else if (inc == 9) {
		// 	catImage.src = "Water_1.jpg";
		// } else if (inc == 10) {
		// 	catImage.src = "Water_2.jpg";
		// } else if (inc == 11) {
		// 	catImage.src = "Water_3.jpg";
		// } else if (inc == 12) {
		// 	catImage.src = "Water_4.jpg";
		// 	inc = 0;
		// }
	}
}

function setup() {
	createCanvas(displayWidth / 2, 277).parent('sketch-holder');
}

var loadingRotater = 0;
function draw() {
	background(56);
	if (loading) {
		textAlign(CENTER, CENTER);
		fill(0);
		textSize(50);
		text("Loading...", width/2, height/8);
		loadingRotater = loadingRotater + 0.1;
		push();
		noFill();
		translate(width/2, height/2);
		rotate(loadingRotater);
		arc(0, 0, 100, 100, QUARTER_PI, TWO_PI);
		pop();
	} else {
		loadingRotater = 0;
		if (percentage >= 75) {
			fill(25, 255, 25);
		} else if (percentage >= 45) {
			fill(252, 235, 0);
		} else if (percentage < 45) {
			fill(255, 100, 25);
		}
		textSize(50);
		text(totalResults, 0, 0, width, height);
	}
}

function howWorks() {
	window.location.href = window.location + "how-does-it-work.html";
}

runcode();
if (inc == images.length) {
	inc = 0;
}
catImage.src = images[inc];
infer(catImage);
inc++;

$('#cat').on('load', function() {
	infer(catImage);
});









// var imgNum = 1;
// var catImage;
// var math;
// var squeezeNet;
// var image;
// var logits;
// var topClassesToProbs;
// document.onkeyup = function(e){
//   if(e.keyCode == 32){
// 		imgNum = imgNum + 1;
// 		if (imgNum == 1) {
//       document.getElementById("videoElement").src = "Ruler_1.jpg";
// 		} else if (imgNum == 2) {
// 			document.getElementById("videoElement").src = "Ruler_2.jpg";
// 		} else if (imgNum == 3) {
// 			document.getElementById("videoElement").src = "Ruler_3.jpg";
// 		} else if (imgNum == 4) {
// 			document.getElementById("videoElement").src = "Ruler_4.jpg";
// 		} else if (imgNum == 5) {
// 			document.getElementById("videoElement").src = "Pen_1.jpg";
// 		} else if (imgNum == 6) {
// 			document.getElementById("videoElement").src = "Pen_2.jpg";
// 		} else if (imgNum == 7) {
// 			document.getElementById("videoElement").src = "Pen_3.jpg";
// 		} else if (imgNum == 8) {
// 			document.getElementById("videoElement").src = "Pen_4.jpg";
// 		} else if (imgNum == 9) {
// 			document.getElementById("videoElement").src = "Water_1.jpg";
// 		} else if (imgNum == 10) {
// 			document.getElementById("videoElement").src = "Water_2.jpg";
// 		} else if (imgNum == 11) {
// 			document.getElementById("videoElement").src = "Water_3.jpg";
// 		} else if (imgNum == 12) {
// 			document.getElementById("videoElement").src = "Water_4.jpg";
// 			imgNum = 0;
// 		}
//
// 		catImage = document.getElementById("videoElement");
//
// 		math = new dl.NDArrayMathGPU();
// 		// squeezenet is loaded from https://unpkg.com/deeplearn-squeezenet
// 		squeezeNet = new squeezenet.SqueezeNet(math);
// 		squeezeNet.load();
//
// 	  image = dl.Array3D.fromPixels(catImage);
// 	  logits = squeezeNet.predict(image);
//
// 	  topClassesToProbs = squeezeNet.getTopKClasses(logits, 10);
//
// 	  for (var className in topClassesToProbs) {
// 	    console.log(
// 	        `${topClassesToProbs[className].toFixed(5)}: ${className}`);
// 	  }
//   }
// }

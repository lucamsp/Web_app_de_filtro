function preload() {
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses)
}

function modelLoaded() {
  console.log('PoseNet foi inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    console.log("nariz x = " + results[0].pose.nose.x);
    console.log("nariz y = " + results[0].pose.nose.y);
  }
}

function draw() {
  Image(video, 0, 0, 300, 300);
}

function takeSnapshot(){
  save('myFilterImage.png');
}


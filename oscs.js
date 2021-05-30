const osciladores = [];
var freqBase = 24;
const types = ["sine4", "triangle4", "square4", "sawtooth4" ]

//const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
	const pan = new Tone.Panner(1).toDestination();


for (let i = 0; i < 8; i++) {
    osciladores.push(new Tone.Oscillator({
      frequency: freqBase * i,
      type: "sawtooth4",
      volume: -Infinity,
      detune: Math.random() * 30 - 15,
    }).connect(pan));
  };

function startbuttonfunction() {
  for(o of osciladores){
    o.start()
    o.volume.rampTo(-20, 1);
}
};

function stopbuttonfunction() {
  for(o of osciladores){
    o.volume.rampTo(-Infinity, 3)
	if(o.volume.value == -100) {o.stop()}}//este if no está funcionando no se bien porque

};

function randombaseFreq(){
  var freq = Math.random() * (300 - 30) + 30; //reemplazar por una de las variables del XYZ
  var paneo = Math.random() * 2 - 1; //reemplazar por una de las variables del XYZ
  for(o of osciladores){
    o.frequency.rampTo(freq, 1);
    pan.pan.rampTo(paneo, 0.5);
		o.type = types[Math.random() * types.length]
}
};

function sinebuttonfunction(){
	for(o of osciladores){
		o.type ="sine4"
	}
	}

function trianglebuttonfunction(){
	for(o of osciladores){
		o.type ="triangle4"
	}
	}

function squarebuttonfunction(){
	for(o of osciladores){
		o.type ="square4"
	}
	}

function sawtoothbuttonfunction(){
	for(o of osciladores){
		o.type ="sawtooth4"
	}
	}

	function set_vol(vval) {
		osciladores.forEach((o, i) => {
			o.volume.rampTo(vval, 0.1);
			document.getElementById('volume').innerHTML = vval;
		});
	}

const osciladores = [];
var freqBase = 24;

//const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
	const pan = new Tone.Panner(1).toDestination();


for (let i = 0; i < 16; i++) {
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
    o.volume.rampTo(-20, 3);
;}
}

function stopbuttonfunction() {
  for(o of osciladores){
    o.volume.rampTo(-Infinity, 3);
    // o.stop(); //ver como hacer que se detenga después e que termine la rampa para evitar corte de Audio
}
};

function randombaseFreq(){
  var freq = Math.random() * (100 - 20) + 20; //reemplazar por una de las variables del XYZ
  var paneo = Math.random() * 2 - 1; //reemplazar por una de las variables del XYZ
  for(o of osciladores){
    o.frequency.rampTo(freq, 1);
    pan.pan.rampTo(paneo, 0.5);

  }
};

function sinebuttonfunction(){
	for(o of osciladores){
		o.type = "sine";
	}
};

function trianglebuttonfunction(){
	for(o of osciladores){
		o.type = "triangle";
	};
function squarebuttonfunction(){
	for(o of osciladores){
		o.type = "square";
	}
};

function sawtoothbuttonfunction(){
	for(o of osciladores){
		o.type = "sawtooth"
	}
}

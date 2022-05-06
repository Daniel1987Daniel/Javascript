const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight'; // 1. function variable blog scope
	let region = 'The Arctic';    // 2. function variable blog scope 
    if(region === 'The Arctic') {
      let lightWaves = 'Northern Lights';  // 1. if statement variable blog scope
      console.log(lightWaves); // if statement console.log() blog scope
    }
  console.log(lightWaves); // function console.log() statement blog scope
};

logVisibleLightWaves();

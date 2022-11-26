var oxygen = 94;
function oxygenSaturation(oxygen){
    if ( oxygen >= 96){
        console.log('Normal Reading');
    }
    else if (oxygen == 95){
        console.log('Acceptable to continue home monitoring');
    }
    else if ((oxygen == 93)||(oxygen == 94)){
        console.log('Seek advice from health professionals');
    }
    else if (oxygen <= 92){
        console.log('Seek urgent medical advice');
    }
}
oxygenSaturation(oxygen)
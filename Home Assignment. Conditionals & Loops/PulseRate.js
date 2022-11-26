var pulse = 35;

function pulseRate(pulse){
    if ((pulse >= 40) && (pulse <= 100)){
        console.log('Normal Reading')
    }
    else if ((pulse >= 101) && (pulse <= 109)){
        console.log('Acceptable to continue home monitoring')
    }
    else if ((pulse >= 110) && (pulse <= 130)){
        console.log('Seek advice from health professionals')
    }
    else {console.log('Error')}
}
pulseRate(pulse)
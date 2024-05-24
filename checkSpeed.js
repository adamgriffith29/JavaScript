checkSpeed(80)

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint){
        console.log(`speed limit: ${speedLimit}km/hr - `, 'Ok');
        return
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('Licence Suspended.');
    else
        console.log('Points', points);
}
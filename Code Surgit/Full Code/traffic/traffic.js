export async function getTrafficAdjustedTime(initialAlarmTime) {
    const origin = "ORIGEN_COORDINATES";
    const destination = "DESTINO_COORDINATES";
    const apiKey = "AIzaSyA3-aHb7s-d1KQ_ZmsswLYfOb3zwn5r1d8";
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&departure_time=now&key=${AIzaSyA3-aHb7s-d1KQ_ZmsswLYfOb3zwn5r1d8}`;
  
    const response = await fetch(url);
    const data = await response.json();
    const travelDuration = data.routes[0].legs[0].duration_in_traffic.value;
  
    const alarmDate = new Date(`1970-01-01T${initialAlarmTime}`);
    const adjustedAlarmDate = new Date(alarmDate - travelDuration * 1000);
  
    return adjustedAlarmDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }
  
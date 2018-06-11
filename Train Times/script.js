const url = 'https://cors-anywhere.herokuapp.com/https://api.tfgm.com/odata/Carparks(5)';
const fetchData = {
    headers: {
        'Ocp-Apim-Subscription-Key': '1f25671ac2ac42a79d3f48ba4c593567'
    },
    method: 'GET'
}
let update = document.getElementById('manny')
fetch(url, fetchData)
    .then(response => response.json())
    .then(data => {
        spaces = data.Capacity - data.Occupancy;
        document.getElementById('carPark').innerHTML += spaces;
    }
);

const refresh = () => {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.tfgm.com/odata/Metrolinks(460)?$select=line, carriages0, carriages1, carriages2, dest0, dest1, dest2 , wait0, wait1, wait2, stationlocation, status0, status1, status2, id, direction';
    const fetchData = {
        headers: {
            'Ocp-Apim-Subscription-Key': '1f25671ac2ac42a79d3f48ba4c593567'
        },
        method: 'GET'
    }
    fetch(url, fetchData)
        .then(response => response.json())
        .then(data => {
            document.getElementById('location').innerHTML = ' Station Location: ' + data.StationLocation;
            document.getElementById('direction').innerHTML = ' Direction: ' + data.Direction 
            document.getElementById('line0').innerHTML = data.Line;
            document.getElementById('line1').innerHTML = data.Line;
            document.getElementById('line2').innerHTML = data.Line;

            document.getElementById('due0').innerHTML = data.Status0;
            document.getElementById('destination').innerHTML = data.Dest0;
            document.getElementById('status0').innerHTML = data.Wait0 + ' mins';
            document.getElementById('messages').innerHTML = data.Carriages0;

            document.getElementById('due1').innerHTML = data.Status1;
            document.getElementById('destination1').innerHTML = data.Dest1;
            document.getElementById('status1').innerHTML = data.Wait1 + ' mins';
            document.getElementById('messages1').innerHTML = data.Carriages1;

            document.getElementById('due2').innerHTML = data.Status2;
            document.getElementById('destination2').innerHTML = data.Dest2;
            document.getElementById('status2').innerHTML = data.Wait2 + ' mins';
            document.getElementById('messages2').innerHTML = data.Carriages2;
        }
    );
}

const refresh2 = () => {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.tfgm.com/odata/Metrolinks(297)?$select=line, carriages0, carriages1, carriages2, dest0, dest1, dest2 , wait0, wait1, wait2, stationlocation, status0, status1, status2, id, direction';
    const fetchData = {
        headers: {
            'Ocp-Apim-Subscription-Key': '1f25671ac2ac42a79d3f48ba4c593567'
        },
        method: 'GET'
    }
    fetch(url, fetchData)
        .then(response => response.json())
        .then(data => {
            document.getElementById('location2').innerHTML = ' Station Location: ' + data.StationLocation;
            document.getElementById('direction2').innerHTML = ' Direction: ' + data.Direction 
            document.getElementById('line3').innerHTML = data.Line;
            document.getElementById('line4').innerHTML = data.Line;
            document.getElementById('line5').innerHTML = data.Line;

            document.getElementById('due3').innerHTML = data.Status0;
            document.getElementById('destination3').innerHTML = data.Dest0;
            document.getElementById('status3').innerHTML = data.Wait0 + ' mins';
            document.getElementById('messages3').innerHTML = data.Carriages0;

            document.getElementById('due4').innerHTML = data.Status1;
            document.getElementById('destination4').innerHTML = data.Dest1;
            document.getElementById('status4').innerHTML = data.Wait1 + ' mins';
            document.getElementById('messages4').innerHTML = data.Carriages1;

            document.getElementById('due5').innerHTML = data.Status2;
            document.getElementById('destination5').innerHTML = data.Dest2;
            document.getElementById('status5').innerHTML = data.Wait2 + ' mins';
            document.getElementById('messages5').innerHTML = data.Carriages2;
        }
    );
}
refresh();
refresh2();

refreshAll = () => {
    refresh2();
    refresh();

}

setInterval(refreshAll, 60000);


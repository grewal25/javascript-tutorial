function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function(){
        return this.rooms - this.booked
    }
}

var hotel1 = new Hotel('king' , 33, 3)

var elName = document.getElementById('hotelName');
elName.textContent = 'Hotel Name: '+ hotel1.name

var elRooms = document.getElementById('rooms');
elRooms.textContent = 'No of rooms vacant: ' + hotel1.checkAvailability();
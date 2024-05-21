
window.onload = function() {
    var records = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    var table = document.getElementById("attendanceTable");

    records.forEach(function(record) {
        var row = table.insertRow(-1);
        var nameCell = row.insertCell(0);
        var addressCell = row.insertCell(1);
        var mobileCell = row.insertCell(2);
        var dateCell = row.insertCell(3);
        var timeCell = row.insertCell(4);

        nameCell.textContent = record.name;
        addressCell.textContent = record.address;
        mobileCell.textContent = record.mobile;
        dateCell.textContent = record.date;
        timeCell.textContent = record.time;
    });
};

function checkFormCompletion() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var mobile = document.getElementById("mobile").value;

    var markAttendanceBtn = document.getElementById("markAttendanceBtn");
    if (name && address && mobile) {
        markAttendanceBtn.disabled = false;
    } else {
        markAttendanceBtn.disabled = true;
    }
}

document.getElementById("name").addEventListener("input", checkFormCompletion);
document.getElementById("address").addEventListener("input", checkFormCompletion);
document.getElementById("mobile").addEventListener("input", checkFormCompletion);

function markAttendance() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var mobile = document.getElementById("mobile").value;

    if (!name || !address || !mobile) {
        alert("Please fill out the form completely.");
        return;
    }

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var record = { name: name, address: address, mobile: mobile, date: date, time: time };

    var records = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    records.push(record);
    localStorage.setItem('attendanceRecords', JSON.stringify(records));

    var table = document.getElementById("attendanceTable");
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var addressCell = row.insertCell(1);
    var mobileCell = row.insertCell(2);
    var dateCell = row.insertCell(3);
    var timeCell = row.insertCell(4);

    nameCell.textContent = record.name;
    addressCell.textContent = record.address;
    mobileCell.textContent = record.mobile;
    dateCell.textContent = record.date;
    timeCell.textContent = record.time;

    document.getElementById("attendanceForm").reset();
    document.getElementById("markAttendanceBtn").disabled = true;
}

function clearRecords() {
    localStorage.removeItem('attendanceRecords');
    document.getElementById("attendanceTable").innerHTML = "<tr><th>Name</th><th>Address</th><th>Mobile Number</th><th>Date</th><th>Time</th></tr>";
}

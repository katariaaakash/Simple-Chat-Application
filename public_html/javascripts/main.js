/**
 * Created by aakashkataria on 26/07/16.
 */
console.log("js added");
const socket = io();
var name;
function getname() {
    name = prompt("Enter Your Name");
}
$(function () {
    getname();
    $("#send").click(function () {
        $("#messagelist").append('<li class="listitem"><div class="my"> <b>' + name + '</b>: ' + $("#message").val().toString() + '</div></li><br>');
        socket.emit('chat', {
            user: name,
            message: $("#message").val().toString()
        })
        $("#message").val("");
    })
    
    socket.on('chat', function (data) {
        $("#messagelist").append('<li class="listitem"> <div class="other"> <b>' + data.user + '</b>: ' + data.message + '</div></li><br>');
    })
})
/**
 * Created by liu on 2016/4/28.
 */
var handler={};
var users=require('./users');
handler.loginUser=function (request, reply) {
    var payload=JSON.parse(request.payload);
    console.log(payload);
    for(var i = 0; i < users.length; i++){

        if(users[i].username==payload.username&&users[i].password==payload.password) {
            reply({login:'success',username:users[i].username});
            return;
        }
    }
    reply({login:'unsuccess',username:null});

};
handler.registerUser=function (request, reply) {
    var payload=JSON.parse(request.payload);

    users.push(payload);
    console.log(users);
    reply("OK");

};
module.exports = handler;
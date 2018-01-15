var idbSupported = false;
var db;

document.addEventListener("DOMContentLoaded", function(){

    if("indexedDB" in window) {
        idbSupported = true;
    }

    if(idbSupported) {
        var openRequest = indexedDB.open("appDB",1);

        openRequest.onupgradeneeded = function(e) {
            console.log("running onupgradeneeded");
            var thisDB = e.target.result;

            if(!thisDB.objectStoreNames.contains("user")) {
                thisDB.createObjectStore("user", { autoIncrement: true });
            }

        }

        openRequest.onsuccess = function(e) {
            console.log("Success!");
            db = e.target.result;
            /*addUser();*/
        }

        openRequest.onerror = function(e) {
            console.log("Error");
            console.dir(e);
        }

    }

},false);

function addUser(e) {
    var transaction = db.transaction(["user"],"readwrite");
    var store = transaction.objectStore("user");

    //Define a person
    var person = {
        password:"test",
        faceLink:"http://res.cloudinary.com/ext/image/upload/v1515669029/kekwzlbx6uqhtfpu2di6.jpg",
        created:new Date()
    }

    var request = store.add(person, 1);

    request.onsuccess = function (e) {
        console.log("Done!")
    }
}

function getImageUser(callback) {
    var transaction = db.transaction(["user"], "readonly");
    var objectStore = transaction.objectStore("user");

    //x is some value
    var request = objectStore.get(1);

    request.onsuccess = function(e) {
        callback(request.result.faceLink);
    };
}

function faceId(sourceImageUrl, callback) {
    var subscriptionKey = "5dd2b7052f474b22b421bd9460d2eed3";
    var uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect";

    // Request parameters.
    var params = {
        "returnFaceId": "true",
        "returnFaceLandmarks": "false",
        "returnFaceAttributes": "age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise",
    };

    $.ajax({
        url: uriBase + "?" + $.param(params),

        // Request headers.
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
        },

        type: "POST",

        // Request body.
        data: '{"url": ' + '"' + sourceImageUrl + '"}',
    })
        .done(function(data) {
            var obj = JSON.parse(JSON.stringify(data, null, 2));
            /*$("#infos").append('<strong>Occhiali: </strong>'+ obj[0].faceAttributes.glasses);*/
            /*console.log("faceId: " + obj[0].faceId);*/
            callback(obj[0].faceId);

        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            // Display error message.
            var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
            errorString += (jqXHR.responseText === "") ? "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
                jQuery.parseJSON(jqXHR.responseText).message : jQuery.parseJSON(jqXHR.responseText).error.message;
            alert(errorString);
        });
}
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
        }

        openRequest.onerror = function(e) {
            console.log("Error");
            console.dir(e);
        }

    }

},false);

function addUser(url, password) {
    var openRequest = indexedDB.open("appDB",1);
    openRequest.onsuccess = function (e) {
        var transaction = db.transaction(["user"],"readwrite");
        var store = transaction.objectStore("user");
        console.log(password + " " + url)
        //Define a person
        var person = {
            password:password,
            faceLink:url,
        }

        var request = store.add(person, 1);

        request.onsuccess = function (e) {
            console.log("Valori inseriti")
        }
        request.onerror = function (ev) {
            alert("error")
        }
    }
}


function deleteDabase(){
    var request = indexedDB.deleteDatabase("appDB");
    request.onsuccess = function (e) {
        alert("ok")
    }
}

function getImageUser(callback) {
    var openRequest = indexedDB.open("appDB",1);
    
    openRequest.onsuccess = function (e) {
        db = e.target.result;
        var transaction = db.transaction(["user"], "readonly");
        var objectStore = transaction.objectStore("user");

        //x is some value
        var request = objectStore.get(1);

        request.onsuccess = function(e) {
            callback(request.result.faceLink);
        };

        request.onerror = function (e) {
            alert("ok");
        }
    }
}

function getPasswordUser(callback) {
    var openRequest = indexedDB.open("appDB",1);

    openRequest.onsuccess = function (e) {
        db = e.target.result;
        var transaction = db.transaction(["user"], "readonly");
        var objectStore = transaction.objectStore("user");

        //x is some value
        var request = objectStore.get(1);

        request.onsuccess = function(e) {
            callback(request.result.password);
        };

        request.onerror = function (e) {
            alert("ok");
        }
    }
}

function check(callback) {
    var openRequest = indexedDB.open("appDB",1);

    openRequest.onsuccess = function (e) {
        db = e.target.result;
        var transaction = db.transaction(["user"], "readonly");
        var objectStore = transaction.objectStore("user");

        var getPermanent = objectStore.get(1);
        getPermanent.onsuccess = function() {
            if (getPermanent.result === undefined) {
                callback(false);
            } else {
                callback(true);
            }
        };

        getPermanent.onerror = function (e) {
            alert("error");
        }
    }
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
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

function getImageUser() {
    var transaction = db.transaction(["user"], "readonly");
    var objectStore = transaction.objectStore("user");

//x is some value
    var ob = objectStore.get("0");

    ob.onsuccess = function(e) {
        return ob;
    }
}
console.log("starting worker");
console.log(self);

var i = 0;

function timedCount() {
     i = i + 1;
    self.postMessage(i);
}

self.setInterval(timedCount,500);
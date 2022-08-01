function showNotification(){
    const notification = new Notification("New Message from SitStandReminder", {
        body: "hola, mi amigo",
        icon: "img/img.png"
    })
}

console.log(Notification.permission);

if (Notification.permission === "granted") {
    showNotification();
} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        if (permission == "granted") {
            showNotification();
        }
    });
}
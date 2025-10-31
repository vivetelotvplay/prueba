// app.js


let deferredPrompt = null;
const btnInstall = document.getElementById('btn-install');
const swStatus = document.getElementById('sw-status');
const btnReload = document.getElementById('btn-reload');


// Antes: escucha el evento beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
e.preventDefault();
deferredPrompt = e;
btnInstall.hidden = false;
});


btnInstall.addEventListener('click', async () => {
if (!deferredPrompt) return;
deferredPrompt.prompt();
const choice = await deferredPrompt.userChoice;
console.log('Resultado de instalacion:', choice);
deferredPrompt = null;
btnInstall.hidden = true;
});


// Registramos el service worker si está disponible
if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('/sw.js')
.then(reg => {
swStatus.textContent = 'Service worker registrado';
console.log('Service worker registrado', reg);
})
.catch(err => {
swStatus.textContent = 'Error registrando SW';
console.error(err);
});
} else {
swStatus.textContent = 'Service worker NO soportado';
}


btnReload.addEventListener('click', async () => {
// fuerza una recarga controlada: activa nueva SW si existe
const reg = await navigator.serviceWorker.getRegistration();
if (reg) {
await reg.update();
window.location.reload(true);
} else {
window.location.reload();
}
});

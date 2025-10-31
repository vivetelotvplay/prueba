# PWA Instalable - subir a GitHub


1. Crea un repositorio nuevo en GitHub (por ejemplo: `pwa-installable-site`).
2. Sube la carpeta completa con los archivos listados.
3. Ve a `Settings` -> `Pages` y habilita GitHub Pages usando la rama `main` (o `gh-pages`) y la carpeta `/ (root)`.
4. GitHub Pages sirve sobre HTTPS; una vez desplegado, abre la URL `https://<usuario>.github.io/<repo>/`.


**Comprobar instalación**


- Abre la URL en Chrome (o Edge). Si la página cumple los criterios (manifest válido, service worker registrado, sitio sobre HTTPS), el navegador mostrará la opción "Install" en el menú o disparará `beforeinstallprompt`.
- Si quieres forzar la prueba en local: usa `http-server` con `--ssl` o simplemente sube a GitHub Pages.


**Notas**


- Asegúrate de tener `icons/icon-192.png` y `icons/icon-512.png` en la carpeta `icons`.
- Si el botón de instalar no aparece de inmediato, prueba a abrir DevTools -> Application -> Manifest y Service Workers para verificar que están correctos.

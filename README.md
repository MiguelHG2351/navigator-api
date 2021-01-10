# Este es el README v:

El diseño se actualizara la proxima semana :D

- Platform

[creditos](https://stackoverflow.com/questions/19877924/what-is-the-list-of-possible-values-for-navigator-platform-as-of-today)

# Platform de Navigator tiene múltiples valores

![Values](/images/platform1.png)
![Values](/images/platform2.png)


**masking-agent** Es extensión de privacidad del navegador que cambia la plataforma por defecto a eso.

![Values](/images/platform3.png)

- onLine

Sintaxis: navigator.onLine

devuelve un valor tipo Bool

> true | false

# connection

![XD](/images/connection.png)

```javascript
if ('connection' in navigator) {
  if (navigator.connection.saveData === true) {
    // prevent loading resources and other data saving measures
  }
}
```

```javascript
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};

if (connection.saveData || ['slow-2g', '2g', '3g'].includes(connection.effectiveType)) {
  // prevent loading resources and other data saving measures
}
```

# navigator.mediaSession

manipulación del reproductor de chrome

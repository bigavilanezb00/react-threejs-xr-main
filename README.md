# Projectes d'exemple de AR

En aquest projecte podem trobar alguns projectes d'exemple de RA (realitat augmentada). Passos a seguir per instalar i executar cada projecte.

- Primer haurem d'iniciar el contenidor que conté el NODE `docker compose up -d`
- Entrarem al contenidor de NODE i anirem a la carpeta del projecte que correspongui: basic-react, basic-three, movement, xr, etc
- Un cop en la carpeta haurem d'instalar tots els paquets amb NPM i despres executar l'aplicació

```
npm install
HTTPS=true npm start
```

**Iniciem la nostra aplicació com a HTTPS perque es necessaria a l'hora d'iniciar la camara dels movils**

Despres ja podrem obrir la nostra aplicació desde movils **Android** anant a: https://[IP del PC]:3000

## Basic React

Projecte d'exemple amb l'estructura bàsica de React. Aquest projecte no te cap component relacionat amb Three.js ni XR

## Basic Three

Projecte d'exemple que mostra components 3D statics i sense cap interacció. Ens permet saber com **crear components 3D** i  **situar-los** en l'espai.

## Interaction

Projecte d'exemple per veure com es pot interactuar amb els elements. 

 - Quan se li dona click canvia el seu tamany (size)
 - Quan es passa el ratolí per sobre canvia de calor

 ## Movement

 Projecte d'exemple que utilitza el metode de react-feber **useFrame**. Aquest metode s'executa constantment a cada framerate. Per tant es el que utilitzarem per donar l'efecte de transició a les animacions

 ## XR 

 Projecte de Realitat Augmentada# react-threejs-xr-main

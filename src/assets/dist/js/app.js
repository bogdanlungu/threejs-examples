!function e(n,t,r){function o(d,a){if(!t[d]){if(!n[d]){var s="function"==typeof require&&require;if(!a&&s)return s(d,!0);if(i)return i(d,!0);var u=new Error("Cannot find module '"+d+"'");throw u.code="MODULE_NOT_FOUND",u}var E=t[d]={exports:{}};n[d][0].call(E.exports,function(e){var t=n[d][1][e];return o(t?t:e)},E,E.exports,e,n,t,r)}return t[d].exports}for(var i="function"==typeof require&&require,d=0;d<r.length;d++)o(r[d]);return o}({1:[function(e,n,t){"use strict";e("./modules/box"),e("./modules/sphere")},{"./modules/box":2,"./modules/sphere":3}],2:[function(e,n,t){"use strict";if(document.getElementById("webgl-container")){(function(){function e(){r.setSize(700,400),r.setClearColor(16762967,1),document.getElementById("webgl-container").appendChild(r.domElement),t.add(o),i=new THREE.PerspectiveCamera(35,1.75,1,1e3),i.position.z=100,t.add(i),d=new THREE.Mesh(new THREE.BoxGeometry(20,20,20),new THREE.MeshBasicMaterial({color:12920893,wireframe:!0})),d.name="box",t.add(d),n()}function n(){d.rotation.y+=.01,d.rotation.x+=.01,r.render(t,i),requestAnimationFrame(n)}var t=new THREE.Scene,r=window.WebGLRenderingContext?new THREE.WebGLRenderer({antialias:!0}):new THREE.CanvasRenderer,o=new THREE.AmbientLight(16777215),i=void 0,d=void 0;return document.getElementById("webgl-container")&&$(document).ready(e()),{scene:t}})()}},{}],3:[function(e,n,t){"use strict";if(document.getElementById("webgl-sphere")){(function(){function e(){r.setSize(700,400),r.setClearColor(16762967,1),document.getElementById("webgl-sphere").appendChild(r.domElement),t.add(o),i=new THREE.PerspectiveCamera(35,1.75,1,1e3),i.position.z=100,t.add(i);var e=new THREE.SphereGeometry(20,25,25),s=new THREE.MeshBasicMaterial({color:12920893,wireframe:!0});d=new THREE.Mesh(e,s),d.position.x=10,t.add(d),t.add(d),a=new Stats,a.setMode(0),a.domElement.style.position="absolute",a.domElement.style.left="0px",a.domElement.style.top="0px",document.body.appendChild(a.domElement),n()}function n(){d.rotation.y+=.01,r.render(t,i),requestAnimationFrame(n),a.update()}var t=new THREE.Scene,r=window.WebGLRenderingContext?new THREE.WebGLRenderer({antialias:!0}):new THREE.CanvasRenderer,o=new THREE.AmbientLight(16777215),i=void 0,d=void 0,a=void 0;return $(document).ready(e()),{scene:t}})()}},{}]},{},[1]);
//# sourceMappingURL=app.js.map

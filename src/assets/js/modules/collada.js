if (document.getElementById("webgl-collada")) {
    let colladaExample = (function() {

        "use strict";

        var scene = new THREE.Scene(),
            renderer = new THREE.WebGLRenderer({
                antialias: true
            }),
            light = new THREE.AmbientLight(0xffffff),
            camera,
            monster,
            skin;

        function initScene() {

            let width = 800,
                height = 500;

            renderer.setSize(width, height);
            renderer.setClearColor(0x7180AC, 1);
            document.getElementById("webgl-collada").appendChild(renderer.domElement);

            scene.add(light);

            camera = new THREE.PerspectiveCamera(
                35,
                width / height,
                1,
                1000
            );

            camera.position.set(0, 0, 3);

            scene.add(camera);

            let loader = new THREE.ColladaLoader();
            loader.options.convertUpAxis = true;

            //note monster model is from three.js examples
            loader.load('assets/js/models/pistol.dae', function(collada) {
                monster = collada.scene;
                scene.add(monster);

                render();
            });

        };

        function render() {

            monster.rotation.y += 0.001;

            renderer.render(scene, camera);
            requestAnimationFrame(render);
        };

        window.onload = initScene;

        return {
            scene: scene
        }

    })();
}

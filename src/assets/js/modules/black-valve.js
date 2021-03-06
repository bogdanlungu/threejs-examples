if (document.getElementById("webgl-black-valve")) {
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
            document.getElementById("webgl-black-valve").appendChild(renderer.domElement);

            scene.add(light);

            camera = new THREE.PerspectiveCamera(
                35,
                width / height,
                1,
                1000
            );

            camera.position.set(0, 0, 1.1);

            scene.add(camera);

            let loader = new THREE.ColladaLoader();
            loader.options.convertUpAxis = true;

            loader.load('assets/js/models/black-valve.dae', function(collada) {
                monster = collada.scene;
                scene.add(monster);

                render();
            });

        };

        function render() {

            monster.rotation.x += 0.01;

            renderer.render(scene, camera);
            requestAnimationFrame(render);
        };

        window.onload = initScene;

        return {
            scene: scene
        }

    })();
}

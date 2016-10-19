if (document.getElementById("webgl-monkey")) {
    let monkey = (function() {

        let scene = new THREE.Scene(),
            renderer = new THREE.WebGLRenderer(),
            light = new THREE.AmbientLight(0xffffff),
            camera,
            monkey;

        function initScene() {
            let width = 700,
                height = 400;

            renderer.setSize(width, height);
            renderer.setClearColor(0x7180AC, 1);
            document.getElementById("webgl-monkey").appendChild(renderer.domElement);

            scene.add(light);

            camera = new THREE.PerspectiveCamera(
                35,
                width / height,
                1,
                1000
            );

            camera.position.set(0, 0, 5);

            scene.add(camera);

            let loader = new THREE.JSONLoader();

            loader.load("assets/js/models/monkey.js", function(geometry, materials) {

                let material = new THREE.MeshBasicMaterial({
                    color: 0xFFFFFF,
                    wireframe: true
                });

                monkey = new THREE.Mesh(geometry, material);

                scene.add(monkey);
                render();

            });

        };

        function render() {

            monkey.rotation.y += 0.02;

            renderer.render(scene, camera);
            requestAnimationFrame(render);
        };

        window.onload = initScene;

        return {
            scene: scene
        }

    })();
}

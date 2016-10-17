/* Render a cube
 **************************/
if (document.getElementById("webgl-container")) {
    let box = (() => {

        let scene = new THREE.Scene(),
            renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer({
                antialias: true
            }) : new THREE.CanvasRenderer(),
            light = new THREE.AmbientLight(0xffffff),
            camera,
            box;

        function initScene() {
            renderer.setSize(700, 400);
            renderer.setClearColor(0xFFC857, 1);
            document.getElementById("webgl-container").appendChild(renderer.domElement);

            scene.add(light);
            camera = new THREE.PerspectiveCamera(
                35, /* camera vertical field of view (FOV) */
                700 / 400, /* aspect ratio */
                1, /* Near */
                1000 /* Far */
            );

            camera.position.z = 100; /* camera zoom */
            scene.add(camera);

            box = new THREE.Mesh(
                new THREE.BoxGeometry(20, 20, 20),
                new THREE.MeshBasicMaterial({
                    color: 0xC5283D,
                    wireframe: true
                })
            );

            box.name = "box";
            scene.add(box);
            render();

        }

        function render() {
            box.rotation.y += 0.01;
            box.rotation.x += 0.01;

            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }

        if (document.getElementById("webgl-container")) {
            $(document).ready(initScene());
        }


        return {
            scene: scene // expose the scene property
        };
    })();
}

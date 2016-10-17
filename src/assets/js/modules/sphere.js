/* Render a sphere
 **************************/
if (document.getElementById("webgl-sphere")) {
    let sphere = (() => {

        let scene = new THREE.Scene(),
            renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer({
                antialias: true
            }) : new THREE.CanvasRenderer(),
            light = new THREE.AmbientLight(0xffffff),
            camera,
            sphere,
            stats;

        function initScene() {
            renderer.setSize(700, 400);
            renderer.setClearColor(0xFFC857, 1);
            document.getElementById("webgl-sphere").appendChild(renderer.domElement);

            scene.add(light);
            camera = new THREE.PerspectiveCamera(
                35, /* camera vertical field of view (FOV) */
                700 / 400, /* aspect ratio */
                1, /* Near */
                1000 /* Far */
            );

            camera.position.z = 100; /* camera zoom */
            scene.add(camera);

            let geometry = new THREE.SphereGeometry(20, 25, 25);
            let material = new THREE.MeshBasicMaterial({
                color: 0xC5283D,
                wireframe: true
            });
            sphere = new THREE.Mesh(geometry, material);
            sphere.position.x = 10;
            scene.add(sphere);

            scene.add(sphere);

            // Generate the stats
            stats = new Stats();
            stats.setMode(0);

            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';
            document.body.appendChild(stats.domElement);

            render();

        }

        function render() {
            sphere.rotation.y += 0.01;
            // sphere.rotation.x += 0.01;

            renderer.render(scene, camera);
            requestAnimationFrame(render);
            stats.update();
        }

        $(document).ready(initScene());


        return {
            scene: scene // expose the scene property
        };
    })();
}

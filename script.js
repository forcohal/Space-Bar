const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });



renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.domElement.style.position = "fixed";
renderer.domElement.style.top = "0";
renderer.domElement.style.left = "0";
renderer.domElement.style.zIndex = "-1";  
document.body.appendChild(renderer.domElement);

const stars = [];
const starGeometry = new THREE.SphereGeometry(0.15, 24, 24);
for (let i = 0; i < 500; i++) {
    const starMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff, 
        transparent: true, 
        opacity: Math.random() * 0.5 + 0.5 
    });
    const star = new THREE.Mesh(starGeometry, starMaterial);
    star.position.set(
        (Math.random() - 0.5) * 500,  
        (Math.random() - 0.5) * 500,  
        (Math.random() - 0.5) * 500
    );
    scene.add(star);
    stars.push(star);

    gsap.to(star.material, {
        opacity: Math.random() * 0.5 + 0.5,
        duration: 5 + Math.random() * 5,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 5 
    });
}

const dustParticles = [];
const dustGeometry = new THREE.SphereGeometry(0.2, 12, 12);
for (let i = 0; i < 150; i++) {
    const dustMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x168aad, 
        transparent: true, 
        opacity: 0.7  
    });
    const dust = new THREE.Mesh(dustGeometry, dustMaterial);
    dust.position.set(
        (Math.random() - 0.5) * 1500,  
        (Math.random() - 0.5) * 1500,  
        (Math.random() - 0.5) * 1500
    );
    scene.add(dust);
    dustParticles.push(dust);

    gsap.to(dust.position, {
        x: `+=${(Math.random() - 0.5) * 50}`,
        y: `+=${(Math.random() - 0.5) * 50}`,
        z: `+=${(Math.random() - 0.5) * 50}`,
        duration: 8 + Math.random() * 5, 
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}

function updateCamera() {
    let scrollY = window.scrollY;
    camera.position.y = -scrollY * 0.3;
}
window.addEventListener("scroll", updateCamera);

function animate() {
    requestAnimationFrame(animate);
    
    stars.forEach(star => {
        star.position.z += 0.1;
        if (star.position.z > 500) star.position.z = -500;
    });

    renderer.render(scene, camera);
}
animate();


function contactScroll(){
    console.log("hi")
    document.getElementById("page3 h1").scrollIntoView({
        behavior:"smooth",

    })
}

gsap.registerPlugin(ScrollTrigger);

gsap.from("#part1", {
    y: 60,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#space",
        scroller: "body",
        start: "top 35%",
        end: "top 40%",
        scrub: 1,
        toggleActions: "play none none reverse",
        markers: false

    }
});
gsap.from("#galaxy",{
    y: 60,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 40%",
        end: "top 35%",
        scrub: 1,
        toggleActions: "play none none reverse"
    }
})




gsap.to("#nav",{
    x:-150,
    opacity :0,
    duration:1,
    scrollTrigger: {
         trigger: "#page1",
         scroller: "body",
         start: "top 1%",
         end: "top 10%",
         scrub: 1,
        toggleActions: "play none none reverse",
        
     }
   
})


gsap.from("#text",{
    y: 200,
    opacity: 0,
    duration: 10,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 40%",
        end: "top 20%",
        scrub: 1,
        toggleActions: "play none none reverse"

}})

gsap.from("#page3",{
    opacity: 0,
    duration:4,
    x: "-100vw",
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 81%",
        end: "top 86%",
        scrub: 3,
        toggleActions: "play none none reverse",
        markers:false
        
    }
})

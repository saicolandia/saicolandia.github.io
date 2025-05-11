// Environment creation and management
export function createMedicalEnvironment(scene) {
    const environment = {
        objects: [],
        update: function() {
            // Update animations for environment objects
            this.objects.forEach(obj => {
                if (obj.userData.animation) {
                    obj.userData.animation();
                }
            });
        }
    };
    
    // Add medical-themed background elements
    addMedicalBackgroundElements(scene, environment);
    
    return environment;
}

function addMedicalBackgroundElements(scene, environment) {
    const THREE = window.THREE;
    
    // Create a DNA helix
    const dnaHelix = createDNAHelix();
    dnaHelix.position.set(-8, 0, -10);
    scene.add(dnaHelix);
    environment.objects.push(dnaHelix);
    
    // Create floating medical symbols
    const symbols = createMedicalSymbols();
    symbols.position.set(8, 0, -10);
    scene.add(symbols);
    environment.objects.push(symbols);
    
    // Create a heart model
    const heart = createHeart();
    heart.position.set(0, -5, -15);
    scene.add(heart);
    environment.objects.push(heart);
    
    // Create brain model
    const brain = createBrain();
    brain.position.set(0, 5, -15);
    scene.add(brain);
    environment.objects.push(brain);
}

function createDNAHelix() {
    const THREE = window.THREE;
    
    const dnaGroup = new THREE.Group();
    const radius = 2;
    const height = 10;
    const turns = 3;
    const pointsPerTurn = 20;
    const totalPoints = turns * pointsPerTurn;
    
    // Create the two strands
    const strand1Material = new THREE.MeshPhongMaterial({ color: 0x3e92cc });
    const strand2Material = new THREE.MeshPhongMaterial({ color: 0xe74c3c });
    const nucleotideMaterial = new THREE.MeshPhongMaterial({ color: 0xf1c40f });
    
    // Create the helical strands
    for (let i = 0; i < totalPoints; i++) {
        const angle = (i / pointsPerTurn) * Math.PI * 2;
        const y = (i / totalPoints) * height - height / 2;
        
        // First strand
        const x1 = radius * Math.cos(angle);
        const z1 = radius * Math.sin(angle);
        
        const strand1Geometry = new THREE.SphereGeometry(0.1, 8, 8);
        const strand1 = new THREE.Mesh(strand1Geometry, strand1Material);
        strand1.position.set(x1, y, z1);
        dnaGroup.add(strand1);
        
        // Second strand (opposite side)
        const x2 = radius * Math.cos(angle + Math.PI);
        const z2 = radius * Math.sin(angle + Math.PI);
        
        const strand2Geometry = new THREE.SphereGeometry(0.1, 8, 8);
        const strand2 = new THREE.Mesh(strand2Geometry, strand2Material);
        strand2.position.set(x2, y, z2);
        dnaGroup.add(strand2);
        
        // Add nucleotide pairs every few points
        if (i % 4 === 0) {
            const nucleotideGeometry = new THREE.BoxGeometry(0.1, 0.1, radius * 2);
            const nucleotide = new THREE.Mesh(nucleotideGeometry, nucleotideMaterial);
            nucleotide.position.set((x1 + x2) / 2, y, (z1 + z2) / 2);
            nucleotide.lookAt(new THREE.Vector3(x2, y, z2));
            dnaGroup.add(nucleotide);
        }
    }
    
    // Add rotation animation
    dnaGroup.userData.animation = function() {
        dnaGroup.rotation.y += 0.005;
    };
    
    return dnaGroup;
}

function createMedicalSymbols() {
    const THREE = window.THREE;
    
    const symbolsGroup = new THREE.Group();
    
    // Create a caduceus symbol (medical staff with wings and snakes)
    const staffGeometry = new THREE.CylinderGeometry(0.05, 0.05, 5, 8);
    const staffMaterial = new THREE.MeshPhongMaterial({ color: 0xd4af37 });
    const staff = new THREE.Mesh(staffGeometry, staffMaterial);
    symbolsGroup.add(staff);
    
    // Create wings
    const wingMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    
    // Left wing
    const leftWingGeometry = new THREE.BoxGeometry(2, 0.1, 0.5);
    const leftWing = new THREE.Mesh(leftWingGeometry, wingMaterial);
    leftWing.position.set(-1, 1, 0);
    leftWing.rotation.z = Math.PI / 6;
    symbolsGroup.add(leftWing);
    
    // Right wing
    const rightWingGeometry = new THREE.BoxGeometry(2, 0.1, 0.5);
    const rightWing = new THREE.Mesh(rightWingGeometry, wingMaterial);
    rightWing.position.set(1, 1, 0);
    rightWing.rotation.z = -Math.PI / 6;
    symbolsGroup.add(rightWing);
    
    // Create snakes
    const snakeMaterial = new THREE.MeshPhongMaterial({ color: 0x27ae60 });
    
    // Create snake curves
    const snake1Points = [];
    const snake2Points = [];
    
    for (let i = 0; i < 50; i++) {
        const t = i / 49;
        const y = t * 4 - 2;
        
        // Snake 1 (left)
        const x1 = 0.5 * Math.sin(t * Math.PI * 4);
        snake1Points.push(new THREE.Vector3(x1, y, 0));
        
        // Snake 2 (right)
        const x2 = -0.5 * Math.sin(t * Math.PI * 4);
        snake2Points.push(new THREE.Vector3(x2, y, 0));
    }
    
    const snake1Curve = new THREE.CatmullRomCurve3(snake1Points);
    const snake2Curve = new THREE.CatmullRomCurve3(snake2Points);
    
    const snake1Geometry = new THREE.TubeGeometry(snake1Curve, 50, 0.1, 8, false);
    const snake2Geometry = new THREE.TubeGeometry(snake2Curve, 50, 0.1, 8, false);
    
    const snake1 = new THREE.Mesh(snake1Geometry, snakeMaterial);
    const snake2 = new THREE.Mesh(snake2Geometry, snakeMaterial);
    
    symbolsGroup.add(snake1);
    symbolsGroup.add(snake2);
    
    // Add floating animation
    symbolsGroup.userData.animation = function() {
        symbolsGroup.position.y = Math.sin(Date.now() * 0.001) * 0.5;
        symbolsGroup.rotation.y += 0.01;
    };
    
    return symbolsGroup;
}

function createHeart() {
    const THREE = window.THREE;
    
    const heartGroup = new THREE.Group();
    
    // Create a simplified heart shape using spheres and boxes
    const mainColor = 0xe74c3c;
    const heartMaterial = new THREE.MeshPhongMaterial({ color: mainColor });
    
    // Main chambers
    const leftChamber = new THREE.Mesh(
        new THREE.SphereGeometry(1, 16, 16),
        heartMaterial
    );
    leftChamber.position.set(-0.8, 0, 0);
    heartGroup.add(leftChamber);
    
    const rightChamber = new THREE.Mesh(
        new THREE.SphereGeometry(1, 16, 16),
        heartMaterial
    );
    rightChamber.position.set(0.8, 0, 0);
    heartGroup.add(rightChamber);
    
    // Bottom point
    const bottom = new THREE.Mesh(
        new THREE.ConeGeometry(1.5, 2, 16),
        heartMaterial
    );
    bottom.position.set(0, -1.5, 0);
    bottom.rotation.z = Math.PI;
    heartGroup.add(bottom);
    
    // Add pulsing animation
    let scale = 1;
    let growing = false;
    
    heartGroup.userData.animation = function() {
        if (growing) {
            scale += 0.005;
            if (scale >= 1.1) growing = false;
        } else {
            scale -= 0.005;
            if (scale <= 0.9) growing = true;
        }
        
        heartGroup.scale.set(scale, scale, scale);
    };
    
    return heartGroup;
}

function createBrain() {
    const THREE = window.THREE;
    
    const brainGroup = new THREE.Group();
    
    // Create a simplified brain using spheres
    const brainMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xf39c12,
        roughness: 0.7,
        metalness: 0.2
    });
    
    // Main brain mass
    const mainBrain = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 16, 16),
        brainMaterial
    );
    brainGroup.add(mainBrain);
    
    // Create brain folds using small bumps
    for (let i = 0; i < 50; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        const x = 1.5 * Math.sin(phi) * Math.cos(theta);
        const y = 1.5 * Math.sin(phi) * Math.sin(theta);
        const z = 1.5 * Math.cos(phi);
        
        const foldSize = 0.2 + Math.random() * 0.3;
        
        const fold = new THREE.Mesh(
            new THREE.SphereGeometry(foldSize, 8, 8),
            brainMaterial
        );
        
        fold.position.set(x, y, z);
        brainGroup.add(fold);
    }
    
    // Add gentle rotation animation
    brainGroup.userData.animation = function() {
        brainGroup.rotation.y += 0.003;
        brainGroup.rotation.x = Math.sin(Date.now() * 0.0005) * 0.1;
    };
    
    return brainGroup;
}

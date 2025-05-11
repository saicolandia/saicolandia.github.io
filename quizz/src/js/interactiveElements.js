// Interactive elements for the 3D environment
export function createInteractiveElements(scene, camera, quizManager) {
    const THREE = window.THREE;
    
    // Create a group for all interactive elements
    const interactiveGroup = new THREE.Group();
    scene.add(interactiveGroup);
    
    // Create interactive medical objects that respond to user interaction
    const interactiveObjects = [];
    
    // Create a stethoscope that can be clicked to start a quiz
    const stethoscope = createStethoscope();
    stethoscope.position.set(0, 0, -3);
    stethoscope.userData.action = () => {
        document.getElementById('menu-container').classList.add('hidden');
        document.getElementById('quiz-interface').classList.remove('hidden');
        
        // Setup quiz interface with current quiz data
        const setupQuizInterface = window.setupQuizInterface;
        if (setupQuizInterface) {
            setupQuizInterface(quizManager, scene, camera);
        }
    };
    stethoscope.userData.hoverText = "Start Quiz";
    interactiveObjects.push(stethoscope);
    interactiveGroup.add(stethoscope);
    
    // Create a clipboard that can be clicked to view dashboard
    const clipboard = createClipboard();
    clipboard.position.set(3, 0, -3);
    clipboard.userData.action = () => {
        document.getElementById('menu-container').classList.add('hidden');
        document.getElementById('dashboard-container').classList.remove('hidden');
        
        // Setup dashboard with current progress data
        const setupDashboard = window.setupDashboard;
        if (setupDashboard) {
            setupDashboard(quizManager);
        }
    };
    clipboard.userData.hoverText = "View Progress";
    interactiveObjects.push(clipboard);
    interactiveGroup.add(clipboard);
    
    // Create a medical book that can be clicked to manage quizzes
    const medicalBook = createMedicalBook();
    medicalBook.position.set(-3, 0, -3);
    medicalBook.userData.action = () => {
        document.getElementById('menu-container').classList.add('hidden');
        document.getElementById('quiz-management').classList.remove('hidden');
        
        // Setup quiz management interface
        const setupQuizManagement = window.setupQuizManagement;
        if (setupQuizManagement) {
            setupQuizManagement(quizManager);
        }
    };
    medicalBook.userData.hoverText = "Manage Quizzes";
    interactiveObjects.push(medicalBook);
    interactiveGroup.add(medicalBook);
    
    // Create floating medical particles
    const particles = createMedicalParticles();
    interactiveGroup.add(particles);
    
    // Create tooltip for hover text
    const tooltip = createTooltip();
    scene.add(tooltip);
    
    // Set up raycaster for interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    // Track currently hovered object
    let hoveredObject = null;
    
    // Add event listeners for mouse interaction
    window.addEventListener('mousemove', (event) => {
        // Calculate mouse position in normalized device coordinates
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        // Update the raycaster
        raycaster.setFromCamera(mouse, camera);
        
        // Check for intersections with interactive objects
        const intersects = raycaster.intersectObjects(interactiveObjects, true);
        
        if (intersects.length > 0) {
            // Find the root interactive object
            let rootObject = intersects[0].object;
            while (rootObject.parent && !rootObject.userData.action) {
                rootObject = rootObject.parent;
            }
            
            if (rootObject.userData.action) {
                // Hover effect
                if (hoveredObject !== rootObject) {
                    // Reset previous hover
                    if (hoveredObject) {
                        hoveredObject.scale.set(1, 1, 1);
                        document.body.style.cursor = 'default';
                    }
                    
                    // Set new hover
                    hoveredObject = rootObject;
                    hoveredObject.scale.set(1.1, 1.1, 1.1);
                    document.body.style.cursor = 'pointer';
                    
                    // Show tooltip
                    if (hoveredObject.userData.hoverText) {
                        tooltip.visible = true;
                        tooltip.position.copy(hoveredObject.position);
                        tooltip.position.y += 1.5;
                        
                        // Update tooltip text
                        updateTooltipText(tooltip, hoveredObject.userData.hoverText);
                    }
                }
            }
        } else {
            // Reset hover when not hovering over any object
            if (hoveredObject) {
                hoveredObject.scale.set(1, 1, 1);
                hoveredObject = null;
                document.body.style.cursor = 'default';
                tooltip.visible = false;
            }
        }
    });
    
    // Add click event listener
    window.addEventListener('click', () => {
        if (hoveredObject && hoveredObject.userData.action) {
            hoveredObject.userData.action();
        }
    });
    
    // Animation function
    interactiveGroup.userData.update = function() {
        // Rotate objects gently
        interactiveObjects.forEach(obj => {
            obj.rotation.y += 0.005;
        });
        
        // Update particles
        if (particles.userData.update) {
            particles.userData.update();
        }
    };
    
    return interactiveGroup;
}

function createStethoscope() {
    const THREE = window.THREE;
    
    const stethoscopeGroup = new THREE.Group();
    
    // Create the headset (earpieces)
    const earPieceMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
    
    // Left earpiece
    const leftEarPiece = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        earPieceMaterial
    );
    leftEarPiece.position.set(-0.3, 0.8, 0);
    stethoscopeGroup.add(leftEarPiece);
    
    // Right earpiece
    const rightEarPiece = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        earPieceMaterial
    );
    rightEarPiece.position.set(0.3, 0.8, 0);
    stethoscopeGroup.add(rightEarPiece);
    
    // Headset tube
    const tubeMaterial = new THREE.MeshPhongMaterial({ color: 0x3e92cc });
    
    // Create curved tube for headset
    const headsetCurve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-0.3, 0.8, 0),
        new THREE.Vector3(-0.4, 0.4, 0),
        new THREE.Vector3(0.4, 0.4, 0),
        new THREE.Vector3(0.3, 0.8, 0)
    );
    
    const headsetTube = new THREE.Mesh(
        new THREE.TubeGeometry(headsetCurve, 20, 0.03, 8, false),
        tubeMaterial
    );
    stethoscopeGroup.add(headsetTube);
    
    // Create main tube
    const mainTubeCurve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0, 0.4, 0),
        new THREE.Vector3(0, 0.2, 0),
        new THREE.Vector3(0, -0.2, 0),
        new THREE.Vector3(0, -0.5, 0)
    );
    
    const mainTube = new THREE.Mesh(
        new THREE.TubeGeometry(mainTubeCurve, 20, 0.03, 8, false),
        tubeMaterial
    );
    stethoscopeGroup.add(mainTube);
    
    // Create chest piece
    const chestPieceMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xd4af37,
        metalness: 0.7,
        roughness: 0.3
    });
    
    const chestPiece = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.25, 0.1, 32),
        chestPieceMaterial
    );
    chestPiece.position.set(0, -0.6, 0);
    chestPiece.rotation.x = Math.PI / 2;
    stethoscopeGroup.add(chestPiece);
    
    // Create diaphragm
    const diaphragmMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xcccccc,
        metalness: 0.8,
        roughness: 0.2
    });
    
    const diaphragm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.22, 0.02, 32),
        diaphragmMaterial
    );
    diaphragm.position.set(0, -0.65, 0);
    diaphragm.rotation.x = Math.PI / 2;
    stethoscopeGroup.add(diaphragm);
    
    // Add floating animation
    stethoscopeGroup.userData.update = function() {
        stethoscopeGroup.position.y = Math.sin(Date.now() * 0.001) * 0.1;
    };
    
    return stethoscopeGroup;
}

function createClipboard() {
    const THREE = window.THREE;
    
    const clipboardGroup = new THREE.Group();
    
    // Create clipboard base
    const clipboardMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    
    const clipboard = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1.3, 0.05),
        clipboardMaterial
    );
    clipboardGroup.add(clipboard);
    
    // Create clipboard clip
    const clipMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xC0C0C0,
        metalness: 0.7,
        roughness: 0.3
    });
    
    const clip = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.1, 0.07),
        clipMaterial
    );
    clip.position.set(0, 0.6, 0.05);
    clipboardGroup.add(clip);
    
    // Create paper
    const paperMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
    
    const paper = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 1.1, 0.01),
        paperMaterial
    );
    paper.position.set(0, -0.05, 0.03);
    clipboardGroup.add(paper);
    
    // Create text lines
    const lineMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
    
    for (let i = 0; i < 8; i++) {
        const line = new THREE.Mesh(
            new THREE.BoxGeometry(0.7, 0.01, 0.01),
            lineMaterial
        );
        line.position.set(0, 0.4 - i * 0.15, 0.04);
        clipboardGroup.add(line);
    }
    
    // Create chart
    const chartMaterial = new THREE.MeshBasicMaterial({ color: 0x3e92cc });
    
    // Bar chart
    for (let i = 0; i < 4; i++) {
        const height = 0.1 + Math.random() * 0.2;
        const bar = new THREE.Mesh(
            new THREE.BoxGeometry(0.1, height, 0.01),
            chartMaterial
        );
        bar.position.set(-0.25 + i * 0.15, -0.4 - height/2, 0.04);
        clipboardGroup.add(bar);
    }
    
    // Add floating animation
    clipboardGroup.userData.update = function() {
        clipboardGroup.position.y = Math.sin(Date.now() * 0.001 + 1) * 0.1;
    };
    
    return clipboardGroup;
}

function createMedicalBook() {
    const THREE = window.THREE;
    
    const bookGroup = new THREE.Group();
    
    // Create book cover
    const coverMaterial = new THREE.MeshPhongMaterial({ color: 0x8B0000 });
    
    const cover = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1.3, 0.2),
        coverMaterial
    );
    bookGroup.add(cover);
    
    // Create book pages
    const pageMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFAF0 });
    
    const pages = new THREE.Mesh(
        new THREE.BoxGeometry(0.95, 1.25, 0.18),
        pageMaterial
    );
    pages.position.set(0, 0, 0.01);
    bookGroup.add(pages);
    
    // Create medical symbol on cover
    const symbolMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xFFD700,
        metalness: 0.7,
        roughness: 0.3
    });
    
    // Create caduceus symbol (simplified)
    const rod = new THREE.Mesh(
        new THREE.CylinderGeometry(0.02, 0.02, 0.8, 8),
        symbolMaterial
    );
    rod.position.set(0, 0, 0.11);
    bookGroup.add(rod);
    
    // Create snakes (simplified as spirals)
    const snake1Curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.05, -0.3, 0.11),
        new THREE.Vector3(-0.1, -0.15, 0.11),
        new THREE.Vector3(-0.05, 0, 0.11),
        new THREE.Vector3(-0.1, 0.15, 0.11),
        new THREE.Vector3(-0.05, 0.3, 0.11)
    ]);
    
    const snake1 = new THREE.Mesh(
        new THREE.TubeGeometry(snake1Curve, 20, 0.015, 8, false),
        symbolMaterial
    );
    bookGroup.add(snake1);
    
    const snake2Curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.05, -0.3, 0.11),
        new THREE.Vector3(0.1, -0.15, 0.11),
        new THREE.Vector3(0.05, 0, 0.11),
        new THREE.Vector3(0.1, 0.15, 0.11),
        new THREE.Vector3(0.05, 0.3, 0.11)
    ]);
    
    const snake2 = new THREE.Mesh(
        new THREE.TubeGeometry(snake2Curve, 20, 0.015, 8, false),
        symbolMaterial
    );
    bookGroup.add(snake2);
    
    // Create wings
    const wingMaterial = new THREE.MeshPhongMaterial({ color: 0xFFD700 });
    
    // Left wing
    const leftWing = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.1, 0.01),
        wingMaterial
    );
    leftWing.position.set(-0.2, 0.3, 0.11);
    leftWing.rotation.z = Math.PI / 6;
    bookGroup.add(leftWing);
    
    // Right wing
    const rightWing = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.1, 0.01),
        wingMaterial
    );
    rightWing.position.set(0.2, 0.3, 0.11);
    rightWing.rotation.z = -Math.PI / 6;
    bookGroup.add(rightWing);
    
    // Add title text
    const titleMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
    
    // Create "MEDICAL" text (simplified as rectangles)
    for (let i = 0; i < 7; i++) {
        const letterWidth = 0.08;
        const spacing = 0.1;
        const startX = -0.3;
        
        const letter = new THREE.Mesh(
            new THREE.BoxGeometry(letterWidth, 0.05, 0.01),
            titleMaterial
        );
        letter.position.set(startX + i * spacing, -0.4, 0.11);
        bookGroup.add(letter);
    }
    
    // Add floating animation
    bookGroup.userData.update = function() {
        bookGroup.position.y = Math.sin(Date.now() * 0.001 + 2) * 0.1;
    };
    
    return bookGroup;
}

function createMedicalParticles() {
    const THREE = window.THREE;
    
    const particlesGroup = new THREE.Group();
    
    // Create different types of medical particles
    const particleCount = 50;
    const particleGeometries = [
        new THREE.SphereGeometry(0.05, 8, 8), // Pills
        new THREE.BoxGeometry(0.08, 0.08, 0.02), // Tablets
        new THREE.CylinderGeometry(0.03, 0.03, 0.1, 8) // Capsules
    ];
    
    const particleMaterials = [
        new THREE.MeshPhongMaterial({ color: 0xe74c3c }), // Red
        new THREE.MeshPhongMaterial({ color: 0x3498db }), // Blue
        new THREE.MeshPhongMaterial({ color: 0xf1c40f }), // Yellow
        new THREE.MeshPhongMaterial({ color: 0x2ecc71 })  // Green
    ];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const geometryIndex = Math.floor(Math.random() * particleGeometries.length);
        const materialIndex = Math.floor(Math.random() * particleMaterials.length);
        
        const particle = new THREE.Mesh(
            particleGeometries[geometryIndex],
            particleMaterials[materialIndex]
        );
        
        // Random position in a sphere
        const radius = 5 + Math.random() * 5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        particle.position.set(
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.sin(phi) * Math.sin(theta),
            radius * Math.cos(phi)
        );
        
        // Random rotation
        particle.rotation.set(
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2
        );
        
        // Add movement data
        particle.userData.speed = 0.001 + Math.random() * 0.003;
        particle.userData.distance = radius;
        particle.userData.theta = theta;
        particle.userData.phi = phi;
        particle.userData.phiSpeed = (Math.random() - 0.5) * 0.001;
        particle.userData.thetaSpeed = (Math.random() - 0.5) * 0.001;
        
        particlesGroup.add(particle);
    }
    
    // Update function for animation
    particlesGroup.userData.update = function() {
        particlesGroup.children.forEach(particle => {
            // Update angles
            particle.userData.theta += particle.userData.thetaSpeed;
            particle.userData.phi += particle.userData.phiSpeed;
            
            // Update position
            particle.position.x = particle.userData.distance * Math.sin(particle.userData.phi) * Math.cos(particle.userData.theta);
            particle.position.y = particle.userData.distance * Math.sin(particle.userData.phi) * Math.sin(particle.userData.theta);
            particle.position.z = particle.userData.distance * Math.cos(particle.userData.phi);
            
            // Rotate particle
            particle.rotation.x += 0.01;
            particle.rotation.y += 0.01;
        });
    };
    
    return particlesGroup;
}

function createTooltip() {
    const THREE = window.THREE;
    
    // Create a sprite for the tooltip
    const tooltipMaterial = new THREE.SpriteMaterial({
        map: createTextTexture("Hover over objects"),
        transparent: true
    });
    
    const tooltip = new THREE.Sprite(tooltipMaterial);
    tooltip.scale.set(2, 1, 1);
    tooltip.visible = false;
    
    return tooltip;
}

function updateTooltipText(tooltip, text) {
    tooltip.material.map.dispose();
    tooltip.material.map = createTextTexture(text);
    tooltip.material.needsUpdate = true;
}

function createTextTexture(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    
    const context = canvas.getContext('2d');
    context.fillStyle = 'rgba(0, 0, 0, 0.7)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw border
    context.strokeStyle = '#3e92cc';
    context.lineWidth = 4;
    context.strokeRect(4, 4, canvas.width - 8, canvas.height - 8);
    
    // Draw text
    context.font = 'bold 24px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = 'white';
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}

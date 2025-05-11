// Dashboard visualization and progress tracking
export function setupDashboard(quizManager) {
    const scores = quizManager.getScoreHistory();
    
    if (scores.length === 0) {
        document.getElementById('stats-container').innerHTML = '<p>No quiz data available yet. Complete a quiz to see your progress!</p>';
        document.getElementById('visualization-container').innerHTML = '';
        return;
    }
    
    // Update stats
    updateStatistics(scores);
    
    // Create visualizations
    createVisualizations(scores);
}

function updateStatistics(scores) {
    const statsContainer = document.getElementById('stats-container');
    
    // Calculate overall statistics
    const totalQuizzes = scores.length;
    const totalQuestions = scores.reduce((sum, score) => sum + score.totalQuestions, 0);
    const totalCorrect = scores.reduce((sum, score) => sum + score.correctAnswers, 0);
    const averagePercentage = Math.round((totalCorrect / totalQuestions) * 100) || 0;
    
    // Get the most recent score
    const latestScore = scores[scores.length - 1];
    
    // Create stats boxes
    statsContainer.innerHTML = `
        <div class="stat-box">
            <div class="stat-value">${totalQuizzes}</div>
            <div class="stat-label">Quizzes Completed</div>
        </div>
        <div class="stat-box">
            <div class="stat-value">${averagePercentage}%</div>
            <div class="stat-label">Average Score</div>
        </div>
        <div class="stat-box">
            <div class="stat-value">${latestScore.percentage}%</div>
            <div class="stat-label">Latest Score</div>
        </div>
    `;
}

function createVisualizations(scores) {
    const visualizationContainer = document.getElementById('visualization-container');
    visualizationContainer.innerHTML = '';
    
    // Create canvas for chart
    const canvas = document.createElement('canvas');
    canvas.width = visualizationContainer.clientWidth;
    canvas.height = visualizationContainer.clientHeight;
    visualizationContainer.appendChild(canvas);
    
    // Get context for drawing
    const ctx = canvas.getContext('2d');
    
    // Draw progress chart
    drawProgressChart(ctx, canvas.width, canvas.height, scores);
    
    // Add 3D visualization using Three.js
    createThreeDVisualization(visualizationContainer, scores);
}

function drawProgressChart(ctx, width, height, scores) {
    // Chart settings
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw chart background
    ctx.fillStyle = 'rgba(240, 248, 255, 0.5)';
    ctx.fillRect(padding, padding, chartWidth, chartHeight);
    
    // Draw title
    ctx.fillStyle = '#0a2463';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Quiz Performance History', width / 2, padding / 2);
    
    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding + chartHeight);
    ctx.lineTo(padding + chartWidth, padding + chartHeight);
    ctx.stroke();
    
    // Draw y-axis labels
    ctx.fillStyle = '#555';
    ctx.font = '12px Arial';
    ctx.textAlign = 'right';
    
    for (let i = 0; i <= 100; i += 20) {
        const y = padding + chartHeight - (i / 100) * chartHeight;
        ctx.fillText(`${i}%`, padding - 10, y + 4);
        
        // Draw horizontal grid lines
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + chartWidth, y);
        ctx.stroke();
    }
    
    // Draw data points
    if (scores.length > 0) {
        const pointWidth = Math.min(chartWidth / scores.length, 50);
        
        // Draw bars
        scores.forEach((score, index) => {
            const x = padding + (index / (scores.length - 1 || 1)) * chartWidth;
            const barHeight = (score.percentage / 100) * chartHeight;
            const barWidth = pointWidth * 0.8;
            
            // Draw bar
            ctx.fillStyle = getColorForPercentage(score.percentage);
            ctx.fillRect(
                x - barWidth / 2,
                padding + chartHeight - barHeight,
                barWidth,
                barHeight
            );
            
            // Draw quiz name
            ctx.fillStyle = '#555';
            ctx.font = '10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(
                score.quizTitle.substring(0, 10) + (score.quizTitle.length > 10 ? '...' : ''),
                x,
                padding + chartHeight + 15
            );
        });
        
        // Draw connecting line
        ctx.strokeStyle = '#3e92cc';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        scores.forEach((score, index) => {
            const x = padding + (index / (scores.length - 1 || 1)) * chartWidth;
            const y = padding + chartHeight - (score.percentage / 100) * chartHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        ctx.stroke();
        
        // Draw data points
        scores.forEach((score, index) => {
            const x = padding + (index / (scores.length - 1 || 1)) * chartWidth;
            const y = padding + chartHeight - (score.percentage / 100) * chartHeight;
            
            ctx.fillStyle = '#fff';
            ctx.strokeStyle = '#3e92cc';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        });
    }
}

function getColorForPercentage(percentage) {
    if (percentage >= 80) {
        return 'rgba(46, 204, 113, 0.7)'; // Green
    } else if (percentage >= 60) {
        return 'rgba(241, 196, 15, 0.7)'; // Yellow
    } else {
        return 'rgba(231, 76, 60, 0.7)'; // Red
    }
}

function createThreeDVisualization(container, scores) {
    // Create a separate div for the 3D visualization
    const threeDContainer = document.createElement('div');
    threeDContainer.style.width = '100%';
    threeDContainer.style.height = '300px';
    threeDContainer.style.marginTop = '30px';
    container.appendChild(threeDContainer);
    
    // Add title
    const title = document.createElement('h3');
    title.textContent = '3D Performance Visualization';
    title.style.textAlign = 'center';
    title.style.marginBottom = '10px';
    threeDContainer.appendChild(title);
    
    // Create Three.js scene
    const THREE = window.THREE;
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(
        60,
        threeDContainer.clientWidth / threeDContainer.clientHeight,
        0.1,
        1000
    );
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(threeDContainer.clientWidth, threeDContainer.clientHeight);
    renderer.setClearColor(0xf0f8ff, 0.3);
    threeDContainer.appendChild(renderer.domElement);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Create 3D visualization based on scores
    createScoreVisualization(scene, scores);
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate the scene slightly
        scene.rotation.y += 0.005;
        
        renderer.render(scene, camera);
    }
    
    animate();
}

function createScoreVisualization(scene, scores) {
    const THREE = window.THREE;
    
    // Create a group for all visualization elements
    const visualizationGroup = new THREE.Group();
    scene.add(visualizationGroup);
    
    // Create base platform
    const platformGeometry = new THREE.CylinderGeometry(5, 5, 0.5, 32);
    const platformMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x3e92cc,
        transparent: true,
        opacity: 0.7
    });
    const platform = new THREE.Mesh(platformGeometry, platformMaterial);
    platform.position.y = -0.25;
    visualizationGroup.add(platform);
    
    // Add medical symbol to platform
    const symbolGeometry = new THREE.TorusGeometry(1, 0.1, 16, 100);
    const symbolMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const symbol = new THREE.Mesh(symbolGeometry, symbolMaterial);
    symbol.rotation.x = Math.PI / 2;
    symbol.position.y = 0.01;
    platform.add(symbol);
    
    // Create vertical bar for each score
    if (scores.length > 0) {
        const maxBars = Math.min(scores.length, 10); // Limit to last 10 scores
        const recentScores = scores.slice(-maxBars);
        
        recentScores.forEach((score, index) => {
            const angle = (index / recentScores.length) * Math.PI * 2;
            const radius = 3;
            
            const x = radius * Math.cos(angle);
            const z = radius * Math.sin(angle);
            
            // Create bar
            const height = Math.max(0.5, (score.percentage / 100) * 5);
            const barGeometry = new THREE.BoxGeometry(0.5, height, 0.5);
            const barMaterial = new THREE.MeshPhongMaterial({ 
                color: getThreeColorForPercentage(score.percentage)
            });
            const bar = new THREE.Mesh(barGeometry, barMaterial);
            
            bar.position.set(x, height / 2, z);
            visualizationGroup.add(bar);
            
            // Add pulsing animation to bars
            bar.userData.originalHeight = height;
            bar.userData.pulseOffset = Math.random() * Math.PI * 2;
            bar.userData.update = function(time) {
                const pulse = Math.sin(time * 0.003 + this.userData.pulseOffset) * 0.1 + 1;
                this.scale.y = pulse;
                this.position.y = this.userData.originalHeight * pulse / 2;
            };
            
            // Add label
            const percentage = score.percentage.toString() + '%';
            
            // Create canvas for text
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 32;
            const context = canvas.getContext('2d');
            context.fillStyle = '#ffffff';
            context.font = 'bold 24px Arial';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(percentage, 32, 16);
            
            // Create texture from canvas
            const texture = new THREE.CanvasTexture(canvas);
            
            // Create sprite with texture
            const spriteMaterial = new THREE.SpriteMaterial({ 
                map: texture,
                transparent: true
            });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.scale.set(1, 0.5, 1);
            sprite.position.y = height + 0.5;
            
            bar.add(sprite);
        });
    }
    
    // Add animation update function
    visualizationGroup.userData.update = function(time) {
        this.children.forEach(child => {
            if (child.userData.update) {
                child.userData.update(time);
            }
        });
    };
    
    // Set up animation
    const clock = new THREE.Clock();
    
    function animate() {
        requestAnimationFrame(animate);
        const time = clock.getElapsedTime() * 1000;
        
        if (visualizationGroup.userData.update) {
            visualizationGroup.userData.update(time);
        }
    }
    
    animate();
}

function getThreeColorForPercentage(percentage) {
    if (percentage >= 80) {
        return 0x2ecc71; // Green
    } else if (percentage >= 60) {
        return 0xf1c40f; // Yellow
    } else {
        return 0xe74c3c; // Red
    }
}

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createMedicalEnvironment } from './environment.js';
import { setupQuizInterface } from './quizInterface.js';
import { setupDashboard } from './dashboard.js';
import { setupQuizManagement } from './quizManagement.js';
import { QuizManager } from './quizManager.js';
import { createInteractiveElements } from './interactiveElements.js';

// Main application class
class MedicalQuizGame {
    constructor() {
        this.initThreeJS();
        this.setupEventListeners();
        this.loadInitialData();
        
        // Start animation loop
        this.animate();
        
        // Hide loading screen after initialization
        setTimeout(() => {
            document.getElementById('loading-screen').classList.add('hidden');
        }, 1500);
    }
    
    initThreeJS() {
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf0f8ff);
        
        // Create camera
        this.camera = new THREE.PerspectiveCamera(
            75, 
            window.innerWidth / window.innerHeight, 
            0.1, 
            1000
        );
        this.camera.position.z = 5;
        
        // Create renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        document.getElementById('game-container').prepend(this.renderer.domElement);
        
        // Add orbit controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        
        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1);
        this.scene.add(directionalLight);
        
        // Create medical environment
        this.environment = createMedicalEnvironment(this.scene);
        
        // Create interactive elements
        this.interactiveElements = createInteractiveElements(this.scene, this.camera, this.quizManager);
        
        // Make functions available globally for interactive elements
        window.setupQuizInterface = setupQuizInterface;
        window.setupDashboard = setupDashboard;
        window.setupQuizManagement = setupQuizManagement;
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
    
    setupEventListeners() {
        // Menu buttons
        document.getElementById('start-btn').addEventListener('click', () => this.startQuiz());
        document.getElementById('dashboard-btn').addEventListener('click', () => this.showDashboard());
        document.getElementById('manage-btn').addEventListener('click', () => this.showQuizManagement());
        
        // Return button from dashboard
        document.getElementById('return-btn').addEventListener('click', () => {
            document.getElementById('dashboard-container').classList.add('hidden');
            document.getElementById('menu-container').classList.remove('hidden');
        });
        
        // Quiz management buttons
        document.getElementById('save-quiz-btn').addEventListener('click', () => this.saveQuiz());
        document.getElementById('cancel-edit-btn').addEventListener('click', () => {
            document.getElementById('quiz-management').classList.add('hidden');
            document.getElementById('menu-container').classList.remove('hidden');
        });
    }
    
    loadInitialData() {
        // Initialize quiz manager
        this.quizManager = new QuizManager();
        
        // Load sample quiz data if no saved data exists
        if (!this.quizManager.hasQuizzes()) {
            this.quizManager.loadSampleQuizzes();
        }
    }
    
    startQuiz() {
        document.getElementById('menu-container').classList.add('hidden');
        document.getElementById('quiz-interface').classList.remove('hidden');
        
        // Setup quiz interface with current quiz data
        setupQuizInterface(this.quizManager, this.scene, this.camera);
    }
    
    showDashboard() {
        document.getElementById('menu-container').classList.add('hidden');
        document.getElementById('dashboard-container').classList.remove('hidden');
        
        // Setup dashboard with current progress data
        setupDashboard(this.quizManager);
    }
    
    showQuizManagement() {
        document.getElementById('menu-container').classList.add('hidden');
        document.getElementById('quiz-management').classList.remove('hidden');
        
        // Setup quiz management interface
        setupQuizManagement(this.quizManager);
    }
    
    saveQuiz() {
        // Save quiz data from management interface
        const success = this.quizManager.saveQuizFromEditor();
        
        if (success) {
            document.getElementById('quiz-management').classList.add('hidden');
            document.getElementById('menu-container').classList.remove('hidden');
        }
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        // Update controls
        this.controls.update();
        
        // Update any animations in the environment
        if (this.environment) {
            this.environment.update();
        }
        
        // Update interactive elements
        if (this.interactiveElements && this.interactiveElements.userData.update) {
            this.interactiveElements.userData.update();
        }
        
        // Render scene
        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MedicalQuizGame();
});

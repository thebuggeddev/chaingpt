import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeIsometricShapeProps {
  type: 'L-shape' | 'Plus-shape' | 'C-shape' | 'Stairs' | 'City-block' | 'Hero-Complex' | 'Server-Rack' | 'Token-Ring' | 'Globe' | 'Quantum-Core' | 'AI-Stack' | 'Governance-Cluster' | 'Funding-Cube';
  className?: string;
  zoom?: number; // New prop to control visual scale (default 1)
}

export const ThreeIsometricShape: React.FC<ThreeIsometricShapeProps> = ({ type, className = '', zoom = 1 }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // --- SETUP ---
    const container = mountRef.current;
    const width = container.clientWidth || 300; 
    const height = container.clientHeight || 300; 
    
    // Cleanup previous instances
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const scene = new THREE.Scene();
    
    // Isometric Camera Setup
    const aspect = width / height;
    
    // Logic: Smaller 'd' means the camera sees less world space, making objects appear larger.
    // We divide the base view size by the zoom factor.
    const baseViewSize = 40; 
    const d = baseViewSize / zoom;

    const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
    
    // Classic Isometric View Angle
    camera.position.set(20, 20, 20); 
    camera.lookAt(scene.position);

    const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true, 
        powerPreference: "high-performance",
        logarithmicDepthBuffer: true // Helps with z-fighting
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- SHARED MATERIALS ---
    const materialWhite = new THREE.MeshBasicMaterial({ 
      color: 0xffffff,
      polygonOffset: true,
      polygonOffsetFactor: 1, 
      polygonOffsetUnits: 1
    });
    
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x94a3b8, linewidth: 1 }); 
    const lineMaterialDark = new THREE.LineBasicMaterial({ color: 0x050505, linewidth: 1 });
    const accentLineMaterial = new THREE.LineBasicMaterial({ color: 0xff5500, linewidth: 1 }); 

    const group = new THREE.Group();

    // --- UTILS ---
    const addBox = (w: number, h: number, d: number, x: number, y: number, z: number, mat: THREE.Material = materialWhite, lines: THREE.Material = lineMaterial) => {
      const geo = new THREE.BoxGeometry(w, h, d);
      geo.translate(x, y, z);
      const mesh = new THREE.Mesh(geo, mat);
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo), lines);
      group.add(mesh, edges);
      return { mesh, edges };
    };

    // Label Factory
    const createLabel = (text: string, align: 'left' | 'right' = 'right') => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if(!ctx) return new THREE.Object3D();

      canvas.width = 512;
      canvas.height = 128;
      
      ctx.font = 'bold 42px "JetBrains Mono", monospace';
      ctx.fillStyle = '#1f2937'; 
      ctx.textAlign = align;
      ctx.textBaseline = 'middle';
      
      const x = align === 'right' ? 500 : 12;
      ctx.fillText(text.toUpperCase(), x, 64);

      // Add a sub-line
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#ff5500'; 
      ctx.beginPath();
      const lineY = 90;
      if (align === 'right') {
         ctx.moveTo(512, lineY);
         ctx.lineTo(380, lineY);
      } else {
         ctx.moveTo(0, lineY);
         ctx.lineTo(132, lineY);
      }
      ctx.stroke();

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      
      const material = new THREE.SpriteMaterial({ 
          map: texture, 
          transparent: true,
          depthTest: false,
          depthWrite: false
      });
      const sprite = new THREE.Sprite(material);
      sprite.scale.set(12, 3, 1); 
      sprite.renderOrder = 999;
      return sprite;
    };

    // --- GEOMETRY CONSTRUCTION ---

    if (type === 'L-shape') {
      addBox(4, 10, 4, 0, 0, 0);
      addBox(8, 4, 4, 4, -3, 0);
      addBox(4, 4, 4, 0, 0, 4);
    } 
    else if (type === 'Plus-shape') {
      addBox(14, 3, 3, 0, 0, 0);
      addBox(3, 14, 3, 0, 0, 0);
      addBox(3, 3, 14, 0, 0, 0);
    } 
    else if (type === 'C-shape') {
      const s = 12, t = 4;
      addBox(s, t, t, 0, s/2 - t/2, 0);
      addBox(s, t, t, 0, -(s/2 - t/2), 0);
      addBox(t, s, t, -(s/2 - t/2), 0, 0);
    } 
    else if (type === 'Stairs') {
      const stepH = 2.5, stepD = 2.5, w = 8;
      for (let i = 0; i < 4; i++) {
        addBox(w, stepH, stepD, 0, i * stepH - 3, i * -stepD + 3);
      }
    } 
    else if (type === 'City-block') {
      addBox(4, 16, 4, 0, 0, 0); 
      addBox(12, 2, 12, 0, -7, 0); 
      addBox(3, 8, 3, 5, -4, 5); 
      addBox(3, 6, 3, -5, -5, -5); 
    }
    else if (type === 'Funding-Cube') {
      // Simple wireframe cube
      const geometry = new THREE.BoxGeometry(8, 8, 8);
      const wireframe = new THREE.WireframeGeometry(geometry);
      const line = new THREE.LineSegments(wireframe);
      // Use dark gray for lines
      const mat = new THREE.LineBasicMaterial({ color: 0x4b5563, linewidth: 1 });
      line.material = mat;
      group.add(line);
      
      // Inner subtle cube
      const innerGeo = new THREE.BoxGeometry(4, 4, 4);
      const innerMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      const innerEdges = new THREE.LineSegments(new THREE.EdgesGeometry(innerGeo), new THREE.LineBasicMaterial({ color: 0xe5e7eb }));
      group.add(innerMesh, innerEdges);
    }
    else if (type === 'Governance-Cluster') {
        // Three database/server units close together
        
        // Unit 1 (Back Left)
        addBox(6, 10, 6, -5, 0, -5, materialWhite, lineMaterialDark);
        for(let i=0; i<3; i++) {
            const vGeo = new THREE.BoxGeometry(4, 0.2, 0.2);
            vGeo.translate(-5, 2 - (i*1.5), -2);
            const vMesh = new THREE.Mesh(vGeo, new THREE.MeshBasicMaterial({color: 0x94a3b8}));
            group.add(vMesh);
        }
        
        // Unit 2 (Front Right)
        addBox(6, 10, 6, 3, 0, 3, materialWhite, lineMaterialDark);
        for(let i=0; i<3; i++) {
             const vGeo = new THREE.BoxGeometry(0.2, 0.2, 4);
             vGeo.translate(6, 2 - (i*1.5), 3);
             const vMesh = new THREE.Mesh(vGeo, new THREE.MeshBasicMaterial({color: 0x94a3b8}));
             group.add(vMesh);
        }

        // Unit 3 (Front Left) - The new unit
        addBox(6, 6, 6, -5, -2, 3, materialWhite, lineMaterialDark);
        
        // Connection Pipes
        const pipePoints = [
            new THREE.Vector3(-5, -3, -2), // From Unit 1
            new THREE.Vector3(-5, -3, 3),  // To Unit 3
            new THREE.Vector3(0, -3, 3),   // To Unit 2
            new THREE.Vector3(0, 3, 3)     // Up Unit 2
        ];
        const pipeGeo = new THREE.BufferGeometry().setFromPoints(pipePoints);
        const pipe = new THREE.Line(pipeGeo, accentLineMaterial);
        group.add(pipe);
        
        // Secondary connection
        const pipe2Points = [
            new THREE.Vector3(-2, 1, -5),
            new THREE.Vector3(3, 1, -5),
            new THREE.Vector3(3, 1, 0)
        ];
        const pipe2Geo = new THREE.BufferGeometry().setFromPoints(pipe2Points);
        const pipe2 = new THREE.Line(pipe2Geo, new THREE.LineBasicMaterial({ color: 0x94a3b8 }));
        group.add(pipe2);
    }
    else if (type === 'Quantum-Core') {
        // --- INCUBATION CHAMBER ---
        // Floating Central Core
        const coreGeo = new THREE.IcosahedronGeometry(4, 1);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0xff5500, wireframe: true, transparent: true, opacity: 0.8 });
        const core = new THREE.Mesh(coreGeo, coreMat);
        group.add(core);
        core.userData = { pulse: true };

        // Inner solid core
        const innerCore = new THREE.Mesh(new THREE.IcosahedronGeometry(2, 0), new THREE.MeshBasicMaterial({ color: 0xffffff }));
        group.add(innerCore);

        // Orbiting Rings
        const ringGeo1 = new THREE.TorusGeometry(8, 0.2, 16, 100);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0x94a3b8 });
        const ring1 = new THREE.Mesh(ringGeo1, ringMat);
        ring1.rotation.x = Math.PI / 2;
        group.add(ring1);
        ring1.userData = { rotateAxis: 'x', speed: 0.02 };

        const ring2 = new THREE.Mesh(ringGeo1, ringMat);
        ring2.rotation.y = Math.PI / 2;
        group.add(ring2);
        ring2.userData = { rotateAxis: 'y', speed: 0.015 };
        
        const ring3 = new THREE.Mesh(new THREE.TorusGeometry(10, 0.1, 16, 100), new THREE.MeshBasicMaterial({ color: 0xff5500 }));
        group.add(ring3);
        ring3.userData = { rotateAxis: 'z', speed: -0.01 };

        // Data Particles
        const partGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        for(let i=0; i<20; i++) {
            const part = new THREE.Mesh(partGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
            const r = 12 + Math.random() * 5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI * 2;
            part.position.set(
                r * Math.sin(theta) * Math.cos(phi),
                r * Math.sin(theta) * Math.sin(phi),
                r * Math.cos(theta)
            );
            group.add(part);
            part.userData = { orbit: true, speed: 0.005 + Math.random() * 0.01, axis: new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize() };
        }
    }
    else if (type === 'AI-Stack') {
        const colorOrange = 0xff5500;
        const colorDark = 0x111111; 
        const colorGray = 0xe5e7eb;
        const matOrange = new THREE.MeshBasicMaterial({ color: colorOrange });
        const matDark = new THREE.MeshBasicMaterial({ color: colorDark });
        const matGray = new THREE.MeshBasicMaterial({ color: colorGray });
        
        addBox(14, 4, 14, 0, -10, 0, materialWhite, lineMaterialDark);
        addBox(6, 8, 8, -10, -8, 0, matGray, lineMaterialDark);
        for(let i=0; i<4; i++) {
             const vGeo = new THREE.BoxGeometry(0.5, 6, 0.5);
             vGeo.translate(-13.1, -8, -2 + (i*1.5));
             const vMesh = new THREE.Mesh(vGeo, new THREE.MeshBasicMaterial({color: 0x94a3b8}));
             group.add(vMesh);
        }
        addBox(8, 3, 8, 8, -9.5, 8, matDark, lineMaterial); 
        const lblInfra = createLabel("Infrastructure", "right");
        lblInfra.position.set(-14, -8, 12);
        group.add(lblInfra);
        const stackWidth = 8;
        const stackDepth = 8;
        const cornerOffset = 4;
        const corners = [
            { x: cornerOffset, z: cornerOffset },
            { x: -cornerOffset, z: cornerOffset },
            { x: cornerOffset, z: -cornerOffset },
            { x: -cornerOffset, z: -cornerOffset },
        ];
        corners.forEach(corner => {
            const points = [
              new THREE.Vector3(corner.x, -8, corner.z),
              new THREE.Vector3(corner.x, 14, corner.z)
            ];
            const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(lineGeo, new THREE.LineDashedMaterial({ color: 0x9ca3af, dashSize: 0.5, gapSize: 0.5, scale: 1 }));
            line.computeLineDistances();
            group.add(line);
        });
        const packetsGroup = new THREE.Group();
        corners.forEach((corner, i) => {
             const pktGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
             const pkt = new THREE.Mesh(pktGeo, new THREE.MeshBasicMaterial({ color: colorOrange }));
             pkt.position.set(corner.x, -8, corner.z);
             pkt.userData = { speed: 0.05 + (i * 0.01), limit: 14, startY: -8 };
             packetsGroup.add(pkt);
        });
        group.add(packetsGroup);
        packetsGroup.userData = { isPacketLayer: true };
        const satelliteGroup = new THREE.Group();
        const satNodeGeo = new THREE.IcosahedronGeometry(2, 0);
        const satNodeMat = new THREE.LineBasicMaterial({ color: 0xff5500 });
        const satNode = new THREE.LineSegments(new THREE.WireframeGeometry(satNodeGeo), satNodeMat);
        satelliteGroup.add(satNode);
        const lblInput = createLabel("Input Stream", "left");
        lblInput.position.set(0, 3, 0); 
        satelliteGroup.add(lblInput);
        satelliteGroup.position.set(-12, 12, -12);
        group.add(satelliteGroup);
        satelliteGroup.userData = { rotate: true }; 
        const connPoints = [
            new THREE.Vector3(-12, 12, -12),
            new THREE.Vector3(0, 2, 0)
        ];
        const connGeo = new THREE.BufferGeometry().setFromPoints(connPoints);
        const connLine = new THREE.Line(connGeo, new THREE.LineDashedMaterial({ color: 0xff5500, dashSize: 1, gapSize: 1 }));
        connLine.computeLineDistances();
        group.add(connLine);
        const layer2H = 5;
        const geo2 = new THREE.BoxGeometry(stackWidth, layer2H, stackDepth);
        const mesh2 = new THREE.Mesh(geo2, matDark);
        const edges2 = new THREE.LineSegments(new THREE.EdgesGeometry(geo2), new THREE.LineBasicMaterial({ color: 0x555555 }));
        const coreGeo = new THREE.BoxGeometry(stackWidth + 0.1, 0.2, stackDepth + 0.1);
        const coreMesh = new THREE.Mesh(coreGeo, new THREE.MeshBasicMaterial({ color: colorOrange }));
        const group2 = new THREE.Group();
        group2.add(mesh2, edges2, coreMesh);
        const lblData = createLabel("Data Layer", "right");
        lblData.position.set(-9, 1, 9); 
        group2.add(lblData);
        group2.userData = { baseY: -3, floatOffset: 0, floatSpeed: 0.001 };
        group.add(group2);
        const layer3H = 3;
        const geo3 = new THREE.BoxGeometry(stackWidth, layer3H, stackDepth);
        const edges3 = new THREE.LineSegments(new THREE.EdgesGeometry(geo3), lineMaterialDark);
        const innerGeo = new THREE.IcosahedronGeometry(2, 0);
        const innerWire = new THREE.WireframeGeometry(innerGeo);
        const innerMesh = new THREE.LineSegments(innerWire, accentLineMaterial);
        const group3 = new THREE.Group();
        group3.add(edges3, innerMesh);
        const satGeo = new THREE.BoxGeometry(1, 1, 1);
        for(let i=0; i<3; i++) {
            const sat = new THREE.Mesh(satGeo, matGray);
            const satEdges = new THREE.LineSegments(new THREE.EdgesGeometry(satGeo), lineMaterialDark);
            sat.add(satEdges);
            const orbitContainer = new THREE.Group();
            orbitContainer.add(sat);
            sat.position.set(6, 0, 0); 
            orbitContainer.rotation.y = (i / 3) * Math.PI * 2;
            orbitContainer.userData = { orbitSpeed: 0.02 };
            group3.add(orbitContainer);
        }
        const lblLogic = createLabel("AI Logic", "right");
        lblLogic.position.set(-9, 0, 9);
        group3.add(lblLogic);
        group3.userData = { baseY: 3, floatOffset: 0, floatSpeed: 0.001, rotateInner: innerMesh };
        group.add(group3);
        const layer4H = 2.5;
        const geo4 = new THREE.BoxGeometry(stackWidth, layer4H, stackDepth);
        const mesh4 = new THREE.Mesh(geo4, matOrange);
        const edges4 = new THREE.LineSegments(new THREE.EdgesGeometry(geo4), lineMaterialDark);
        const group4 = new THREE.Group();
        group4.add(mesh4, edges4);
        const lblOut = createLabel("Intelligence", "right");
        lblOut.position.set(-9, 1, 9);
        group4.add(lblOut);
        group4.userData = { baseY: 7.5, floatOffset: 0, floatSpeed: 0.001 };
        group.add(group4);
        const gridHelper = new THREE.GridHelper(60, 60, 0xe5e7eb, 0xe5e7eb);
        gridHelper.position.y = -12;
        group.add(gridHelper);
    }
    else if (type === 'Globe') {
        const r = 14;
        const segments = 48; 
        const sphereGeo = new THREE.SphereGeometry(r, segments, segments);
        const ptsMat = new THREE.PointsMaterial({ color: 0x1f2937, size: 0.25 });
        const spherePoints = new THREE.Points(sphereGeo, ptsMat);
        group.add(spherePoints);
        const coreGeo = new THREE.SphereGeometry(r - 0.2, 24, 24);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const core = new THREE.Mesh(coreGeo, coreMat);
        group.add(core);
    }
    else if (type === 'Server-Rack') {
       addBox(1, 16, 1, 5, 0, 5, materialWhite, accentLineMaterial);
       addBox(1, 16, 1, -5, 0, 5, materialWhite, accentLineMaterial);
       addBox(1, 16, 1, 5, 0, -5, materialWhite, accentLineMaterial);
       addBox(1, 16, 1, -5, 0, -5, materialWhite, accentLineMaterial);
       addBox(11, 1, 11, 0, 8, 0);
       addBox(11, 1, 11, 0, -8, 0);
       for(let i = 0; i < 6; i++) {
         const y = (i * 2.2) - 5.5;
         addBox(9, 1.5, 9, 0, y, 0);
         addBox(1, 0.5, 0.2, 3, y, 4.6, materialWhite, accentLineMaterial);
         addBox(1, 0.5, 0.2, 1, y, 4.6, materialWhite, accentLineMaterial);
       }
    } 
    else if (type === 'Token-Ring') {
        addBox(14, 1, 14, 0, -6, 0, materialWhite, lineMaterialDark);
        const hexCylinderGeo = new THREE.CylinderGeometry(2.5, 2.5, 12, 6);
        const centralMesh = new THREE.Mesh(hexCylinderGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
        const centralEdges = new THREE.LineSegments(new THREE.EdgesGeometry(hexCylinderGeo), accentLineMaterial);
        centralMesh.add(centralEdges);
        group.add(centralMesh);
        const nodeCount = 4;
        const radius = 6;
        for (let i = 0; i < nodeCount; i++) {
            const angle = (i / nodeCount) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const h = 6 + Math.random() * 4;
            const nodeGeo = new THREE.CylinderGeometry(1.5, 1.5, h, 6);
            nodeGeo.translate(x, h/2 - 6, z);
            const nodeMesh = new THREE.Mesh(nodeGeo, new THREE.MeshBasicMaterial({ color: 0x1f2937 })); 
            const nodeEdges = new THREE.LineSegments(new THREE.EdgesGeometry(nodeGeo), new THREE.LineBasicMaterial({ color: 0x9ca3af }));
            group.add(nodeMesh, nodeEdges);
            const points = [new THREE.Vector3(x, 0, z), new THREE.Vector3(0, 0, 0)];
            const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: 0xff5500, transparent: true, opacity: 0.5 }));
            group.add(line);
        }
    }
    else {
        addBox(10, 10, 10, 0, 0, 0);
    }

    scene.add(group);

    // --- ANIMATION LOOP ---
    let animationId: number;
    const clock = new THREE.Clock();
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      
      if (type === 'AI-Stack') {
        group.rotation.y = Math.sin(time * 0.15) * 0.08;
        const breathe = (Math.sin(time * 0.6) + 1) * 0.5;
        
        group.children.forEach(child => {
            if (child.userData && child.userData.baseY !== undefined) {
                const floatAmp = (child.userData.baseY + 10) * 0.12; 
                child.position.y = child.userData.baseY + (breathe * floatAmp);
                if (child.userData.rotateInner) {
                    child.userData.rotateInner.rotation.x += 0.01;
                    child.userData.rotateInner.rotation.y += 0.015;
                }
                child.children.forEach(grandChild => {
                    if (grandChild.userData && grandChild.userData.orbitSpeed) {
                        grandChild.rotation.y += grandChild.userData.orbitSpeed;
                    }
                });
            }
            if (child.userData && child.userData.isPacketLayer) {
                child.children.forEach(pkt => {
                   if (pkt.userData) {
                       pkt.position.y += pkt.userData.speed;
                       if (pkt.position.y > pkt.userData.limit) {
                           pkt.position.y = pkt.userData.startY;
                       }
                   }
                });
            }
            // Satellite rotation
            if (child.userData && child.userData.rotate) {
                child.rotation.y -= 0.01;
                child.rotation.z += 0.005;
            }
        });
      } 
      else if (type === 'Globe') {
        group.rotation.y += 0.003;
        group.rotation.z = Math.sin(time * 0.2) * 0.05;
      } 
      else if (type === 'Token-Ring') {
        group.rotation.y -= 0.005; 
      }
      else if (type === 'Funding-Cube') {
        group.rotation.y += 0.005;
        group.rotation.x = Math.sin(time * 0.5) * 0.1;
      }
      else if (type === 'Quantum-Core') {
        group.children.forEach(child => {
            if (child.userData) {
                if (child.userData.pulse) {
                    const scale = 1 + Math.sin(time * 2) * 0.05;
                    child.scale.set(scale, scale, scale);
                }
                if (child.userData.rotateAxis) {
                    child.rotation[child.userData.rotateAxis as 'x'|'y'|'z'] += child.userData.speed;
                }
                if (child.userData.orbit) {
                    const axis = child.userData.axis as THREE.Vector3;
                    child.position.applyAxisAngle(axis, child.userData.speed);
                }
            }
        });
      }
      else {
        group.rotation.y += 0.002;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          renderer.setSize(width, height);
          
          // Recalculate aspect and scale on resize
          const newAspect = width / height;
          const newD = baseViewSize / zoom;
          
          camera.left = -newD * newAspect;
          camera.right = newD * newAspect;
          camera.top = newD;
          camera.bottom = -newD;
          camera.updateProjectionMatrix();
        }
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      group.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach(m => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
    };
  }, [type, zoom]);

  return <div ref={mountRef} className={`overflow-hidden ${className}`} />;
};
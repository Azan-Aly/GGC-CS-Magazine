import {
  Article,
  Category,
  DepartmentNotice,
  EditorialBoardMember,
  FacultyMember,
} from '../types/magazine';

export const CATEGORIES: Category[] = [
  {
    id: 'ai-machine-learning',
    slug: 'ai-machine-learning',
    name: 'Artificial Intelligence & ML',
    shortName: 'AI & ML',
    description:
      'Computer vision, neural network optimization, natural language processing, and applied intelligence research.',
  },
  {
    id: 'final-year-projects',
    slug: 'final-year-projects',
    name: 'Final Year Projects (FYP)',
    shortName: 'FYP Spotlight',
    description:
      'Flagship capstone projects, engineering prototypes, and technological innovations developed by graduating BS Computer Science scholars.',
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    name: 'Cloud & Distributed Systems',
    shortName: 'Cloud & DevOps',
    description:
      'Kubernetes orchestration, serverless microservices, distributed fault-tolerance, and scalable infrastructure.',
  },
  {
    id: 'web-development',
    slug: 'web-development',
    name: 'Modern Web Engineering',
    shortName: 'Web Engineering',
    description:
      'Full-stack architectures, Next.js Server Components, reactive frontends, and performant user interface patterns.',
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    name: 'Cybersecurity & Networks',
    shortName: 'Cybersecurity',
    description:
      'Zero-trust perimeter defense, cryptographic primitives, memory-safe exploits analysis, and institutional security.',
  },
  {
    id: 'student-life',
    slug: 'student-life',
    name: 'Student Research & Life',
    shortName: 'Student Life',
    description:
      'Scholarship experiences, open-source contributions, alumni industry pathways, and developer community culture.',
  },
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'fac-01',
    name: 'Prof. Saleem Raza Shah',
    initials: 'SR',
    designation: 'Associate Professor',
    roleTitle: 'Head of Department (HOD)',
    department: 'Department of Computer Science',
    focus: 'Academic Leadership, Distributed Computing & Systems Architecture',
    isHod: true,
  },
  {
    id: 'fac-02',
    name: 'Prof. Nasrullah Nazir',
    initials: 'NN',
    designation: 'Assistant Professor',
    roleTitle: 'Faculty Member',
    department: 'Department of Computer Science',
    focus: 'Algorithms, Database Management Systems & Software Engineering',
  },
  {
    id: 'fac-03',
    name: 'Prof. Khurram Chattha',
    initials: 'KC',
    designation: 'Lecturer',
    roleTitle: 'Lecturer & Magazine Chief Editor',
    department: 'Department of Computer Science',
    focus: 'Programming Fundamentals, Data Structures & Digital Publication',
  },
  {
    id: 'fac-04',
    name: 'Prof. Zulqarnain Iqbal',
    initials: 'ZI',
    designation: 'Lecturer',
    roleTitle: 'Faculty Member',
    department: 'Department of Computer Science',
    focus: 'Computer Networks, Operating Systems & Applied Computing',
  },
  {
    id: 'fac-05',
    name: 'Prof. Ali Raza',
    initials: 'AR',
    designation: 'CTI',
    roleTitle: 'College Teaching Intern',
    department: 'Department of Computer Science',
    focus: 'Laboratory Practicals, Web Engineering & Student Project Guidance',
  },
];

export const EDITORIAL_BOARD: EditorialBoardMember[] = [
  {
    name: 'Prof. Khurram Chattha',
    initials: 'KC',
    role: 'Editor-in-Chief',
    academicTitle: 'Lecturer, Department of Computer Science',
    specialization: 'Editorial Direction, Curriculum Alignment & Technical Review',
  },
  {
    name: 'Prof. Saleem Raza Shah',
    initials: 'SR',
    role: 'Patron-in-Chief',
    academicTitle: 'HOD & Associate Professor of Computer Science',
    specialization: 'Institutional Oversight & Departmental Research Policy',
  },
  {
    name: 'Prof. Nasrullah Nazir',
    initials: 'NN',
    role: 'Senior Academic Reviewer',
    academicTitle: 'Assistant Professor of Computer Science',
    specialization: 'Algorithms, Database Integrity & Capstone Evaluation',
  },
  {
    name: 'Dua Fatima',
    initials: 'DF',
    role: 'Student Coordinating Editor',
    academicTitle: 'BS Computer Science Scholar',
    specialization: 'Student Submissions & Open-Source Coordination',
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    slug: 'edge-ai-computer-vision-microcontrollers',
    title: 'Optimizing Deep Learning Inferences on Edge Microcontrollers',
    subtitle: 'A Comparative Benchmark of Int8 Quantized Neural Networks Developed by GGC Jhang Scholars',
    summary:
      'Deploying neural networks onto resource-constrained ARM Cortex-M microcontrollers demands aggressive quantization and weight pruning. We share empirical latency and energy metrics from our departmental embedded intelligence study.',
    category: 'ai-machine-learning',
    tags: ['Edge AI', 'TensorFlow Lite', 'Quantization', 'Embedded Systems', 'Computer Vision'],
    author: {
      id: 'auth-01',
      name: 'Prof. Khurram Chattha',
      title: 'Lecturer in Computer Science',
      role: 'Chief Editor',
      initials: 'KC',
      bio: 'Lecturer in the Department of Computer Science at Government Graduate College Jhang and Chief Editor of the GGC Jhang CS Digital Magazine.',
      department: 'Department of Computer Science',
      batchOrDesignation: 'Lecturer & Chief Editor',
    },
    publishedAt: 'October 24, 2026',
    readTimeMinutes: 8,
    featured: true,
    coverImage: '/src/assets/images/article_ai_vision_1794457378048.jpg',
    coverImageAlt: 'Microcontroller circuit board with vision camera sensor and edge AI neural processor',
    stats: {
      views: 3420,
      saves: 184,
      citations: 12,
    },
    relatedSlugs: ['autonomous-agritech-rover-fyp', 'kubernetes-microservices-campus-api'],
    sections: [
      {
        type: 'paragraph',
        text: 'The democratization of edge artificial intelligence has shifted computing paradigms from centralized cloud servers to micro-watt silicon devices at the periphery. In the Department of Computer Science at Government Graduate College Jhang, our BS Computer Science research explores how aggressively we can compress convolutional neural networks (CNNs) without sacrificing critical classification accuracy in localized agricultural sensor setups.',
      },
      {
        type: 'heading-2',
        text: 'The Challenge of 256KB SRAM Constraints',
      },
      {
        type: 'paragraph',
        text: 'Traditional deep learning models typically demand hundreds of megabytes of RAM and gigabytes of storage. When working with microcontrollers such as the STM32F4 or ESP32-S3, developers face strict hardware boundaries: sub-megabyte SRAM and flash limits that trigger immediate out-of-memory panics if standard 32-bit floating point representations are utilized.',
      },
      {
        type: 'callout',
        text: 'Core Research Finding: Converting MobileNetV2 from FP32 to symmetrical INT8 weight representation achieved a 73.4% reduction in memory footprint while preserving 94.2% top-1 accuracy on regional agricultural disease datasets.',
      },
      {
        type: 'code',
        codeSnippet: {
          language: 'python',
          filename: 'quantize_edge_model.py',
          description: 'TensorFlow Lite Post-Training Integer-Only Quantization Pipeline',
          code: `import tensorflow as tf
import numpy as np

def representative_dataset_gen():
    # Representative calibration images from Jhang crops dataset
    for i in range(150):
        sample = np.load(f"data/calibration/img_{i}.npy")
        yield [sample.astype(np.float32)]

converter = tf.lite.TFLiteConverter.from_saved_model("models/crop_classifier_v2")
converter.optimizations = [tf.lite.Optimize.DEFAULT]
converter.representative_dataset = representative_dataset_gen

# Enforce full integer operations for microcontroller ALU
converter.target_spec.supported_ops = [tf.lite.OpsSet.TFLITE_BUILTINS_INT8]
converter.inference_input_type = tf.int8
converter.inference_output_type = tf.int8

quantized_tflite_model = converter.convert()

with open("models/crop_classifier_int8.tflite", "wb") as f:
    f.write(quantized_tflite_model)
print("Quantization complete: Model size reduced from 14.2MB to 3.1MB")`,
        },
      },
      {
        type: 'heading-2',
        text: 'Firmware Integration & Tensor Arena Sizing',
      },
      {
        type: 'paragraph',
        text: 'Deploying the generated FlatBuffer into firmware requires pre-allocating a contiguous memory buffer known as the Tensor Arena. During workstation testing in our departmental Computer Lab, determining the minimum viable arena size prevented heap fragmentation across extended 72-hour operational cycles.',
      },
      {
        type: 'code',
        codeSnippet: {
          language: 'cpp',
          filename: 'main_infer.cpp',
          description: 'C++ Inference execution loop on Cortex-M4 microcontroller',
          code: `#include "tensorflow/lite/micro/all_ops_resolver.h"
#include "tensorflow/lite/micro/micro_interpreter.h"
#include "tensorflow/lite/schema/schema_generated.h"
#include "models/crop_classifier_int8.h"

constexpr int kTensorArenaSize = 120 * 1024; // 120KB dedicated arena
alignas(16) static uint8_t tensor_arena[kTensorArenaSize];

void RunInference(const int8_t* sensor_frame) {
    const tflite::Model* model = tflite::GetModel(g_crop_classifier_data);
    tflite::AllOpsResolver resolver;
    
    tflite::MicroInterpreter interpreter(model, resolver, tensor_arena, kTensorArenaSize);
    TfLiteStatus allocate_status = interpreter.AllocateTensors();
    
    if (allocate_status != kTfLiteOk) {
        // Handle allocation overflow gracefully
        return;
    }
    
    TfLiteTensor* input = interpreter.input(0);
    memcpy(input->data.int8, sensor_frame, input->bytes);
    
    // Execute inference invocation
    uint32_t start_cycles = DWT->CYCCNT;
    TfLiteStatus invoke_status = interpreter.Invoke();
    uint32_t elapsed_cycles = DWT->CYCCNT - start_cycles;
    
    TfLiteTensor* output = interpreter.output(0);
    // Process classification logits...
}`,
        },
      },
      {
        type: 'pull-quote',
        text: 'True software engineering rigor in academia is not measured by hypothetical benchmarks, but by whether our systems operate reliably when deployed under real-world field conditions.',
        authorQuote: 'Prof. Khurram Chattha — Department of Computer Science',
      },
      {
        type: 'heading-3',
        text: 'Benchmarking Results & Future Horizons',
      },
      {
        type: 'paragraph',
        text: 'The final evaluated firmware maintained an inference latency of 64 milliseconds per frame at 168 MHz clock frequency, consuming an average of 42 milliwatts during active processing bursts. As our upcoming Digital Logic Design (DLD) Lab completes installation, future batches will pair low-level hardware interfacing directly with TinyML workloads.',
      },
    ],
  },
  {
    id: 'art-02',
    slug: 'autonomous-agritech-rover-fyp',
    title: 'Agritech IoT: Autonomous Crop Disease Detection Rover',
    subtitle: 'How BS Computer Science Scholars Engineered an All-Terrain Field Analysis Robot for Their Capstone Project',
    summary:
      'A detailed breakdown of the 2026 BS CS Flagship Final Year Project. Combining differential GPS navigation, multispectral imaging, and solar-assisted autonomy to aid rural farming communities.',
    category: 'final-year-projects',
    tags: ['FYP 2026', 'Robotics', 'ROS 2', 'IoT', 'Agriculture Tech', 'Computer Vision'],
    author: {
      id: 'auth-02',
      name: 'Syeda Fatima Zahra & Team',
      title: 'BS Computer Science Final Year Scholars',
      role: 'Student Researcher',
      initials: 'FZ',
      bio: 'Lead Systems Architect for Project AgroRover 2026 in the BS Computer Science program at Government Graduate College Jhang.',
      department: 'Dept of Computer Science, GGC Jhang',
      batchOrDesignation: 'BS CS (Session 2022–2026)',
    },
    publishedAt: 'November 02, 2026',
    readTimeMinutes: 10,
    featured: false,
    coverImage: '/src/assets/images/article_fyp_showcase_1794457379591.jpg',
    coverImageAlt: 'Students presenting autonomous robotics rover and telemetry system at annual FYP showcase',
    stats: {
      views: 4890,
      saves: 312,
      citations: 8,
    },
    relatedSlugs: ['edge-ai-computer-vision-microcontrollers', 'nextjs-15-server-actions-campus-portal'],
    sections: [
      {
        type: 'paragraph',
        text: 'The agricultural landscape surrounding Jhang is known for extensive wheat and sugarcane cultivation. However, localized leaf rust and nitrogen deficiencies frequently go unnoticed until yield loss becomes irreversible. For our Final Year Project (FYP), our four-member team sought to develop an accessible, open-hardware robotic rover capable of autonomous crop row navigation and real-time plant pathology diagnosis.',
      },
      {
        type: 'heading-2',
        text: 'Hardware Topology & Mechanical Design',
      },
      {
        type: 'paragraph',
        text: 'Constructed on a 4-wheel rocker-bogie suspension system inspired by planetary exploration rovers, the platform accommodates high mud resistance and 25-degree incline slopes. The compute brain combines a Raspberry Pi 5 running Ubuntu Server 24.04 and ROS 2 Jazzy Jalisco, linked over CAN-bus to high-torque brushless DC motor controllers.',
      },
      {
        type: 'code',
        codeSnippet: {
          language: 'python',
          filename: 'navigation_node.py',
          description: 'ROS 2 Node for Row Boundary Detection & Waypoint Steering',
          code: `import rclpy
from rclpy.node import Node
from sensor_msgs.msg import Image, LaserScan
from geometry_msgs.msg import Twist
import cv2
from cv_bridge import CvBridge

class AgroNavigator(Node):
    def __init__(self):
        super().__init__('agro_navigator')
        self.cmd_publisher = self.create_publisher(Twist, '/cmd_vel', 10)
        self.image_sub = self.create_subscription(Image, '/camera/rgb', self.on_frame, 10)
        self.bridge = CvBridge()
        self.get_logger().info("AgroNavigator autonomous row traversal initialized.")

    def on_frame(self, msg):
        frame = self.bridge.imgmsg_to_cv2(msg, desired_encoding='bgr8')
        hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
        
        # Segment green vegetation corridors
        mask = cv2.inRange(hsv, (35, 40, 40), (85, 255, 255))
        moments = cv2.moments(mask)
        
        twist = Twist()
        if moments["m00"] > 0:
            cx = int(moments["m10"] / moments["m00"])
            error = cx - (frame.shape[1] // 2)
            twist.linear.x = 0.45  # 0.45 m/s patrol speed
            twist.angular.z = -float(error) * 0.003
        else:
            twist.linear.x = 0.0
            twist.angular.z = 0.2  # Searching rotation
            
        self.cmd_publisher.publish(twist)`,
        },
      },
      {
        type: 'callout',
        text: 'Evaluation Accolade: Project AgroRover was recognized for top architectural craftsmanship at the GGC Jhang Annual BS CS Project Exhibition 2026 across mechanical robustness, code modularity, and real-time inference latency.',
      },
      {
        type: 'heading-2',
        text: 'The Multilateral Sensor Suite',
      },
      {
        type: 'paragraph',
        text: 'To avoid relying on cloud connectivity in deep agricultural fields, the rover hosts an on-board YOLOv11 nano model for foliar disease classification. When an anomaly is detected, telemetry data is logged to an SQLite database and transmitted over an encrypted 868MHz LoRa link back to the farm headquarters dashboard.',
      },
    ],
  },
  {
    id: 'art-03',
    slug: 'kubernetes-microservices-campus-api',
    title: 'Zero-Downtime Microservices on Kubernetes',
    subtitle: 'Designing Resilient Academic APIs for Peak Semester Enrollment and Examination Releases',
    summary:
      'A deep-dive into modernizing departmental academic portals: implementing automated horizontal pod autoscaling, rolling zero-downtime deployments, and circuit breakers.',
    category: 'cloud-devops',
    tags: ['Kubernetes', 'DevOps', 'Go', 'Docker', 'Scalability', 'Microservices'],
    author: {
      id: 'auth-03',
      name: 'Prof. Saleem Raza Shah',
      title: 'Head of Computer Science Department',
      role: 'HOD & Associate Professor',
      initials: 'SR',
      bio: 'Associate Professor and Head of the Department of Computer Science at Government Graduate College Jhang, guiding BS Computer Science curriculum and systems architecture research.',
      department: 'Department of Computer Science',
      batchOrDesignation: 'Associate Professor & HOD',
    },
    publishedAt: 'October 18, 2026',
    readTimeMinutes: 7,
    featured: false,
    coverImage: '/src/assets/images/article_cloud_architecture_1794457379930.jpg',
    coverImageAlt: 'Modern software engineering workstation displaying microservice architecture and terminal output',
    stats: {
      views: 2950,
      saves: 142,
      citations: 5,
    },
    relatedSlugs: ['edge-ai-computer-vision-microcontrollers', 'zero-trust-campus-network-defense'],
    sections: [
      {
        type: 'paragraph',
        text: 'Every semester, the release of examination results and course enrollment brings intense traffic spikes to college infrastructure. Legacy monolithic PHP servers frequently struggle with sudden concurrency bursts. In this architectural case study, we walk through designing a containerized microservice layout resilient to examination-day surges.',
      },
      {
        type: 'heading-2',
        text: 'Cluster Topology & Ingress Architecture',
      },
      {
        type: 'paragraph',
        text: 'The architecture employs an HAProxy reverse proxy load-balancer delegating to an ingress-nginx controller. Services are segregated into student authentication, grade transcripts, course catalogs, and fee verification microservices developed in Go and Node.js.',
      },
      {
        type: 'code',
        codeSnippet: {
          language: 'yaml',
          filename: 'student-portal-deployment.yaml',
          description: 'Production Kubernetes Deployment manifest with Readiness Probes & Resource Limits',
          code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: student-transcript-service
  namespace: campus-core
  labels:
    app: transcript-api
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: transcript-api
  template:
    metadata:
      labels:
        app: transcript-api
    spec:
      containers:
      - name: api
        image: registry.ggcjhang.edu.pk/cs/transcript-api:v2.4.1
        ports:
        - containerPort: 8080
        resources:
          limits:
            cpu: "1000m"
            memory: "512Mi"
          requests:
            cpu: "200m"
            memory: "128Mi"
        readinessProbe:
          httpGet:
            path: /healthz
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 3
        livenessProbe:
          httpGet:
            path: /live
            port: 8080
          initialDelaySeconds: 15
          periodSeconds: 10`,
        },
      },
      {
        type: 'heading-2',
        text: 'Handling the Concurrency Rush',
      },
      {
        type: 'paragraph',
        text: 'Using Horizontal Pod Autoscaler (HPA) configured to monitor both CPU utilization (target 70%) and Prometheus custom metrics (HTTP requests per second), the transcript cluster scaled dynamically from 3 pods to 24 pods in under 45 seconds during stress benchmarks in our Computer Lab, registering zero dropped connections.',
      },
    ],
  },
  {
    id: 'art-04',
    slug: 'nextjs-15-server-actions-campus-portal',
    title: 'Next.js Server Actions vs REST APIs',
    subtitle: 'An Empirical Developer Experience and Latency Benchmark for Modern Campus Applications',
    summary:
      'Evaluating Next.js App Router, React Server Components (RSC), and Server Actions against decoupled REST patterns when building high-density data tables and form workflows.',
    category: 'web-development',
    tags: ['Next.js', 'React', 'TypeScript', 'Server Actions', 'Full Stack', 'Web Dev'],
    author: {
      id: 'auth-04',
      name: 'Bilal Ahmad Khan',
      title: 'Full Stack Engineer & GGC CS Alumni',
      role: 'Alumni Lead',
      initials: 'BA',
      bio: 'Senior Software Engineer and GGC Jhang BS Computer Science Alumnus. Active mentor for departmental software engineering circles.',
      department: 'GGC Jhang CS Alumni Chapter',
      batchOrDesignation: 'BS CS Class of 2023',
    },
    publishedAt: 'October 12, 2026',
    readTimeMinutes: 6,
    featured: false,
    coverImage: '/src/assets/images/hero_magazine_cover_1794457377714.jpg',
    coverImageAlt: 'Students and developers reviewing web application code and architecture',
    stats: {
      views: 3820,
      saves: 240,
      citations: 4,
    },
    relatedSlugs: ['kubernetes-microservices-campus-api', 'zero-trust-campus-network-defense'],
    sections: [
      {
        type: 'paragraph',
        text: 'In modern frontend development, state synchronization between client and server has historically been mediated by REST or GraphQL endpoints accompanied by data fetching libraries like React Query or SWR. With Next.js Server Components and Server Actions, the boundary between backend mutation logic and user interface forms has blurred significantly.',
      },
      {
        type: 'heading-2',
        text: 'Type-Safe Mutations Without Endpoint Ceremony',
      },
      {
        type: 'paragraph',
        text: 'Server Actions eliminate the boilerplate of defining dedicated `/api/...` routes, managing manual serialization, and re-declaring TypeScript request/response contracts across two independent repositories.',
      },
      {
        type: 'code',
        codeSnippet: {
          language: 'typescript',
          filename: 'submit-assignment.action.ts',
          description: 'Type-safe Next.js Server Action with Zod schema validation & revalidation',
          code: `'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { db } from '@/lib/db';
import { getAuthenticatedSession } from '@/lib/auth';

const SubmissionSchema = z.object({
  assignmentId: z.string().uuid(),
  repoUrl: z.string().url(),
  commitHash: z.string().length(40),
  notes: z.string().max(500).optional(),
});

export async function submitStudentAssignment(formData: FormData) {
  const session = await getAuthenticatedSession();
  if (!session?.studentId) {
    throw new Error('Unauthorized submission attempt');
  }

  const rawData = Object.fromEntries(formData.entries());
  const validated = SubmissionSchema.parse(rawData);

  await db.submission.create({
    data: {
      studentId: session.studentId,
      assignmentId: validated.assignmentId,
      githubUrl: validated.repoUrl,
      commitSha: validated.commitHash,
      notes: validated.notes || '',
      submittedAt: new Date(),
    },
  });

  revalidatePath('/student/assignments');
  return { success: true, message: 'Assignment submitted successfully' };
}`,
        },
      },
      {
        type: 'paragraph',
        text: 'Our benchmarks showed a 32% reduction in total lines of boilerplate code and a 140ms improvement in mutation turnaround time on standard regional broadband connections.',
      },
    ],
  },
  {
    id: 'art-05',
    slug: 'zero-trust-campus-network-defense',
    title: 'Defending Campus Infrastructure: Zero-Trust Implementation',
    subtitle: 'Securing Collegiate Computing Workstations, VLAN Segments, and Student Network Grids',
    summary:
      'An investigative guide to campus network segmentation and how security researchers implement micro-segmentation and 802.1X authentication across academic computing labs.',
    category: 'cybersecurity',
    tags: ['Cybersecurity', 'Zero Trust', 'Network Defense', 'Firewalls', 'PKI', 'Linux'],
    author: {
      id: 'auth-05',
      name: 'Prof. Zulqarnain Iqbal',
      title: 'Lecturer in Computer Science',
      role: 'Faculty Member',
      initials: 'ZI',
      bio: 'Lecturer in the Department of Computer Science at GGC Jhang specializing in Computer Networks, Operating Systems, and institutional network defense.',
      department: 'Department of Computer Science',
      batchOrDesignation: 'Lecturer · Computer Networks',
    },
    publishedAt: 'October 04, 2026',
    readTimeMinutes: 9,
    featured: false,
    coverImage: '/src/assets/images/article_cloud_architecture_1794457379930.jpg',
    coverImageAlt: 'Cybersecurity analytics and network topology monitor screens',
    stats: {
      views: 2180,
      saves: 110,
      citations: 3,
    },
    relatedSlugs: ['kubernetes-microservices-campus-api', 'edge-ai-computer-vision-microcontrollers'],
    sections: [
      {
        type: 'paragraph',
        text: 'Educational networks are uniquely challenging to defend: they must support open practical sessions for BS Computer Science students on lab workstations while rigorously safeguarding confidential examination records and institutional administration systems.',
      },
      {
        type: 'heading-2',
        text: 'The Fallacy of the Perimeter Defense',
      },
      {
        type: 'paragraph',
        text: 'Historically, institutional networks relied on a single border firewall: everything outside was untrusted, and everything inside the local switch was assumed safe. However, a single compromised USB drive inside the Computer Lab could trigger lateral malware traversal across the entire local subnet.',
      },
      {
        type: 'callout',
        text: 'Core Tenet: "Never Trust, Always Verify." Every workstation inside the Computer Lab and every administrative endpoint must authenticate via isolated VLAN policies before receiving least-privilege network access.',
      },
      {
        type: 'code',
        codeSnippet: {
          language: 'bash',
          filename: 'iptables-vlan-isolation.sh',
          description: 'VLAN Layer 3 Micro-segmentation and egress rule enforcement',
          code: `#!/usr/bin/env bash
# GGC Jhang Network Defense Core Segmentation
set -euo pipefail

# Define Isolated Computer Lab VLAN (10.20.0.0/16) and Admin Core (10.10.0.0/24)
STUDENT_VLAN="10.20.0.0/16"
ADMIN_CORE="10.10.0.0/24"
MGMT_IF="eth0.10"
STUDENT_IF="eth0.20"

echo "[*] Flushing legacy permissive forward chains..."
iptables -F FORWARD

# Drop all inter-VLAN traversal by default
iptables -P FORWARD DROP

# Permit established and related traffic
iptables -A FORWARD -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# Allow Student Lab VLAN strictly to proxy gateway port 3128 and DNS
iptables -A FORWARD -i "$STUDENT_IF" -p tcp --dport 3128 -j ACCEPT
iptables -A FORWARD -i "$STUDENT_IF" -p udp --dport 53 -j ACCEPT

# Explicitly log and drop all lateral attempts towards Admin Core
iptables -A FORWARD -i "$STUDENT_IF" -d "$ADMIN_CORE" -j LOG --log-prefix "[ZERO-TRUST-BLOCK]: "
iptables -A FORWARD -i "$STUDENT_IF" -d "$ADMIN_CORE" -j DROP

echo "[+] Zero-Trust laboratory micro-segmentation successfully applied."`,
        },
      },
    ],
  },
  {
    id: 'art-06',
    slug: 'from-ggc-jhang-to-global-open-source',
    title: 'From GGC Jhang to Global Open Source',
    subtitle: 'How BS Computer Science Students Merged Pull Requests into Linux, PyTorch, and Apache Ecosystems',
    summary:
      'Interviews with third-year and final-year BS Computer Science scholars who broke geographic boundaries to contribute to international open-source engineering communities.',
    category: 'student-life',
    tags: ['Student Life', 'GSoC', 'Open Source', 'Career', 'Mentorship', 'Community'],
    author: {
      id: 'auth-06',
      name: 'Dua Fatima',
      title: 'BS Computer Science Scholar',
      role: 'BS CS Scholar',
      initials: 'DF',
      bio: 'Student Coordinating Editor for the GGC Jhang CS Magazine and BS Computer Science scholar advocating collaborative open-source software engineering.',
      department: 'Department of Computer Science',
      batchOrDesignation: 'BS CS (Session 2023–2027)',
    },
    publishedAt: 'September 28, 2026',
    readTimeMinutes: 5,
    featured: false,
    coverImage: '/src/assets/images/hero_magazine_cover_1794457377714.jpg',
    coverImageAlt: 'Students collaborating in the computer science department at GGC Jhang',
    stats: {
      views: 5210,
      saves: 420,
      citations: 2,
    },
    relatedSlugs: ['autonomous-agritech-rover-fyp', 'edge-ai-computer-vision-microcontrollers'],
    sections: [
      {
        type: 'paragraph',
        text: 'There is a persistent myth in the tech world that strong software engineering is confined to metropolitan universities. The dedication of BS Computer Science students at Government Graduate College Jhang demonstrates that disciplined self-study and mentorship close that gap.',
      },
      {
        type: 'heading-2',
        text: 'The Open-Source Sprint Initiative',
      },
      {
        type: 'paragraph',
        text: 'Guided by department faculty during practical hours in the Computer Lab, cohorts of BS Computer Science students established verified GitHub workflows, practiced patch submissions, and dissected issue trackers across upstream open-source repositories.',
      },
      {
        type: 'pull-quote',
        text: 'The compiler does not care what city you are coding from. If your pull request adheres to architectural standards and passes continuous integration tests, your code runs across machines worldwide.',
        authorQuote: 'Dua Fatima — Student Coordinating Editor',
      },
      {
        type: 'paragraph',
        text: 'By building strong foundations in data structures, operating systems, and version control, students continue to advance toward international internships and graduate research tracks.',
      },
    ],
  },
];

export const DEPARTMENT_NOTICES: DepartmentNotice[] = [
  {
    id: 'not-01',
    title: 'Call for Papers: Vol. 4 Issue of Digital Computing Magazine',
    date: 'Nov 15, 2026',
    tag: 'Editorial',
    summary:
      'Submissions open for original BS Computer Science student articles, FYP digests, and technical tutorials.',
    urgent: true,
  },
  {
    id: 'not-02',
    title: 'Final Year Project (FYP) Mid-Evaluation Schedule Announced',
    date: 'Nov 20, 2026',
    tag: 'Academic',
    summary:
      'BS CS 2022–2026 batch candidates must demonstrate working project builds in the Computer Lab at 10:00 AM.',
  },
  {
    id: 'not-03',
    title: 'Department Update: Digital Logic Design (DLD) Lab Setup in Progress',
    date: 'Dec 02, 2026',
    tag: 'Infrastructure',
    summary:
      'Equipment procurement and workbench setup for the upcoming Digital Logic Design (DLD) Lab are currently underway.',
  },
];

export interface Handbook {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  edition: string;
  pages: number;
  description: string;
  badge: string;
  chaptersCount: number;
  pdfUrl?: string;
  tone: 'crimson' | 'slate' | 'indigo';
}

export const HANDBOOKS: Handbook[] = [
  {
    id: 'hb-01',
    title: 'The TinyML & Edge AI Field Handbook',
    subtitle: 'From TensorFlow Lite to Cortex-M4 Microcontrollers',
    author: 'Prof. Khurram Chattha & Student Contributors',
    edition: '2026 First Edition',
    pages: 284,
    description:
      'A comprehensive reference manual detailing 8-bit integer quantization, tensor arena memory management, and compact vision deployment on low-power silicon.',
    badge: 'Field Reference',
    chaptersCount: 12,
    tone: 'crimson',
  },
  {
    id: 'hb-02',
    title: 'The Final Year Project (FYP) Playbook',
    subtitle: 'Architecture, Peer Review, Defense & Engineering Ethics',
    author: 'Prof. Saleem Raza Shah & Capstone Committee',
    edition: '2026 Revised Edition',
    pages: 196,
    description:
      'The definitive blueprint for graduating BS Computer Science candidates: ideation rubrics, system design documentation, sprint cadence, and defense standards.',
    badge: 'BS CS Senior Guide',
    chaptersCount: 8,
    tone: 'slate',
  },
  {
    id: 'hb-03',
    title: 'Practical Algorithms & Systems Manual',
    subtitle: 'Data Structures, Database Design & Campus Practicals',
    author: 'Prof. Nasrullah Nazir & Faculty Team',
    edition: 'Second Edition',
    pages: 220,
    description:
      'Structured problem sets, SQL optimization labs, and architectural patterns tailored for BS Computer Science coursework and practical examinations.',
    badge: 'Course Companion',
    chaptersCount: 10,
    tone: 'indigo',
  },
];

export interface WorkshopEvent {
  id: string;
  title: string;
  speaker: string;
  speakerRole: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  tag: string;
  seatsLeft: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const WORKSHOPS: WorkshopEvent[] = [
  {
    id: 'ws-01',
    title: 'Data Structures & Competitive Problem Solving Session',
    speaker: 'Prof. Nasrullah Nazir',
    speakerRole: 'Assistant Professor, Department of Computer Science',
    date: 'Wednesday, Nov 18, 2026',
    time: '10:00 AM – 12:30 PM',
    venue: 'CS Computer Lab, Dept of Computer Science',
    description:
      'Practical problem-solving session on graph traversals, dynamic programming, and complexity analysis on Computer Lab workstations.',
    tag: 'Algorithms',
    seatsLeft: 8,
    level: 'Intermediate',
  },
  {
    id: 'ws-02',
    title: 'Building Scalable Next.js Applications with Server Actions',
    speaker: 'Bilal Ahmad Khan',
    speakerRole: 'GGC Jhang BS CS Alumnus & Full-Stack Engineer',
    date: 'Saturday, Nov 21, 2026',
    time: '2:00 PM – 4:30 PM',
    venue: 'CS Computer Lab & Online Stream',
    description:
      'Learn modern React Server Components, server actions, mutation caching, and zero-boilerplate database integration.',
    tag: 'Web Engineering',
    seatsLeft: 14,
    level: 'Intermediate',
  },
  {
    id: 'ws-03',
    title: 'Digital Logic Fundamentals & Upcoming DLD Lab Orientation',
    speaker: 'Prof. Zulqarnain Iqbal & Prof. Ali Raza',
    speakerRole: 'Lecturer & CTI, Department of Computer Science',
    date: 'Tuesday, Nov 24, 2026',
    time: '11:00 AM – 1:00 PM',
    venue: 'CS Lecture Hall & Computer Lab',
    description:
      'Foundational Boolean algebra, combinational circuit simulation, and orientation for the Digital Logic Design (DLD) Lab currently in progress.',
    tag: 'Systems & Hardware',
    seatsLeft: 12,
    level: 'Beginner',
  },
];

export interface SmashingGuide {
  id: string;
  title: string;
  summary: string;
  chapters: string[];
  readTime: string;
  category: string;
  updatedAt: string;
}

export const GUIDES: SmashingGuide[] = [
  {
    id: 'guide-01',
    title: 'A Practical Guide to TinyML & Microcontroller Vision',
    summary:
      'A structured tutorial collection covering dataset gathering, transfer learning, INT8 quantization, and C++ inference loops.',
    chapters: ['Hardware Primitives', 'Calibration Datasets', 'Tensor Arena Tuning', 'Deployment Benchmarks'],
    readTime: '35 min total',
    category: 'Edge AI',
    updatedAt: 'Updated Nov 2026',
  },
  {
    id: 'guide-02',
    title: 'A Complete Guide to BS CS Capstone Engineering (FYP)',
    summary:
      'Everything BS Computer Science scholars need to transform an initial hypothesis into a working hardware or software capstone system.',
    chapters: ['Proposal Formulation', 'System Architecture', 'Testing & CI/CD', 'Oral Defense Preparation'],
    readTime: '45 min total',
    category: 'FYP Spotlight',
    updatedAt: 'Updated Oct 2026',
  },
  {
    id: 'guide-03',
    title: 'A Field Guide to Linux Zero-Trust Network Defense',
    summary:
      'VLAN segmentation, iptables packet filtering, certificate authorities, and academic network security.',
    chapters: ['Perimeter Invalidation', 'VLAN Layer 3 Segmentation', 'RADIUS Setup', 'Intrusion Detection'],
    readTime: '28 min total',
    category: 'Cybersecurity',
    updatedAt: 'Updated Nov 2026',
  },
];

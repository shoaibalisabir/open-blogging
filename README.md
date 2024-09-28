Open Blogging App

Open Blogging is a straightforward blogging platform where users can create basic posts with a title and content. The application is built using the MERN stack (MongoDB, Express, React, Node.js) and follows a microservices architecture with separate services for the frontend and backend.


Features

Create Blog Posts: Users can create a simple blog post by entering a title and content with word limits.
MERN Stack: The app is built using MongoDB, Express, React, and Node.js.
Microservices Architecture: The frontend and backend are designed as two separate microservices.


Project Overview


This project was developed as a basic example of implementing a complete CI/CD pipeline along with security scanning, monitoring, and rollback mechanisms. Below are the steps followed to set up and deploy the application:

1. CI/CD Pipeline Setup
GitHub Actions: A GitHub Actions workflow was created to automate the CI/CD process. This workflow is triggered on every push to the repository.
Docker Image Creation: Upon each commit, a new Docker image is built for the frontend and backend services. These images are then pushed to Docker Hub using GitHub Actions with Docker credentials (username and token).
Security Scanning: Trivy, an open-source security scanner, is used to scan the Docker images for vulnerabilities. The scanning results are uploaded to GitHub's security area.
2. Deployment to Kubernetes
Kubernetes Cluster: The application is deployed on a Kubernetes cluster hosted on an AWS instance. The cluster was set up using Minikube.
Deployment and Service YAML: The deployment and service YAML files are stored in a folder named kubernetes. The latest versions are automatically applied to the cluster as part of the CI/CD pipeline.
3. Continuous Deployment with ArgoCD
ArgoCD: ArgoCD is used as the continuous deployment tool to maintain the desired state of the Kubernetes cluster. The application is continuously monitored and updated to match the defined YAML configurations.
4. Monitoring with Prometheus and Grafana
Prometheus: Prometheus is used for monitoring the Kubernetes cluster and the application's performance.
Grafana: Grafana is used to visualize the metrics collected by Prometheus. Both tools were installed using community Helm charts.
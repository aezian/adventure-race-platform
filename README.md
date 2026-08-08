# Adventure Race Platform

A small Node.js and Express API created as the application layer for a DevOps project based on an adventure racing event management platform.

The goal of this project is to build and demonstrate a complete DevOps lifecycle including Git, Docker, Kubernetes, Terraform, Azure AKS, Azure Container Registry, Key Vault, monitoring, and CI/CD automation.

## Current Features

- Health check endpoint
- Events endpoint
- Participants endpoint
- Request logging
- Environment-based port configuration
- 404 error handling

## Technology Stack

- Node.js
- Express.js
- Git and GitHub

## API Endpoints

GET /
GET /health
GET /events
GET /participants

## Run Locally

Install dependencies:

npm install

Start the application:

npm start

Test the health endpoint:

curl http://localhost:3000/health

## DevOps Roadmap

Next stages planned for this project:

1. Containerize the application with Docker
2. Create Kubernetes manifests
3. Deploy to Azure Kubernetes Service
4. Provision Azure infrastructure using Terraform
5. Push Docker images to Azure Container Registry
6. Add GitHub Actions CI/CD pipeline
7. Add Azure Monitor and Log Analytics
8. Use Azure Key Vault for secrets management

## Project Purpose

This repository is being developed as a hands-on DevOps learning and portfolio project. It represents the application workload that will later be containerized, deployed to AKS, and managed using Infrastructure as Code and CI/CD.

# 📇 Contact List App - DevOps Project

A fully containerized and production-ready **Contact List Application** built with:

- ✅ Angular (Frontend)
- ✅ Node.js + Express (Backend API)
- ✅ PostgreSQL (Highly Available Stateful Cluster)
- ✅ Longhorn CSI for Persistent Volume Management
- ✅ Kubernetes with Helm, Docker, and NGINX Ingress Controller

---

## 🔍 Problem Statement

In modern applications, ensuring **high availability (HA)** and **scalability** of services like databases and APIs is critical. This project demonstrates building a production-grade **Contact List** application where:

- The **database (PostgreSQL)** must be highly available with failover support.
- The application must be split into **frontend** and **backend**.
- All components must be **Dockerized**, deployed using **Kubernetes**, and managed via **Helm charts**.
- The backend API should be resilient and expose a clean interface to the Angular frontend.
- Persistent storage must be reliable and resilient using **Longhorn**.

---

## 🧩 Technology Stack

| Component        | Stack / Tool                |
|------------------|-----------------------------|
| Frontend         | Angular                     |
| Backend API      | Node.js + Express           |
| Database         | PostgreSQL (HA) via Helm    |
| Storage          | Longhorn CSI (HA volumes)   |
| Containerization | Docker                      |
| Orchestration    | Kubernetes + Helm           |
| Image Registry   | Docker Hub                  |
| Ingress          | NGINX Ingress Controller    |

---

## 🖼️ Architecture Diagram

![HA Architecture Diagram](./contact-list-ha-architecture.png)

---

## 📦 Dockerization

Each service is containerized with Docker:

- **Frontend:**
  ```bash
  docker build -t yourdockerhub/contactlist-frontend:latest ./frontend
  docker push yourdockerhub/contactlist-frontend:latest


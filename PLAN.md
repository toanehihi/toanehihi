# Frontend Deployment Plan

Deploy Frontend project to VPS using Docker, Nginx, and Cloudflare.

---

# 1. Architecture Overview

```
User
 ↓
Cloudflare
 ↓
VPS (Public IP)
 ↓
Nginx Reverse Proxy
 ↓
Docker Container (Frontend)
```

Domain:

```
https://toanehihi.io.vn
```

---

# 2. Prerequisites

Install on VPS:

- Docker
- Nginx
- Git
- Node.js (optional for building)

Example install:

```bash
sudo apt update
sudo apt install docker.io nginx git -y
```

Start Docker:

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

---

# 3. Cloudflare DNS Configuration

In Cloudflare DNS add record:

| Type | Name | Content |
|-----|-----|-----|
| A | @ | VPS_IP |

Example:

```
toanehihi.io.vn → 103.xxx.xxx.xxx
```

Proxy status:

```
Proxied (orange cloud)
```

---

# 4. Build Frontend Project

Inside frontend project:

```bash
npm install
npm run build
```

Build output usually:

```
dist/
```

or

```
build/
```

---

# 5. Create Dockerfile

Create file:

```
Dockerfile
```

```dockerfile
FROM nginx:alpine

COPY dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

---

# 6. Build Docker Image

Run on VPS:

```bash
docker build -t fe-toanehihi .
```

---

# 7. Run Frontend Container

```bash
docker run -d \
--name fe \
-p 3000:80 \
--restart always \
fe-toanehihi
```

Frontend will run at:

```
http://localhost:3000
```

---

# 8. Configure Nginx Reverse Proxy

Create config:

```
/etc/nginx/sites-available/toanehihi
```

```nginx
server {
    listen 80;
    server_name toanehihi.io.vn;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

Enable config:

```bash
sudo ln -s /etc/nginx/sites-available/toanehihi /etc/nginx/sites-enabled/
```

Test config:

```bash
sudo nginx -t
```

Reload Nginx:

```bash
sudo systemctl reload nginx
```

---

# 9. HTTPS

HTTPS is handled by Cloudflare.

Set SSL mode in Cloudflare:

```
SSL/TLS Mode = Full
```

---

# 10. Deployment Update

When updating frontend:

```bash
npm run build
docker build -t fe-toanehihi .
docker stop fe
docker rm fe
docker run -d -p 3000:80 --name fe fe-toanehihi
```

---

# Final Architecture

```
User
 ↓
Cloudflare
 ↓
toanehihi.io.vn
 ↓
VPS
 ↓
Nginx
 ↓
Docker FE Container
```

---

# Future Improvements

Recommended improvements:

- Use `docker-compose`
- Add CI/CD pipeline
- Auto deploy using GitHub Actions
- Add backend services to same reverse proxy
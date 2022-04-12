# Single Node K8S cluster with NodeJS Express service

## Description
Usage of minikube to install kubernetes locally with single node cluster, upon it deployment by using Helm chart.
Deployment is done using a an image from docker hub:
https://hub.docker.com/repository/docker/shaharweiss1234/task01
Image is built from NodeJS using Express library to be used an api server with logic of replying "Hi!" when its recieves POST requests with --data 'Hi!'

After service is deployed we open this to the world by port forwarding packets 0.0.0.0:3000 to virtual NiC of the minikube so requests from outside could get answered.

Solution was built and tested on ubuntu server 1804

# Installation - prerequisites
### Minikube

```sh
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install apt-transport-https
sudo apt install virtualbox virtualbox-ext-pack
wget https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo cp minikube-linux-amd64 /usr/local/bin/minikube
sudo chmod 755 /usr/local/bin/minikube
```

### Kubectl
```sh
curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
```
### Helm
```sh
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh
```

### Docker
```sh
sudo apt-get update
sudo apt-get install ca-certificates curl  gnupg lsb-release
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
```
Add user to Docker group in order to run minikube
```sh
sudo usermod -aG docker $USER && newgrp docker
```
## Deployment
git clone the repo the the machine && cd into it.
```sh
git clone https://github.com/WeissShaharIL/NodeJS-API.git && cd NodeJS-API
```
Start K8S Cluster via minikube:
 ```sh
 minikube start --driver=docker --extra-config=apiserver.service-node-port-range=1-65535
 ```
 Deplopy using Helm:
 ```sh
 helm install task01 helm-chart/
 ```
  Expose with Minikube:
 ```sh
 minikube service task01-helm-chart --url
 ```
 Port forward
 ```sh
 sudo kubectl port-forward service/task01-helm-chart --address 0.0.0.0 3000:3000
 ```
  Run curl from other machine:
 ```sh
  curl -X POST --data 'Hi!' http://machine-ip:port
 ```

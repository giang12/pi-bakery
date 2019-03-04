#!/bin/bash -e

user=$1
address=$2

ssh $user@$address << EOF
docker service create \
 --name=viz \
 --publish=18080:8080/tcp \
 --constraint=node.role==manager \
 --mount=type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \
 alexellis2/visualizer-arm:latest
EOF

# docker service create \
#   --name=cadvisor \
#   --mount=/:/rootfs:ro \
#   --mount=/var/run:/var/run:rw \
#   --mount=/sys:/sys:ro \
#   --mount=/var/lib/docker/:/var/lib/docker:ro \
#   --publish=8080:8080 \
#   --detach=true \
#   swapnil18/docker-arm-cadvisor:latest

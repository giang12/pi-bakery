# pi-bakery

\*[Download](https://blog.hypriot.com/downloads/) target image into [`pi-bakery`](https://github.com/giang12/pi-bakery) directory (with extention `.img.zip`)

# 1. Creating SD cards for the Pi-Bakery

flash `pi-master` to SD card

```ShellSession
./built-master
Building #pi-master ┌∩┐(◟‿◞◟‿◞)┌∩┐.
🍺  Finished.
#pi-master (╯°□°)–︻╦╤─ – – –ready!
#if u see something lik ^ ; then we good to go
```

flash 6 SD cards with hostname `pi-baker-[0:4]` & 1 `pi-baker-canary`

```ShellSession
./built
./built 1
./built 2
./built 3
./built 4
./built canary
...repeat
```

\*update [`swarm-config`](https://github.com/giang12/pi-bakery/blob/master/swarm-config)

# 2. boot, ping, ssh

insert SD cards to the pies n boot up

check pies are up n baking

```ShellSession
./swarm-check #using ping
pi-master.local is UP
pi-baker-0.local is UP
pi-baker-1.local is UP
pi-baker-2.local is UP
pi-baker-3.local is UP
pi-baker-4.local is UP
pi-baker-canary.local is UP
```

generate & install ssh keys under `.keys/`

```ShellSession
./swarm-keys
```

if you see these messages; then passwordless ssh is setup

```ShellSession
adding key `lucy` to pi-baker-canary.local @192.168.1.11
/usr/local/bin/ssh-copy-id: INFO: Source of key(s) to be installed: ".keys/lucy.pub"
/usr/local/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/local/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys

Number of key(s) added:        1

Now try logging into the machine, with:   "ssh 'lucy@192.168.1.11'"
and check to make sure that only the key(s) you wanted were added.
```

!remember to add `key` to `ssh-agent`

```
ssh-add .keys/lucy
```

# 3. swarm create & deploy stacks

```ShellSession
./swarm-create

./swarm-info
```

```
docker service create \
 --name=viz \
 --publish=18080:8080/tcp \
 --constraint=node.role==manager \
 --mount=type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \
 alexellis2/visualizer-arm:latest

docker service create \
  --name=cadvisor \
  --mount=/:/rootfs:ro \
  --mount=/var/run:/var/run:rw \
  --mount=/sys:/sys:ro \
  --mount=/var/lib/docker/:/var/lib/docker:ro \
  --publish=8080:8080 \
  --detach=true \
  swapnil18/docker-arm-cadvisor:latest
```

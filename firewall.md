# Darwin
```shell
pfctl
sudo vim /etc/pf.conf
```
Then add the following lines at the end of the file:
```shell
pass in proto tcp from any to any port 22
pass in proto tcp from any to any port 2376
pass in proto tcp from any to any port 2377
pass in proto tcp from any to any port 7946
pass in proto udp from any to any port 7946
pass in proto udp from any to any port 4789
```
Test (and, according to the documentation, load) your edits with:
```shell
sudo pfctl -vnf /etc/pf.conf
```
Reboot.

# Mavrick n below
```shell
sudo ipfw add 22 allow tcp from any to any dst-port 22
sudo ipfw add 2376 allow tcp from any to any dst-port 2376
sudo ipfw add 2377 allow tcp from any to any dst-port 2377
sudo ipfw add 7946 allow tcp from any to any dst-port 7946
sudo ipfw add 7946 allow udp from any to any dst-port 7946
sudo ipfw add 4789 allow udp from any to any dst-port 4789
```

# Linux
# arm4

iptables
```shell
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
iptables -A INPUT -p tcp --dport 2376 -j ACCEPT
iptables -A INPUT -p tcp --dport 2377 -j ACCEPT
iptables -A INPUT -p tcp --dport 7946 -j ACCEPT
iptables -A INPUT -p udp --dport 7946 -j ACCEPT
iptables -A INPUT -p udp --dport 4789 -j ACCEPT
```
After you enter all of the commands, save the rules to disk:
```shell
netfilter-persistent save
```

# portquiz
Test a port using a command
```shell
$ telnet portquiz.net 80 
Trying ...
Connected to portquiz.net.
Escape character is '^]'.
$ nc -v portquiz.net 443
Connection to portquiz.net 443 port [tcp/https] succeeded!
$ curl portquiz.net:80 
Port 80 test successful!
Your IP: 67.180.145.139
$ wget -qO- portquiz.net:80 
Port 80 test successful!
Your IP: 67.180.145.139
# For Windows PowerShell users
PS C:\> Test-NetConnection -InformationLevel detailed -ComputerName portquiz.net -Port 80
```

# update certs
```shell
cd /etc/pki/tls/certs/ 
cp ca-bundle.crt{,.orig} 
curl -o ca-bundle.crt http://curl.haxx.se/ca/cacert.pem 
service docker stop ; sleep 3 ; killall docker ; service docker restart
```

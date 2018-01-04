# Darwin

pfctl

sudo vim /etc/pf.conf

Then add the following lines at the end of the file:

pass in proto tcp from any to any port 22
pass in proto tcp from any to any port 2376
pass in proto tcp from any to any port 2377
pass in proto tcp from any to any port 7946
pass in proto udp from any to any port 7946
pass in proto udp from any to any port 4789

Test (and, according to the documentation, load) your edits with:

sudo pfctl -vnf /etc/pf.conf

Reboot.

# Mavrick n below
sudo ipfw add 22 allow tcp from any to any dst-port 22
sudo ipfw add 2376 allow tcp from any to any dst-port 2376
sudo ipfw add 2377 allow tcp from any to any dst-port 2377
sudo ipfw add 7946 allow tcp from any to any dst-port 7946
sudo ipfw add 7946 allow udp from any to any dst-port 7946
sudo ipfw add 4789 allow udp from any to any dst-port 4789

# Linux

# arm4

iptables

iptables -A INPUT -p tcp --dport 22 -j ACCEPT
iptables -A INPUT -p tcp --dport 2376 -j ACCEPT
iptables -A INPUT -p tcp --dport 2377 -j ACCEPT
iptables -A INPUT -p tcp --dport 7946 -j ACCEPT
iptables -A INPUT -p udp --dport 7946 -j ACCEPT
iptables -A INPUT -p udp --dport 4789 -j ACCEPT

After you enter all of the commands, save the rules to disk:

netfilter-persistent save

# portquiz
nc -v portquiz.net 443



# update certs

cd /etc/pki/tls/certs/ 
cp ca-bundle.crt{,.orig} 
curl -o ca-bundle.crt http://curl.haxx.se/ca/cacert.pem 
service docker stop ; sleep 3 ; killall docker ; service docker restart

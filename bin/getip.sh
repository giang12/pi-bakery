#!/bin/bash
# get hostip from hostname with nmap

HOSTNAME=$1
if [ -z $HOSTNAME ]; then
	echo "getipERR: missing HOSTNAME"
	exit 1;
fi
hostip=`nmap "${HOSTNAME}" | grep -oE "\b([0-9]{1,3}\.){3}[0-9]{1,3}\b"`

if [ -z $hostip ]; then
	echo "getipERR: $HOSTNAME not found.."
	exit 1;
fi

echo $hostip

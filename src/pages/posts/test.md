---
title: [Solved]docker start error  copying bootstrap data to pipe caused write init-p broken pipe
slug: nal6rz
date: 2020-02-27T13:27:23
tags: []
categories: []
---

<a name=QXbgh></a>
## Sympton
shell
vagrant@vagrant-ubuntu-trusty-64~$ docker start mongoDB
Error response from daemon OCI runtime create failed container_linux.go348 starting container process caused process_linux.go297 copying bootstrap data to pipe caused write init-p broken pipe unknown


<a name=Q4YxP></a>
## Triage
<a name=s7RJL></a>
### System Info
shell
vagrant ssh
Welcome to Ubuntu 14.04.6 LTS (GNU/Linux 3.13.0-170-generic x86_64)

 * Documentation  https//help.ubuntu.com/

  System information as of Thu Feb 27 022303 UTC 2020

  System load  0.0               Processes              77
  Usage of /   5.1% of 39.34GB   Users logged in        0
  Memory usage 21%               IP address for eth0    10.0.2.15
  Swap usage   0%                IP address for docker0 172.17.0.1

  Graph this data and manage this system at
    https//landscape.canonical.com/

New release '16.04.6 LTS' available.
Run 'do-release-upgrade' to upgrade to it.

<a name=qXNfz></a>
### Docker Info
shell
vagrant@vagrant-ubuntu-trusty-64~$ docker version
Client
 Version           18.06.3-ce
 API version       1.38
 Go version        go1.10.3
 Git commit        d7080c1
 Built             Wed Feb 20 022713 2019
 OS/Arch           linux/amd64
 Experimental      false

Server
 Engine
  Version          18.06.3-ce
  API version      1.38 (minimum version 1.12)
  Go version       go1.10.3
  Git commit       d7080c1
  Built            Wed Feb 20 022538 2019
  OS/Arch          linux/amd64
  Experimental     false


<a name=obssS></a>
### Cause
Tha version of docker and that version of ubuntu have some compatibility issues.

<a name=yQa7Z></a>
### Solution apt install docker-ce=18.06.1~ce~3-0~ubuntu jq
Downgrade the docker, apt install docker-ce=18.06.1~ce~3-0~ubuntu jq comes to the rescue
shell
vagrant@vagrant-ubuntu-trusty-64~$ sudo apt install docker-ce=18.06.1~ce~3-0~ubuntu jq
Reading package lists... Done
Building dependency tree
Reading state information... Done
Recommended packages
  aufs-tools cgroupfs-mount cgroup-lite git pigz
The following NEW packages will be installed
  jq
The following packages will be DOWNGRADED
  docker-ce
0 upgraded, 1 newly installed, 1 downgraded, 0 to remove and 1 not upgraded.
Need to get 39.8 MB of archives.
After this operation, 280 kB of additional disk space will be used.
Do you want to continue? [Y/n] Y
Get1 https//download.docker.com/linux/ubuntu/ trusty/stable docker-ce amd64 18.06.1~ce~3-0~ubuntu [39.7 MB]
Get2 http//archive.ubuntu.com/ubuntu/ trusty-updates/universe jq amd64 1.3-1.1ubuntu1.1 [98.1 kB]
Fetched 39.8 MB in 56s (702 kB/s)
dpkg warning downgrading docker-ce from 18.06.3~ce~3-0~ubuntu to 18.06.1~ce~3-0~ubuntu
(Reading database ... 63463 files and directories currently installed.)
Preparing to unpack .../docker-ce_18.06.1~ce~3-0~ubuntu_amd64.deb ...
docker stop/waiting
Unpacking docker-ce (18.06.1~ce~3-0~ubuntu) over (18.06.3~ce~3-0~ubuntu) ...
Selecting previously unselected package jq.
Preparing to unpack .../jq_1.3-1.1ubuntu1.1_amd64.deb ...
Unpacking jq (1.3-1.1ubuntu1.1) ...
Processing triggers for man-db (2.6.7.1-1ubuntu1) ...
Processing triggers for ureadahead (0.100.0-16) ...
Setting up docker-ce (18.06.1~ce~3-0~ubuntu) ...
docker start/running, process 4075
Setting up jq (1.3-1.1ubuntu1.1) ...


<a name=0momp></a>
## Verification

shell
vagrant@vagrant-ubuntu-trusty-64~$ docker start mongoDB
mongoDB

vagrant@vagrant-ubuntu-trusty-64~$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES
cfa48a8939cc        mongo2             /entrypoint.sh mong…   3 hours ago         Up 9 minutes        0.0.0.027017->27017/tcp   mongoDB


